import * as C from '../../../../../../js-code-builder';
import {
  chainBlocks, CompilerPropertyContext, CompilerCodeBlockContext,
  MapperTypeCompiler, mapperTypeCompilerRegistry
} from '../../../compilation';
import { checkCircularRef, handleCopyRef } from '../../property-code-blocks';
import { generatePropertyMap } from '../../prop-codegen';

function arrayCompiler(ctx: CompilerCodeBlockContext<C.IfBlock<C.Block<C.Block<any>>, C.InlineExpression<C.Block<C.Block<any>>>>>,
                       prop: CompilerPropertyContext) {
  let tempArrName: string;
  ctx.currentBlock
    .addVariable().assignValue(`${ctx.targetSetter} = ${ctx.sourceAccessor}`).use( v => tempArrName = v.name).parent
    .addForIndexBlock()
      .setArrayExpression(tempArrName)
      .use( c => {
        const newBlockContext = ctx.clone(c, `${tempArrName}[${c.indexName}]`, `${tempArrName}[${c.indexName}]`);
        newBlockContext.setData('container', {
          type: 'array',
          skipCurrentItemCode: () => {
            return [
              `${tempArrName}.splice(${c.indexName}, 1)`,
              `${c.lengthVarName} -= 1`,
              `${c.indexName} -= 1`,
              `continue`,
            ];
          }
        });
        const propertyCodeBlocks = [handleCopyRef, checkCircularRef];

        chainBlocks(
          newBlockContext,
          prop.subType, // CompilerPropertyContext
          (ctx, prop) => generatePropertyMap(ctx, prop, propertyCodeBlocks),
        );
      })
}

export const array = new MapperTypeCompiler('array')
  .setHandler('array', (ctx, prop) => {
    const block = ctx.currentBlock.addIfBlock().setCondition(new C.IsArrayExpression(ctx.currentBlock, ctx.sourceAccessor));
    arrayCompiler(ctx.clone(block, `${ctx.sourceAccessor}.slice()`), prop);
  })
  .setHandler('set', (ctx, prop) => {
    const block = ctx.currentBlock.addIfBlock().setCondition(`${ctx.sourceAccessor} instanceof Set`);
    arrayCompiler(ctx.clone(block, `Array.from(${ctx.sourceAccessor})`), prop);
  })
  .setHandler('objectMap', (ctx, prop) => {
    const block = ctx.currentBlock.addIfBlock().setCondition(`${ctx.sourceAccessor} instanceof Object`);
    arrayCompiler(ctx.clone(block, `Object.values(${ctx.sourceAccessor})`), prop);
  })
  .setHandler('map', (ctx, prop) => {
    const block = ctx.currentBlock.addIfBlock().setCondition(`${ctx.sourceAccessor} instanceof Map`);
    arrayCompiler(ctx.clone(block, `Array.from(${ctx.sourceAccessor}.values())`), prop);
  });

mapperTypeCompilerRegistry.set(array);

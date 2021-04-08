import { Code as C } from '@pebula/tom';
import { missingValidator } from '../../../errors';
import { ValidatorInfo } from '../../../../known-validators';
import { TypeValidatorCompiler } from '../../validator-components';
import { runTypeValidationBlock } from '../chain-blocks';
import { CompilerCodeBlockContext, CompilerPropertyContext } from '../context';
import { createAddErrorCode } from './add-validation-error';

/**
 * Generate code for a single validation on a property
 */
export function propertyValidatorValidationCompiler(ctx: CompilerCodeBlockContext,
                                                    prop: CompilerPropertyContext,
                                                    validatorCompiler: TypeValidatorCompiler,
                                                    validatorMeta: ValidatorInfo) {
  const validatorCompilerHandler = validatorCompiler.findHandler(validatorMeta.id);
  if (!validatorCompilerHandler) {
    const { classValidationSchema } = prop.context;
    throw missingValidator(classValidationSchema.validator, classValidationSchema.target, prop.propMeta.name as string, prop.propMeta.typeDef, validatorMeta, 'jit');
  }
  const returnedValidationCtxBlock = runTypeValidationBlock(ctx.clone(ctx.currentBlock.addVirtualBlock()), prop, validatorMeta, validatorCompilerHandler);
  if (returnedValidationCtxBlock) {
    createAddErrorCode(returnedValidationCtxBlock.currentBlock, prop, validatorMeta);
  }
  return returnedValidationCtxBlock;
}

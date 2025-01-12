import { FluentMethodPlugin, FluentPropertyPlugin, ApiMixin } from '@pebula/decorate/fluent';

export class MemberSchema {
  defaultValue?: any;
  optional?: boolean
  nullable?: boolean;
  exclude?: boolean;
}

export abstract class MembersApi extends ApiMixin.MixinBase<MemberSchema> {
  @FluentPropertyPlugin()
  get optional(): this {
    this.$$context.schema.optional = true;
    return this;
  }

  @FluentPropertyPlugin()
  get nullable(): this {
    this.$$context.schema.nullable = true;
    return this;
  }

  @FluentMethodPlugin()
  default(value: any): this {
    this.$$context.schema.defaultValue = value;
    return this;
  }

  @FluentPropertyPlugin()
  get exclude(): this {
    this.$$context.schema.exclude = true;
    return this;
  }

}

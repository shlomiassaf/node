<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@pebula/goosetyped](./goosetyped.md) &gt; [StaticMethodDecoratorOf](./goosetyped.staticmethoddecoratorof.md)

## StaticMethodDecoratorOf type

<b>Signature:</b>

```typescript
export declare type StaticMethodDecoratorOf<TArgs extends [any] | [any, any] | [any, any, any] | [any, any, any, any] | [any, any, any, any, any] | [any, any, any, any, any, any] | [any, any, any, any, any, any, any] = never, TReturn = void> = <Z extends Function & Partial<Record<K, (...args: TArgs) => TReturn>>, K extends string>(target: Z, key: K, descriptor: TypedPropertyDescriptor<(...args: TArgs) => TReturn>) => TypedPropertyDescriptor<(...args: TArgs) => TReturn> | void;
```
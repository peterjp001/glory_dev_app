
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model bible_verses_hcv
 * 
 */
export type bible_verses_hcv = $Result.DefaultSelection<Prisma.$bible_verses_hcvPayload>
/**
 * Model bible_verses_kjv
 * 
 */
export type bible_verses_kjv = $Result.DefaultSelection<Prisma.$bible_verses_kjvPayload>
/**
 * Model bible_verses_rvg
 * 
 */
export type bible_verses_rvg = $Result.DefaultSelection<Prisma.$bible_verses_rvgPayload>
/**
 * Model bible_verses_segond_1910
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type bible_verses_segond_1910 = $Result.DefaultSelection<Prisma.$bible_verses_segond_1910Payload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Bible_verses_hcvs
 * const bible_verses_hcvs = await prisma.bible_verses_hcv.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Bible_verses_hcvs
   * const bible_verses_hcvs = await prisma.bible_verses_hcv.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.bible_verses_hcv`: Exposes CRUD operations for the **bible_verses_hcv** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bible_verses_hcvs
    * const bible_verses_hcvs = await prisma.bible_verses_hcv.findMany()
    * ```
    */
  get bible_verses_hcv(): Prisma.bible_verses_hcvDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bible_verses_kjv`: Exposes CRUD operations for the **bible_verses_kjv** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bible_verses_kjvs
    * const bible_verses_kjvs = await prisma.bible_verses_kjv.findMany()
    * ```
    */
  get bible_verses_kjv(): Prisma.bible_verses_kjvDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bible_verses_rvg`: Exposes CRUD operations for the **bible_verses_rvg** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bible_verses_rvgs
    * const bible_verses_rvgs = await prisma.bible_verses_rvg.findMany()
    * ```
    */
  get bible_verses_rvg(): Prisma.bible_verses_rvgDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bible_verses_segond_1910`: Exposes CRUD operations for the **bible_verses_segond_1910** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bible_verses_segond_1910s
    * const bible_verses_segond_1910s = await prisma.bible_verses_segond_1910.findMany()
    * ```
    */
  get bible_verses_segond_1910(): Prisma.bible_verses_segond_1910Delegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    bible_verses_hcv: 'bible_verses_hcv',
    bible_verses_kjv: 'bible_verses_kjv',
    bible_verses_rvg: 'bible_verses_rvg',
    bible_verses_segond_1910: 'bible_verses_segond_1910'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "bible_verses_hcv" | "bible_verses_kjv" | "bible_verses_rvg" | "bible_verses_segond_1910"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      bible_verses_hcv: {
        payload: Prisma.$bible_verses_hcvPayload<ExtArgs>
        fields: Prisma.bible_verses_hcvFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bible_verses_hcvFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_hcvPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bible_verses_hcvFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_hcvPayload>
          }
          findFirst: {
            args: Prisma.bible_verses_hcvFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_hcvPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bible_verses_hcvFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_hcvPayload>
          }
          findMany: {
            args: Prisma.bible_verses_hcvFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_hcvPayload>[]
          }
          create: {
            args: Prisma.bible_verses_hcvCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_hcvPayload>
          }
          createMany: {
            args: Prisma.bible_verses_hcvCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bible_verses_hcvCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_hcvPayload>[]
          }
          delete: {
            args: Prisma.bible_verses_hcvDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_hcvPayload>
          }
          update: {
            args: Prisma.bible_verses_hcvUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_hcvPayload>
          }
          deleteMany: {
            args: Prisma.bible_verses_hcvDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bible_verses_hcvUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bible_verses_hcvUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_hcvPayload>[]
          }
          upsert: {
            args: Prisma.bible_verses_hcvUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_hcvPayload>
          }
          aggregate: {
            args: Prisma.Bible_verses_hcvAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBible_verses_hcv>
          }
          groupBy: {
            args: Prisma.bible_verses_hcvGroupByArgs<ExtArgs>
            result: $Utils.Optional<Bible_verses_hcvGroupByOutputType>[]
          }
          count: {
            args: Prisma.bible_verses_hcvCountArgs<ExtArgs>
            result: $Utils.Optional<Bible_verses_hcvCountAggregateOutputType> | number
          }
        }
      }
      bible_verses_kjv: {
        payload: Prisma.$bible_verses_kjvPayload<ExtArgs>
        fields: Prisma.bible_verses_kjvFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bible_verses_kjvFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_kjvPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bible_verses_kjvFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_kjvPayload>
          }
          findFirst: {
            args: Prisma.bible_verses_kjvFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_kjvPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bible_verses_kjvFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_kjvPayload>
          }
          findMany: {
            args: Prisma.bible_verses_kjvFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_kjvPayload>[]
          }
          create: {
            args: Prisma.bible_verses_kjvCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_kjvPayload>
          }
          createMany: {
            args: Prisma.bible_verses_kjvCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bible_verses_kjvCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_kjvPayload>[]
          }
          delete: {
            args: Prisma.bible_verses_kjvDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_kjvPayload>
          }
          update: {
            args: Prisma.bible_verses_kjvUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_kjvPayload>
          }
          deleteMany: {
            args: Prisma.bible_verses_kjvDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bible_verses_kjvUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bible_verses_kjvUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_kjvPayload>[]
          }
          upsert: {
            args: Prisma.bible_verses_kjvUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_kjvPayload>
          }
          aggregate: {
            args: Prisma.Bible_verses_kjvAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBible_verses_kjv>
          }
          groupBy: {
            args: Prisma.bible_verses_kjvGroupByArgs<ExtArgs>
            result: $Utils.Optional<Bible_verses_kjvGroupByOutputType>[]
          }
          count: {
            args: Prisma.bible_verses_kjvCountArgs<ExtArgs>
            result: $Utils.Optional<Bible_verses_kjvCountAggregateOutputType> | number
          }
        }
      }
      bible_verses_rvg: {
        payload: Prisma.$bible_verses_rvgPayload<ExtArgs>
        fields: Prisma.bible_verses_rvgFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bible_verses_rvgFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_rvgPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bible_verses_rvgFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_rvgPayload>
          }
          findFirst: {
            args: Prisma.bible_verses_rvgFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_rvgPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bible_verses_rvgFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_rvgPayload>
          }
          findMany: {
            args: Prisma.bible_verses_rvgFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_rvgPayload>[]
          }
          create: {
            args: Prisma.bible_verses_rvgCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_rvgPayload>
          }
          createMany: {
            args: Prisma.bible_verses_rvgCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bible_verses_rvgCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_rvgPayload>[]
          }
          delete: {
            args: Prisma.bible_verses_rvgDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_rvgPayload>
          }
          update: {
            args: Prisma.bible_verses_rvgUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_rvgPayload>
          }
          deleteMany: {
            args: Prisma.bible_verses_rvgDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bible_verses_rvgUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bible_verses_rvgUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_rvgPayload>[]
          }
          upsert: {
            args: Prisma.bible_verses_rvgUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_rvgPayload>
          }
          aggregate: {
            args: Prisma.Bible_verses_rvgAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBible_verses_rvg>
          }
          groupBy: {
            args: Prisma.bible_verses_rvgGroupByArgs<ExtArgs>
            result: $Utils.Optional<Bible_verses_rvgGroupByOutputType>[]
          }
          count: {
            args: Prisma.bible_verses_rvgCountArgs<ExtArgs>
            result: $Utils.Optional<Bible_verses_rvgCountAggregateOutputType> | number
          }
        }
      }
      bible_verses_segond_1910: {
        payload: Prisma.$bible_verses_segond_1910Payload<ExtArgs>
        fields: Prisma.bible_verses_segond_1910FieldRefs
        operations: {
          findUnique: {
            args: Prisma.bible_verses_segond_1910FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_segond_1910Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bible_verses_segond_1910FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_segond_1910Payload>
          }
          findFirst: {
            args: Prisma.bible_verses_segond_1910FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_segond_1910Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bible_verses_segond_1910FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_segond_1910Payload>
          }
          findMany: {
            args: Prisma.bible_verses_segond_1910FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_segond_1910Payload>[]
          }
          create: {
            args: Prisma.bible_verses_segond_1910CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_segond_1910Payload>
          }
          createMany: {
            args: Prisma.bible_verses_segond_1910CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bible_verses_segond_1910CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_segond_1910Payload>[]
          }
          delete: {
            args: Prisma.bible_verses_segond_1910DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_segond_1910Payload>
          }
          update: {
            args: Prisma.bible_verses_segond_1910UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_segond_1910Payload>
          }
          deleteMany: {
            args: Prisma.bible_verses_segond_1910DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bible_verses_segond_1910UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bible_verses_segond_1910UpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_segond_1910Payload>[]
          }
          upsert: {
            args: Prisma.bible_verses_segond_1910UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bible_verses_segond_1910Payload>
          }
          aggregate: {
            args: Prisma.Bible_verses_segond_1910AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBible_verses_segond_1910>
          }
          groupBy: {
            args: Prisma.bible_verses_segond_1910GroupByArgs<ExtArgs>
            result: $Utils.Optional<Bible_verses_segond_1910GroupByOutputType>[]
          }
          count: {
            args: Prisma.bible_verses_segond_1910CountArgs<ExtArgs>
            result: $Utils.Optional<Bible_verses_segond_1910CountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    bible_verses_hcv?: bible_verses_hcvOmit
    bible_verses_kjv?: bible_verses_kjvOmit
    bible_verses_rvg?: bible_verses_rvgOmit
    bible_verses_segond_1910?: bible_verses_segond_1910Omit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model bible_verses_hcv
   */

  export type AggregateBible_verses_hcv = {
    _count: Bible_verses_hcvCountAggregateOutputType | null
    _avg: Bible_verses_hcvAvgAggregateOutputType | null
    _sum: Bible_verses_hcvSumAggregateOutputType | null
    _min: Bible_verses_hcvMinAggregateOutputType | null
    _max: Bible_verses_hcvMaxAggregateOutputType | null
  }

  export type Bible_verses_hcvAvgAggregateOutputType = {
    id: number | null
    book: number | null
    chapter: number | null
    verse: number | null
  }

  export type Bible_verses_hcvSumAggregateOutputType = {
    id: number | null
    book: number | null
    chapter: number | null
    verse: number | null
  }

  export type Bible_verses_hcvMinAggregateOutputType = {
    id: number | null
    book: number | null
    chapter: number | null
    verse: number | null
    text: string | null
  }

  export type Bible_verses_hcvMaxAggregateOutputType = {
    id: number | null
    book: number | null
    chapter: number | null
    verse: number | null
    text: string | null
  }

  export type Bible_verses_hcvCountAggregateOutputType = {
    id: number
    book: number
    chapter: number
    verse: number
    text: number
    _all: number
  }


  export type Bible_verses_hcvAvgAggregateInputType = {
    id?: true
    book?: true
    chapter?: true
    verse?: true
  }

  export type Bible_verses_hcvSumAggregateInputType = {
    id?: true
    book?: true
    chapter?: true
    verse?: true
  }

  export type Bible_verses_hcvMinAggregateInputType = {
    id?: true
    book?: true
    chapter?: true
    verse?: true
    text?: true
  }

  export type Bible_verses_hcvMaxAggregateInputType = {
    id?: true
    book?: true
    chapter?: true
    verse?: true
    text?: true
  }

  export type Bible_verses_hcvCountAggregateInputType = {
    id?: true
    book?: true
    chapter?: true
    verse?: true
    text?: true
    _all?: true
  }

  export type Bible_verses_hcvAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bible_verses_hcv to aggregate.
     */
    where?: bible_verses_hcvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bible_verses_hcvs to fetch.
     */
    orderBy?: bible_verses_hcvOrderByWithRelationInput | bible_verses_hcvOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bible_verses_hcvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bible_verses_hcvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bible_verses_hcvs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bible_verses_hcvs
    **/
    _count?: true | Bible_verses_hcvCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Bible_verses_hcvAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Bible_verses_hcvSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Bible_verses_hcvMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Bible_verses_hcvMaxAggregateInputType
  }

  export type GetBible_verses_hcvAggregateType<T extends Bible_verses_hcvAggregateArgs> = {
        [P in keyof T & keyof AggregateBible_verses_hcv]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBible_verses_hcv[P]>
      : GetScalarType<T[P], AggregateBible_verses_hcv[P]>
  }




  export type bible_verses_hcvGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bible_verses_hcvWhereInput
    orderBy?: bible_verses_hcvOrderByWithAggregationInput | bible_verses_hcvOrderByWithAggregationInput[]
    by: Bible_verses_hcvScalarFieldEnum[] | Bible_verses_hcvScalarFieldEnum
    having?: bible_verses_hcvScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Bible_verses_hcvCountAggregateInputType | true
    _avg?: Bible_verses_hcvAvgAggregateInputType
    _sum?: Bible_verses_hcvSumAggregateInputType
    _min?: Bible_verses_hcvMinAggregateInputType
    _max?: Bible_verses_hcvMaxAggregateInputType
  }

  export type Bible_verses_hcvGroupByOutputType = {
    id: number
    book: number
    chapter: number
    verse: number
    text: string
    _count: Bible_verses_hcvCountAggregateOutputType | null
    _avg: Bible_verses_hcvAvgAggregateOutputType | null
    _sum: Bible_verses_hcvSumAggregateOutputType | null
    _min: Bible_verses_hcvMinAggregateOutputType | null
    _max: Bible_verses_hcvMaxAggregateOutputType | null
  }

  type GetBible_verses_hcvGroupByPayload<T extends bible_verses_hcvGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Bible_verses_hcvGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Bible_verses_hcvGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Bible_verses_hcvGroupByOutputType[P]>
            : GetScalarType<T[P], Bible_verses_hcvGroupByOutputType[P]>
        }
      >
    >


  export type bible_verses_hcvSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book?: boolean
    chapter?: boolean
    verse?: boolean
    text?: boolean
  }, ExtArgs["result"]["bible_verses_hcv"]>

  export type bible_verses_hcvSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book?: boolean
    chapter?: boolean
    verse?: boolean
    text?: boolean
  }, ExtArgs["result"]["bible_verses_hcv"]>

  export type bible_verses_hcvSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book?: boolean
    chapter?: boolean
    verse?: boolean
    text?: boolean
  }, ExtArgs["result"]["bible_verses_hcv"]>

  export type bible_verses_hcvSelectScalar = {
    id?: boolean
    book?: boolean
    chapter?: boolean
    verse?: boolean
    text?: boolean
  }

  export type bible_verses_hcvOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "book" | "chapter" | "verse" | "text", ExtArgs["result"]["bible_verses_hcv"]>

  export type $bible_verses_hcvPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bible_verses_hcv"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      book: number
      chapter: number
      verse: number
      text: string
    }, ExtArgs["result"]["bible_verses_hcv"]>
    composites: {}
  }

  type bible_verses_hcvGetPayload<S extends boolean | null | undefined | bible_verses_hcvDefaultArgs> = $Result.GetResult<Prisma.$bible_verses_hcvPayload, S>

  type bible_verses_hcvCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bible_verses_hcvFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Bible_verses_hcvCountAggregateInputType | true
    }

  export interface bible_verses_hcvDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bible_verses_hcv'], meta: { name: 'bible_verses_hcv' } }
    /**
     * Find zero or one Bible_verses_hcv that matches the filter.
     * @param {bible_verses_hcvFindUniqueArgs} args - Arguments to find a Bible_verses_hcv
     * @example
     * // Get one Bible_verses_hcv
     * const bible_verses_hcv = await prisma.bible_verses_hcv.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bible_verses_hcvFindUniqueArgs>(args: SelectSubset<T, bible_verses_hcvFindUniqueArgs<ExtArgs>>): Prisma__bible_verses_hcvClient<$Result.GetResult<Prisma.$bible_verses_hcvPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bible_verses_hcv that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bible_verses_hcvFindUniqueOrThrowArgs} args - Arguments to find a Bible_verses_hcv
     * @example
     * // Get one Bible_verses_hcv
     * const bible_verses_hcv = await prisma.bible_verses_hcv.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bible_verses_hcvFindUniqueOrThrowArgs>(args: SelectSubset<T, bible_verses_hcvFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bible_verses_hcvClient<$Result.GetResult<Prisma.$bible_verses_hcvPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bible_verses_hcv that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bible_verses_hcvFindFirstArgs} args - Arguments to find a Bible_verses_hcv
     * @example
     * // Get one Bible_verses_hcv
     * const bible_verses_hcv = await prisma.bible_verses_hcv.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bible_verses_hcvFindFirstArgs>(args?: SelectSubset<T, bible_verses_hcvFindFirstArgs<ExtArgs>>): Prisma__bible_verses_hcvClient<$Result.GetResult<Prisma.$bible_verses_hcvPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bible_verses_hcv that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bible_verses_hcvFindFirstOrThrowArgs} args - Arguments to find a Bible_verses_hcv
     * @example
     * // Get one Bible_verses_hcv
     * const bible_verses_hcv = await prisma.bible_verses_hcv.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bible_verses_hcvFindFirstOrThrowArgs>(args?: SelectSubset<T, bible_verses_hcvFindFirstOrThrowArgs<ExtArgs>>): Prisma__bible_verses_hcvClient<$Result.GetResult<Prisma.$bible_verses_hcvPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bible_verses_hcvs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bible_verses_hcvFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bible_verses_hcvs
     * const bible_verses_hcvs = await prisma.bible_verses_hcv.findMany()
     * 
     * // Get first 10 Bible_verses_hcvs
     * const bible_verses_hcvs = await prisma.bible_verses_hcv.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bible_verses_hcvWithIdOnly = await prisma.bible_verses_hcv.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bible_verses_hcvFindManyArgs>(args?: SelectSubset<T, bible_verses_hcvFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bible_verses_hcvPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bible_verses_hcv.
     * @param {bible_verses_hcvCreateArgs} args - Arguments to create a Bible_verses_hcv.
     * @example
     * // Create one Bible_verses_hcv
     * const Bible_verses_hcv = await prisma.bible_verses_hcv.create({
     *   data: {
     *     // ... data to create a Bible_verses_hcv
     *   }
     * })
     * 
     */
    create<T extends bible_verses_hcvCreateArgs>(args: SelectSubset<T, bible_verses_hcvCreateArgs<ExtArgs>>): Prisma__bible_verses_hcvClient<$Result.GetResult<Prisma.$bible_verses_hcvPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bible_verses_hcvs.
     * @param {bible_verses_hcvCreateManyArgs} args - Arguments to create many Bible_verses_hcvs.
     * @example
     * // Create many Bible_verses_hcvs
     * const bible_verses_hcv = await prisma.bible_verses_hcv.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bible_verses_hcvCreateManyArgs>(args?: SelectSubset<T, bible_verses_hcvCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bible_verses_hcvs and returns the data saved in the database.
     * @param {bible_verses_hcvCreateManyAndReturnArgs} args - Arguments to create many Bible_verses_hcvs.
     * @example
     * // Create many Bible_verses_hcvs
     * const bible_verses_hcv = await prisma.bible_verses_hcv.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bible_verses_hcvs and only return the `id`
     * const bible_verses_hcvWithIdOnly = await prisma.bible_verses_hcv.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bible_verses_hcvCreateManyAndReturnArgs>(args?: SelectSubset<T, bible_verses_hcvCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bible_verses_hcvPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bible_verses_hcv.
     * @param {bible_verses_hcvDeleteArgs} args - Arguments to delete one Bible_verses_hcv.
     * @example
     * // Delete one Bible_verses_hcv
     * const Bible_verses_hcv = await prisma.bible_verses_hcv.delete({
     *   where: {
     *     // ... filter to delete one Bible_verses_hcv
     *   }
     * })
     * 
     */
    delete<T extends bible_verses_hcvDeleteArgs>(args: SelectSubset<T, bible_verses_hcvDeleteArgs<ExtArgs>>): Prisma__bible_verses_hcvClient<$Result.GetResult<Prisma.$bible_verses_hcvPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bible_verses_hcv.
     * @param {bible_verses_hcvUpdateArgs} args - Arguments to update one Bible_verses_hcv.
     * @example
     * // Update one Bible_verses_hcv
     * const bible_verses_hcv = await prisma.bible_verses_hcv.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bible_verses_hcvUpdateArgs>(args: SelectSubset<T, bible_verses_hcvUpdateArgs<ExtArgs>>): Prisma__bible_verses_hcvClient<$Result.GetResult<Prisma.$bible_verses_hcvPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bible_verses_hcvs.
     * @param {bible_verses_hcvDeleteManyArgs} args - Arguments to filter Bible_verses_hcvs to delete.
     * @example
     * // Delete a few Bible_verses_hcvs
     * const { count } = await prisma.bible_verses_hcv.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bible_verses_hcvDeleteManyArgs>(args?: SelectSubset<T, bible_verses_hcvDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bible_verses_hcvs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bible_verses_hcvUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bible_verses_hcvs
     * const bible_verses_hcv = await prisma.bible_verses_hcv.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bible_verses_hcvUpdateManyArgs>(args: SelectSubset<T, bible_verses_hcvUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bible_verses_hcvs and returns the data updated in the database.
     * @param {bible_verses_hcvUpdateManyAndReturnArgs} args - Arguments to update many Bible_verses_hcvs.
     * @example
     * // Update many Bible_verses_hcvs
     * const bible_verses_hcv = await prisma.bible_verses_hcv.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bible_verses_hcvs and only return the `id`
     * const bible_verses_hcvWithIdOnly = await prisma.bible_verses_hcv.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends bible_verses_hcvUpdateManyAndReturnArgs>(args: SelectSubset<T, bible_verses_hcvUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bible_verses_hcvPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bible_verses_hcv.
     * @param {bible_verses_hcvUpsertArgs} args - Arguments to update or create a Bible_verses_hcv.
     * @example
     * // Update or create a Bible_verses_hcv
     * const bible_verses_hcv = await prisma.bible_verses_hcv.upsert({
     *   create: {
     *     // ... data to create a Bible_verses_hcv
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bible_verses_hcv we want to update
     *   }
     * })
     */
    upsert<T extends bible_verses_hcvUpsertArgs>(args: SelectSubset<T, bible_verses_hcvUpsertArgs<ExtArgs>>): Prisma__bible_verses_hcvClient<$Result.GetResult<Prisma.$bible_verses_hcvPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bible_verses_hcvs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bible_verses_hcvCountArgs} args - Arguments to filter Bible_verses_hcvs to count.
     * @example
     * // Count the number of Bible_verses_hcvs
     * const count = await prisma.bible_verses_hcv.count({
     *   where: {
     *     // ... the filter for the Bible_verses_hcvs we want to count
     *   }
     * })
    **/
    count<T extends bible_verses_hcvCountArgs>(
      args?: Subset<T, bible_verses_hcvCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Bible_verses_hcvCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bible_verses_hcv.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bible_verses_hcvAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Bible_verses_hcvAggregateArgs>(args: Subset<T, Bible_verses_hcvAggregateArgs>): Prisma.PrismaPromise<GetBible_verses_hcvAggregateType<T>>

    /**
     * Group by Bible_verses_hcv.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bible_verses_hcvGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends bible_verses_hcvGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bible_verses_hcvGroupByArgs['orderBy'] }
        : { orderBy?: bible_verses_hcvGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, bible_verses_hcvGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBible_verses_hcvGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bible_verses_hcv model
   */
  readonly fields: bible_verses_hcvFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bible_verses_hcv.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bible_verses_hcvClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the bible_verses_hcv model
   */
  interface bible_verses_hcvFieldRefs {
    readonly id: FieldRef<"bible_verses_hcv", 'Int'>
    readonly book: FieldRef<"bible_verses_hcv", 'Int'>
    readonly chapter: FieldRef<"bible_verses_hcv", 'Int'>
    readonly verse: FieldRef<"bible_verses_hcv", 'Int'>
    readonly text: FieldRef<"bible_verses_hcv", 'String'>
  }
    

  // Custom InputTypes
  /**
   * bible_verses_hcv findUnique
   */
  export type bible_verses_hcvFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_hcv
     */
    select?: bible_verses_hcvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_hcv
     */
    omit?: bible_verses_hcvOmit<ExtArgs> | null
    /**
     * Filter, which bible_verses_hcv to fetch.
     */
    where: bible_verses_hcvWhereUniqueInput
  }

  /**
   * bible_verses_hcv findUniqueOrThrow
   */
  export type bible_verses_hcvFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_hcv
     */
    select?: bible_verses_hcvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_hcv
     */
    omit?: bible_verses_hcvOmit<ExtArgs> | null
    /**
     * Filter, which bible_verses_hcv to fetch.
     */
    where: bible_verses_hcvWhereUniqueInput
  }

  /**
   * bible_verses_hcv findFirst
   */
  export type bible_verses_hcvFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_hcv
     */
    select?: bible_verses_hcvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_hcv
     */
    omit?: bible_verses_hcvOmit<ExtArgs> | null
    /**
     * Filter, which bible_verses_hcv to fetch.
     */
    where?: bible_verses_hcvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bible_verses_hcvs to fetch.
     */
    orderBy?: bible_verses_hcvOrderByWithRelationInput | bible_verses_hcvOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bible_verses_hcvs.
     */
    cursor?: bible_verses_hcvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bible_verses_hcvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bible_verses_hcvs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bible_verses_hcvs.
     */
    distinct?: Bible_verses_hcvScalarFieldEnum | Bible_verses_hcvScalarFieldEnum[]
  }

  /**
   * bible_verses_hcv findFirstOrThrow
   */
  export type bible_verses_hcvFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_hcv
     */
    select?: bible_verses_hcvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_hcv
     */
    omit?: bible_verses_hcvOmit<ExtArgs> | null
    /**
     * Filter, which bible_verses_hcv to fetch.
     */
    where?: bible_verses_hcvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bible_verses_hcvs to fetch.
     */
    orderBy?: bible_verses_hcvOrderByWithRelationInput | bible_verses_hcvOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bible_verses_hcvs.
     */
    cursor?: bible_verses_hcvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bible_verses_hcvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bible_verses_hcvs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bible_verses_hcvs.
     */
    distinct?: Bible_verses_hcvScalarFieldEnum | Bible_verses_hcvScalarFieldEnum[]
  }

  /**
   * bible_verses_hcv findMany
   */
  export type bible_verses_hcvFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_hcv
     */
    select?: bible_verses_hcvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_hcv
     */
    omit?: bible_verses_hcvOmit<ExtArgs> | null
    /**
     * Filter, which bible_verses_hcvs to fetch.
     */
    where?: bible_verses_hcvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bible_verses_hcvs to fetch.
     */
    orderBy?: bible_verses_hcvOrderByWithRelationInput | bible_verses_hcvOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bible_verses_hcvs.
     */
    cursor?: bible_verses_hcvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bible_verses_hcvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bible_verses_hcvs.
     */
    skip?: number
    distinct?: Bible_verses_hcvScalarFieldEnum | Bible_verses_hcvScalarFieldEnum[]
  }

  /**
   * bible_verses_hcv create
   */
  export type bible_verses_hcvCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_hcv
     */
    select?: bible_verses_hcvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_hcv
     */
    omit?: bible_verses_hcvOmit<ExtArgs> | null
    /**
     * The data needed to create a bible_verses_hcv.
     */
    data: XOR<bible_verses_hcvCreateInput, bible_verses_hcvUncheckedCreateInput>
  }

  /**
   * bible_verses_hcv createMany
   */
  export type bible_verses_hcvCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bible_verses_hcvs.
     */
    data: bible_verses_hcvCreateManyInput | bible_verses_hcvCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bible_verses_hcv createManyAndReturn
   */
  export type bible_verses_hcvCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_hcv
     */
    select?: bible_verses_hcvSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_hcv
     */
    omit?: bible_verses_hcvOmit<ExtArgs> | null
    /**
     * The data used to create many bible_verses_hcvs.
     */
    data: bible_verses_hcvCreateManyInput | bible_verses_hcvCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bible_verses_hcv update
   */
  export type bible_verses_hcvUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_hcv
     */
    select?: bible_verses_hcvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_hcv
     */
    omit?: bible_verses_hcvOmit<ExtArgs> | null
    /**
     * The data needed to update a bible_verses_hcv.
     */
    data: XOR<bible_verses_hcvUpdateInput, bible_verses_hcvUncheckedUpdateInput>
    /**
     * Choose, which bible_verses_hcv to update.
     */
    where: bible_verses_hcvWhereUniqueInput
  }

  /**
   * bible_verses_hcv updateMany
   */
  export type bible_verses_hcvUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bible_verses_hcvs.
     */
    data: XOR<bible_verses_hcvUpdateManyMutationInput, bible_verses_hcvUncheckedUpdateManyInput>
    /**
     * Filter which bible_verses_hcvs to update
     */
    where?: bible_verses_hcvWhereInput
    /**
     * Limit how many bible_verses_hcvs to update.
     */
    limit?: number
  }

  /**
   * bible_verses_hcv updateManyAndReturn
   */
  export type bible_verses_hcvUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_hcv
     */
    select?: bible_verses_hcvSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_hcv
     */
    omit?: bible_verses_hcvOmit<ExtArgs> | null
    /**
     * The data used to update bible_verses_hcvs.
     */
    data: XOR<bible_verses_hcvUpdateManyMutationInput, bible_verses_hcvUncheckedUpdateManyInput>
    /**
     * Filter which bible_verses_hcvs to update
     */
    where?: bible_verses_hcvWhereInput
    /**
     * Limit how many bible_verses_hcvs to update.
     */
    limit?: number
  }

  /**
   * bible_verses_hcv upsert
   */
  export type bible_verses_hcvUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_hcv
     */
    select?: bible_verses_hcvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_hcv
     */
    omit?: bible_verses_hcvOmit<ExtArgs> | null
    /**
     * The filter to search for the bible_verses_hcv to update in case it exists.
     */
    where: bible_verses_hcvWhereUniqueInput
    /**
     * In case the bible_verses_hcv found by the `where` argument doesn't exist, create a new bible_verses_hcv with this data.
     */
    create: XOR<bible_verses_hcvCreateInput, bible_verses_hcvUncheckedCreateInput>
    /**
     * In case the bible_verses_hcv was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bible_verses_hcvUpdateInput, bible_verses_hcvUncheckedUpdateInput>
  }

  /**
   * bible_verses_hcv delete
   */
  export type bible_verses_hcvDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_hcv
     */
    select?: bible_verses_hcvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_hcv
     */
    omit?: bible_verses_hcvOmit<ExtArgs> | null
    /**
     * Filter which bible_verses_hcv to delete.
     */
    where: bible_verses_hcvWhereUniqueInput
  }

  /**
   * bible_verses_hcv deleteMany
   */
  export type bible_verses_hcvDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bible_verses_hcvs to delete
     */
    where?: bible_verses_hcvWhereInput
    /**
     * Limit how many bible_verses_hcvs to delete.
     */
    limit?: number
  }

  /**
   * bible_verses_hcv without action
   */
  export type bible_verses_hcvDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_hcv
     */
    select?: bible_verses_hcvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_hcv
     */
    omit?: bible_verses_hcvOmit<ExtArgs> | null
  }


  /**
   * Model bible_verses_kjv
   */

  export type AggregateBible_verses_kjv = {
    _count: Bible_verses_kjvCountAggregateOutputType | null
    _avg: Bible_verses_kjvAvgAggregateOutputType | null
    _sum: Bible_verses_kjvSumAggregateOutputType | null
    _min: Bible_verses_kjvMinAggregateOutputType | null
    _max: Bible_verses_kjvMaxAggregateOutputType | null
  }

  export type Bible_verses_kjvAvgAggregateOutputType = {
    id: number | null
    book: number | null
    chapter: number | null
    verse: number | null
  }

  export type Bible_verses_kjvSumAggregateOutputType = {
    id: number | null
    book: number | null
    chapter: number | null
    verse: number | null
  }

  export type Bible_verses_kjvMinAggregateOutputType = {
    id: number | null
    book: number | null
    chapter: number | null
    verse: number | null
    text: string | null
  }

  export type Bible_verses_kjvMaxAggregateOutputType = {
    id: number | null
    book: number | null
    chapter: number | null
    verse: number | null
    text: string | null
  }

  export type Bible_verses_kjvCountAggregateOutputType = {
    id: number
    book: number
    chapter: number
    verse: number
    text: number
    _all: number
  }


  export type Bible_verses_kjvAvgAggregateInputType = {
    id?: true
    book?: true
    chapter?: true
    verse?: true
  }

  export type Bible_verses_kjvSumAggregateInputType = {
    id?: true
    book?: true
    chapter?: true
    verse?: true
  }

  export type Bible_verses_kjvMinAggregateInputType = {
    id?: true
    book?: true
    chapter?: true
    verse?: true
    text?: true
  }

  export type Bible_verses_kjvMaxAggregateInputType = {
    id?: true
    book?: true
    chapter?: true
    verse?: true
    text?: true
  }

  export type Bible_verses_kjvCountAggregateInputType = {
    id?: true
    book?: true
    chapter?: true
    verse?: true
    text?: true
    _all?: true
  }

  export type Bible_verses_kjvAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bible_verses_kjv to aggregate.
     */
    where?: bible_verses_kjvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bible_verses_kjvs to fetch.
     */
    orderBy?: bible_verses_kjvOrderByWithRelationInput | bible_verses_kjvOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bible_verses_kjvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bible_verses_kjvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bible_verses_kjvs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bible_verses_kjvs
    **/
    _count?: true | Bible_verses_kjvCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Bible_verses_kjvAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Bible_verses_kjvSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Bible_verses_kjvMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Bible_verses_kjvMaxAggregateInputType
  }

  export type GetBible_verses_kjvAggregateType<T extends Bible_verses_kjvAggregateArgs> = {
        [P in keyof T & keyof AggregateBible_verses_kjv]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBible_verses_kjv[P]>
      : GetScalarType<T[P], AggregateBible_verses_kjv[P]>
  }




  export type bible_verses_kjvGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bible_verses_kjvWhereInput
    orderBy?: bible_verses_kjvOrderByWithAggregationInput | bible_verses_kjvOrderByWithAggregationInput[]
    by: Bible_verses_kjvScalarFieldEnum[] | Bible_verses_kjvScalarFieldEnum
    having?: bible_verses_kjvScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Bible_verses_kjvCountAggregateInputType | true
    _avg?: Bible_verses_kjvAvgAggregateInputType
    _sum?: Bible_verses_kjvSumAggregateInputType
    _min?: Bible_verses_kjvMinAggregateInputType
    _max?: Bible_verses_kjvMaxAggregateInputType
  }

  export type Bible_verses_kjvGroupByOutputType = {
    id: number
    book: number
    chapter: number
    verse: number
    text: string
    _count: Bible_verses_kjvCountAggregateOutputType | null
    _avg: Bible_verses_kjvAvgAggregateOutputType | null
    _sum: Bible_verses_kjvSumAggregateOutputType | null
    _min: Bible_verses_kjvMinAggregateOutputType | null
    _max: Bible_verses_kjvMaxAggregateOutputType | null
  }

  type GetBible_verses_kjvGroupByPayload<T extends bible_verses_kjvGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Bible_verses_kjvGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Bible_verses_kjvGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Bible_verses_kjvGroupByOutputType[P]>
            : GetScalarType<T[P], Bible_verses_kjvGroupByOutputType[P]>
        }
      >
    >


  export type bible_verses_kjvSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book?: boolean
    chapter?: boolean
    verse?: boolean
    text?: boolean
  }, ExtArgs["result"]["bible_verses_kjv"]>

  export type bible_verses_kjvSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book?: boolean
    chapter?: boolean
    verse?: boolean
    text?: boolean
  }, ExtArgs["result"]["bible_verses_kjv"]>

  export type bible_verses_kjvSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book?: boolean
    chapter?: boolean
    verse?: boolean
    text?: boolean
  }, ExtArgs["result"]["bible_verses_kjv"]>

  export type bible_verses_kjvSelectScalar = {
    id?: boolean
    book?: boolean
    chapter?: boolean
    verse?: boolean
    text?: boolean
  }

  export type bible_verses_kjvOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "book" | "chapter" | "verse" | "text", ExtArgs["result"]["bible_verses_kjv"]>

  export type $bible_verses_kjvPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bible_verses_kjv"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      book: number
      chapter: number
      verse: number
      text: string
    }, ExtArgs["result"]["bible_verses_kjv"]>
    composites: {}
  }

  type bible_verses_kjvGetPayload<S extends boolean | null | undefined | bible_verses_kjvDefaultArgs> = $Result.GetResult<Prisma.$bible_verses_kjvPayload, S>

  type bible_verses_kjvCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bible_verses_kjvFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Bible_verses_kjvCountAggregateInputType | true
    }

  export interface bible_verses_kjvDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bible_verses_kjv'], meta: { name: 'bible_verses_kjv' } }
    /**
     * Find zero or one Bible_verses_kjv that matches the filter.
     * @param {bible_verses_kjvFindUniqueArgs} args - Arguments to find a Bible_verses_kjv
     * @example
     * // Get one Bible_verses_kjv
     * const bible_verses_kjv = await prisma.bible_verses_kjv.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bible_verses_kjvFindUniqueArgs>(args: SelectSubset<T, bible_verses_kjvFindUniqueArgs<ExtArgs>>): Prisma__bible_verses_kjvClient<$Result.GetResult<Prisma.$bible_verses_kjvPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bible_verses_kjv that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bible_verses_kjvFindUniqueOrThrowArgs} args - Arguments to find a Bible_verses_kjv
     * @example
     * // Get one Bible_verses_kjv
     * const bible_verses_kjv = await prisma.bible_verses_kjv.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bible_verses_kjvFindUniqueOrThrowArgs>(args: SelectSubset<T, bible_verses_kjvFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bible_verses_kjvClient<$Result.GetResult<Prisma.$bible_verses_kjvPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bible_verses_kjv that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bible_verses_kjvFindFirstArgs} args - Arguments to find a Bible_verses_kjv
     * @example
     * // Get one Bible_verses_kjv
     * const bible_verses_kjv = await prisma.bible_verses_kjv.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bible_verses_kjvFindFirstArgs>(args?: SelectSubset<T, bible_verses_kjvFindFirstArgs<ExtArgs>>): Prisma__bible_verses_kjvClient<$Result.GetResult<Prisma.$bible_verses_kjvPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bible_verses_kjv that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bible_verses_kjvFindFirstOrThrowArgs} args - Arguments to find a Bible_verses_kjv
     * @example
     * // Get one Bible_verses_kjv
     * const bible_verses_kjv = await prisma.bible_verses_kjv.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bible_verses_kjvFindFirstOrThrowArgs>(args?: SelectSubset<T, bible_verses_kjvFindFirstOrThrowArgs<ExtArgs>>): Prisma__bible_verses_kjvClient<$Result.GetResult<Prisma.$bible_verses_kjvPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bible_verses_kjvs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bible_verses_kjvFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bible_verses_kjvs
     * const bible_verses_kjvs = await prisma.bible_verses_kjv.findMany()
     * 
     * // Get first 10 Bible_verses_kjvs
     * const bible_verses_kjvs = await prisma.bible_verses_kjv.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bible_verses_kjvWithIdOnly = await prisma.bible_verses_kjv.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bible_verses_kjvFindManyArgs>(args?: SelectSubset<T, bible_verses_kjvFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bible_verses_kjvPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bible_verses_kjv.
     * @param {bible_verses_kjvCreateArgs} args - Arguments to create a Bible_verses_kjv.
     * @example
     * // Create one Bible_verses_kjv
     * const Bible_verses_kjv = await prisma.bible_verses_kjv.create({
     *   data: {
     *     // ... data to create a Bible_verses_kjv
     *   }
     * })
     * 
     */
    create<T extends bible_verses_kjvCreateArgs>(args: SelectSubset<T, bible_verses_kjvCreateArgs<ExtArgs>>): Prisma__bible_verses_kjvClient<$Result.GetResult<Prisma.$bible_verses_kjvPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bible_verses_kjvs.
     * @param {bible_verses_kjvCreateManyArgs} args - Arguments to create many Bible_verses_kjvs.
     * @example
     * // Create many Bible_verses_kjvs
     * const bible_verses_kjv = await prisma.bible_verses_kjv.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bible_verses_kjvCreateManyArgs>(args?: SelectSubset<T, bible_verses_kjvCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bible_verses_kjvs and returns the data saved in the database.
     * @param {bible_verses_kjvCreateManyAndReturnArgs} args - Arguments to create many Bible_verses_kjvs.
     * @example
     * // Create many Bible_verses_kjvs
     * const bible_verses_kjv = await prisma.bible_verses_kjv.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bible_verses_kjvs and only return the `id`
     * const bible_verses_kjvWithIdOnly = await prisma.bible_verses_kjv.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bible_verses_kjvCreateManyAndReturnArgs>(args?: SelectSubset<T, bible_verses_kjvCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bible_verses_kjvPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bible_verses_kjv.
     * @param {bible_verses_kjvDeleteArgs} args - Arguments to delete one Bible_verses_kjv.
     * @example
     * // Delete one Bible_verses_kjv
     * const Bible_verses_kjv = await prisma.bible_verses_kjv.delete({
     *   where: {
     *     // ... filter to delete one Bible_verses_kjv
     *   }
     * })
     * 
     */
    delete<T extends bible_verses_kjvDeleteArgs>(args: SelectSubset<T, bible_verses_kjvDeleteArgs<ExtArgs>>): Prisma__bible_verses_kjvClient<$Result.GetResult<Prisma.$bible_verses_kjvPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bible_verses_kjv.
     * @param {bible_verses_kjvUpdateArgs} args - Arguments to update one Bible_verses_kjv.
     * @example
     * // Update one Bible_verses_kjv
     * const bible_verses_kjv = await prisma.bible_verses_kjv.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bible_verses_kjvUpdateArgs>(args: SelectSubset<T, bible_verses_kjvUpdateArgs<ExtArgs>>): Prisma__bible_verses_kjvClient<$Result.GetResult<Prisma.$bible_verses_kjvPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bible_verses_kjvs.
     * @param {bible_verses_kjvDeleteManyArgs} args - Arguments to filter Bible_verses_kjvs to delete.
     * @example
     * // Delete a few Bible_verses_kjvs
     * const { count } = await prisma.bible_verses_kjv.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bible_verses_kjvDeleteManyArgs>(args?: SelectSubset<T, bible_verses_kjvDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bible_verses_kjvs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bible_verses_kjvUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bible_verses_kjvs
     * const bible_verses_kjv = await prisma.bible_verses_kjv.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bible_verses_kjvUpdateManyArgs>(args: SelectSubset<T, bible_verses_kjvUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bible_verses_kjvs and returns the data updated in the database.
     * @param {bible_verses_kjvUpdateManyAndReturnArgs} args - Arguments to update many Bible_verses_kjvs.
     * @example
     * // Update many Bible_verses_kjvs
     * const bible_verses_kjv = await prisma.bible_verses_kjv.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bible_verses_kjvs and only return the `id`
     * const bible_verses_kjvWithIdOnly = await prisma.bible_verses_kjv.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends bible_verses_kjvUpdateManyAndReturnArgs>(args: SelectSubset<T, bible_verses_kjvUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bible_verses_kjvPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bible_verses_kjv.
     * @param {bible_verses_kjvUpsertArgs} args - Arguments to update or create a Bible_verses_kjv.
     * @example
     * // Update or create a Bible_verses_kjv
     * const bible_verses_kjv = await prisma.bible_verses_kjv.upsert({
     *   create: {
     *     // ... data to create a Bible_verses_kjv
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bible_verses_kjv we want to update
     *   }
     * })
     */
    upsert<T extends bible_verses_kjvUpsertArgs>(args: SelectSubset<T, bible_verses_kjvUpsertArgs<ExtArgs>>): Prisma__bible_verses_kjvClient<$Result.GetResult<Prisma.$bible_verses_kjvPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bible_verses_kjvs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bible_verses_kjvCountArgs} args - Arguments to filter Bible_verses_kjvs to count.
     * @example
     * // Count the number of Bible_verses_kjvs
     * const count = await prisma.bible_verses_kjv.count({
     *   where: {
     *     // ... the filter for the Bible_verses_kjvs we want to count
     *   }
     * })
    **/
    count<T extends bible_verses_kjvCountArgs>(
      args?: Subset<T, bible_verses_kjvCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Bible_verses_kjvCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bible_verses_kjv.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bible_verses_kjvAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Bible_verses_kjvAggregateArgs>(args: Subset<T, Bible_verses_kjvAggregateArgs>): Prisma.PrismaPromise<GetBible_verses_kjvAggregateType<T>>

    /**
     * Group by Bible_verses_kjv.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bible_verses_kjvGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends bible_verses_kjvGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bible_verses_kjvGroupByArgs['orderBy'] }
        : { orderBy?: bible_verses_kjvGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, bible_verses_kjvGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBible_verses_kjvGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bible_verses_kjv model
   */
  readonly fields: bible_verses_kjvFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bible_verses_kjv.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bible_verses_kjvClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the bible_verses_kjv model
   */
  interface bible_verses_kjvFieldRefs {
    readonly id: FieldRef<"bible_verses_kjv", 'Int'>
    readonly book: FieldRef<"bible_verses_kjv", 'Int'>
    readonly chapter: FieldRef<"bible_verses_kjv", 'Int'>
    readonly verse: FieldRef<"bible_verses_kjv", 'Int'>
    readonly text: FieldRef<"bible_verses_kjv", 'String'>
  }
    

  // Custom InputTypes
  /**
   * bible_verses_kjv findUnique
   */
  export type bible_verses_kjvFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_kjv
     */
    select?: bible_verses_kjvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_kjv
     */
    omit?: bible_verses_kjvOmit<ExtArgs> | null
    /**
     * Filter, which bible_verses_kjv to fetch.
     */
    where: bible_verses_kjvWhereUniqueInput
  }

  /**
   * bible_verses_kjv findUniqueOrThrow
   */
  export type bible_verses_kjvFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_kjv
     */
    select?: bible_verses_kjvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_kjv
     */
    omit?: bible_verses_kjvOmit<ExtArgs> | null
    /**
     * Filter, which bible_verses_kjv to fetch.
     */
    where: bible_verses_kjvWhereUniqueInput
  }

  /**
   * bible_verses_kjv findFirst
   */
  export type bible_verses_kjvFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_kjv
     */
    select?: bible_verses_kjvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_kjv
     */
    omit?: bible_verses_kjvOmit<ExtArgs> | null
    /**
     * Filter, which bible_verses_kjv to fetch.
     */
    where?: bible_verses_kjvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bible_verses_kjvs to fetch.
     */
    orderBy?: bible_verses_kjvOrderByWithRelationInput | bible_verses_kjvOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bible_verses_kjvs.
     */
    cursor?: bible_verses_kjvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bible_verses_kjvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bible_verses_kjvs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bible_verses_kjvs.
     */
    distinct?: Bible_verses_kjvScalarFieldEnum | Bible_verses_kjvScalarFieldEnum[]
  }

  /**
   * bible_verses_kjv findFirstOrThrow
   */
  export type bible_verses_kjvFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_kjv
     */
    select?: bible_verses_kjvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_kjv
     */
    omit?: bible_verses_kjvOmit<ExtArgs> | null
    /**
     * Filter, which bible_verses_kjv to fetch.
     */
    where?: bible_verses_kjvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bible_verses_kjvs to fetch.
     */
    orderBy?: bible_verses_kjvOrderByWithRelationInput | bible_verses_kjvOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bible_verses_kjvs.
     */
    cursor?: bible_verses_kjvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bible_verses_kjvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bible_verses_kjvs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bible_verses_kjvs.
     */
    distinct?: Bible_verses_kjvScalarFieldEnum | Bible_verses_kjvScalarFieldEnum[]
  }

  /**
   * bible_verses_kjv findMany
   */
  export type bible_verses_kjvFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_kjv
     */
    select?: bible_verses_kjvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_kjv
     */
    omit?: bible_verses_kjvOmit<ExtArgs> | null
    /**
     * Filter, which bible_verses_kjvs to fetch.
     */
    where?: bible_verses_kjvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bible_verses_kjvs to fetch.
     */
    orderBy?: bible_verses_kjvOrderByWithRelationInput | bible_verses_kjvOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bible_verses_kjvs.
     */
    cursor?: bible_verses_kjvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bible_verses_kjvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bible_verses_kjvs.
     */
    skip?: number
    distinct?: Bible_verses_kjvScalarFieldEnum | Bible_verses_kjvScalarFieldEnum[]
  }

  /**
   * bible_verses_kjv create
   */
  export type bible_verses_kjvCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_kjv
     */
    select?: bible_verses_kjvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_kjv
     */
    omit?: bible_verses_kjvOmit<ExtArgs> | null
    /**
     * The data needed to create a bible_verses_kjv.
     */
    data: XOR<bible_verses_kjvCreateInput, bible_verses_kjvUncheckedCreateInput>
  }

  /**
   * bible_verses_kjv createMany
   */
  export type bible_verses_kjvCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bible_verses_kjvs.
     */
    data: bible_verses_kjvCreateManyInput | bible_verses_kjvCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bible_verses_kjv createManyAndReturn
   */
  export type bible_verses_kjvCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_kjv
     */
    select?: bible_verses_kjvSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_kjv
     */
    omit?: bible_verses_kjvOmit<ExtArgs> | null
    /**
     * The data used to create many bible_verses_kjvs.
     */
    data: bible_verses_kjvCreateManyInput | bible_verses_kjvCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bible_verses_kjv update
   */
  export type bible_verses_kjvUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_kjv
     */
    select?: bible_verses_kjvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_kjv
     */
    omit?: bible_verses_kjvOmit<ExtArgs> | null
    /**
     * The data needed to update a bible_verses_kjv.
     */
    data: XOR<bible_verses_kjvUpdateInput, bible_verses_kjvUncheckedUpdateInput>
    /**
     * Choose, which bible_verses_kjv to update.
     */
    where: bible_verses_kjvWhereUniqueInput
  }

  /**
   * bible_verses_kjv updateMany
   */
  export type bible_verses_kjvUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bible_verses_kjvs.
     */
    data: XOR<bible_verses_kjvUpdateManyMutationInput, bible_verses_kjvUncheckedUpdateManyInput>
    /**
     * Filter which bible_verses_kjvs to update
     */
    where?: bible_verses_kjvWhereInput
    /**
     * Limit how many bible_verses_kjvs to update.
     */
    limit?: number
  }

  /**
   * bible_verses_kjv updateManyAndReturn
   */
  export type bible_verses_kjvUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_kjv
     */
    select?: bible_verses_kjvSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_kjv
     */
    omit?: bible_verses_kjvOmit<ExtArgs> | null
    /**
     * The data used to update bible_verses_kjvs.
     */
    data: XOR<bible_verses_kjvUpdateManyMutationInput, bible_verses_kjvUncheckedUpdateManyInput>
    /**
     * Filter which bible_verses_kjvs to update
     */
    where?: bible_verses_kjvWhereInput
    /**
     * Limit how many bible_verses_kjvs to update.
     */
    limit?: number
  }

  /**
   * bible_verses_kjv upsert
   */
  export type bible_verses_kjvUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_kjv
     */
    select?: bible_verses_kjvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_kjv
     */
    omit?: bible_verses_kjvOmit<ExtArgs> | null
    /**
     * The filter to search for the bible_verses_kjv to update in case it exists.
     */
    where: bible_verses_kjvWhereUniqueInput
    /**
     * In case the bible_verses_kjv found by the `where` argument doesn't exist, create a new bible_verses_kjv with this data.
     */
    create: XOR<bible_verses_kjvCreateInput, bible_verses_kjvUncheckedCreateInput>
    /**
     * In case the bible_verses_kjv was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bible_verses_kjvUpdateInput, bible_verses_kjvUncheckedUpdateInput>
  }

  /**
   * bible_verses_kjv delete
   */
  export type bible_verses_kjvDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_kjv
     */
    select?: bible_verses_kjvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_kjv
     */
    omit?: bible_verses_kjvOmit<ExtArgs> | null
    /**
     * Filter which bible_verses_kjv to delete.
     */
    where: bible_verses_kjvWhereUniqueInput
  }

  /**
   * bible_verses_kjv deleteMany
   */
  export type bible_verses_kjvDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bible_verses_kjvs to delete
     */
    where?: bible_verses_kjvWhereInput
    /**
     * Limit how many bible_verses_kjvs to delete.
     */
    limit?: number
  }

  /**
   * bible_verses_kjv without action
   */
  export type bible_verses_kjvDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_kjv
     */
    select?: bible_verses_kjvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_kjv
     */
    omit?: bible_verses_kjvOmit<ExtArgs> | null
  }


  /**
   * Model bible_verses_rvg
   */

  export type AggregateBible_verses_rvg = {
    _count: Bible_verses_rvgCountAggregateOutputType | null
    _avg: Bible_verses_rvgAvgAggregateOutputType | null
    _sum: Bible_verses_rvgSumAggregateOutputType | null
    _min: Bible_verses_rvgMinAggregateOutputType | null
    _max: Bible_verses_rvgMaxAggregateOutputType | null
  }

  export type Bible_verses_rvgAvgAggregateOutputType = {
    id: number | null
    book: number | null
    chapter: number | null
    verse: number | null
  }

  export type Bible_verses_rvgSumAggregateOutputType = {
    id: number | null
    book: number | null
    chapter: number | null
    verse: number | null
  }

  export type Bible_verses_rvgMinAggregateOutputType = {
    id: number | null
    book: number | null
    chapter: number | null
    verse: number | null
    text: string | null
  }

  export type Bible_verses_rvgMaxAggregateOutputType = {
    id: number | null
    book: number | null
    chapter: number | null
    verse: number | null
    text: string | null
  }

  export type Bible_verses_rvgCountAggregateOutputType = {
    id: number
    book: number
    chapter: number
    verse: number
    text: number
    _all: number
  }


  export type Bible_verses_rvgAvgAggregateInputType = {
    id?: true
    book?: true
    chapter?: true
    verse?: true
  }

  export type Bible_verses_rvgSumAggregateInputType = {
    id?: true
    book?: true
    chapter?: true
    verse?: true
  }

  export type Bible_verses_rvgMinAggregateInputType = {
    id?: true
    book?: true
    chapter?: true
    verse?: true
    text?: true
  }

  export type Bible_verses_rvgMaxAggregateInputType = {
    id?: true
    book?: true
    chapter?: true
    verse?: true
    text?: true
  }

  export type Bible_verses_rvgCountAggregateInputType = {
    id?: true
    book?: true
    chapter?: true
    verse?: true
    text?: true
    _all?: true
  }

  export type Bible_verses_rvgAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bible_verses_rvg to aggregate.
     */
    where?: bible_verses_rvgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bible_verses_rvgs to fetch.
     */
    orderBy?: bible_verses_rvgOrderByWithRelationInput | bible_verses_rvgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bible_verses_rvgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bible_verses_rvgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bible_verses_rvgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bible_verses_rvgs
    **/
    _count?: true | Bible_verses_rvgCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Bible_verses_rvgAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Bible_verses_rvgSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Bible_verses_rvgMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Bible_verses_rvgMaxAggregateInputType
  }

  export type GetBible_verses_rvgAggregateType<T extends Bible_verses_rvgAggregateArgs> = {
        [P in keyof T & keyof AggregateBible_verses_rvg]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBible_verses_rvg[P]>
      : GetScalarType<T[P], AggregateBible_verses_rvg[P]>
  }




  export type bible_verses_rvgGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bible_verses_rvgWhereInput
    orderBy?: bible_verses_rvgOrderByWithAggregationInput | bible_verses_rvgOrderByWithAggregationInput[]
    by: Bible_verses_rvgScalarFieldEnum[] | Bible_verses_rvgScalarFieldEnum
    having?: bible_verses_rvgScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Bible_verses_rvgCountAggregateInputType | true
    _avg?: Bible_verses_rvgAvgAggregateInputType
    _sum?: Bible_verses_rvgSumAggregateInputType
    _min?: Bible_verses_rvgMinAggregateInputType
    _max?: Bible_verses_rvgMaxAggregateInputType
  }

  export type Bible_verses_rvgGroupByOutputType = {
    id: number
    book: number
    chapter: number
    verse: number
    text: string
    _count: Bible_verses_rvgCountAggregateOutputType | null
    _avg: Bible_verses_rvgAvgAggregateOutputType | null
    _sum: Bible_verses_rvgSumAggregateOutputType | null
    _min: Bible_verses_rvgMinAggregateOutputType | null
    _max: Bible_verses_rvgMaxAggregateOutputType | null
  }

  type GetBible_verses_rvgGroupByPayload<T extends bible_verses_rvgGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Bible_verses_rvgGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Bible_verses_rvgGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Bible_verses_rvgGroupByOutputType[P]>
            : GetScalarType<T[P], Bible_verses_rvgGroupByOutputType[P]>
        }
      >
    >


  export type bible_verses_rvgSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book?: boolean
    chapter?: boolean
    verse?: boolean
    text?: boolean
  }, ExtArgs["result"]["bible_verses_rvg"]>

  export type bible_verses_rvgSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book?: boolean
    chapter?: boolean
    verse?: boolean
    text?: boolean
  }, ExtArgs["result"]["bible_verses_rvg"]>

  export type bible_verses_rvgSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book?: boolean
    chapter?: boolean
    verse?: boolean
    text?: boolean
  }, ExtArgs["result"]["bible_verses_rvg"]>

  export type bible_verses_rvgSelectScalar = {
    id?: boolean
    book?: boolean
    chapter?: boolean
    verse?: boolean
    text?: boolean
  }

  export type bible_verses_rvgOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "book" | "chapter" | "verse" | "text", ExtArgs["result"]["bible_verses_rvg"]>

  export type $bible_verses_rvgPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bible_verses_rvg"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      book: number
      chapter: number
      verse: number
      text: string
    }, ExtArgs["result"]["bible_verses_rvg"]>
    composites: {}
  }

  type bible_verses_rvgGetPayload<S extends boolean | null | undefined | bible_verses_rvgDefaultArgs> = $Result.GetResult<Prisma.$bible_verses_rvgPayload, S>

  type bible_verses_rvgCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bible_verses_rvgFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Bible_verses_rvgCountAggregateInputType | true
    }

  export interface bible_verses_rvgDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bible_verses_rvg'], meta: { name: 'bible_verses_rvg' } }
    /**
     * Find zero or one Bible_verses_rvg that matches the filter.
     * @param {bible_verses_rvgFindUniqueArgs} args - Arguments to find a Bible_verses_rvg
     * @example
     * // Get one Bible_verses_rvg
     * const bible_verses_rvg = await prisma.bible_verses_rvg.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bible_verses_rvgFindUniqueArgs>(args: SelectSubset<T, bible_verses_rvgFindUniqueArgs<ExtArgs>>): Prisma__bible_verses_rvgClient<$Result.GetResult<Prisma.$bible_verses_rvgPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bible_verses_rvg that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bible_verses_rvgFindUniqueOrThrowArgs} args - Arguments to find a Bible_verses_rvg
     * @example
     * // Get one Bible_verses_rvg
     * const bible_verses_rvg = await prisma.bible_verses_rvg.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bible_verses_rvgFindUniqueOrThrowArgs>(args: SelectSubset<T, bible_verses_rvgFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bible_verses_rvgClient<$Result.GetResult<Prisma.$bible_verses_rvgPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bible_verses_rvg that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bible_verses_rvgFindFirstArgs} args - Arguments to find a Bible_verses_rvg
     * @example
     * // Get one Bible_verses_rvg
     * const bible_verses_rvg = await prisma.bible_verses_rvg.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bible_verses_rvgFindFirstArgs>(args?: SelectSubset<T, bible_verses_rvgFindFirstArgs<ExtArgs>>): Prisma__bible_verses_rvgClient<$Result.GetResult<Prisma.$bible_verses_rvgPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bible_verses_rvg that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bible_verses_rvgFindFirstOrThrowArgs} args - Arguments to find a Bible_verses_rvg
     * @example
     * // Get one Bible_verses_rvg
     * const bible_verses_rvg = await prisma.bible_verses_rvg.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bible_verses_rvgFindFirstOrThrowArgs>(args?: SelectSubset<T, bible_verses_rvgFindFirstOrThrowArgs<ExtArgs>>): Prisma__bible_verses_rvgClient<$Result.GetResult<Prisma.$bible_verses_rvgPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bible_verses_rvgs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bible_verses_rvgFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bible_verses_rvgs
     * const bible_verses_rvgs = await prisma.bible_verses_rvg.findMany()
     * 
     * // Get first 10 Bible_verses_rvgs
     * const bible_verses_rvgs = await prisma.bible_verses_rvg.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bible_verses_rvgWithIdOnly = await prisma.bible_verses_rvg.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bible_verses_rvgFindManyArgs>(args?: SelectSubset<T, bible_verses_rvgFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bible_verses_rvgPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bible_verses_rvg.
     * @param {bible_verses_rvgCreateArgs} args - Arguments to create a Bible_verses_rvg.
     * @example
     * // Create one Bible_verses_rvg
     * const Bible_verses_rvg = await prisma.bible_verses_rvg.create({
     *   data: {
     *     // ... data to create a Bible_verses_rvg
     *   }
     * })
     * 
     */
    create<T extends bible_verses_rvgCreateArgs>(args: SelectSubset<T, bible_verses_rvgCreateArgs<ExtArgs>>): Prisma__bible_verses_rvgClient<$Result.GetResult<Prisma.$bible_verses_rvgPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bible_verses_rvgs.
     * @param {bible_verses_rvgCreateManyArgs} args - Arguments to create many Bible_verses_rvgs.
     * @example
     * // Create many Bible_verses_rvgs
     * const bible_verses_rvg = await prisma.bible_verses_rvg.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bible_verses_rvgCreateManyArgs>(args?: SelectSubset<T, bible_verses_rvgCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bible_verses_rvgs and returns the data saved in the database.
     * @param {bible_verses_rvgCreateManyAndReturnArgs} args - Arguments to create many Bible_verses_rvgs.
     * @example
     * // Create many Bible_verses_rvgs
     * const bible_verses_rvg = await prisma.bible_verses_rvg.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bible_verses_rvgs and only return the `id`
     * const bible_verses_rvgWithIdOnly = await prisma.bible_verses_rvg.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bible_verses_rvgCreateManyAndReturnArgs>(args?: SelectSubset<T, bible_verses_rvgCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bible_verses_rvgPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bible_verses_rvg.
     * @param {bible_verses_rvgDeleteArgs} args - Arguments to delete one Bible_verses_rvg.
     * @example
     * // Delete one Bible_verses_rvg
     * const Bible_verses_rvg = await prisma.bible_verses_rvg.delete({
     *   where: {
     *     // ... filter to delete one Bible_verses_rvg
     *   }
     * })
     * 
     */
    delete<T extends bible_verses_rvgDeleteArgs>(args: SelectSubset<T, bible_verses_rvgDeleteArgs<ExtArgs>>): Prisma__bible_verses_rvgClient<$Result.GetResult<Prisma.$bible_verses_rvgPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bible_verses_rvg.
     * @param {bible_verses_rvgUpdateArgs} args - Arguments to update one Bible_verses_rvg.
     * @example
     * // Update one Bible_verses_rvg
     * const bible_verses_rvg = await prisma.bible_verses_rvg.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bible_verses_rvgUpdateArgs>(args: SelectSubset<T, bible_verses_rvgUpdateArgs<ExtArgs>>): Prisma__bible_verses_rvgClient<$Result.GetResult<Prisma.$bible_verses_rvgPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bible_verses_rvgs.
     * @param {bible_verses_rvgDeleteManyArgs} args - Arguments to filter Bible_verses_rvgs to delete.
     * @example
     * // Delete a few Bible_verses_rvgs
     * const { count } = await prisma.bible_verses_rvg.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bible_verses_rvgDeleteManyArgs>(args?: SelectSubset<T, bible_verses_rvgDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bible_verses_rvgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bible_verses_rvgUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bible_verses_rvgs
     * const bible_verses_rvg = await prisma.bible_verses_rvg.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bible_verses_rvgUpdateManyArgs>(args: SelectSubset<T, bible_verses_rvgUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bible_verses_rvgs and returns the data updated in the database.
     * @param {bible_verses_rvgUpdateManyAndReturnArgs} args - Arguments to update many Bible_verses_rvgs.
     * @example
     * // Update many Bible_verses_rvgs
     * const bible_verses_rvg = await prisma.bible_verses_rvg.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bible_verses_rvgs and only return the `id`
     * const bible_verses_rvgWithIdOnly = await prisma.bible_verses_rvg.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends bible_verses_rvgUpdateManyAndReturnArgs>(args: SelectSubset<T, bible_verses_rvgUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bible_verses_rvgPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bible_verses_rvg.
     * @param {bible_verses_rvgUpsertArgs} args - Arguments to update or create a Bible_verses_rvg.
     * @example
     * // Update or create a Bible_verses_rvg
     * const bible_verses_rvg = await prisma.bible_verses_rvg.upsert({
     *   create: {
     *     // ... data to create a Bible_verses_rvg
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bible_verses_rvg we want to update
     *   }
     * })
     */
    upsert<T extends bible_verses_rvgUpsertArgs>(args: SelectSubset<T, bible_verses_rvgUpsertArgs<ExtArgs>>): Prisma__bible_verses_rvgClient<$Result.GetResult<Prisma.$bible_verses_rvgPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bible_verses_rvgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bible_verses_rvgCountArgs} args - Arguments to filter Bible_verses_rvgs to count.
     * @example
     * // Count the number of Bible_verses_rvgs
     * const count = await prisma.bible_verses_rvg.count({
     *   where: {
     *     // ... the filter for the Bible_verses_rvgs we want to count
     *   }
     * })
    **/
    count<T extends bible_verses_rvgCountArgs>(
      args?: Subset<T, bible_verses_rvgCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Bible_verses_rvgCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bible_verses_rvg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bible_verses_rvgAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Bible_verses_rvgAggregateArgs>(args: Subset<T, Bible_verses_rvgAggregateArgs>): Prisma.PrismaPromise<GetBible_verses_rvgAggregateType<T>>

    /**
     * Group by Bible_verses_rvg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bible_verses_rvgGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends bible_verses_rvgGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bible_verses_rvgGroupByArgs['orderBy'] }
        : { orderBy?: bible_verses_rvgGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, bible_verses_rvgGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBible_verses_rvgGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bible_verses_rvg model
   */
  readonly fields: bible_verses_rvgFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bible_verses_rvg.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bible_verses_rvgClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the bible_verses_rvg model
   */
  interface bible_verses_rvgFieldRefs {
    readonly id: FieldRef<"bible_verses_rvg", 'Int'>
    readonly book: FieldRef<"bible_verses_rvg", 'Int'>
    readonly chapter: FieldRef<"bible_verses_rvg", 'Int'>
    readonly verse: FieldRef<"bible_verses_rvg", 'Int'>
    readonly text: FieldRef<"bible_verses_rvg", 'String'>
  }
    

  // Custom InputTypes
  /**
   * bible_verses_rvg findUnique
   */
  export type bible_verses_rvgFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_rvg
     */
    select?: bible_verses_rvgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_rvg
     */
    omit?: bible_verses_rvgOmit<ExtArgs> | null
    /**
     * Filter, which bible_verses_rvg to fetch.
     */
    where: bible_verses_rvgWhereUniqueInput
  }

  /**
   * bible_verses_rvg findUniqueOrThrow
   */
  export type bible_verses_rvgFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_rvg
     */
    select?: bible_verses_rvgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_rvg
     */
    omit?: bible_verses_rvgOmit<ExtArgs> | null
    /**
     * Filter, which bible_verses_rvg to fetch.
     */
    where: bible_verses_rvgWhereUniqueInput
  }

  /**
   * bible_verses_rvg findFirst
   */
  export type bible_verses_rvgFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_rvg
     */
    select?: bible_verses_rvgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_rvg
     */
    omit?: bible_verses_rvgOmit<ExtArgs> | null
    /**
     * Filter, which bible_verses_rvg to fetch.
     */
    where?: bible_verses_rvgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bible_verses_rvgs to fetch.
     */
    orderBy?: bible_verses_rvgOrderByWithRelationInput | bible_verses_rvgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bible_verses_rvgs.
     */
    cursor?: bible_verses_rvgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bible_verses_rvgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bible_verses_rvgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bible_verses_rvgs.
     */
    distinct?: Bible_verses_rvgScalarFieldEnum | Bible_verses_rvgScalarFieldEnum[]
  }

  /**
   * bible_verses_rvg findFirstOrThrow
   */
  export type bible_verses_rvgFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_rvg
     */
    select?: bible_verses_rvgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_rvg
     */
    omit?: bible_verses_rvgOmit<ExtArgs> | null
    /**
     * Filter, which bible_verses_rvg to fetch.
     */
    where?: bible_verses_rvgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bible_verses_rvgs to fetch.
     */
    orderBy?: bible_verses_rvgOrderByWithRelationInput | bible_verses_rvgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bible_verses_rvgs.
     */
    cursor?: bible_verses_rvgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bible_verses_rvgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bible_verses_rvgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bible_verses_rvgs.
     */
    distinct?: Bible_verses_rvgScalarFieldEnum | Bible_verses_rvgScalarFieldEnum[]
  }

  /**
   * bible_verses_rvg findMany
   */
  export type bible_verses_rvgFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_rvg
     */
    select?: bible_verses_rvgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_rvg
     */
    omit?: bible_verses_rvgOmit<ExtArgs> | null
    /**
     * Filter, which bible_verses_rvgs to fetch.
     */
    where?: bible_verses_rvgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bible_verses_rvgs to fetch.
     */
    orderBy?: bible_verses_rvgOrderByWithRelationInput | bible_verses_rvgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bible_verses_rvgs.
     */
    cursor?: bible_verses_rvgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bible_verses_rvgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bible_verses_rvgs.
     */
    skip?: number
    distinct?: Bible_verses_rvgScalarFieldEnum | Bible_verses_rvgScalarFieldEnum[]
  }

  /**
   * bible_verses_rvg create
   */
  export type bible_verses_rvgCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_rvg
     */
    select?: bible_verses_rvgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_rvg
     */
    omit?: bible_verses_rvgOmit<ExtArgs> | null
    /**
     * The data needed to create a bible_verses_rvg.
     */
    data: XOR<bible_verses_rvgCreateInput, bible_verses_rvgUncheckedCreateInput>
  }

  /**
   * bible_verses_rvg createMany
   */
  export type bible_verses_rvgCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bible_verses_rvgs.
     */
    data: bible_verses_rvgCreateManyInput | bible_verses_rvgCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bible_verses_rvg createManyAndReturn
   */
  export type bible_verses_rvgCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_rvg
     */
    select?: bible_verses_rvgSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_rvg
     */
    omit?: bible_verses_rvgOmit<ExtArgs> | null
    /**
     * The data used to create many bible_verses_rvgs.
     */
    data: bible_verses_rvgCreateManyInput | bible_verses_rvgCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bible_verses_rvg update
   */
  export type bible_verses_rvgUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_rvg
     */
    select?: bible_verses_rvgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_rvg
     */
    omit?: bible_verses_rvgOmit<ExtArgs> | null
    /**
     * The data needed to update a bible_verses_rvg.
     */
    data: XOR<bible_verses_rvgUpdateInput, bible_verses_rvgUncheckedUpdateInput>
    /**
     * Choose, which bible_verses_rvg to update.
     */
    where: bible_verses_rvgWhereUniqueInput
  }

  /**
   * bible_verses_rvg updateMany
   */
  export type bible_verses_rvgUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bible_verses_rvgs.
     */
    data: XOR<bible_verses_rvgUpdateManyMutationInput, bible_verses_rvgUncheckedUpdateManyInput>
    /**
     * Filter which bible_verses_rvgs to update
     */
    where?: bible_verses_rvgWhereInput
    /**
     * Limit how many bible_verses_rvgs to update.
     */
    limit?: number
  }

  /**
   * bible_verses_rvg updateManyAndReturn
   */
  export type bible_verses_rvgUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_rvg
     */
    select?: bible_verses_rvgSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_rvg
     */
    omit?: bible_verses_rvgOmit<ExtArgs> | null
    /**
     * The data used to update bible_verses_rvgs.
     */
    data: XOR<bible_verses_rvgUpdateManyMutationInput, bible_verses_rvgUncheckedUpdateManyInput>
    /**
     * Filter which bible_verses_rvgs to update
     */
    where?: bible_verses_rvgWhereInput
    /**
     * Limit how many bible_verses_rvgs to update.
     */
    limit?: number
  }

  /**
   * bible_verses_rvg upsert
   */
  export type bible_verses_rvgUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_rvg
     */
    select?: bible_verses_rvgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_rvg
     */
    omit?: bible_verses_rvgOmit<ExtArgs> | null
    /**
     * The filter to search for the bible_verses_rvg to update in case it exists.
     */
    where: bible_verses_rvgWhereUniqueInput
    /**
     * In case the bible_verses_rvg found by the `where` argument doesn't exist, create a new bible_verses_rvg with this data.
     */
    create: XOR<bible_verses_rvgCreateInput, bible_verses_rvgUncheckedCreateInput>
    /**
     * In case the bible_verses_rvg was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bible_verses_rvgUpdateInput, bible_verses_rvgUncheckedUpdateInput>
  }

  /**
   * bible_verses_rvg delete
   */
  export type bible_verses_rvgDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_rvg
     */
    select?: bible_verses_rvgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_rvg
     */
    omit?: bible_verses_rvgOmit<ExtArgs> | null
    /**
     * Filter which bible_verses_rvg to delete.
     */
    where: bible_verses_rvgWhereUniqueInput
  }

  /**
   * bible_verses_rvg deleteMany
   */
  export type bible_verses_rvgDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bible_verses_rvgs to delete
     */
    where?: bible_verses_rvgWhereInput
    /**
     * Limit how many bible_verses_rvgs to delete.
     */
    limit?: number
  }

  /**
   * bible_verses_rvg without action
   */
  export type bible_verses_rvgDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_rvg
     */
    select?: bible_verses_rvgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_rvg
     */
    omit?: bible_verses_rvgOmit<ExtArgs> | null
  }


  /**
   * Model bible_verses_segond_1910
   */

  export type AggregateBible_verses_segond_1910 = {
    _count: Bible_verses_segond_1910CountAggregateOutputType | null
    _avg: Bible_verses_segond_1910AvgAggregateOutputType | null
    _sum: Bible_verses_segond_1910SumAggregateOutputType | null
    _min: Bible_verses_segond_1910MinAggregateOutputType | null
    _max: Bible_verses_segond_1910MaxAggregateOutputType | null
  }

  export type Bible_verses_segond_1910AvgAggregateOutputType = {
    id: number | null
    book: number | null
    chapter: number | null
    verse: number | null
  }

  export type Bible_verses_segond_1910SumAggregateOutputType = {
    id: number | null
    book: number | null
    chapter: number | null
    verse: number | null
  }

  export type Bible_verses_segond_1910MinAggregateOutputType = {
    id: number | null
    book: number | null
    chapter: number | null
    verse: number | null
    text: string | null
  }

  export type Bible_verses_segond_1910MaxAggregateOutputType = {
    id: number | null
    book: number | null
    chapter: number | null
    verse: number | null
    text: string | null
  }

  export type Bible_verses_segond_1910CountAggregateOutputType = {
    id: number
    book: number
    chapter: number
    verse: number
    text: number
    _all: number
  }


  export type Bible_verses_segond_1910AvgAggregateInputType = {
    id?: true
    book?: true
    chapter?: true
    verse?: true
  }

  export type Bible_verses_segond_1910SumAggregateInputType = {
    id?: true
    book?: true
    chapter?: true
    verse?: true
  }

  export type Bible_verses_segond_1910MinAggregateInputType = {
    id?: true
    book?: true
    chapter?: true
    verse?: true
    text?: true
  }

  export type Bible_verses_segond_1910MaxAggregateInputType = {
    id?: true
    book?: true
    chapter?: true
    verse?: true
    text?: true
  }

  export type Bible_verses_segond_1910CountAggregateInputType = {
    id?: true
    book?: true
    chapter?: true
    verse?: true
    text?: true
    _all?: true
  }

  export type Bible_verses_segond_1910AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bible_verses_segond_1910 to aggregate.
     */
    where?: bible_verses_segond_1910WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bible_verses_segond_1910s to fetch.
     */
    orderBy?: bible_verses_segond_1910OrderByWithRelationInput | bible_verses_segond_1910OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bible_verses_segond_1910WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bible_verses_segond_1910s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bible_verses_segond_1910s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bible_verses_segond_1910s
    **/
    _count?: true | Bible_verses_segond_1910CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Bible_verses_segond_1910AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Bible_verses_segond_1910SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Bible_verses_segond_1910MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Bible_verses_segond_1910MaxAggregateInputType
  }

  export type GetBible_verses_segond_1910AggregateType<T extends Bible_verses_segond_1910AggregateArgs> = {
        [P in keyof T & keyof AggregateBible_verses_segond_1910]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBible_verses_segond_1910[P]>
      : GetScalarType<T[P], AggregateBible_verses_segond_1910[P]>
  }




  export type bible_verses_segond_1910GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bible_verses_segond_1910WhereInput
    orderBy?: bible_verses_segond_1910OrderByWithAggregationInput | bible_verses_segond_1910OrderByWithAggregationInput[]
    by: Bible_verses_segond_1910ScalarFieldEnum[] | Bible_verses_segond_1910ScalarFieldEnum
    having?: bible_verses_segond_1910ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Bible_verses_segond_1910CountAggregateInputType | true
    _avg?: Bible_verses_segond_1910AvgAggregateInputType
    _sum?: Bible_verses_segond_1910SumAggregateInputType
    _min?: Bible_verses_segond_1910MinAggregateInputType
    _max?: Bible_verses_segond_1910MaxAggregateInputType
  }

  export type Bible_verses_segond_1910GroupByOutputType = {
    id: number
    book: number
    chapter: number
    verse: number
    text: string
    _count: Bible_verses_segond_1910CountAggregateOutputType | null
    _avg: Bible_verses_segond_1910AvgAggregateOutputType | null
    _sum: Bible_verses_segond_1910SumAggregateOutputType | null
    _min: Bible_verses_segond_1910MinAggregateOutputType | null
    _max: Bible_verses_segond_1910MaxAggregateOutputType | null
  }

  type GetBible_verses_segond_1910GroupByPayload<T extends bible_verses_segond_1910GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Bible_verses_segond_1910GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Bible_verses_segond_1910GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Bible_verses_segond_1910GroupByOutputType[P]>
            : GetScalarType<T[P], Bible_verses_segond_1910GroupByOutputType[P]>
        }
      >
    >


  export type bible_verses_segond_1910Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book?: boolean
    chapter?: boolean
    verse?: boolean
    text?: boolean
  }, ExtArgs["result"]["bible_verses_segond_1910"]>

  export type bible_verses_segond_1910SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book?: boolean
    chapter?: boolean
    verse?: boolean
    text?: boolean
  }, ExtArgs["result"]["bible_verses_segond_1910"]>

  export type bible_verses_segond_1910SelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book?: boolean
    chapter?: boolean
    verse?: boolean
    text?: boolean
  }, ExtArgs["result"]["bible_verses_segond_1910"]>

  export type bible_verses_segond_1910SelectScalar = {
    id?: boolean
    book?: boolean
    chapter?: boolean
    verse?: boolean
    text?: boolean
  }

  export type bible_verses_segond_1910Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "book" | "chapter" | "verse" | "text", ExtArgs["result"]["bible_verses_segond_1910"]>

  export type $bible_verses_segond_1910Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bible_verses_segond_1910"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      book: number
      chapter: number
      verse: number
      text: string
    }, ExtArgs["result"]["bible_verses_segond_1910"]>
    composites: {}
  }

  type bible_verses_segond_1910GetPayload<S extends boolean | null | undefined | bible_verses_segond_1910DefaultArgs> = $Result.GetResult<Prisma.$bible_verses_segond_1910Payload, S>

  type bible_verses_segond_1910CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bible_verses_segond_1910FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Bible_verses_segond_1910CountAggregateInputType | true
    }

  export interface bible_verses_segond_1910Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bible_verses_segond_1910'], meta: { name: 'bible_verses_segond_1910' } }
    /**
     * Find zero or one Bible_verses_segond_1910 that matches the filter.
     * @param {bible_verses_segond_1910FindUniqueArgs} args - Arguments to find a Bible_verses_segond_1910
     * @example
     * // Get one Bible_verses_segond_1910
     * const bible_verses_segond_1910 = await prisma.bible_verses_segond_1910.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bible_verses_segond_1910FindUniqueArgs>(args: SelectSubset<T, bible_verses_segond_1910FindUniqueArgs<ExtArgs>>): Prisma__bible_verses_segond_1910Client<$Result.GetResult<Prisma.$bible_verses_segond_1910Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bible_verses_segond_1910 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bible_verses_segond_1910FindUniqueOrThrowArgs} args - Arguments to find a Bible_verses_segond_1910
     * @example
     * // Get one Bible_verses_segond_1910
     * const bible_verses_segond_1910 = await prisma.bible_verses_segond_1910.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bible_verses_segond_1910FindUniqueOrThrowArgs>(args: SelectSubset<T, bible_verses_segond_1910FindUniqueOrThrowArgs<ExtArgs>>): Prisma__bible_verses_segond_1910Client<$Result.GetResult<Prisma.$bible_verses_segond_1910Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bible_verses_segond_1910 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bible_verses_segond_1910FindFirstArgs} args - Arguments to find a Bible_verses_segond_1910
     * @example
     * // Get one Bible_verses_segond_1910
     * const bible_verses_segond_1910 = await prisma.bible_verses_segond_1910.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bible_verses_segond_1910FindFirstArgs>(args?: SelectSubset<T, bible_verses_segond_1910FindFirstArgs<ExtArgs>>): Prisma__bible_verses_segond_1910Client<$Result.GetResult<Prisma.$bible_verses_segond_1910Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bible_verses_segond_1910 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bible_verses_segond_1910FindFirstOrThrowArgs} args - Arguments to find a Bible_verses_segond_1910
     * @example
     * // Get one Bible_verses_segond_1910
     * const bible_verses_segond_1910 = await prisma.bible_verses_segond_1910.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bible_verses_segond_1910FindFirstOrThrowArgs>(args?: SelectSubset<T, bible_verses_segond_1910FindFirstOrThrowArgs<ExtArgs>>): Prisma__bible_verses_segond_1910Client<$Result.GetResult<Prisma.$bible_verses_segond_1910Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bible_verses_segond_1910s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bible_verses_segond_1910FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bible_verses_segond_1910s
     * const bible_verses_segond_1910s = await prisma.bible_verses_segond_1910.findMany()
     * 
     * // Get first 10 Bible_verses_segond_1910s
     * const bible_verses_segond_1910s = await prisma.bible_verses_segond_1910.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bible_verses_segond_1910WithIdOnly = await prisma.bible_verses_segond_1910.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bible_verses_segond_1910FindManyArgs>(args?: SelectSubset<T, bible_verses_segond_1910FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bible_verses_segond_1910Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bible_verses_segond_1910.
     * @param {bible_verses_segond_1910CreateArgs} args - Arguments to create a Bible_verses_segond_1910.
     * @example
     * // Create one Bible_verses_segond_1910
     * const Bible_verses_segond_1910 = await prisma.bible_verses_segond_1910.create({
     *   data: {
     *     // ... data to create a Bible_verses_segond_1910
     *   }
     * })
     * 
     */
    create<T extends bible_verses_segond_1910CreateArgs>(args: SelectSubset<T, bible_verses_segond_1910CreateArgs<ExtArgs>>): Prisma__bible_verses_segond_1910Client<$Result.GetResult<Prisma.$bible_verses_segond_1910Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bible_verses_segond_1910s.
     * @param {bible_verses_segond_1910CreateManyArgs} args - Arguments to create many Bible_verses_segond_1910s.
     * @example
     * // Create many Bible_verses_segond_1910s
     * const bible_verses_segond_1910 = await prisma.bible_verses_segond_1910.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bible_verses_segond_1910CreateManyArgs>(args?: SelectSubset<T, bible_verses_segond_1910CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bible_verses_segond_1910s and returns the data saved in the database.
     * @param {bible_verses_segond_1910CreateManyAndReturnArgs} args - Arguments to create many Bible_verses_segond_1910s.
     * @example
     * // Create many Bible_verses_segond_1910s
     * const bible_verses_segond_1910 = await prisma.bible_verses_segond_1910.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bible_verses_segond_1910s and only return the `id`
     * const bible_verses_segond_1910WithIdOnly = await prisma.bible_verses_segond_1910.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bible_verses_segond_1910CreateManyAndReturnArgs>(args?: SelectSubset<T, bible_verses_segond_1910CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bible_verses_segond_1910Payload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bible_verses_segond_1910.
     * @param {bible_verses_segond_1910DeleteArgs} args - Arguments to delete one Bible_verses_segond_1910.
     * @example
     * // Delete one Bible_verses_segond_1910
     * const Bible_verses_segond_1910 = await prisma.bible_verses_segond_1910.delete({
     *   where: {
     *     // ... filter to delete one Bible_verses_segond_1910
     *   }
     * })
     * 
     */
    delete<T extends bible_verses_segond_1910DeleteArgs>(args: SelectSubset<T, bible_verses_segond_1910DeleteArgs<ExtArgs>>): Prisma__bible_verses_segond_1910Client<$Result.GetResult<Prisma.$bible_verses_segond_1910Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bible_verses_segond_1910.
     * @param {bible_verses_segond_1910UpdateArgs} args - Arguments to update one Bible_verses_segond_1910.
     * @example
     * // Update one Bible_verses_segond_1910
     * const bible_verses_segond_1910 = await prisma.bible_verses_segond_1910.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bible_verses_segond_1910UpdateArgs>(args: SelectSubset<T, bible_verses_segond_1910UpdateArgs<ExtArgs>>): Prisma__bible_verses_segond_1910Client<$Result.GetResult<Prisma.$bible_verses_segond_1910Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bible_verses_segond_1910s.
     * @param {bible_verses_segond_1910DeleteManyArgs} args - Arguments to filter Bible_verses_segond_1910s to delete.
     * @example
     * // Delete a few Bible_verses_segond_1910s
     * const { count } = await prisma.bible_verses_segond_1910.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bible_verses_segond_1910DeleteManyArgs>(args?: SelectSubset<T, bible_verses_segond_1910DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bible_verses_segond_1910s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bible_verses_segond_1910UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bible_verses_segond_1910s
     * const bible_verses_segond_1910 = await prisma.bible_verses_segond_1910.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bible_verses_segond_1910UpdateManyArgs>(args: SelectSubset<T, bible_verses_segond_1910UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bible_verses_segond_1910s and returns the data updated in the database.
     * @param {bible_verses_segond_1910UpdateManyAndReturnArgs} args - Arguments to update many Bible_verses_segond_1910s.
     * @example
     * // Update many Bible_verses_segond_1910s
     * const bible_verses_segond_1910 = await prisma.bible_verses_segond_1910.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bible_verses_segond_1910s and only return the `id`
     * const bible_verses_segond_1910WithIdOnly = await prisma.bible_verses_segond_1910.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends bible_verses_segond_1910UpdateManyAndReturnArgs>(args: SelectSubset<T, bible_verses_segond_1910UpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bible_verses_segond_1910Payload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bible_verses_segond_1910.
     * @param {bible_verses_segond_1910UpsertArgs} args - Arguments to update or create a Bible_verses_segond_1910.
     * @example
     * // Update or create a Bible_verses_segond_1910
     * const bible_verses_segond_1910 = await prisma.bible_verses_segond_1910.upsert({
     *   create: {
     *     // ... data to create a Bible_verses_segond_1910
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bible_verses_segond_1910 we want to update
     *   }
     * })
     */
    upsert<T extends bible_verses_segond_1910UpsertArgs>(args: SelectSubset<T, bible_verses_segond_1910UpsertArgs<ExtArgs>>): Prisma__bible_verses_segond_1910Client<$Result.GetResult<Prisma.$bible_verses_segond_1910Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bible_verses_segond_1910s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bible_verses_segond_1910CountArgs} args - Arguments to filter Bible_verses_segond_1910s to count.
     * @example
     * // Count the number of Bible_verses_segond_1910s
     * const count = await prisma.bible_verses_segond_1910.count({
     *   where: {
     *     // ... the filter for the Bible_verses_segond_1910s we want to count
     *   }
     * })
    **/
    count<T extends bible_verses_segond_1910CountArgs>(
      args?: Subset<T, bible_verses_segond_1910CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Bible_verses_segond_1910CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bible_verses_segond_1910.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bible_verses_segond_1910AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Bible_verses_segond_1910AggregateArgs>(args: Subset<T, Bible_verses_segond_1910AggregateArgs>): Prisma.PrismaPromise<GetBible_verses_segond_1910AggregateType<T>>

    /**
     * Group by Bible_verses_segond_1910.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bible_verses_segond_1910GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends bible_verses_segond_1910GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bible_verses_segond_1910GroupByArgs['orderBy'] }
        : { orderBy?: bible_verses_segond_1910GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, bible_verses_segond_1910GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBible_verses_segond_1910GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bible_verses_segond_1910 model
   */
  readonly fields: bible_verses_segond_1910FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bible_verses_segond_1910.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bible_verses_segond_1910Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the bible_verses_segond_1910 model
   */
  interface bible_verses_segond_1910FieldRefs {
    readonly id: FieldRef<"bible_verses_segond_1910", 'Int'>
    readonly book: FieldRef<"bible_verses_segond_1910", 'Int'>
    readonly chapter: FieldRef<"bible_verses_segond_1910", 'Int'>
    readonly verse: FieldRef<"bible_verses_segond_1910", 'Int'>
    readonly text: FieldRef<"bible_verses_segond_1910", 'String'>
  }
    

  // Custom InputTypes
  /**
   * bible_verses_segond_1910 findUnique
   */
  export type bible_verses_segond_1910FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_segond_1910
     */
    select?: bible_verses_segond_1910Select<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_segond_1910
     */
    omit?: bible_verses_segond_1910Omit<ExtArgs> | null
    /**
     * Filter, which bible_verses_segond_1910 to fetch.
     */
    where: bible_verses_segond_1910WhereUniqueInput
  }

  /**
   * bible_verses_segond_1910 findUniqueOrThrow
   */
  export type bible_verses_segond_1910FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_segond_1910
     */
    select?: bible_verses_segond_1910Select<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_segond_1910
     */
    omit?: bible_verses_segond_1910Omit<ExtArgs> | null
    /**
     * Filter, which bible_verses_segond_1910 to fetch.
     */
    where: bible_verses_segond_1910WhereUniqueInput
  }

  /**
   * bible_verses_segond_1910 findFirst
   */
  export type bible_verses_segond_1910FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_segond_1910
     */
    select?: bible_verses_segond_1910Select<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_segond_1910
     */
    omit?: bible_verses_segond_1910Omit<ExtArgs> | null
    /**
     * Filter, which bible_verses_segond_1910 to fetch.
     */
    where?: bible_verses_segond_1910WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bible_verses_segond_1910s to fetch.
     */
    orderBy?: bible_verses_segond_1910OrderByWithRelationInput | bible_verses_segond_1910OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bible_verses_segond_1910s.
     */
    cursor?: bible_verses_segond_1910WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bible_verses_segond_1910s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bible_verses_segond_1910s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bible_verses_segond_1910s.
     */
    distinct?: Bible_verses_segond_1910ScalarFieldEnum | Bible_verses_segond_1910ScalarFieldEnum[]
  }

  /**
   * bible_verses_segond_1910 findFirstOrThrow
   */
  export type bible_verses_segond_1910FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_segond_1910
     */
    select?: bible_verses_segond_1910Select<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_segond_1910
     */
    omit?: bible_verses_segond_1910Omit<ExtArgs> | null
    /**
     * Filter, which bible_verses_segond_1910 to fetch.
     */
    where?: bible_verses_segond_1910WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bible_verses_segond_1910s to fetch.
     */
    orderBy?: bible_verses_segond_1910OrderByWithRelationInput | bible_verses_segond_1910OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bible_verses_segond_1910s.
     */
    cursor?: bible_verses_segond_1910WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bible_verses_segond_1910s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bible_verses_segond_1910s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bible_verses_segond_1910s.
     */
    distinct?: Bible_verses_segond_1910ScalarFieldEnum | Bible_verses_segond_1910ScalarFieldEnum[]
  }

  /**
   * bible_verses_segond_1910 findMany
   */
  export type bible_verses_segond_1910FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_segond_1910
     */
    select?: bible_verses_segond_1910Select<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_segond_1910
     */
    omit?: bible_verses_segond_1910Omit<ExtArgs> | null
    /**
     * Filter, which bible_verses_segond_1910s to fetch.
     */
    where?: bible_verses_segond_1910WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bible_verses_segond_1910s to fetch.
     */
    orderBy?: bible_verses_segond_1910OrderByWithRelationInput | bible_verses_segond_1910OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bible_verses_segond_1910s.
     */
    cursor?: bible_verses_segond_1910WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bible_verses_segond_1910s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bible_verses_segond_1910s.
     */
    skip?: number
    distinct?: Bible_verses_segond_1910ScalarFieldEnum | Bible_verses_segond_1910ScalarFieldEnum[]
  }

  /**
   * bible_verses_segond_1910 create
   */
  export type bible_verses_segond_1910CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_segond_1910
     */
    select?: bible_verses_segond_1910Select<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_segond_1910
     */
    omit?: bible_verses_segond_1910Omit<ExtArgs> | null
    /**
     * The data needed to create a bible_verses_segond_1910.
     */
    data: XOR<bible_verses_segond_1910CreateInput, bible_verses_segond_1910UncheckedCreateInput>
  }

  /**
   * bible_verses_segond_1910 createMany
   */
  export type bible_verses_segond_1910CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bible_verses_segond_1910s.
     */
    data: bible_verses_segond_1910CreateManyInput | bible_verses_segond_1910CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bible_verses_segond_1910 createManyAndReturn
   */
  export type bible_verses_segond_1910CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_segond_1910
     */
    select?: bible_verses_segond_1910SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_segond_1910
     */
    omit?: bible_verses_segond_1910Omit<ExtArgs> | null
    /**
     * The data used to create many bible_verses_segond_1910s.
     */
    data: bible_verses_segond_1910CreateManyInput | bible_verses_segond_1910CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bible_verses_segond_1910 update
   */
  export type bible_verses_segond_1910UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_segond_1910
     */
    select?: bible_verses_segond_1910Select<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_segond_1910
     */
    omit?: bible_verses_segond_1910Omit<ExtArgs> | null
    /**
     * The data needed to update a bible_verses_segond_1910.
     */
    data: XOR<bible_verses_segond_1910UpdateInput, bible_verses_segond_1910UncheckedUpdateInput>
    /**
     * Choose, which bible_verses_segond_1910 to update.
     */
    where: bible_verses_segond_1910WhereUniqueInput
  }

  /**
   * bible_verses_segond_1910 updateMany
   */
  export type bible_verses_segond_1910UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bible_verses_segond_1910s.
     */
    data: XOR<bible_verses_segond_1910UpdateManyMutationInput, bible_verses_segond_1910UncheckedUpdateManyInput>
    /**
     * Filter which bible_verses_segond_1910s to update
     */
    where?: bible_verses_segond_1910WhereInput
    /**
     * Limit how many bible_verses_segond_1910s to update.
     */
    limit?: number
  }

  /**
   * bible_verses_segond_1910 updateManyAndReturn
   */
  export type bible_verses_segond_1910UpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_segond_1910
     */
    select?: bible_verses_segond_1910SelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_segond_1910
     */
    omit?: bible_verses_segond_1910Omit<ExtArgs> | null
    /**
     * The data used to update bible_verses_segond_1910s.
     */
    data: XOR<bible_verses_segond_1910UpdateManyMutationInput, bible_verses_segond_1910UncheckedUpdateManyInput>
    /**
     * Filter which bible_verses_segond_1910s to update
     */
    where?: bible_verses_segond_1910WhereInput
    /**
     * Limit how many bible_verses_segond_1910s to update.
     */
    limit?: number
  }

  /**
   * bible_verses_segond_1910 upsert
   */
  export type bible_verses_segond_1910UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_segond_1910
     */
    select?: bible_verses_segond_1910Select<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_segond_1910
     */
    omit?: bible_verses_segond_1910Omit<ExtArgs> | null
    /**
     * The filter to search for the bible_verses_segond_1910 to update in case it exists.
     */
    where: bible_verses_segond_1910WhereUniqueInput
    /**
     * In case the bible_verses_segond_1910 found by the `where` argument doesn't exist, create a new bible_verses_segond_1910 with this data.
     */
    create: XOR<bible_verses_segond_1910CreateInput, bible_verses_segond_1910UncheckedCreateInput>
    /**
     * In case the bible_verses_segond_1910 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bible_verses_segond_1910UpdateInput, bible_verses_segond_1910UncheckedUpdateInput>
  }

  /**
   * bible_verses_segond_1910 delete
   */
  export type bible_verses_segond_1910DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_segond_1910
     */
    select?: bible_verses_segond_1910Select<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_segond_1910
     */
    omit?: bible_verses_segond_1910Omit<ExtArgs> | null
    /**
     * Filter which bible_verses_segond_1910 to delete.
     */
    where: bible_verses_segond_1910WhereUniqueInput
  }

  /**
   * bible_verses_segond_1910 deleteMany
   */
  export type bible_verses_segond_1910DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bible_verses_segond_1910s to delete
     */
    where?: bible_verses_segond_1910WhereInput
    /**
     * Limit how many bible_verses_segond_1910s to delete.
     */
    limit?: number
  }

  /**
   * bible_verses_segond_1910 without action
   */
  export type bible_verses_segond_1910DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bible_verses_segond_1910
     */
    select?: bible_verses_segond_1910Select<ExtArgs> | null
    /**
     * Omit specific fields from the bible_verses_segond_1910
     */
    omit?: bible_verses_segond_1910Omit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Bible_verses_hcvScalarFieldEnum: {
    id: 'id',
    book: 'book',
    chapter: 'chapter',
    verse: 'verse',
    text: 'text'
  };

  export type Bible_verses_hcvScalarFieldEnum = (typeof Bible_verses_hcvScalarFieldEnum)[keyof typeof Bible_verses_hcvScalarFieldEnum]


  export const Bible_verses_kjvScalarFieldEnum: {
    id: 'id',
    book: 'book',
    chapter: 'chapter',
    verse: 'verse',
    text: 'text'
  };

  export type Bible_verses_kjvScalarFieldEnum = (typeof Bible_verses_kjvScalarFieldEnum)[keyof typeof Bible_verses_kjvScalarFieldEnum]


  export const Bible_verses_rvgScalarFieldEnum: {
    id: 'id',
    book: 'book',
    chapter: 'chapter',
    verse: 'verse',
    text: 'text'
  };

  export type Bible_verses_rvgScalarFieldEnum = (typeof Bible_verses_rvgScalarFieldEnum)[keyof typeof Bible_verses_rvgScalarFieldEnum]


  export const Bible_verses_segond_1910ScalarFieldEnum: {
    id: 'id',
    book: 'book',
    chapter: 'chapter',
    verse: 'verse',
    text: 'text'
  };

  export type Bible_verses_segond_1910ScalarFieldEnum = (typeof Bible_verses_segond_1910ScalarFieldEnum)[keyof typeof Bible_verses_segond_1910ScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type bible_verses_hcvWhereInput = {
    AND?: bible_verses_hcvWhereInput | bible_verses_hcvWhereInput[]
    OR?: bible_verses_hcvWhereInput[]
    NOT?: bible_verses_hcvWhereInput | bible_verses_hcvWhereInput[]
    id?: IntFilter<"bible_verses_hcv"> | number
    book?: IntFilter<"bible_verses_hcv"> | number
    chapter?: IntFilter<"bible_verses_hcv"> | number
    verse?: IntFilter<"bible_verses_hcv"> | number
    text?: StringFilter<"bible_verses_hcv"> | string
  }

  export type bible_verses_hcvOrderByWithRelationInput = {
    id?: SortOrder
    book?: SortOrder
    chapter?: SortOrder
    verse?: SortOrder
    text?: SortOrder
  }

  export type bible_verses_hcvWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: bible_verses_hcvWhereInput | bible_verses_hcvWhereInput[]
    OR?: bible_verses_hcvWhereInput[]
    NOT?: bible_verses_hcvWhereInput | bible_verses_hcvWhereInput[]
    book?: IntFilter<"bible_verses_hcv"> | number
    chapter?: IntFilter<"bible_verses_hcv"> | number
    verse?: IntFilter<"bible_verses_hcv"> | number
    text?: StringFilter<"bible_verses_hcv"> | string
  }, "id">

  export type bible_verses_hcvOrderByWithAggregationInput = {
    id?: SortOrder
    book?: SortOrder
    chapter?: SortOrder
    verse?: SortOrder
    text?: SortOrder
    _count?: bible_verses_hcvCountOrderByAggregateInput
    _avg?: bible_verses_hcvAvgOrderByAggregateInput
    _max?: bible_verses_hcvMaxOrderByAggregateInput
    _min?: bible_verses_hcvMinOrderByAggregateInput
    _sum?: bible_verses_hcvSumOrderByAggregateInput
  }

  export type bible_verses_hcvScalarWhereWithAggregatesInput = {
    AND?: bible_verses_hcvScalarWhereWithAggregatesInput | bible_verses_hcvScalarWhereWithAggregatesInput[]
    OR?: bible_verses_hcvScalarWhereWithAggregatesInput[]
    NOT?: bible_verses_hcvScalarWhereWithAggregatesInput | bible_verses_hcvScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"bible_verses_hcv"> | number
    book?: IntWithAggregatesFilter<"bible_verses_hcv"> | number
    chapter?: IntWithAggregatesFilter<"bible_verses_hcv"> | number
    verse?: IntWithAggregatesFilter<"bible_verses_hcv"> | number
    text?: StringWithAggregatesFilter<"bible_verses_hcv"> | string
  }

  export type bible_verses_kjvWhereInput = {
    AND?: bible_verses_kjvWhereInput | bible_verses_kjvWhereInput[]
    OR?: bible_verses_kjvWhereInput[]
    NOT?: bible_verses_kjvWhereInput | bible_verses_kjvWhereInput[]
    id?: IntFilter<"bible_verses_kjv"> | number
    book?: IntFilter<"bible_verses_kjv"> | number
    chapter?: IntFilter<"bible_verses_kjv"> | number
    verse?: IntFilter<"bible_verses_kjv"> | number
    text?: StringFilter<"bible_verses_kjv"> | string
  }

  export type bible_verses_kjvOrderByWithRelationInput = {
    id?: SortOrder
    book?: SortOrder
    chapter?: SortOrder
    verse?: SortOrder
    text?: SortOrder
  }

  export type bible_verses_kjvWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: bible_verses_kjvWhereInput | bible_verses_kjvWhereInput[]
    OR?: bible_verses_kjvWhereInput[]
    NOT?: bible_verses_kjvWhereInput | bible_verses_kjvWhereInput[]
    book?: IntFilter<"bible_verses_kjv"> | number
    chapter?: IntFilter<"bible_verses_kjv"> | number
    verse?: IntFilter<"bible_verses_kjv"> | number
    text?: StringFilter<"bible_verses_kjv"> | string
  }, "id">

  export type bible_verses_kjvOrderByWithAggregationInput = {
    id?: SortOrder
    book?: SortOrder
    chapter?: SortOrder
    verse?: SortOrder
    text?: SortOrder
    _count?: bible_verses_kjvCountOrderByAggregateInput
    _avg?: bible_verses_kjvAvgOrderByAggregateInput
    _max?: bible_verses_kjvMaxOrderByAggregateInput
    _min?: bible_verses_kjvMinOrderByAggregateInput
    _sum?: bible_verses_kjvSumOrderByAggregateInput
  }

  export type bible_verses_kjvScalarWhereWithAggregatesInput = {
    AND?: bible_verses_kjvScalarWhereWithAggregatesInput | bible_verses_kjvScalarWhereWithAggregatesInput[]
    OR?: bible_verses_kjvScalarWhereWithAggregatesInput[]
    NOT?: bible_verses_kjvScalarWhereWithAggregatesInput | bible_verses_kjvScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"bible_verses_kjv"> | number
    book?: IntWithAggregatesFilter<"bible_verses_kjv"> | number
    chapter?: IntWithAggregatesFilter<"bible_verses_kjv"> | number
    verse?: IntWithAggregatesFilter<"bible_verses_kjv"> | number
    text?: StringWithAggregatesFilter<"bible_verses_kjv"> | string
  }

  export type bible_verses_rvgWhereInput = {
    AND?: bible_verses_rvgWhereInput | bible_verses_rvgWhereInput[]
    OR?: bible_verses_rvgWhereInput[]
    NOT?: bible_verses_rvgWhereInput | bible_verses_rvgWhereInput[]
    id?: IntFilter<"bible_verses_rvg"> | number
    book?: IntFilter<"bible_verses_rvg"> | number
    chapter?: IntFilter<"bible_verses_rvg"> | number
    verse?: IntFilter<"bible_verses_rvg"> | number
    text?: StringFilter<"bible_verses_rvg"> | string
  }

  export type bible_verses_rvgOrderByWithRelationInput = {
    id?: SortOrder
    book?: SortOrder
    chapter?: SortOrder
    verse?: SortOrder
    text?: SortOrder
  }

  export type bible_verses_rvgWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: bible_verses_rvgWhereInput | bible_verses_rvgWhereInput[]
    OR?: bible_verses_rvgWhereInput[]
    NOT?: bible_verses_rvgWhereInput | bible_verses_rvgWhereInput[]
    book?: IntFilter<"bible_verses_rvg"> | number
    chapter?: IntFilter<"bible_verses_rvg"> | number
    verse?: IntFilter<"bible_verses_rvg"> | number
    text?: StringFilter<"bible_verses_rvg"> | string
  }, "id">

  export type bible_verses_rvgOrderByWithAggregationInput = {
    id?: SortOrder
    book?: SortOrder
    chapter?: SortOrder
    verse?: SortOrder
    text?: SortOrder
    _count?: bible_verses_rvgCountOrderByAggregateInput
    _avg?: bible_verses_rvgAvgOrderByAggregateInput
    _max?: bible_verses_rvgMaxOrderByAggregateInput
    _min?: bible_verses_rvgMinOrderByAggregateInput
    _sum?: bible_verses_rvgSumOrderByAggregateInput
  }

  export type bible_verses_rvgScalarWhereWithAggregatesInput = {
    AND?: bible_verses_rvgScalarWhereWithAggregatesInput | bible_verses_rvgScalarWhereWithAggregatesInput[]
    OR?: bible_verses_rvgScalarWhereWithAggregatesInput[]
    NOT?: bible_verses_rvgScalarWhereWithAggregatesInput | bible_verses_rvgScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"bible_verses_rvg"> | number
    book?: IntWithAggregatesFilter<"bible_verses_rvg"> | number
    chapter?: IntWithAggregatesFilter<"bible_verses_rvg"> | number
    verse?: IntWithAggregatesFilter<"bible_verses_rvg"> | number
    text?: StringWithAggregatesFilter<"bible_verses_rvg"> | string
  }

  export type bible_verses_segond_1910WhereInput = {
    AND?: bible_verses_segond_1910WhereInput | bible_verses_segond_1910WhereInput[]
    OR?: bible_verses_segond_1910WhereInput[]
    NOT?: bible_verses_segond_1910WhereInput | bible_verses_segond_1910WhereInput[]
    id?: IntFilter<"bible_verses_segond_1910"> | number
    book?: IntFilter<"bible_verses_segond_1910"> | number
    chapter?: IntFilter<"bible_verses_segond_1910"> | number
    verse?: IntFilter<"bible_verses_segond_1910"> | number
    text?: StringFilter<"bible_verses_segond_1910"> | string
  }

  export type bible_verses_segond_1910OrderByWithRelationInput = {
    id?: SortOrder
    book?: SortOrder
    chapter?: SortOrder
    verse?: SortOrder
    text?: SortOrder
  }

  export type bible_verses_segond_1910WhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: bible_verses_segond_1910WhereInput | bible_verses_segond_1910WhereInput[]
    OR?: bible_verses_segond_1910WhereInput[]
    NOT?: bible_verses_segond_1910WhereInput | bible_verses_segond_1910WhereInput[]
    book?: IntFilter<"bible_verses_segond_1910"> | number
    chapter?: IntFilter<"bible_verses_segond_1910"> | number
    verse?: IntFilter<"bible_verses_segond_1910"> | number
    text?: StringFilter<"bible_verses_segond_1910"> | string
  }, "id">

  export type bible_verses_segond_1910OrderByWithAggregationInput = {
    id?: SortOrder
    book?: SortOrder
    chapter?: SortOrder
    verse?: SortOrder
    text?: SortOrder
    _count?: bible_verses_segond_1910CountOrderByAggregateInput
    _avg?: bible_verses_segond_1910AvgOrderByAggregateInput
    _max?: bible_verses_segond_1910MaxOrderByAggregateInput
    _min?: bible_verses_segond_1910MinOrderByAggregateInput
    _sum?: bible_verses_segond_1910SumOrderByAggregateInput
  }

  export type bible_verses_segond_1910ScalarWhereWithAggregatesInput = {
    AND?: bible_verses_segond_1910ScalarWhereWithAggregatesInput | bible_verses_segond_1910ScalarWhereWithAggregatesInput[]
    OR?: bible_verses_segond_1910ScalarWhereWithAggregatesInput[]
    NOT?: bible_verses_segond_1910ScalarWhereWithAggregatesInput | bible_verses_segond_1910ScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"bible_verses_segond_1910"> | number
    book?: IntWithAggregatesFilter<"bible_verses_segond_1910"> | number
    chapter?: IntWithAggregatesFilter<"bible_verses_segond_1910"> | number
    verse?: IntWithAggregatesFilter<"bible_verses_segond_1910"> | number
    text?: StringWithAggregatesFilter<"bible_verses_segond_1910"> | string
  }

  export type bible_verses_hcvCreateInput = {
    book: number
    chapter: number
    verse: number
    text: string
  }

  export type bible_verses_hcvUncheckedCreateInput = {
    id?: number
    book: number
    chapter: number
    verse: number
    text: string
  }

  export type bible_verses_hcvUpdateInput = {
    book?: IntFieldUpdateOperationsInput | number
    chapter?: IntFieldUpdateOperationsInput | number
    verse?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type bible_verses_hcvUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    book?: IntFieldUpdateOperationsInput | number
    chapter?: IntFieldUpdateOperationsInput | number
    verse?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type bible_verses_hcvCreateManyInput = {
    id?: number
    book: number
    chapter: number
    verse: number
    text: string
  }

  export type bible_verses_hcvUpdateManyMutationInput = {
    book?: IntFieldUpdateOperationsInput | number
    chapter?: IntFieldUpdateOperationsInput | number
    verse?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type bible_verses_hcvUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    book?: IntFieldUpdateOperationsInput | number
    chapter?: IntFieldUpdateOperationsInput | number
    verse?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type bible_verses_kjvCreateInput = {
    book: number
    chapter: number
    verse: number
    text: string
  }

  export type bible_verses_kjvUncheckedCreateInput = {
    id?: number
    book: number
    chapter: number
    verse: number
    text: string
  }

  export type bible_verses_kjvUpdateInput = {
    book?: IntFieldUpdateOperationsInput | number
    chapter?: IntFieldUpdateOperationsInput | number
    verse?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type bible_verses_kjvUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    book?: IntFieldUpdateOperationsInput | number
    chapter?: IntFieldUpdateOperationsInput | number
    verse?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type bible_verses_kjvCreateManyInput = {
    id?: number
    book: number
    chapter: number
    verse: number
    text: string
  }

  export type bible_verses_kjvUpdateManyMutationInput = {
    book?: IntFieldUpdateOperationsInput | number
    chapter?: IntFieldUpdateOperationsInput | number
    verse?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type bible_verses_kjvUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    book?: IntFieldUpdateOperationsInput | number
    chapter?: IntFieldUpdateOperationsInput | number
    verse?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type bible_verses_rvgCreateInput = {
    book: number
    chapter: number
    verse: number
    text: string
  }

  export type bible_verses_rvgUncheckedCreateInput = {
    id?: number
    book: number
    chapter: number
    verse: number
    text: string
  }

  export type bible_verses_rvgUpdateInput = {
    book?: IntFieldUpdateOperationsInput | number
    chapter?: IntFieldUpdateOperationsInput | number
    verse?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type bible_verses_rvgUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    book?: IntFieldUpdateOperationsInput | number
    chapter?: IntFieldUpdateOperationsInput | number
    verse?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type bible_verses_rvgCreateManyInput = {
    id?: number
    book: number
    chapter: number
    verse: number
    text: string
  }

  export type bible_verses_rvgUpdateManyMutationInput = {
    book?: IntFieldUpdateOperationsInput | number
    chapter?: IntFieldUpdateOperationsInput | number
    verse?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type bible_verses_rvgUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    book?: IntFieldUpdateOperationsInput | number
    chapter?: IntFieldUpdateOperationsInput | number
    verse?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type bible_verses_segond_1910CreateInput = {
    book: number
    chapter: number
    verse: number
    text: string
  }

  export type bible_verses_segond_1910UncheckedCreateInput = {
    id?: number
    book: number
    chapter: number
    verse: number
    text: string
  }

  export type bible_verses_segond_1910UpdateInput = {
    book?: IntFieldUpdateOperationsInput | number
    chapter?: IntFieldUpdateOperationsInput | number
    verse?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type bible_verses_segond_1910UncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    book?: IntFieldUpdateOperationsInput | number
    chapter?: IntFieldUpdateOperationsInput | number
    verse?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type bible_verses_segond_1910CreateManyInput = {
    id?: number
    book: number
    chapter: number
    verse: number
    text: string
  }

  export type bible_verses_segond_1910UpdateManyMutationInput = {
    book?: IntFieldUpdateOperationsInput | number
    chapter?: IntFieldUpdateOperationsInput | number
    verse?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type bible_verses_segond_1910UncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    book?: IntFieldUpdateOperationsInput | number
    chapter?: IntFieldUpdateOperationsInput | number
    verse?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type bible_verses_hcvCountOrderByAggregateInput = {
    id?: SortOrder
    book?: SortOrder
    chapter?: SortOrder
    verse?: SortOrder
    text?: SortOrder
  }

  export type bible_verses_hcvAvgOrderByAggregateInput = {
    id?: SortOrder
    book?: SortOrder
    chapter?: SortOrder
    verse?: SortOrder
  }

  export type bible_verses_hcvMaxOrderByAggregateInput = {
    id?: SortOrder
    book?: SortOrder
    chapter?: SortOrder
    verse?: SortOrder
    text?: SortOrder
  }

  export type bible_verses_hcvMinOrderByAggregateInput = {
    id?: SortOrder
    book?: SortOrder
    chapter?: SortOrder
    verse?: SortOrder
    text?: SortOrder
  }

  export type bible_verses_hcvSumOrderByAggregateInput = {
    id?: SortOrder
    book?: SortOrder
    chapter?: SortOrder
    verse?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type bible_verses_kjvCountOrderByAggregateInput = {
    id?: SortOrder
    book?: SortOrder
    chapter?: SortOrder
    verse?: SortOrder
    text?: SortOrder
  }

  export type bible_verses_kjvAvgOrderByAggregateInput = {
    id?: SortOrder
    book?: SortOrder
    chapter?: SortOrder
    verse?: SortOrder
  }

  export type bible_verses_kjvMaxOrderByAggregateInput = {
    id?: SortOrder
    book?: SortOrder
    chapter?: SortOrder
    verse?: SortOrder
    text?: SortOrder
  }

  export type bible_verses_kjvMinOrderByAggregateInput = {
    id?: SortOrder
    book?: SortOrder
    chapter?: SortOrder
    verse?: SortOrder
    text?: SortOrder
  }

  export type bible_verses_kjvSumOrderByAggregateInput = {
    id?: SortOrder
    book?: SortOrder
    chapter?: SortOrder
    verse?: SortOrder
  }

  export type bible_verses_rvgCountOrderByAggregateInput = {
    id?: SortOrder
    book?: SortOrder
    chapter?: SortOrder
    verse?: SortOrder
    text?: SortOrder
  }

  export type bible_verses_rvgAvgOrderByAggregateInput = {
    id?: SortOrder
    book?: SortOrder
    chapter?: SortOrder
    verse?: SortOrder
  }

  export type bible_verses_rvgMaxOrderByAggregateInput = {
    id?: SortOrder
    book?: SortOrder
    chapter?: SortOrder
    verse?: SortOrder
    text?: SortOrder
  }

  export type bible_verses_rvgMinOrderByAggregateInput = {
    id?: SortOrder
    book?: SortOrder
    chapter?: SortOrder
    verse?: SortOrder
    text?: SortOrder
  }

  export type bible_verses_rvgSumOrderByAggregateInput = {
    id?: SortOrder
    book?: SortOrder
    chapter?: SortOrder
    verse?: SortOrder
  }

  export type bible_verses_segond_1910CountOrderByAggregateInput = {
    id?: SortOrder
    book?: SortOrder
    chapter?: SortOrder
    verse?: SortOrder
    text?: SortOrder
  }

  export type bible_verses_segond_1910AvgOrderByAggregateInput = {
    id?: SortOrder
    book?: SortOrder
    chapter?: SortOrder
    verse?: SortOrder
  }

  export type bible_verses_segond_1910MaxOrderByAggregateInput = {
    id?: SortOrder
    book?: SortOrder
    chapter?: SortOrder
    verse?: SortOrder
    text?: SortOrder
  }

  export type bible_verses_segond_1910MinOrderByAggregateInput = {
    id?: SortOrder
    book?: SortOrder
    chapter?: SortOrder
    verse?: SortOrder
    text?: SortOrder
  }

  export type bible_verses_segond_1910SumOrderByAggregateInput = {
    id?: SortOrder
    book?: SortOrder
    chapter?: SortOrder
    verse?: SortOrder
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
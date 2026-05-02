
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
 * Model Voice
 * 
 */
export type Voice = $Result.DefaultSelection<Prisma.$VoicePayload>
/**
 * Model Generation
 * 
 */
export type Generation = $Result.DefaultSelection<Prisma.$GenerationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const VoiceVariant: {
  SYSTEM: 'SYSTEM',
  CUSTOM: 'CUSTOM'
};

export type VoiceVariant = (typeof VoiceVariant)[keyof typeof VoiceVariant]


export const VoiceCategory: {
  AUDIOBOOK: 'AUDIOBOOK',
  CONVERSATIONAL: 'CONVERSATIONAL',
  CUSTOMER_SERVICE: 'CUSTOMER_SERVICE',
  GENERAL: 'GENERAL',
  NARRATIVE: 'NARRATIVE',
  CHARACTERS: 'CHARACTERS',
  MEDITATION: 'MEDITATION',
  MOTIVATIONAL: 'MOTIVATIONAL',
  PODCAST: 'PODCAST',
  ADVERTISING: 'ADVERTISING',
  VOICEOVER: 'VOICEOVER',
  CORPORATE: 'CORPORATE'
};

export type VoiceCategory = (typeof VoiceCategory)[keyof typeof VoiceCategory]

}

export type VoiceVariant = $Enums.VoiceVariant

export const VoiceVariant: typeof $Enums.VoiceVariant

export type VoiceCategory = $Enums.VoiceCategory

export const VoiceCategory: typeof $Enums.VoiceCategory

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Voices
 * const voices = await prisma.voice.findMany()
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
   * // Fetch zero or more Voices
   * const voices = await prisma.voice.findMany()
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
   * `prisma.voice`: Exposes CRUD operations for the **Voice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Voices
    * const voices = await prisma.voice.findMany()
    * ```
    */
  get voice(): Prisma.VoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.generation`: Exposes CRUD operations for the **Generation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Generations
    * const generations = await prisma.generation.findMany()
    * ```
    */
  get generation(): Prisma.GenerationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
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
    Voice: 'Voice',
    Generation: 'Generation'
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
      modelProps: "voice" | "generation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Voice: {
        payload: Prisma.$VoicePayload<ExtArgs>
        fields: Prisma.VoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoicePayload>
          }
          findFirst: {
            args: Prisma.VoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoicePayload>
          }
          findMany: {
            args: Prisma.VoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoicePayload>[]
          }
          create: {
            args: Prisma.VoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoicePayload>
          }
          createMany: {
            args: Prisma.VoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoicePayload>[]
          }
          delete: {
            args: Prisma.VoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoicePayload>
          }
          update: {
            args: Prisma.VoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoicePayload>
          }
          deleteMany: {
            args: Prisma.VoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoicePayload>[]
          }
          upsert: {
            args: Prisma.VoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoicePayload>
          }
          aggregate: {
            args: Prisma.VoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoice>
          }
          groupBy: {
            args: Prisma.VoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoiceCountArgs<ExtArgs>
            result: $Utils.Optional<VoiceCountAggregateOutputType> | number
          }
        }
      }
      Generation: {
        payload: Prisma.$GenerationPayload<ExtArgs>
        fields: Prisma.GenerationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenerationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenerationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationPayload>
          }
          findFirst: {
            args: Prisma.GenerationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenerationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationPayload>
          }
          findMany: {
            args: Prisma.GenerationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationPayload>[]
          }
          create: {
            args: Prisma.GenerationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationPayload>
          }
          createMany: {
            args: Prisma.GenerationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GenerationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationPayload>[]
          }
          delete: {
            args: Prisma.GenerationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationPayload>
          }
          update: {
            args: Prisma.GenerationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationPayload>
          }
          deleteMany: {
            args: Prisma.GenerationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenerationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GenerationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationPayload>[]
          }
          upsert: {
            args: Prisma.GenerationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationPayload>
          }
          aggregate: {
            args: Prisma.GenerationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeneration>
          }
          groupBy: {
            args: Prisma.GenerationGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenerationGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenerationCountArgs<ExtArgs>
            result: $Utils.Optional<GenerationCountAggregateOutputType> | number
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
    voice?: VoiceOmit
    generation?: GenerationOmit
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
   * Count Type VoiceCountOutputType
   */

  export type VoiceCountOutputType = {
    generations: number
  }

  export type VoiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generations?: boolean | VoiceCountOutputTypeCountGenerationsArgs
  }

  // Custom InputTypes
  /**
   * VoiceCountOutputType without action
   */
  export type VoiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceCountOutputType
     */
    select?: VoiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VoiceCountOutputType without action
   */
  export type VoiceCountOutputTypeCountGenerationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenerationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Voice
   */

  export type AggregateVoice = {
    _count: VoiceCountAggregateOutputType | null
    _min: VoiceMinAggregateOutputType | null
    _max: VoiceMaxAggregateOutputType | null
  }

  export type VoiceMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    name: string | null
    description: string | null
    category: $Enums.VoiceCategory | null
    language: string | null
    variant: $Enums.VoiceVariant | null
    r2ObjectKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VoiceMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    name: string | null
    description: string | null
    category: $Enums.VoiceCategory | null
    language: string | null
    variant: $Enums.VoiceVariant | null
    r2ObjectKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VoiceCountAggregateOutputType = {
    id: number
    orgId: number
    name: number
    description: number
    category: number
    language: number
    variant: number
    r2ObjectKey: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VoiceMinAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    description?: true
    category?: true
    language?: true
    variant?: true
    r2ObjectKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VoiceMaxAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    description?: true
    category?: true
    language?: true
    variant?: true
    r2ObjectKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VoiceCountAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    description?: true
    category?: true
    language?: true
    variant?: true
    r2ObjectKey?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Voice to aggregate.
     */
    where?: VoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Voices to fetch.
     */
    orderBy?: VoiceOrderByWithRelationInput | VoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Voices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Voices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Voices
    **/
    _count?: true | VoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoiceMaxAggregateInputType
  }

  export type GetVoiceAggregateType<T extends VoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateVoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoice[P]>
      : GetScalarType<T[P], AggregateVoice[P]>
  }




  export type VoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoiceWhereInput
    orderBy?: VoiceOrderByWithAggregationInput | VoiceOrderByWithAggregationInput[]
    by: VoiceScalarFieldEnum[] | VoiceScalarFieldEnum
    having?: VoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoiceCountAggregateInputType | true
    _min?: VoiceMinAggregateInputType
    _max?: VoiceMaxAggregateInputType
  }

  export type VoiceGroupByOutputType = {
    id: string
    orgId: string | null
    name: string
    description: string | null
    category: $Enums.VoiceCategory
    language: string
    variant: $Enums.VoiceVariant
    r2ObjectKey: string | null
    createdAt: Date
    updatedAt: Date
    _count: VoiceCountAggregateOutputType | null
    _min: VoiceMinAggregateOutputType | null
    _max: VoiceMaxAggregateOutputType | null
  }

  type GetVoiceGroupByPayload<T extends VoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoiceGroupByOutputType[P]>
            : GetScalarType<T[P], VoiceGroupByOutputType[P]>
        }
      >
    >


  export type VoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    language?: boolean
    variant?: boolean
    r2ObjectKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    generations?: boolean | Voice$generationsArgs<ExtArgs>
    _count?: boolean | VoiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voice"]>

  export type VoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    language?: boolean
    variant?: boolean
    r2ObjectKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["voice"]>

  export type VoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    language?: boolean
    variant?: boolean
    r2ObjectKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["voice"]>

  export type VoiceSelectScalar = {
    id?: boolean
    orgId?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    language?: boolean
    variant?: boolean
    r2ObjectKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "name" | "description" | "category" | "language" | "variant" | "r2ObjectKey" | "createdAt" | "updatedAt", ExtArgs["result"]["voice"]>
  export type VoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generations?: boolean | Voice$generationsArgs<ExtArgs>
    _count?: boolean | VoiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Voice"
    objects: {
      generations: Prisma.$GenerationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string | null
      name: string
      description: string | null
      category: $Enums.VoiceCategory
      language: string
      variant: $Enums.VoiceVariant
      r2ObjectKey: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["voice"]>
    composites: {}
  }

  type VoiceGetPayload<S extends boolean | null | undefined | VoiceDefaultArgs> = $Result.GetResult<Prisma.$VoicePayload, S>

  type VoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoiceCountAggregateInputType | true
    }

  export interface VoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Voice'], meta: { name: 'Voice' } }
    /**
     * Find zero or one Voice that matches the filter.
     * @param {VoiceFindUniqueArgs} args - Arguments to find a Voice
     * @example
     * // Get one Voice
     * const voice = await prisma.voice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoiceFindUniqueArgs>(args: SelectSubset<T, VoiceFindUniqueArgs<ExtArgs>>): Prisma__VoiceClient<$Result.GetResult<Prisma.$VoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Voice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoiceFindUniqueOrThrowArgs} args - Arguments to find a Voice
     * @example
     * // Get one Voice
     * const voice = await prisma.voice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, VoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoiceClient<$Result.GetResult<Prisma.$VoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceFindFirstArgs} args - Arguments to find a Voice
     * @example
     * // Get one Voice
     * const voice = await prisma.voice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoiceFindFirstArgs>(args?: SelectSubset<T, VoiceFindFirstArgs<ExtArgs>>): Prisma__VoiceClient<$Result.GetResult<Prisma.$VoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceFindFirstOrThrowArgs} args - Arguments to find a Voice
     * @example
     * // Get one Voice
     * const voice = await prisma.voice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, VoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoiceClient<$Result.GetResult<Prisma.$VoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Voices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Voices
     * const voices = await prisma.voice.findMany()
     * 
     * // Get first 10 Voices
     * const voices = await prisma.voice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voiceWithIdOnly = await prisma.voice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoiceFindManyArgs>(args?: SelectSubset<T, VoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Voice.
     * @param {VoiceCreateArgs} args - Arguments to create a Voice.
     * @example
     * // Create one Voice
     * const Voice = await prisma.voice.create({
     *   data: {
     *     // ... data to create a Voice
     *   }
     * })
     * 
     */
    create<T extends VoiceCreateArgs>(args: SelectSubset<T, VoiceCreateArgs<ExtArgs>>): Prisma__VoiceClient<$Result.GetResult<Prisma.$VoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Voices.
     * @param {VoiceCreateManyArgs} args - Arguments to create many Voices.
     * @example
     * // Create many Voices
     * const voice = await prisma.voice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoiceCreateManyArgs>(args?: SelectSubset<T, VoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Voices and returns the data saved in the database.
     * @param {VoiceCreateManyAndReturnArgs} args - Arguments to create many Voices.
     * @example
     * // Create many Voices
     * const voice = await prisma.voice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Voices and only return the `id`
     * const voiceWithIdOnly = await prisma.voice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, VoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Voice.
     * @param {VoiceDeleteArgs} args - Arguments to delete one Voice.
     * @example
     * // Delete one Voice
     * const Voice = await prisma.voice.delete({
     *   where: {
     *     // ... filter to delete one Voice
     *   }
     * })
     * 
     */
    delete<T extends VoiceDeleteArgs>(args: SelectSubset<T, VoiceDeleteArgs<ExtArgs>>): Prisma__VoiceClient<$Result.GetResult<Prisma.$VoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Voice.
     * @param {VoiceUpdateArgs} args - Arguments to update one Voice.
     * @example
     * // Update one Voice
     * const voice = await prisma.voice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoiceUpdateArgs>(args: SelectSubset<T, VoiceUpdateArgs<ExtArgs>>): Prisma__VoiceClient<$Result.GetResult<Prisma.$VoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Voices.
     * @param {VoiceDeleteManyArgs} args - Arguments to filter Voices to delete.
     * @example
     * // Delete a few Voices
     * const { count } = await prisma.voice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoiceDeleteManyArgs>(args?: SelectSubset<T, VoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Voices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Voices
     * const voice = await prisma.voice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoiceUpdateManyArgs>(args: SelectSubset<T, VoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Voices and returns the data updated in the database.
     * @param {VoiceUpdateManyAndReturnArgs} args - Arguments to update many Voices.
     * @example
     * // Update many Voices
     * const voice = await prisma.voice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Voices and only return the `id`
     * const voiceWithIdOnly = await prisma.voice.updateManyAndReturn({
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
    updateManyAndReturn<T extends VoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, VoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Voice.
     * @param {VoiceUpsertArgs} args - Arguments to update or create a Voice.
     * @example
     * // Update or create a Voice
     * const voice = await prisma.voice.upsert({
     *   create: {
     *     // ... data to create a Voice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Voice we want to update
     *   }
     * })
     */
    upsert<T extends VoiceUpsertArgs>(args: SelectSubset<T, VoiceUpsertArgs<ExtArgs>>): Prisma__VoiceClient<$Result.GetResult<Prisma.$VoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Voices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceCountArgs} args - Arguments to filter Voices to count.
     * @example
     * // Count the number of Voices
     * const count = await prisma.voice.count({
     *   where: {
     *     // ... the filter for the Voices we want to count
     *   }
     * })
    **/
    count<T extends VoiceCountArgs>(
      args?: Subset<T, VoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Voice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VoiceAggregateArgs>(args: Subset<T, VoiceAggregateArgs>): Prisma.PrismaPromise<GetVoiceAggregateType<T>>

    /**
     * Group by Voice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceGroupByArgs} args - Group by arguments.
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
      T extends VoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoiceGroupByArgs['orderBy'] }
        : { orderBy?: VoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Voice model
   */
  readonly fields: VoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Voice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    generations<T extends Voice$generationsArgs<ExtArgs> = {}>(args?: Subset<T, Voice$generationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenerationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Voice model
   */
  interface VoiceFieldRefs {
    readonly id: FieldRef<"Voice", 'String'>
    readonly orgId: FieldRef<"Voice", 'String'>
    readonly name: FieldRef<"Voice", 'String'>
    readonly description: FieldRef<"Voice", 'String'>
    readonly category: FieldRef<"Voice", 'VoiceCategory'>
    readonly language: FieldRef<"Voice", 'String'>
    readonly variant: FieldRef<"Voice", 'VoiceVariant'>
    readonly r2ObjectKey: FieldRef<"Voice", 'String'>
    readonly createdAt: FieldRef<"Voice", 'DateTime'>
    readonly updatedAt: FieldRef<"Voice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Voice findUnique
   */
  export type VoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voice
     */
    select?: VoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voice
     */
    omit?: VoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceInclude<ExtArgs> | null
    /**
     * Filter, which Voice to fetch.
     */
    where: VoiceWhereUniqueInput
  }

  /**
   * Voice findUniqueOrThrow
   */
  export type VoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voice
     */
    select?: VoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voice
     */
    omit?: VoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceInclude<ExtArgs> | null
    /**
     * Filter, which Voice to fetch.
     */
    where: VoiceWhereUniqueInput
  }

  /**
   * Voice findFirst
   */
  export type VoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voice
     */
    select?: VoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voice
     */
    omit?: VoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceInclude<ExtArgs> | null
    /**
     * Filter, which Voice to fetch.
     */
    where?: VoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Voices to fetch.
     */
    orderBy?: VoiceOrderByWithRelationInput | VoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Voices.
     */
    cursor?: VoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Voices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Voices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Voices.
     */
    distinct?: VoiceScalarFieldEnum | VoiceScalarFieldEnum[]
  }

  /**
   * Voice findFirstOrThrow
   */
  export type VoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voice
     */
    select?: VoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voice
     */
    omit?: VoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceInclude<ExtArgs> | null
    /**
     * Filter, which Voice to fetch.
     */
    where?: VoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Voices to fetch.
     */
    orderBy?: VoiceOrderByWithRelationInput | VoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Voices.
     */
    cursor?: VoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Voices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Voices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Voices.
     */
    distinct?: VoiceScalarFieldEnum | VoiceScalarFieldEnum[]
  }

  /**
   * Voice findMany
   */
  export type VoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voice
     */
    select?: VoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voice
     */
    omit?: VoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceInclude<ExtArgs> | null
    /**
     * Filter, which Voices to fetch.
     */
    where?: VoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Voices to fetch.
     */
    orderBy?: VoiceOrderByWithRelationInput | VoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Voices.
     */
    cursor?: VoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Voices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Voices.
     */
    skip?: number
    distinct?: VoiceScalarFieldEnum | VoiceScalarFieldEnum[]
  }

  /**
   * Voice create
   */
  export type VoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voice
     */
    select?: VoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voice
     */
    omit?: VoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Voice.
     */
    data: XOR<VoiceCreateInput, VoiceUncheckedCreateInput>
  }

  /**
   * Voice createMany
   */
  export type VoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Voices.
     */
    data: VoiceCreateManyInput | VoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Voice createManyAndReturn
   */
  export type VoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voice
     */
    select?: VoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Voice
     */
    omit?: VoiceOmit<ExtArgs> | null
    /**
     * The data used to create many Voices.
     */
    data: VoiceCreateManyInput | VoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Voice update
   */
  export type VoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voice
     */
    select?: VoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voice
     */
    omit?: VoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Voice.
     */
    data: XOR<VoiceUpdateInput, VoiceUncheckedUpdateInput>
    /**
     * Choose, which Voice to update.
     */
    where: VoiceWhereUniqueInput
  }

  /**
   * Voice updateMany
   */
  export type VoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Voices.
     */
    data: XOR<VoiceUpdateManyMutationInput, VoiceUncheckedUpdateManyInput>
    /**
     * Filter which Voices to update
     */
    where?: VoiceWhereInput
    /**
     * Limit how many Voices to update.
     */
    limit?: number
  }

  /**
   * Voice updateManyAndReturn
   */
  export type VoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voice
     */
    select?: VoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Voice
     */
    omit?: VoiceOmit<ExtArgs> | null
    /**
     * The data used to update Voices.
     */
    data: XOR<VoiceUpdateManyMutationInput, VoiceUncheckedUpdateManyInput>
    /**
     * Filter which Voices to update
     */
    where?: VoiceWhereInput
    /**
     * Limit how many Voices to update.
     */
    limit?: number
  }

  /**
   * Voice upsert
   */
  export type VoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voice
     */
    select?: VoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voice
     */
    omit?: VoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Voice to update in case it exists.
     */
    where: VoiceWhereUniqueInput
    /**
     * In case the Voice found by the `where` argument doesn't exist, create a new Voice with this data.
     */
    create: XOR<VoiceCreateInput, VoiceUncheckedCreateInput>
    /**
     * In case the Voice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoiceUpdateInput, VoiceUncheckedUpdateInput>
  }

  /**
   * Voice delete
   */
  export type VoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voice
     */
    select?: VoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voice
     */
    omit?: VoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceInclude<ExtArgs> | null
    /**
     * Filter which Voice to delete.
     */
    where: VoiceWhereUniqueInput
  }

  /**
   * Voice deleteMany
   */
  export type VoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Voices to delete
     */
    where?: VoiceWhereInput
    /**
     * Limit how many Voices to delete.
     */
    limit?: number
  }

  /**
   * Voice.generations
   */
  export type Voice$generationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation
     */
    select?: GenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation
     */
    omit?: GenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationInclude<ExtArgs> | null
    where?: GenerationWhereInput
    orderBy?: GenerationOrderByWithRelationInput | GenerationOrderByWithRelationInput[]
    cursor?: GenerationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GenerationScalarFieldEnum | GenerationScalarFieldEnum[]
  }

  /**
   * Voice without action
   */
  export type VoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voice
     */
    select?: VoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voice
     */
    omit?: VoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceInclude<ExtArgs> | null
  }


  /**
   * Model Generation
   */

  export type AggregateGeneration = {
    _count: GenerationCountAggregateOutputType | null
    _avg: GenerationAvgAggregateOutputType | null
    _sum: GenerationSumAggregateOutputType | null
    _min: GenerationMinAggregateOutputType | null
    _max: GenerationMaxAggregateOutputType | null
  }

  export type GenerationAvgAggregateOutputType = {
    temperature: number | null
    topP: number | null
    topK: number | null
    repetitionPenalty: number | null
  }

  export type GenerationSumAggregateOutputType = {
    temperature: number | null
    topP: number | null
    topK: number | null
    repetitionPenalty: number | null
  }

  export type GenerationMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    voiceId: string | null
    text: string | null
    voiceName: string | null
    r2ObjectKey: string | null
    temperature: number | null
    topP: number | null
    topK: number | null
    repetitionPenalty: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GenerationMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    voiceId: string | null
    text: string | null
    voiceName: string | null
    r2ObjectKey: string | null
    temperature: number | null
    topP: number | null
    topK: number | null
    repetitionPenalty: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GenerationCountAggregateOutputType = {
    id: number
    orgId: number
    voiceId: number
    text: number
    voiceName: number
    r2ObjectKey: number
    temperature: number
    topP: number
    topK: number
    repetitionPenalty: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GenerationAvgAggregateInputType = {
    temperature?: true
    topP?: true
    topK?: true
    repetitionPenalty?: true
  }

  export type GenerationSumAggregateInputType = {
    temperature?: true
    topP?: true
    topK?: true
    repetitionPenalty?: true
  }

  export type GenerationMinAggregateInputType = {
    id?: true
    orgId?: true
    voiceId?: true
    text?: true
    voiceName?: true
    r2ObjectKey?: true
    temperature?: true
    topP?: true
    topK?: true
    repetitionPenalty?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GenerationMaxAggregateInputType = {
    id?: true
    orgId?: true
    voiceId?: true
    text?: true
    voiceName?: true
    r2ObjectKey?: true
    temperature?: true
    topP?: true
    topK?: true
    repetitionPenalty?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GenerationCountAggregateInputType = {
    id?: true
    orgId?: true
    voiceId?: true
    text?: true
    voiceName?: true
    r2ObjectKey?: true
    temperature?: true
    topP?: true
    topK?: true
    repetitionPenalty?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GenerationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Generation to aggregate.
     */
    where?: GenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generations to fetch.
     */
    orderBy?: GenerationOrderByWithRelationInput | GenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Generations
    **/
    _count?: true | GenerationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenerationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenerationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenerationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenerationMaxAggregateInputType
  }

  export type GetGenerationAggregateType<T extends GenerationAggregateArgs> = {
        [P in keyof T & keyof AggregateGeneration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeneration[P]>
      : GetScalarType<T[P], AggregateGeneration[P]>
  }




  export type GenerationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenerationWhereInput
    orderBy?: GenerationOrderByWithAggregationInput | GenerationOrderByWithAggregationInput[]
    by: GenerationScalarFieldEnum[] | GenerationScalarFieldEnum
    having?: GenerationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenerationCountAggregateInputType | true
    _avg?: GenerationAvgAggregateInputType
    _sum?: GenerationSumAggregateInputType
    _min?: GenerationMinAggregateInputType
    _max?: GenerationMaxAggregateInputType
  }

  export type GenerationGroupByOutputType = {
    id: string
    orgId: string
    voiceId: string | null
    text: string
    voiceName: string
    r2ObjectKey: string | null
    temperature: number
    topP: number
    topK: number
    repetitionPenalty: number
    createdAt: Date
    updatedAt: Date
    _count: GenerationCountAggregateOutputType | null
    _avg: GenerationAvgAggregateOutputType | null
    _sum: GenerationSumAggregateOutputType | null
    _min: GenerationMinAggregateOutputType | null
    _max: GenerationMaxAggregateOutputType | null
  }

  type GetGenerationGroupByPayload<T extends GenerationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenerationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenerationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenerationGroupByOutputType[P]>
            : GetScalarType<T[P], GenerationGroupByOutputType[P]>
        }
      >
    >


  export type GenerationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    voiceId?: boolean
    text?: boolean
    voiceName?: boolean
    r2ObjectKey?: boolean
    temperature?: boolean
    topP?: boolean
    topK?: boolean
    repetitionPenalty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    voice?: boolean | Generation$voiceArgs<ExtArgs>
  }, ExtArgs["result"]["generation"]>

  export type GenerationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    voiceId?: boolean
    text?: boolean
    voiceName?: boolean
    r2ObjectKey?: boolean
    temperature?: boolean
    topP?: boolean
    topK?: boolean
    repetitionPenalty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    voice?: boolean | Generation$voiceArgs<ExtArgs>
  }, ExtArgs["result"]["generation"]>

  export type GenerationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    voiceId?: boolean
    text?: boolean
    voiceName?: boolean
    r2ObjectKey?: boolean
    temperature?: boolean
    topP?: boolean
    topK?: boolean
    repetitionPenalty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    voice?: boolean | Generation$voiceArgs<ExtArgs>
  }, ExtArgs["result"]["generation"]>

  export type GenerationSelectScalar = {
    id?: boolean
    orgId?: boolean
    voiceId?: boolean
    text?: boolean
    voiceName?: boolean
    r2ObjectKey?: boolean
    temperature?: boolean
    topP?: boolean
    topK?: boolean
    repetitionPenalty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GenerationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "voiceId" | "text" | "voiceName" | "r2ObjectKey" | "temperature" | "topP" | "topK" | "repetitionPenalty" | "createdAt" | "updatedAt", ExtArgs["result"]["generation"]>
  export type GenerationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voice?: boolean | Generation$voiceArgs<ExtArgs>
  }
  export type GenerationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voice?: boolean | Generation$voiceArgs<ExtArgs>
  }
  export type GenerationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voice?: boolean | Generation$voiceArgs<ExtArgs>
  }

  export type $GenerationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Generation"
    objects: {
      voice: Prisma.$VoicePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      voiceId: string | null
      text: string
      voiceName: string
      r2ObjectKey: string | null
      temperature: number
      topP: number
      topK: number
      repetitionPenalty: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["generation"]>
    composites: {}
  }

  type GenerationGetPayload<S extends boolean | null | undefined | GenerationDefaultArgs> = $Result.GetResult<Prisma.$GenerationPayload, S>

  type GenerationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GenerationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenerationCountAggregateInputType | true
    }

  export interface GenerationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Generation'], meta: { name: 'Generation' } }
    /**
     * Find zero or one Generation that matches the filter.
     * @param {GenerationFindUniqueArgs} args - Arguments to find a Generation
     * @example
     * // Get one Generation
     * const generation = await prisma.generation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenerationFindUniqueArgs>(args: SelectSubset<T, GenerationFindUniqueArgs<ExtArgs>>): Prisma__GenerationClient<$Result.GetResult<Prisma.$GenerationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Generation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GenerationFindUniqueOrThrowArgs} args - Arguments to find a Generation
     * @example
     * // Get one Generation
     * const generation = await prisma.generation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenerationFindUniqueOrThrowArgs>(args: SelectSubset<T, GenerationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenerationClient<$Result.GetResult<Prisma.$GenerationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Generation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationFindFirstArgs} args - Arguments to find a Generation
     * @example
     * // Get one Generation
     * const generation = await prisma.generation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenerationFindFirstArgs>(args?: SelectSubset<T, GenerationFindFirstArgs<ExtArgs>>): Prisma__GenerationClient<$Result.GetResult<Prisma.$GenerationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Generation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationFindFirstOrThrowArgs} args - Arguments to find a Generation
     * @example
     * // Get one Generation
     * const generation = await prisma.generation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenerationFindFirstOrThrowArgs>(args?: SelectSubset<T, GenerationFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenerationClient<$Result.GetResult<Prisma.$GenerationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Generations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Generations
     * const generations = await prisma.generation.findMany()
     * 
     * // Get first 10 Generations
     * const generations = await prisma.generation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generationWithIdOnly = await prisma.generation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GenerationFindManyArgs>(args?: SelectSubset<T, GenerationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenerationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Generation.
     * @param {GenerationCreateArgs} args - Arguments to create a Generation.
     * @example
     * // Create one Generation
     * const Generation = await prisma.generation.create({
     *   data: {
     *     // ... data to create a Generation
     *   }
     * })
     * 
     */
    create<T extends GenerationCreateArgs>(args: SelectSubset<T, GenerationCreateArgs<ExtArgs>>): Prisma__GenerationClient<$Result.GetResult<Prisma.$GenerationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Generations.
     * @param {GenerationCreateManyArgs} args - Arguments to create many Generations.
     * @example
     * // Create many Generations
     * const generation = await prisma.generation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenerationCreateManyArgs>(args?: SelectSubset<T, GenerationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Generations and returns the data saved in the database.
     * @param {GenerationCreateManyAndReturnArgs} args - Arguments to create many Generations.
     * @example
     * // Create many Generations
     * const generation = await prisma.generation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Generations and only return the `id`
     * const generationWithIdOnly = await prisma.generation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GenerationCreateManyAndReturnArgs>(args?: SelectSubset<T, GenerationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenerationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Generation.
     * @param {GenerationDeleteArgs} args - Arguments to delete one Generation.
     * @example
     * // Delete one Generation
     * const Generation = await prisma.generation.delete({
     *   where: {
     *     // ... filter to delete one Generation
     *   }
     * })
     * 
     */
    delete<T extends GenerationDeleteArgs>(args: SelectSubset<T, GenerationDeleteArgs<ExtArgs>>): Prisma__GenerationClient<$Result.GetResult<Prisma.$GenerationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Generation.
     * @param {GenerationUpdateArgs} args - Arguments to update one Generation.
     * @example
     * // Update one Generation
     * const generation = await prisma.generation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenerationUpdateArgs>(args: SelectSubset<T, GenerationUpdateArgs<ExtArgs>>): Prisma__GenerationClient<$Result.GetResult<Prisma.$GenerationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Generations.
     * @param {GenerationDeleteManyArgs} args - Arguments to filter Generations to delete.
     * @example
     * // Delete a few Generations
     * const { count } = await prisma.generation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenerationDeleteManyArgs>(args?: SelectSubset<T, GenerationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Generations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Generations
     * const generation = await prisma.generation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenerationUpdateManyArgs>(args: SelectSubset<T, GenerationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Generations and returns the data updated in the database.
     * @param {GenerationUpdateManyAndReturnArgs} args - Arguments to update many Generations.
     * @example
     * // Update many Generations
     * const generation = await prisma.generation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Generations and only return the `id`
     * const generationWithIdOnly = await prisma.generation.updateManyAndReturn({
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
    updateManyAndReturn<T extends GenerationUpdateManyAndReturnArgs>(args: SelectSubset<T, GenerationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenerationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Generation.
     * @param {GenerationUpsertArgs} args - Arguments to update or create a Generation.
     * @example
     * // Update or create a Generation
     * const generation = await prisma.generation.upsert({
     *   create: {
     *     // ... data to create a Generation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Generation we want to update
     *   }
     * })
     */
    upsert<T extends GenerationUpsertArgs>(args: SelectSubset<T, GenerationUpsertArgs<ExtArgs>>): Prisma__GenerationClient<$Result.GetResult<Prisma.$GenerationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Generations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationCountArgs} args - Arguments to filter Generations to count.
     * @example
     * // Count the number of Generations
     * const count = await prisma.generation.count({
     *   where: {
     *     // ... the filter for the Generations we want to count
     *   }
     * })
    **/
    count<T extends GenerationCountArgs>(
      args?: Subset<T, GenerationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenerationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Generation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GenerationAggregateArgs>(args: Subset<T, GenerationAggregateArgs>): Prisma.PrismaPromise<GetGenerationAggregateType<T>>

    /**
     * Group by Generation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationGroupByArgs} args - Group by arguments.
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
      T extends GenerationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenerationGroupByArgs['orderBy'] }
        : { orderBy?: GenerationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GenerationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenerationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Generation model
   */
  readonly fields: GenerationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Generation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenerationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    voice<T extends Generation$voiceArgs<ExtArgs> = {}>(args?: Subset<T, Generation$voiceArgs<ExtArgs>>): Prisma__VoiceClient<$Result.GetResult<Prisma.$VoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Generation model
   */
  interface GenerationFieldRefs {
    readonly id: FieldRef<"Generation", 'String'>
    readonly orgId: FieldRef<"Generation", 'String'>
    readonly voiceId: FieldRef<"Generation", 'String'>
    readonly text: FieldRef<"Generation", 'String'>
    readonly voiceName: FieldRef<"Generation", 'String'>
    readonly r2ObjectKey: FieldRef<"Generation", 'String'>
    readonly temperature: FieldRef<"Generation", 'Float'>
    readonly topP: FieldRef<"Generation", 'Float'>
    readonly topK: FieldRef<"Generation", 'Int'>
    readonly repetitionPenalty: FieldRef<"Generation", 'Float'>
    readonly createdAt: FieldRef<"Generation", 'DateTime'>
    readonly updatedAt: FieldRef<"Generation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Generation findUnique
   */
  export type GenerationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation
     */
    select?: GenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation
     */
    omit?: GenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationInclude<ExtArgs> | null
    /**
     * Filter, which Generation to fetch.
     */
    where: GenerationWhereUniqueInput
  }

  /**
   * Generation findUniqueOrThrow
   */
  export type GenerationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation
     */
    select?: GenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation
     */
    omit?: GenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationInclude<ExtArgs> | null
    /**
     * Filter, which Generation to fetch.
     */
    where: GenerationWhereUniqueInput
  }

  /**
   * Generation findFirst
   */
  export type GenerationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation
     */
    select?: GenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation
     */
    omit?: GenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationInclude<ExtArgs> | null
    /**
     * Filter, which Generation to fetch.
     */
    where?: GenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generations to fetch.
     */
    orderBy?: GenerationOrderByWithRelationInput | GenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Generations.
     */
    cursor?: GenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Generations.
     */
    distinct?: GenerationScalarFieldEnum | GenerationScalarFieldEnum[]
  }

  /**
   * Generation findFirstOrThrow
   */
  export type GenerationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation
     */
    select?: GenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation
     */
    omit?: GenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationInclude<ExtArgs> | null
    /**
     * Filter, which Generation to fetch.
     */
    where?: GenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generations to fetch.
     */
    orderBy?: GenerationOrderByWithRelationInput | GenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Generations.
     */
    cursor?: GenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Generations.
     */
    distinct?: GenerationScalarFieldEnum | GenerationScalarFieldEnum[]
  }

  /**
   * Generation findMany
   */
  export type GenerationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation
     */
    select?: GenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation
     */
    omit?: GenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationInclude<ExtArgs> | null
    /**
     * Filter, which Generations to fetch.
     */
    where?: GenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generations to fetch.
     */
    orderBy?: GenerationOrderByWithRelationInput | GenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Generations.
     */
    cursor?: GenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generations.
     */
    skip?: number
    distinct?: GenerationScalarFieldEnum | GenerationScalarFieldEnum[]
  }

  /**
   * Generation create
   */
  export type GenerationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation
     */
    select?: GenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation
     */
    omit?: GenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationInclude<ExtArgs> | null
    /**
     * The data needed to create a Generation.
     */
    data: XOR<GenerationCreateInput, GenerationUncheckedCreateInput>
  }

  /**
   * Generation createMany
   */
  export type GenerationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Generations.
     */
    data: GenerationCreateManyInput | GenerationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Generation createManyAndReturn
   */
  export type GenerationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation
     */
    select?: GenerationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Generation
     */
    omit?: GenerationOmit<ExtArgs> | null
    /**
     * The data used to create many Generations.
     */
    data: GenerationCreateManyInput | GenerationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Generation update
   */
  export type GenerationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation
     */
    select?: GenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation
     */
    omit?: GenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationInclude<ExtArgs> | null
    /**
     * The data needed to update a Generation.
     */
    data: XOR<GenerationUpdateInput, GenerationUncheckedUpdateInput>
    /**
     * Choose, which Generation to update.
     */
    where: GenerationWhereUniqueInput
  }

  /**
   * Generation updateMany
   */
  export type GenerationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Generations.
     */
    data: XOR<GenerationUpdateManyMutationInput, GenerationUncheckedUpdateManyInput>
    /**
     * Filter which Generations to update
     */
    where?: GenerationWhereInput
    /**
     * Limit how many Generations to update.
     */
    limit?: number
  }

  /**
   * Generation updateManyAndReturn
   */
  export type GenerationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation
     */
    select?: GenerationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Generation
     */
    omit?: GenerationOmit<ExtArgs> | null
    /**
     * The data used to update Generations.
     */
    data: XOR<GenerationUpdateManyMutationInput, GenerationUncheckedUpdateManyInput>
    /**
     * Filter which Generations to update
     */
    where?: GenerationWhereInput
    /**
     * Limit how many Generations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Generation upsert
   */
  export type GenerationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation
     */
    select?: GenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation
     */
    omit?: GenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationInclude<ExtArgs> | null
    /**
     * The filter to search for the Generation to update in case it exists.
     */
    where: GenerationWhereUniqueInput
    /**
     * In case the Generation found by the `where` argument doesn't exist, create a new Generation with this data.
     */
    create: XOR<GenerationCreateInput, GenerationUncheckedCreateInput>
    /**
     * In case the Generation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenerationUpdateInput, GenerationUncheckedUpdateInput>
  }

  /**
   * Generation delete
   */
  export type GenerationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation
     */
    select?: GenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation
     */
    omit?: GenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationInclude<ExtArgs> | null
    /**
     * Filter which Generation to delete.
     */
    where: GenerationWhereUniqueInput
  }

  /**
   * Generation deleteMany
   */
  export type GenerationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Generations to delete
     */
    where?: GenerationWhereInput
    /**
     * Limit how many Generations to delete.
     */
    limit?: number
  }

  /**
   * Generation.voice
   */
  export type Generation$voiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voice
     */
    select?: VoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voice
     */
    omit?: VoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceInclude<ExtArgs> | null
    where?: VoiceWhereInput
  }

  /**
   * Generation without action
   */
  export type GenerationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation
     */
    select?: GenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation
     */
    omit?: GenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationInclude<ExtArgs> | null
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


  export const VoiceScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    name: 'name',
    description: 'description',
    category: 'category',
    language: 'language',
    variant: 'variant',
    r2ObjectKey: 'r2ObjectKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VoiceScalarFieldEnum = (typeof VoiceScalarFieldEnum)[keyof typeof VoiceScalarFieldEnum]


  export const GenerationScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    voiceId: 'voiceId',
    text: 'text',
    voiceName: 'voiceName',
    r2ObjectKey: 'r2ObjectKey',
    temperature: 'temperature',
    topP: 'topP',
    topK: 'topK',
    repetitionPenalty: 'repetitionPenalty',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GenerationScalarFieldEnum = (typeof GenerationScalarFieldEnum)[keyof typeof GenerationScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'VoiceCategory'
   */
  export type EnumVoiceCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VoiceCategory'>
    


  /**
   * Reference to a field of type 'VoiceCategory[]'
   */
  export type ListEnumVoiceCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VoiceCategory[]'>
    


  /**
   * Reference to a field of type 'VoiceVariant'
   */
  export type EnumVoiceVariantFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VoiceVariant'>
    


  /**
   * Reference to a field of type 'VoiceVariant[]'
   */
  export type ListEnumVoiceVariantFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VoiceVariant[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type VoiceWhereInput = {
    AND?: VoiceWhereInput | VoiceWhereInput[]
    OR?: VoiceWhereInput[]
    NOT?: VoiceWhereInput | VoiceWhereInput[]
    id?: StringFilter<"Voice"> | string
    orgId?: StringNullableFilter<"Voice"> | string | null
    name?: StringFilter<"Voice"> | string
    description?: StringNullableFilter<"Voice"> | string | null
    category?: EnumVoiceCategoryFilter<"Voice"> | $Enums.VoiceCategory
    language?: StringFilter<"Voice"> | string
    variant?: EnumVoiceVariantFilter<"Voice"> | $Enums.VoiceVariant
    r2ObjectKey?: StringNullableFilter<"Voice"> | string | null
    createdAt?: DateTimeFilter<"Voice"> | Date | string
    updatedAt?: DateTimeFilter<"Voice"> | Date | string
    generations?: GenerationListRelationFilter
  }

  export type VoiceOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    language?: SortOrder
    variant?: SortOrder
    r2ObjectKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    generations?: GenerationOrderByRelationAggregateInput
  }

  export type VoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VoiceWhereInput | VoiceWhereInput[]
    OR?: VoiceWhereInput[]
    NOT?: VoiceWhereInput | VoiceWhereInput[]
    orgId?: StringNullableFilter<"Voice"> | string | null
    name?: StringFilter<"Voice"> | string
    description?: StringNullableFilter<"Voice"> | string | null
    category?: EnumVoiceCategoryFilter<"Voice"> | $Enums.VoiceCategory
    language?: StringFilter<"Voice"> | string
    variant?: EnumVoiceVariantFilter<"Voice"> | $Enums.VoiceVariant
    r2ObjectKey?: StringNullableFilter<"Voice"> | string | null
    createdAt?: DateTimeFilter<"Voice"> | Date | string
    updatedAt?: DateTimeFilter<"Voice"> | Date | string
    generations?: GenerationListRelationFilter
  }, "id">

  export type VoiceOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    language?: SortOrder
    variant?: SortOrder
    r2ObjectKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VoiceCountOrderByAggregateInput
    _max?: VoiceMaxOrderByAggregateInput
    _min?: VoiceMinOrderByAggregateInput
  }

  export type VoiceScalarWhereWithAggregatesInput = {
    AND?: VoiceScalarWhereWithAggregatesInput | VoiceScalarWhereWithAggregatesInput[]
    OR?: VoiceScalarWhereWithAggregatesInput[]
    NOT?: VoiceScalarWhereWithAggregatesInput | VoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Voice"> | string
    orgId?: StringNullableWithAggregatesFilter<"Voice"> | string | null
    name?: StringWithAggregatesFilter<"Voice"> | string
    description?: StringNullableWithAggregatesFilter<"Voice"> | string | null
    category?: EnumVoiceCategoryWithAggregatesFilter<"Voice"> | $Enums.VoiceCategory
    language?: StringWithAggregatesFilter<"Voice"> | string
    variant?: EnumVoiceVariantWithAggregatesFilter<"Voice"> | $Enums.VoiceVariant
    r2ObjectKey?: StringNullableWithAggregatesFilter<"Voice"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Voice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Voice"> | Date | string
  }

  export type GenerationWhereInput = {
    AND?: GenerationWhereInput | GenerationWhereInput[]
    OR?: GenerationWhereInput[]
    NOT?: GenerationWhereInput | GenerationWhereInput[]
    id?: StringFilter<"Generation"> | string
    orgId?: StringFilter<"Generation"> | string
    voiceId?: StringNullableFilter<"Generation"> | string | null
    text?: StringFilter<"Generation"> | string
    voiceName?: StringFilter<"Generation"> | string
    r2ObjectKey?: StringNullableFilter<"Generation"> | string | null
    temperature?: FloatFilter<"Generation"> | number
    topP?: FloatFilter<"Generation"> | number
    topK?: IntFilter<"Generation"> | number
    repetitionPenalty?: FloatFilter<"Generation"> | number
    createdAt?: DateTimeFilter<"Generation"> | Date | string
    updatedAt?: DateTimeFilter<"Generation"> | Date | string
    voice?: XOR<VoiceNullableScalarRelationFilter, VoiceWhereInput> | null
  }

  export type GenerationOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    voiceId?: SortOrderInput | SortOrder
    text?: SortOrder
    voiceName?: SortOrder
    r2ObjectKey?: SortOrderInput | SortOrder
    temperature?: SortOrder
    topP?: SortOrder
    topK?: SortOrder
    repetitionPenalty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    voice?: VoiceOrderByWithRelationInput
  }

  export type GenerationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GenerationWhereInput | GenerationWhereInput[]
    OR?: GenerationWhereInput[]
    NOT?: GenerationWhereInput | GenerationWhereInput[]
    orgId?: StringFilter<"Generation"> | string
    voiceId?: StringNullableFilter<"Generation"> | string | null
    text?: StringFilter<"Generation"> | string
    voiceName?: StringFilter<"Generation"> | string
    r2ObjectKey?: StringNullableFilter<"Generation"> | string | null
    temperature?: FloatFilter<"Generation"> | number
    topP?: FloatFilter<"Generation"> | number
    topK?: IntFilter<"Generation"> | number
    repetitionPenalty?: FloatFilter<"Generation"> | number
    createdAt?: DateTimeFilter<"Generation"> | Date | string
    updatedAt?: DateTimeFilter<"Generation"> | Date | string
    voice?: XOR<VoiceNullableScalarRelationFilter, VoiceWhereInput> | null
  }, "id">

  export type GenerationOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    voiceId?: SortOrderInput | SortOrder
    text?: SortOrder
    voiceName?: SortOrder
    r2ObjectKey?: SortOrderInput | SortOrder
    temperature?: SortOrder
    topP?: SortOrder
    topK?: SortOrder
    repetitionPenalty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GenerationCountOrderByAggregateInput
    _avg?: GenerationAvgOrderByAggregateInput
    _max?: GenerationMaxOrderByAggregateInput
    _min?: GenerationMinOrderByAggregateInput
    _sum?: GenerationSumOrderByAggregateInput
  }

  export type GenerationScalarWhereWithAggregatesInput = {
    AND?: GenerationScalarWhereWithAggregatesInput | GenerationScalarWhereWithAggregatesInput[]
    OR?: GenerationScalarWhereWithAggregatesInput[]
    NOT?: GenerationScalarWhereWithAggregatesInput | GenerationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Generation"> | string
    orgId?: StringWithAggregatesFilter<"Generation"> | string
    voiceId?: StringNullableWithAggregatesFilter<"Generation"> | string | null
    text?: StringWithAggregatesFilter<"Generation"> | string
    voiceName?: StringWithAggregatesFilter<"Generation"> | string
    r2ObjectKey?: StringNullableWithAggregatesFilter<"Generation"> | string | null
    temperature?: FloatWithAggregatesFilter<"Generation"> | number
    topP?: FloatWithAggregatesFilter<"Generation"> | number
    topK?: IntWithAggregatesFilter<"Generation"> | number
    repetitionPenalty?: FloatWithAggregatesFilter<"Generation"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Generation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Generation"> | Date | string
  }

  export type VoiceCreateInput = {
    id?: string
    orgId?: string | null
    name: string
    description?: string | null
    category?: $Enums.VoiceCategory
    language?: string
    variant: $Enums.VoiceVariant
    r2ObjectKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    generations?: GenerationCreateNestedManyWithoutVoiceInput
  }

  export type VoiceUncheckedCreateInput = {
    id?: string
    orgId?: string | null
    name: string
    description?: string | null
    category?: $Enums.VoiceCategory
    language?: string
    variant: $Enums.VoiceVariant
    r2ObjectKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    generations?: GenerationUncheckedCreateNestedManyWithoutVoiceInput
  }

  export type VoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumVoiceCategoryFieldUpdateOperationsInput | $Enums.VoiceCategory
    language?: StringFieldUpdateOperationsInput | string
    variant?: EnumVoiceVariantFieldUpdateOperationsInput | $Enums.VoiceVariant
    r2ObjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generations?: GenerationUpdateManyWithoutVoiceNestedInput
  }

  export type VoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumVoiceCategoryFieldUpdateOperationsInput | $Enums.VoiceCategory
    language?: StringFieldUpdateOperationsInput | string
    variant?: EnumVoiceVariantFieldUpdateOperationsInput | $Enums.VoiceVariant
    r2ObjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generations?: GenerationUncheckedUpdateManyWithoutVoiceNestedInput
  }

  export type VoiceCreateManyInput = {
    id?: string
    orgId?: string | null
    name: string
    description?: string | null
    category?: $Enums.VoiceCategory
    language?: string
    variant: $Enums.VoiceVariant
    r2ObjectKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumVoiceCategoryFieldUpdateOperationsInput | $Enums.VoiceCategory
    language?: StringFieldUpdateOperationsInput | string
    variant?: EnumVoiceVariantFieldUpdateOperationsInput | $Enums.VoiceVariant
    r2ObjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumVoiceCategoryFieldUpdateOperationsInput | $Enums.VoiceCategory
    language?: StringFieldUpdateOperationsInput | string
    variant?: EnumVoiceVariantFieldUpdateOperationsInput | $Enums.VoiceVariant
    r2ObjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenerationCreateInput = {
    id?: string
    orgId: string
    text: string
    voiceName: string
    r2ObjectKey?: string | null
    temperature: number
    topP: number
    topK: number
    repetitionPenalty: number
    createdAt?: Date | string
    updatedAt?: Date | string
    voice?: VoiceCreateNestedOneWithoutGenerationsInput
  }

  export type GenerationUncheckedCreateInput = {
    id?: string
    orgId: string
    voiceId?: string | null
    text: string
    voiceName: string
    r2ObjectKey?: string | null
    temperature: number
    topP: number
    topK: number
    repetitionPenalty: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GenerationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    voiceName?: StringFieldUpdateOperationsInput | string
    r2ObjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: FloatFieldUpdateOperationsInput | number
    topP?: FloatFieldUpdateOperationsInput | number
    topK?: IntFieldUpdateOperationsInput | number
    repetitionPenalty?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voice?: VoiceUpdateOneWithoutGenerationsNestedInput
  }

  export type GenerationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    voiceId?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    voiceName?: StringFieldUpdateOperationsInput | string
    r2ObjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: FloatFieldUpdateOperationsInput | number
    topP?: FloatFieldUpdateOperationsInput | number
    topK?: IntFieldUpdateOperationsInput | number
    repetitionPenalty?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenerationCreateManyInput = {
    id?: string
    orgId: string
    voiceId?: string | null
    text: string
    voiceName: string
    r2ObjectKey?: string | null
    temperature: number
    topP: number
    topK: number
    repetitionPenalty: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GenerationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    voiceName?: StringFieldUpdateOperationsInput | string
    r2ObjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: FloatFieldUpdateOperationsInput | number
    topP?: FloatFieldUpdateOperationsInput | number
    topK?: IntFieldUpdateOperationsInput | number
    repetitionPenalty?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenerationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    voiceId?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    voiceName?: StringFieldUpdateOperationsInput | string
    r2ObjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: FloatFieldUpdateOperationsInput | number
    topP?: FloatFieldUpdateOperationsInput | number
    topK?: IntFieldUpdateOperationsInput | number
    repetitionPenalty?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumVoiceCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.VoiceCategory | EnumVoiceCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.VoiceCategory[] | ListEnumVoiceCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.VoiceCategory[] | ListEnumVoiceCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumVoiceCategoryFilter<$PrismaModel> | $Enums.VoiceCategory
  }

  export type EnumVoiceVariantFilter<$PrismaModel = never> = {
    equals?: $Enums.VoiceVariant | EnumVoiceVariantFieldRefInput<$PrismaModel>
    in?: $Enums.VoiceVariant[] | ListEnumVoiceVariantFieldRefInput<$PrismaModel>
    notIn?: $Enums.VoiceVariant[] | ListEnumVoiceVariantFieldRefInput<$PrismaModel>
    not?: NestedEnumVoiceVariantFilter<$PrismaModel> | $Enums.VoiceVariant
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GenerationListRelationFilter = {
    every?: GenerationWhereInput
    some?: GenerationWhereInput
    none?: GenerationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GenerationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VoiceCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    language?: SortOrder
    variant?: SortOrder
    r2ObjectKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    language?: SortOrder
    variant?: SortOrder
    r2ObjectKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VoiceMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    language?: SortOrder
    variant?: SortOrder
    r2ObjectKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumVoiceCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VoiceCategory | EnumVoiceCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.VoiceCategory[] | ListEnumVoiceCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.VoiceCategory[] | ListEnumVoiceCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumVoiceCategoryWithAggregatesFilter<$PrismaModel> | $Enums.VoiceCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVoiceCategoryFilter<$PrismaModel>
    _max?: NestedEnumVoiceCategoryFilter<$PrismaModel>
  }

  export type EnumVoiceVariantWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VoiceVariant | EnumVoiceVariantFieldRefInput<$PrismaModel>
    in?: $Enums.VoiceVariant[] | ListEnumVoiceVariantFieldRefInput<$PrismaModel>
    notIn?: $Enums.VoiceVariant[] | ListEnumVoiceVariantFieldRefInput<$PrismaModel>
    not?: NestedEnumVoiceVariantWithAggregatesFilter<$PrismaModel> | $Enums.VoiceVariant
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVoiceVariantFilter<$PrismaModel>
    _max?: NestedEnumVoiceVariantFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type VoiceNullableScalarRelationFilter = {
    is?: VoiceWhereInput | null
    isNot?: VoiceWhereInput | null
  }

  export type GenerationCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    voiceId?: SortOrder
    text?: SortOrder
    voiceName?: SortOrder
    r2ObjectKey?: SortOrder
    temperature?: SortOrder
    topP?: SortOrder
    topK?: SortOrder
    repetitionPenalty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GenerationAvgOrderByAggregateInput = {
    temperature?: SortOrder
    topP?: SortOrder
    topK?: SortOrder
    repetitionPenalty?: SortOrder
  }

  export type GenerationMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    voiceId?: SortOrder
    text?: SortOrder
    voiceName?: SortOrder
    r2ObjectKey?: SortOrder
    temperature?: SortOrder
    topP?: SortOrder
    topK?: SortOrder
    repetitionPenalty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GenerationMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    voiceId?: SortOrder
    text?: SortOrder
    voiceName?: SortOrder
    r2ObjectKey?: SortOrder
    temperature?: SortOrder
    topP?: SortOrder
    topK?: SortOrder
    repetitionPenalty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GenerationSumOrderByAggregateInput = {
    temperature?: SortOrder
    topP?: SortOrder
    topK?: SortOrder
    repetitionPenalty?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type GenerationCreateNestedManyWithoutVoiceInput = {
    create?: XOR<GenerationCreateWithoutVoiceInput, GenerationUncheckedCreateWithoutVoiceInput> | GenerationCreateWithoutVoiceInput[] | GenerationUncheckedCreateWithoutVoiceInput[]
    connectOrCreate?: GenerationCreateOrConnectWithoutVoiceInput | GenerationCreateOrConnectWithoutVoiceInput[]
    createMany?: GenerationCreateManyVoiceInputEnvelope
    connect?: GenerationWhereUniqueInput | GenerationWhereUniqueInput[]
  }

  export type GenerationUncheckedCreateNestedManyWithoutVoiceInput = {
    create?: XOR<GenerationCreateWithoutVoiceInput, GenerationUncheckedCreateWithoutVoiceInput> | GenerationCreateWithoutVoiceInput[] | GenerationUncheckedCreateWithoutVoiceInput[]
    connectOrCreate?: GenerationCreateOrConnectWithoutVoiceInput | GenerationCreateOrConnectWithoutVoiceInput[]
    createMany?: GenerationCreateManyVoiceInputEnvelope
    connect?: GenerationWhereUniqueInput | GenerationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumVoiceCategoryFieldUpdateOperationsInput = {
    set?: $Enums.VoiceCategory
  }

  export type EnumVoiceVariantFieldUpdateOperationsInput = {
    set?: $Enums.VoiceVariant
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GenerationUpdateManyWithoutVoiceNestedInput = {
    create?: XOR<GenerationCreateWithoutVoiceInput, GenerationUncheckedCreateWithoutVoiceInput> | GenerationCreateWithoutVoiceInput[] | GenerationUncheckedCreateWithoutVoiceInput[]
    connectOrCreate?: GenerationCreateOrConnectWithoutVoiceInput | GenerationCreateOrConnectWithoutVoiceInput[]
    upsert?: GenerationUpsertWithWhereUniqueWithoutVoiceInput | GenerationUpsertWithWhereUniqueWithoutVoiceInput[]
    createMany?: GenerationCreateManyVoiceInputEnvelope
    set?: GenerationWhereUniqueInput | GenerationWhereUniqueInput[]
    disconnect?: GenerationWhereUniqueInput | GenerationWhereUniqueInput[]
    delete?: GenerationWhereUniqueInput | GenerationWhereUniqueInput[]
    connect?: GenerationWhereUniqueInput | GenerationWhereUniqueInput[]
    update?: GenerationUpdateWithWhereUniqueWithoutVoiceInput | GenerationUpdateWithWhereUniqueWithoutVoiceInput[]
    updateMany?: GenerationUpdateManyWithWhereWithoutVoiceInput | GenerationUpdateManyWithWhereWithoutVoiceInput[]
    deleteMany?: GenerationScalarWhereInput | GenerationScalarWhereInput[]
  }

  export type GenerationUncheckedUpdateManyWithoutVoiceNestedInput = {
    create?: XOR<GenerationCreateWithoutVoiceInput, GenerationUncheckedCreateWithoutVoiceInput> | GenerationCreateWithoutVoiceInput[] | GenerationUncheckedCreateWithoutVoiceInput[]
    connectOrCreate?: GenerationCreateOrConnectWithoutVoiceInput | GenerationCreateOrConnectWithoutVoiceInput[]
    upsert?: GenerationUpsertWithWhereUniqueWithoutVoiceInput | GenerationUpsertWithWhereUniqueWithoutVoiceInput[]
    createMany?: GenerationCreateManyVoiceInputEnvelope
    set?: GenerationWhereUniqueInput | GenerationWhereUniqueInput[]
    disconnect?: GenerationWhereUniqueInput | GenerationWhereUniqueInput[]
    delete?: GenerationWhereUniqueInput | GenerationWhereUniqueInput[]
    connect?: GenerationWhereUniqueInput | GenerationWhereUniqueInput[]
    update?: GenerationUpdateWithWhereUniqueWithoutVoiceInput | GenerationUpdateWithWhereUniqueWithoutVoiceInput[]
    updateMany?: GenerationUpdateManyWithWhereWithoutVoiceInput | GenerationUpdateManyWithWhereWithoutVoiceInput[]
    deleteMany?: GenerationScalarWhereInput | GenerationScalarWhereInput[]
  }

  export type VoiceCreateNestedOneWithoutGenerationsInput = {
    create?: XOR<VoiceCreateWithoutGenerationsInput, VoiceUncheckedCreateWithoutGenerationsInput>
    connectOrCreate?: VoiceCreateOrConnectWithoutGenerationsInput
    connect?: VoiceWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VoiceUpdateOneWithoutGenerationsNestedInput = {
    create?: XOR<VoiceCreateWithoutGenerationsInput, VoiceUncheckedCreateWithoutGenerationsInput>
    connectOrCreate?: VoiceCreateOrConnectWithoutGenerationsInput
    upsert?: VoiceUpsertWithoutGenerationsInput
    disconnect?: VoiceWhereInput | boolean
    delete?: VoiceWhereInput | boolean
    connect?: VoiceWhereUniqueInput
    update?: XOR<XOR<VoiceUpdateToOneWithWhereWithoutGenerationsInput, VoiceUpdateWithoutGenerationsInput>, VoiceUncheckedUpdateWithoutGenerationsInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumVoiceCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.VoiceCategory | EnumVoiceCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.VoiceCategory[] | ListEnumVoiceCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.VoiceCategory[] | ListEnumVoiceCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumVoiceCategoryFilter<$PrismaModel> | $Enums.VoiceCategory
  }

  export type NestedEnumVoiceVariantFilter<$PrismaModel = never> = {
    equals?: $Enums.VoiceVariant | EnumVoiceVariantFieldRefInput<$PrismaModel>
    in?: $Enums.VoiceVariant[] | ListEnumVoiceVariantFieldRefInput<$PrismaModel>
    notIn?: $Enums.VoiceVariant[] | ListEnumVoiceVariantFieldRefInput<$PrismaModel>
    not?: NestedEnumVoiceVariantFilter<$PrismaModel> | $Enums.VoiceVariant
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumVoiceCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VoiceCategory | EnumVoiceCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.VoiceCategory[] | ListEnumVoiceCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.VoiceCategory[] | ListEnumVoiceCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumVoiceCategoryWithAggregatesFilter<$PrismaModel> | $Enums.VoiceCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVoiceCategoryFilter<$PrismaModel>
    _max?: NestedEnumVoiceCategoryFilter<$PrismaModel>
  }

  export type NestedEnumVoiceVariantWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VoiceVariant | EnumVoiceVariantFieldRefInput<$PrismaModel>
    in?: $Enums.VoiceVariant[] | ListEnumVoiceVariantFieldRefInput<$PrismaModel>
    notIn?: $Enums.VoiceVariant[] | ListEnumVoiceVariantFieldRefInput<$PrismaModel>
    not?: NestedEnumVoiceVariantWithAggregatesFilter<$PrismaModel> | $Enums.VoiceVariant
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVoiceVariantFilter<$PrismaModel>
    _max?: NestedEnumVoiceVariantFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type GenerationCreateWithoutVoiceInput = {
    id?: string
    orgId: string
    text: string
    voiceName: string
    r2ObjectKey?: string | null
    temperature: number
    topP: number
    topK: number
    repetitionPenalty: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GenerationUncheckedCreateWithoutVoiceInput = {
    id?: string
    orgId: string
    text: string
    voiceName: string
    r2ObjectKey?: string | null
    temperature: number
    topP: number
    topK: number
    repetitionPenalty: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GenerationCreateOrConnectWithoutVoiceInput = {
    where: GenerationWhereUniqueInput
    create: XOR<GenerationCreateWithoutVoiceInput, GenerationUncheckedCreateWithoutVoiceInput>
  }

  export type GenerationCreateManyVoiceInputEnvelope = {
    data: GenerationCreateManyVoiceInput | GenerationCreateManyVoiceInput[]
    skipDuplicates?: boolean
  }

  export type GenerationUpsertWithWhereUniqueWithoutVoiceInput = {
    where: GenerationWhereUniqueInput
    update: XOR<GenerationUpdateWithoutVoiceInput, GenerationUncheckedUpdateWithoutVoiceInput>
    create: XOR<GenerationCreateWithoutVoiceInput, GenerationUncheckedCreateWithoutVoiceInput>
  }

  export type GenerationUpdateWithWhereUniqueWithoutVoiceInput = {
    where: GenerationWhereUniqueInput
    data: XOR<GenerationUpdateWithoutVoiceInput, GenerationUncheckedUpdateWithoutVoiceInput>
  }

  export type GenerationUpdateManyWithWhereWithoutVoiceInput = {
    where: GenerationScalarWhereInput
    data: XOR<GenerationUpdateManyMutationInput, GenerationUncheckedUpdateManyWithoutVoiceInput>
  }

  export type GenerationScalarWhereInput = {
    AND?: GenerationScalarWhereInput | GenerationScalarWhereInput[]
    OR?: GenerationScalarWhereInput[]
    NOT?: GenerationScalarWhereInput | GenerationScalarWhereInput[]
    id?: StringFilter<"Generation"> | string
    orgId?: StringFilter<"Generation"> | string
    voiceId?: StringNullableFilter<"Generation"> | string | null
    text?: StringFilter<"Generation"> | string
    voiceName?: StringFilter<"Generation"> | string
    r2ObjectKey?: StringNullableFilter<"Generation"> | string | null
    temperature?: FloatFilter<"Generation"> | number
    topP?: FloatFilter<"Generation"> | number
    topK?: IntFilter<"Generation"> | number
    repetitionPenalty?: FloatFilter<"Generation"> | number
    createdAt?: DateTimeFilter<"Generation"> | Date | string
    updatedAt?: DateTimeFilter<"Generation"> | Date | string
  }

  export type VoiceCreateWithoutGenerationsInput = {
    id?: string
    orgId?: string | null
    name: string
    description?: string | null
    category?: $Enums.VoiceCategory
    language?: string
    variant: $Enums.VoiceVariant
    r2ObjectKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VoiceUncheckedCreateWithoutGenerationsInput = {
    id?: string
    orgId?: string | null
    name: string
    description?: string | null
    category?: $Enums.VoiceCategory
    language?: string
    variant: $Enums.VoiceVariant
    r2ObjectKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VoiceCreateOrConnectWithoutGenerationsInput = {
    where: VoiceWhereUniqueInput
    create: XOR<VoiceCreateWithoutGenerationsInput, VoiceUncheckedCreateWithoutGenerationsInput>
  }

  export type VoiceUpsertWithoutGenerationsInput = {
    update: XOR<VoiceUpdateWithoutGenerationsInput, VoiceUncheckedUpdateWithoutGenerationsInput>
    create: XOR<VoiceCreateWithoutGenerationsInput, VoiceUncheckedCreateWithoutGenerationsInput>
    where?: VoiceWhereInput
  }

  export type VoiceUpdateToOneWithWhereWithoutGenerationsInput = {
    where?: VoiceWhereInput
    data: XOR<VoiceUpdateWithoutGenerationsInput, VoiceUncheckedUpdateWithoutGenerationsInput>
  }

  export type VoiceUpdateWithoutGenerationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumVoiceCategoryFieldUpdateOperationsInput | $Enums.VoiceCategory
    language?: StringFieldUpdateOperationsInput | string
    variant?: EnumVoiceVariantFieldUpdateOperationsInput | $Enums.VoiceVariant
    r2ObjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoiceUncheckedUpdateWithoutGenerationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumVoiceCategoryFieldUpdateOperationsInput | $Enums.VoiceCategory
    language?: StringFieldUpdateOperationsInput | string
    variant?: EnumVoiceVariantFieldUpdateOperationsInput | $Enums.VoiceVariant
    r2ObjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenerationCreateManyVoiceInput = {
    id?: string
    orgId: string
    text: string
    voiceName: string
    r2ObjectKey?: string | null
    temperature: number
    topP: number
    topK: number
    repetitionPenalty: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GenerationUpdateWithoutVoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    voiceName?: StringFieldUpdateOperationsInput | string
    r2ObjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: FloatFieldUpdateOperationsInput | number
    topP?: FloatFieldUpdateOperationsInput | number
    topK?: IntFieldUpdateOperationsInput | number
    repetitionPenalty?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenerationUncheckedUpdateWithoutVoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    voiceName?: StringFieldUpdateOperationsInput | string
    r2ObjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: FloatFieldUpdateOperationsInput | number
    topP?: FloatFieldUpdateOperationsInput | number
    topK?: IntFieldUpdateOperationsInput | number
    repetitionPenalty?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenerationUncheckedUpdateManyWithoutVoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    voiceName?: StringFieldUpdateOperationsInput | string
    r2ObjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: FloatFieldUpdateOperationsInput | number
    topP?: FloatFieldUpdateOperationsInput | number
    topK?: IntFieldUpdateOperationsInput | number
    repetitionPenalty?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
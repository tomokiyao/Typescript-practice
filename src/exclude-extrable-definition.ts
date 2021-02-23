export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

//除外
type FunctionType = Exclude<SomeTypes, string | number>;
type MyExclude = never | never | DebugType;
type MyFunctionType = MyExclude;

// 抽出
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

// null undefind を取り除く
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;

/*
  Напишите GetFunctionTypes тип, который бы работал следующим образом:
    1.	Если в качестве generic типа передана функция, то результирующим типом будет массив из двух значений: параметра функции и возвращаемого значения
    2.	Если передана не функция, то результат unknown
*/

type GetFunctionTypes<T> = T extends (...arg: unknown[]) => unknown ? [...Parameters<T>, ReturnType<T>]: unknown;

function func(a: string): number {
  return 1;
}

type A = GetFunctionTypes<typeof func>; // [string, number]
type B = GetFunctionTypes<string>; // unknown

/**
  В этой части задания запрещено использование Utility Types
  Напишите GetUserType тип, который бы работал следующим образом:
 */

type GetUserType<T> = T extends { [key: string]: unknown } ?  T[keyof T] : unknown;
// либо так 
// type GetUserType<T> = T extends { user: unknown } ?  T[keyof T] : unknown;

type C = GetUserType<string>; // unknown
type D = GetUserType<{ user: string }>; // string
type E = GetUserType<{ user: Array<number> }>; // number[]

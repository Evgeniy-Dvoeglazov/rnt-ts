/*
Дан интерфейс с набором свойств (name, address, phone). Свойства имеют разный тип данных. На основе этого интерфейса необходимо сгенерировать тип данных со следующими условиями:
  1.	Имеет свойства getName, getPhone
  2.	Типом данных каждого свойства является функция, возвращаемым типом данных которой будет изначальный тип данных свойства интерфейса
*/

interface IUser {
  name: string;
  address: string;
  phone: number;
}

type UserGetters<T> = {
  [key in keyof T as `get${Capitalize<string & key>}`]: () => T[key]
};

type F = UserGetters<IUser>; // { getName: () => string; getPhone: () => number }
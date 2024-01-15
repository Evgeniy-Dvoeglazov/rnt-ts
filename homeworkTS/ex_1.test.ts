import { describe, test } from "@jest/globals";
import DoubleLinkedList from "./ex_1";

describe("DoubleLinkedList", () => {
  let doubleLinkedList: DoubleLinkedList<unknown>;

  beforeEach(() => {
    doubleLinkedList = new DoubleLinkedList();
    doubleLinkedList.push(1);
    doubleLinkedList.push("test");
  });

  test("push", () => {
    doubleLinkedList.push({ test: "test" });
    expect(doubleLinkedList.count).toBe(3);
    expect(doubleLinkedList.last?.value).toStrictEqual({ test: "test" });
    expect(doubleLinkedList.first?.value).toBe(1);
    doubleLinkedList.push([1, 2, 3]);
    expect(doubleLinkedList.count).toBe(4);
    expect(doubleLinkedList.last?.value).toEqual([1, 2, 3]);
    expect(doubleLinkedList.last?.previous?.value).toStrictEqual({
      test: "test",
    });
    expect(doubleLinkedList.first?.value).toBe(1);
  });

  test("unshift", () => {
    doubleLinkedList.unshift({ key: "test2" });
    expect(doubleLinkedList.first?.value).toEqual({ key: "test2" });
    expect(doubleLinkedList.count).toBe(3);
  });

  test("delete", () => {
    const deletedNodes = doubleLinkedList.delete("test");
    expect(doubleLinkedList.count).toBe(1);
    expect(deletedNodes, "Должен быть массив из удаленных узелов").toEqual([
      {
        next: null,
        previous: { next: null, previous: null, value: 1 },
        value: "test",
      },
    ]);
  });

  test("find", () => {
    expect(doubleLinkedList.find("test")?.value).toBe("test");
    expect(doubleLinkedList.find("test123")).toBeNull();
  });

  test("pop", () => {
    const deletedLast = doubleLinkedList.pop();
    expect(deletedLast?.value).toEqual("test");
    expect(doubleLinkedList.count).toBe(1);
  });

  test("shift", () => {
    const deletedFirst = doubleLinkedList.shift();
    expect(deletedFirst?.value).toEqual(1);
    expect(doubleLinkedList.count).toBe(1);
  });

  test("from string", () => {
    const newList = DoubleLinkedList.from("12345");
    expect(newList.count).toBe(5);
    expect(newList.first?.value).toBe("1");
    expect(newList.last?.value).toBe("5");
  });

  test("from array", () => {
    const newList = DoubleLinkedList.from([1, 2, 3, 4, "5"]);
    expect(newList.count).toBe(5);
    expect(newList.first?.value, "Должно быть число 1").toBe(1);
    expect(newList.last?.value, `Должна быть строка "5"`).toBe("5");
  });

  test("toArray", () => {
    doubleLinkedList.push({ a: 3 });
    expect(
      doubleLinkedList.toArray(),
      "Должен быть массив из числа, строки и объекта",
    ).toEqual([1, "test", { a: 3 }]);
  });

  test("reverse", () => {
    const reverseList = doubleLinkedList.reverse();
    expect(reverseList.first?.value).toBe("test");
    expect(reverseList.last?.value).toBe(1);
  });

  test("iterator", () => {
    const iterator = doubleLinkedList[Symbol.iterator]();
    expect(iterator.next().value?.value).toBe(1);
    expect(iterator.next().value?.value).toBe("test");
  });
});

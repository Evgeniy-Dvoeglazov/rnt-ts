import { describe, expect, test } from "@jest/globals";
import DoubleLinkedList from "./ex_1";

describe("doubleLinkedList test", () => {
  const doubleLinkedList = new DoubleLinkedList();
  test("push", () => {
    expect(doubleLinkedList.push(11)).toEqual({
      first: { value: 11, next: null, previous: null },
      last: { value: 11, next: null, previous: null },
      count: 1,
    });
    doubleLinkedList.push("test");
    expect(doubleLinkedList.count).toBe(2);
    expect(doubleLinkedList.last?.value).toBe("test");
    expect(doubleLinkedList.first?.value).toBe(11);
    doubleLinkedList.push([1, 2, 3]);
    expect(doubleLinkedList.count).toBe(3);
    expect(doubleLinkedList.last?.value).toEqual([1, 2, 3]);
    expect(doubleLinkedList.last?.previous?.value).toBe("test");
    expect(doubleLinkedList.first?.value).toBe(11);
  });

  test("unshift", () => {
    doubleLinkedList.unshift({ key: "test" });
    expect(doubleLinkedList.first?.value).toEqual({ key: "test" });
    expect(doubleLinkedList.count).toBe(4);
  });

  test("delete", () => {
    const deletedNodes = doubleLinkedList.delete(11);
    expect(doubleLinkedList.count).toBe(3);
    expect(deletedNodes && deletedNodes[0].value).toBe(11);
  });

  test("find", () => {
    expect(doubleLinkedList.find("test")?.value).toBe("test");
    expect(doubleLinkedList.find("test123")).toBeNull();
  });

  test("pop", () => {
    const deletedLast = doubleLinkedList.pop();
    expect(deletedLast?.value).toEqual([1, 2, 3]);
    expect(doubleLinkedList.count).toBe(2);
  });

  test("shift", () => {
    const deletedFirst = doubleLinkedList.shift();
    expect(deletedFirst?.value).toEqual({ key: "test" });
    expect(doubleLinkedList.count).toBe(1);
  });

  test("from", () => {
    const newList = DoubleLinkedList.from("12345");
    expect(newList.count).toBe(5);
    expect(newList.first?.value).toBe("1");
    expect(newList.last?.value).toBe("5");
  });

  test("toArray", () => {
    doubleLinkedList.push(11);
    expect(doubleLinkedList.toArray()).toEqual(["test", 11]);
  });

  test("reverse", () => {
    const reverseList = doubleLinkedList.reverse();
    expect(reverseList.first?.value).toBe(11);
    expect(reverseList.last?.value).toBe("test");
  });

  test("iterator", () => {
    const iterator = doubleLinkedList[Symbol.iterator]();
    expect(iterator.next().value?.value).toBe(11);
    expect(iterator.next().value?.value).toBe("test");
  });
});

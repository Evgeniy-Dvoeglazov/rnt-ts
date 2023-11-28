/*
Требуется реализовать структуру данных двусвязный список. Необходимо выполнить следующие условия:
  1.	Использовать JS class
  2.	Элемент коллекции должен быть generic
  3.	Элемент коллекции должен иметь свойства next и previous
  4.	Экземпляр класса должен предоставлять доступ к следующим свойствам: count (количество элементов), first (первый элемент), last (последний элемент)
*/

class DoubleLinkedListNode<T> {
  constructor(public value: T, public next: DoubleLinkedListNode<T> | null = null, public previous: DoubleLinkedListNode<T> | null = null) { }
}

class DoubleLinkedList<T> {
  public first: DoubleLinkedListNode<T> | null;
  public last: DoubleLinkedListNode<T> | null;
  public count: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.count = 0;
  }

  unshift(value: T): DoubleLinkedList<T> {
    const newNode = new DoubleLinkedListNode(value, this.first);

    if (this.first) {
      this.first.previous = newNode;
    }
    this.first = newNode;

    if (!this.last) {
      this.last = newNode;
    }

    this.count++;

    return this;
  }

  push(value: T): DoubleLinkedList<T> {
    const newNode = new DoubleLinkedListNode(value);

    if (this.last) {
      this.last.next = newNode;
    }

    newNode.previous = this.last;

    this.last = newNode;

    if (!this.first) {
      this.first = newNode;
    }

    this.count++;

    return this;
  }

  delete(value: T): DoubleLinkedListNode<T>[] {
    if (!this.first) {
      return null;
    }

    const deletedNodes: DoubleLinkedListNode<T>[] = [];

    for (let node of this) {
      if (node.value === value) {
        deletedNodes.push(node);

        if (node === this.first) {
          this.first = node.next;
          this.count--;

          if (this.first) {
            this.first.previous = null;
          }

          if (node === this.last) {
            this.last = null;
          }
        } else if (node === this.last) {
          this.last = node.previous;
          this.count--;

          if (this.last) {
            this.last.next = null;
          }
        } else {
          const previousNode = node.previous;
          const nextNode = node.next;

          previousNode.next = nextNode;
          nextNode.previous = previousNode;
          this.count--;
        }
      }
    }

    return deletedNodes;
  }

  find(value: T): DoubleLinkedListNode<T> {
    if (!this.first) {
      return null;
    }

    for (let node of this) {
      if (node.value === value) {
        return node;
      }
    }

    return null;
  }

  pop(): DoubleLinkedListNode<T> {
    if (!this.last) {
      return null;
    }

    const deletedLast = this.last

    if (this.last.previous) {
      this.last = this.last.previous;
      this.last.next = null;
    } else {
      this.last = null;
      this.first = null;
    }

    this.count--;

    return deletedLast;
  }

  shift(): DoubleLinkedListNode<T> {
    if (!this.first) {
      return null;
    }

    const deletedFirst = this.first;

    if (this.first.next) {
      this.first = this.first.next;
      this.first.previous = null;
    } else {
      this.first = null;
      this.last = null;
    }

    this.count--;

    return deletedFirst;
  }

  static from<T>(value: Iterable<T>): DoubleLinkedList<T> {
    const doubleLinkedList = new this<T>();

    for (let element of value) {
      doubleLinkedList.push(element);
    }

    return doubleLinkedList;
  }

  toArray(): T[] {
    const nodeValues = [];
    for (let node of this) {
      nodeValues.push(node.value);
    }

    return nodeValues;
  }

  reverse(): DoubleLinkedList<T> {
    let previousNode = null;
    let nextNode = null;

    for (let node of this) {
      nextNode = node.next;
      previousNode = node.previous;

      node.next = previousNode;
      node.previous = nextNode;

      previousNode = node;
    }

    this.last = this.first;
    this.first = previousNode;

    return this;
  }

  [Symbol.iterator](): { next: () => { value: DoubleLinkedListNode<T>, done: boolean } | { done: boolean, value?: null } } {
    let currentElement = this.first;

    return {
      next: () => {
        if (currentElement) {
          const value = currentElement
          currentElement = currentElement.next;

          return { value: value, done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}

const doubleLinkedList = new DoubleLinkedList();

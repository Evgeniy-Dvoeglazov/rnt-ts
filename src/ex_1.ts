/*
Требуется реализовать структуру данных двусвязный список. Необходимо выполнить следующие условия:
  1.	Использовать JS class
  2.	Элемент коллекции должен быть generic
  3.	Элемент коллекции должен иметь свойства next и previous
  4.	Экземпляр класса должен предоставлять доступ к следующим свойствам: count (количество элементов), first (первый элемент), last (последний элемент)
*/


// Для работы с Array.from()
interface ArrayConstructor {
  from(arrayLike: any): Array<any>;
}

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

    let currentNode = this.first;

    while (currentNode) {
      if (currentNode.value === value) {
        deletedNodes.push(currentNode);

        if (currentNode === this.first) {
          this.first = currentNode.next;
          this.count--;

          if (this.first) {
            this.first.previous = null;
          }

          if (currentNode === this.last) {
            this.last = null;
          }
        } else if (currentNode === this.last) {
          this.last = currentNode.previous;
          this.count--;

          if (this.last) {
            this.last.next = null;
          }
        } else {
          const previousNode = currentNode.previous;
          const nextNode = currentNode.next;

          previousNode.next = nextNode;
          nextNode.previous = previousNode;
          this.count--;
        }
      }
      currentNode = currentNode.next;
    }

    return deletedNodes;
  }

  find(value: T): DoubleLinkedListNode<T> {
    if (!this.first) {
      return null;
    }

    let currentNode = this.first;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
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

  static from<T>(value: Iterable<T>): DoubleLinkedList<unknown> {
    const doubleLinkedList = new this();

    for (let element of value) {
      doubleLinkedList.push(element);
    }

    return doubleLinkedList;
  }

  toArray(): T[] {
    const nodeValues = [];
    let currentNode = this.first;
    while (currentNode) {
      nodeValues.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return nodeValues;
  }

  reverse(): DoubleLinkedList<T> {
    let currentNode = this.first;
    let previousNode = null;
    let nextNode = null;

    while (currentNode) {
      nextNode = currentNode.next;
      previousNode = currentNode.previous;

      currentNode.next = previousNode;
      currentNode.previous = nextNode;

      // При последней итерации текущий элемент станет null
      // Поэтому нам нужно записать его данные в предпоследний.
      // и в дальнейшем сделать его первым
      previousNode = currentNode; // Если строку убрать, на один элемент в списке станет меньше.
      currentNode = nextNode;
    }

    this.last = this.first;
    this.first = previousNode;

    return this;
  }

  [Symbol.iterator](): { next: () => { value: T, done: boolean } | { done: boolean, value?: null } } {
    let currentElement = this.first;

    return {
      next: () => {
        if (currentElement) {
          const currentValue = currentElement.value;
          currentElement = currentElement.next;

          return { value: currentValue, done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}

// const doubleLinkedList = new DoubleLinkedList();


// doubleLinkedList.push('a');
// doubleLinkedList.push('b');
// doubleLinkedList.push('c');
// doubleLinkedList.push('d');

// for (let node of doubleLinkedList) {
//   console.log(node);
// }

// console.log();

// for (let node of doubleLinkedList.reverse()) {
//   console.log(node);
// }


// console.log();

const doubleLinkedList = DoubleLinkedList.from('dddddd');

console.log(doubleLinkedList);
// console.log(doubleLinkedList.first);
// console.log(doubleLinkedList.last);
// console.log(doubleLinkedList.count);

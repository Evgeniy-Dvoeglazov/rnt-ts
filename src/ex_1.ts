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

  prepend(value: T): DoubleLinkedList<T> {
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

  append(value: T): DoubleLinkedList<T> {
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

    let deletedNode: DoubleLinkedListNode<T> = null;
    let currentNode = this.first;

    while (currentNode) {
      if (currentNode.value === value) {
        deletedNode = currentNode;
        deletedNodes.push(deletedNode);

        if (deletedNode === this.first) {
          this.first = deletedNode.next;
          this.count--;

          if (this.first) {
            this.first.previous = null;
          }

          if (deletedNode === this.last) {
            this.last = null;
          }
        } else if (deletedNode === this.last) {
          this.last = deletedNode.previous;
          this.count--;

          if (this.last) {
            this.last.next = null;
          }
        } else {
          const previousNode = deletedNode.previous;
          const nextNode = deletedNode.next;

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

  // fromArray(values: T[]): DoubleLinkedList<T> {
  //   values.forEach(value => this.append(value));

  //   return this;
  // }

  from(values: T): DoubleLinkedListNode<T>[] {
    const doubleLinkedList = Array.from(values).map((value) => {
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
      return newNode;
    });

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
}

const doubleLinkedList = new DoubleLinkedList();

// doubleLinkedList.append('a');
// doubleLinkedList.append('b');
// doubleLinkedList.append('c');
// doubleLinkedList.from('abcd')
// doubleLinkedList.prepend('age');
// doubleLinkedList.prepend('ffff');
// doubleLinkedList.delete('name');
// doubleLinkedList.append('name');
// doubleLinkedList.find('age');
// doubleLinkedList.fromArray([1, 2]);
// doubleLinkedList.prepend({a: 3, b: 'fff'});

// console.log(doubleLinkedList.first);
// console.log(doubleLinkedList.last);
// console.log(doubleLinkedList.count);

// console.log(doubleLinkedList.from('abcd'));
/*
Требуется реализовать структуру данных двусвязный список. Необходимо выполнить следующие условия:
  1.	Использовать JS class
  2.	Элемент коллекции должен быть generic
  3.	Элемент коллекции должен иметь свойства next и previous
  4.	Экземпляр класса должен предоставлять доступ к следующим свойствам: count (количество элементов), first (первый элемент), last (последний элемент)
*/

class DoubleLinkedListNode<T> {
  constructor(public value: T, public next: DoubleLinkedListNode<T> | null = null, public previous: DoubleLinkedListNode<T> | null = null) {}

  toString(callback?: (arg: T) => string): string {
    return callback ? callback(this.value) : `${this.value}`;
  }
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

  // Создать новый узел в начале списка
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

  // Создать новый узел в конце списка
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

  // Удалить узел
  delete(value: T): DoubleLinkedListNode<T> {
    if (!this.first) {
      return null;
    }

    let deletedNode: DoubleLinkedListNode<T> = null;
    let currentNode = this.first;

    while (currentNode) {
      if (currentNode.value === value) {
        deletedNode = currentNode;

        if (deletedNode === this.first) {
          this.first = deletedNode.next;

          if (this.first) {
            this.first.previous = null;
          }

          if (deletedNode === this.last) {
            this.last = null;
          }
        } else if (deletedNode === this.last) {
          this.last = deletedNode.previous;

          if (this.last) {
            this.last.next = null;
          }
        } else {
          const previousNode = deletedNode.previous;
          const nextNode = deletedNode.next;

          previousNode.next = nextNode;
          nextNode.previous = previousNode;
        }
      }

      currentNode = currentNode.next;
    }

    this.count--;

    return deletedNode;
  }

  // Найти первый узел с переданным знаяением
  find(value: T): DoubleLinkedListNode<T> {
    if (!this.first) {
      return null;
    }

    let currentNode = this.first;

    while (currentNode) {
      if (value !== undefined && currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  // Удалить последний узел
  deleteLast(): DoubleLinkedListNode<T> {
    if (!this.last) {
      return null;
    }

    const deletedLast = this.last;

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

  // Удалить первый узел
  deleteFirst(): DoubleLinkedListNode<T> {
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

  // Создать узлы из массива
  fromArray(values: T[]): DoubleLinkedList<T> {
    values.forEach(value => this.append(value));

    return this;
  }

  // Создать массив из всех узлов 
  toArray(): DoubleLinkedListNode<T>[] {
    const nodes = [];
    let currentNode = this.first;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  // Создать обратный список
  reverse(): DoubleLinkedList<T> {
    let currentNode = this.first;
    let previousNode = null;
    let nextNode = null;

    while (currentNode) {
      nextNode = currentNode.next;
      previousNode = currentNode.previous;

      currentNode.next = previousNode;

      currentNode.previous = nextNode;

      previousNode = currentNode;
      currentNode = nextNode;
    }

    this.last = this.first;
    this.first = previousNode;

    return this;
  }

  // Создать сроку из всех значений узлов
  toString(): string {
    return this.toArray().map(node => node.toString()).toString();
  } 

}

const doubleLinkedList = new DoubleLinkedList();

doubleLinkedList.prepend('name');
doubleLinkedList.prepend('age');
doubleLinkedList.prepend('ffff');
doubleLinkedList.delete('name');
doubleLinkedList.append('name');
doubleLinkedList.find('age');
doubleLinkedList.fromArray([1, 2]);

console.log(doubleLinkedList.first);
console.log(doubleLinkedList.last);
console.log(doubleLinkedList.count);
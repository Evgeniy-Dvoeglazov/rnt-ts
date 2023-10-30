/*
Требуется реализовать структуру данных двусвязный список. Необходимо выполнить следующие условия:
  1.	Использовать JS class
  2.	Элемент коллекции должен быть generic
  3.	Элемент коллекции должен иметь свойства next и previous
  4.	Экземпляр класса должен предоставлять доступ к следующим свойствам: count (количество элементов), first (первый элемент), last (последний элемент)
*/
// Класс элемента списка
var DoubleLinkedListNode = /** @class */ (function () {
    function DoubleLinkedListNode(value, next, previous) {
        if (next === void 0) { next = null; }
        if (previous === void 0) { previous = null; }
        this.value = value;
        this.next = next;
        this.previous = previous;
    }
    DoubleLinkedListNode.prototype.toString = function (callback) {
        return callback ? callback(this.value) : "".concat(this.value);
    };
    return DoubleLinkedListNode;
}());
// Класс списка
var DoubleLinkedList = /** @class */ (function () {
    function DoubleLinkedList() {
        this.first = null;
        this.last = null;
        this.count = 0;
    }
    // Создать новый узел в начале списка
    DoubleLinkedList.prototype.prepend = function (value) {
        var newNode = new DoubleLinkedListNode(value, this.first);
        if (this.first) {
            this.first.previous = newNode;
        }
        this.first = newNode;
        if (!this.last) {
            this.last = newNode;
        }
        this.count++;
        return this;
    };
    // Создать новый узел в конце списка
    DoubleLinkedList.prototype.append = function (value) {
        var newNode = new DoubleLinkedListNode(value);
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
    };
    // Удалить узел
    DoubleLinkedList.prototype.delete = function (value) {
        if (!this.first) {
            return null;
        }
        var deletedNode = null;
        var currentNode = this.first;
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
                }
                else if (deletedNode === this.last) {
                    this.last = deletedNode.previous;
                    if (this.last) {
                        this.last.next = null;
                    }
                }
                else {
                    var previousNode = deletedNode.previous;
                    var nextNode = deletedNode.next;
                    previousNode.next = nextNode;
                    nextNode.previous = previousNode;
                }
            }
            currentNode = currentNode.next;
        }
        this.count--;
        return deletedNode;
    };
    // Найти первый узел с переданным знаяением
    DoubleLinkedList.prototype.find = function (value) {
        if (!this.first) {
            return null;
        }
        var currentNode = this.first;
        while (currentNode) {
            if (value !== undefined && currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    };
    // Удалить последний узел
    DoubleLinkedList.prototype.deleteLast = function () {
        if (!this.last) {
            return null;
        }
        var deletedLast = this.last;
        if (this.last.previous) {
            this.last = this.last.previous;
            this.last.next = null;
        }
        else {
            this.last = null;
            this.first = null;
        }
        this.count--;
        return deletedLast;
    };
    // Удалить первый узел
    DoubleLinkedList.prototype.deleteFirst = function () {
        if (!this.first) {
            return null;
        }
        var deletedFirst = this.first;
        if (this.first.next) {
            this.first = this.first.next;
            this.first.previous = null;
        }
        else {
            this.first = null;
            this.last = null;
        }
        this.count--;
        return deletedFirst;
    };
    // Создать узлы из массива
    DoubleLinkedList.prototype.fromArray = function (values) {
        var _this = this;
        values.forEach(function (value) { return _this.append(value); });
        return this;
    };
    // Создать массив из всех узлов 
    DoubleLinkedList.prototype.toArray = function () {
        var nodes = [];
        var currentNode = this.first;
        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }
        return nodes;
    };
    // Создать обратный список
    DoubleLinkedList.prototype.reverse = function () {
        var currentNode = this.first;
        var previousNode = null;
        var nextNode = null;
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
    };
    // Создать сроку из всех значений узлов
    DoubleLinkedList.prototype.toString = function (callback) {
        return this.toArray().map(function (node) { return node.toString(callback); }).toString();
    };
    return DoubleLinkedList;
}());
var nodeStringifier = function (value) { return "".concat(value.a, ":").concat(value.b); };
var doubleLinkedList = new DoubleLinkedList();
doubleLinkedList.prepend('name');
doubleLinkedList.prepend('age');
// doubleLinkedList.prepend('ffff');
// doubleLinkedList.delete('name');
// doubleLinkedList.append('name');
// doubleLinkedList.find('age');
// doubleLinkedList.fromArray([1, 2]);
// doubleLinkedList.prepend({a: 3, b: 'fff'});
// console.log(doubleLinkedList.first);
// console.log(doubleLinkedList.last);
// console.log(doubleLinkedList.count);
console.log(doubleLinkedList.toString());

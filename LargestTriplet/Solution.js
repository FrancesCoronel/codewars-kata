var Node = function(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
};

var LinkedList = function() {};

LinkedList.prototype.empty = function() {
    return typeof this.head === 'undefined' && typeof this.tail === 'undefined';
};

LinkedList.prototype.addToTail = function(value) {
    if (!value) return;
    var n = new Node(value);
    if (this.empty()) this.head = n;
    else {
        n.previous = this.tail;
        this.tail.next = n;
    }
    this.tail = n;
};

LinkedList.prototype.addToHead = function(value) {
    if (!value) return;
    var n = new Node(value);
    if (this.empty()) this.tail = n;
    else {
        n.next = this.head;
        this.head.previous = n;
    }
    this.head = n;
};

LinkedList.prototype.removeHead = function() {
    if (this.empty()) return;
    var toReturn = this.head.value;
    if (this.head === this.tail) {
        delete this.head;
        delete this.tail;
        return toReturn;
    }
    this.head = this.head.next;
    this.head.previous = null;
    return toReturn;
};

LinkedList.prototype.removeTail = function() {
    if (this.empty()) return;
    var toReturn = this.tail.value;
    if (this.tail === this.head) {
        delete this.head;
        delete this.tail;
        return toReturn;
    }
    this.tail = this.tail.previous;
    this.tail.next = null;
    return toReturn;
};

LinkedList.prototype.search = function(searchValueOrFunction, currentNode) {
    currentNode = currentNode || this.head;
    if (typeof searchValueOrFunction === 'function') {
        if (searchValueOrFunction(currentNode)) return currentNode.value;
    }
    if (currentNode.value === searchValueOrFunction) return currentNode.value;
    if (!currentNode.next) return;
    return this.search(searchValueOrFunction, currentNode.next);
};
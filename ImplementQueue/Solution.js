/* Completed Solution */

var Queue = function() {
    this.head = 0;
    this.tail = 0;
    this.memory = [];
};

Queue.prototype.enqueue = function(item) {
    this.memory[this.tail++] = item;
};

Queue.prototype.dequeue = function() {
    if (this.size()) {
        var toReturn = this.memory[this.head];
        this.head++;
        return toReturn;
    }
};

Queue.prototype.size = function() {
    return this.tail - this.head;
};

/* Initial Solution */

var Queue = function() {
  // implement your Queue constructor here
};

Queue.prototype.enqueue = function(item) {
  // implement enqueue
};

Queue.prototype.dequeue = function() {
  // implement dequeue
};

Queue.prototype.size = function() {
  return; // the size of the queue
};
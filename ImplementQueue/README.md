Title: Implementing a Queue
Author: [FVCproductions](http://fvcproductions.com)

---

![Queue](http://www.stoimen.com/blog/wp-content/uploads/2012/06/2.-Queue-Operations.png)

# Queues are linear collections of objects that can be inserted and removed in a FIFO (first in, first out) manner.

---

> An example of a queue in real life and not strictly computing would simply be the dreaded waiting line, i.e.the first person in line is also the first one who gets out.

![Waiting Lines](http://blog.lavi.com/wp-content/uploads/2013/01/waiting-in-line-1024x339.jpg)

---

## In this problem, we are going to be implementing our own ***enqueue***, ***dequeue***, and ***size*** methods for the queue constructor we are creating, so we should be able to create new instances of the Queue object.

- The `enqueue` method takes in the item as a parameter, while the `dequeue` method does not.
- The `size` method simply returns the number of items in the queue.

---

## Wait, what?

- To **enqueue** an item into the queue means to **insert** an item into the back, or **tail**, of the queue.
- To **dequeue** an item means means  to **remove** the item at the front, or **head**, of the queue.
- In a queue, we remove the item the least recently added.

---

### JavaScript Methodology

Queues can be implemented in JavaScript using **arrays**.

You can use the built in [push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) or [unshift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) functions in order to add items to the queue array as well as the [shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) or [pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) to remove them.

As long as the tests pass, go for it!

---

> [Source 1](http://code.stephenmorley.org/javascript/queues/)
>
> [Source 2](http://www.cs.cmu.edu/~adamchik/15-121/lectures/Stacks%20and%20Queues/Stacks%20and%20Queues.html)

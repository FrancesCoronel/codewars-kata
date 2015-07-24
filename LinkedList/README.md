![Linked Lists](http://www.cs.usfca.edu/~srollins/courses/cs112-f07/web/notes/linkedlists/ll2.gif)

# Linked Lists are the most powerful of all data structures since you can use them to basically create just about any other data structure.

---

> An example of a linked list in real life and not strictly computing would be the amazing conga line!

Everyone in the conga line is tasked with holding the hips of the person in front of them and their hips are held by the person behind them. Also, the only way to be added to the conga line is to find the right spot and decouple the connection.

![Conga Line](http://orig04.deviantart.net/0ffe/f/2012/218/4/4/conga_line_by_chipmagnum-d5a2fv2.png)

---

## In this problem, we are going to be implementing our own methods for the linked list constructor we are creating, so we should be able to create new instances of the **LinkedList** object. Our methods will be able to traverse the linked list as well remove or add nodes to either end of the linked list.

---

## The Specifics

- The linked list is essentially a list of nodes, so we will have to define a Node class that our LinkedList constructor can use.
- We assign a node to act as the head or front of the list and we assign another node to act as the tail or back of the list.
- This **Node class** has **three properties**:
    - `value` which stores the value of the Node
    - `next` which points to the next node in the list
    - `previous` which points to the previous node in the list
- The **LinkedList** has **five key methods**:
    1. We can add a node to the tail using `addToTail`
    2. or likewise we can add a node to the head using `addToHead`.
    3. We can remove a node from the head by using `removeHead`
    4. or likewise we can remove a node from the tail using `removeTail`.
    5. Finally, we can traverse the list of nodes to search for a specific node using `search`.

---

### JavaScript Methodology | What Can Help

- Object Literals
- Helper methods that check the state of the linked list
- [**this**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [**Object.prototype**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)

As long as the tests pass, use any other built-in methods you'd like!

---

> [Source 1](http://code.stephenmorley.org/javascript/queues/)
>
> [Source 2](http://stackoverflow.com/questions/644167/what-is-a-practical-real-world-example-of-the-linked-list)
>
> [Source 3](http://www.choskim.me/linked-list/)

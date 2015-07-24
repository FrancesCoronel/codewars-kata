describe("Queue", function() {

    var queue;

    before(function() {
        queue = new Queue();
    });

    it("The queue has 'enqueue', 'dequeue', and 'size' method functions.", function() {
        Test.expect(queue.size, "'size' is not defined.");
        Test.expect(queue.enqueue, "'enqueue' is not defined.");
        Test.expect(queue.dequeue, "'dequeue' is not defined.");
    });

    it("The queue has an initial size of 0.", function() {
        Test.assertEquals(queue.size(), 0);
    });

    it("Calling 'enqueue' on the queue increases the size by 1.", function() {
        queue.enqueue("I'm number one!");
        Test.assertEquals(queue.size(), 1);
    });

    it("Calling 'dequeue' on the queue reduces the size by 1.", function() {
        queue.enqueue("I'm number one!");
        queue.enqueue("I'm number two!");
        queue.enqueue("I'm number three!");
        queue.dequeue();
        Test.assertEquals(queue.size(), 2);
    });

    it("When you dequeue, the correct item should be returned.", function() {
        queue.enqueue("I'm number one!");
        queue.enqueue("I'm number two!");
        queue.enqueue("I'm number three!");
        Test.assertEquals(queue.size(), 3);
        Test.assertEquals(queue.dequeue(), "I'm number one!");
        Test.assertEquals(queue.size(), 2);
        Test.assertEquals(queue.dequeue(), "I'm number two!");
        Test.assertEquals(queue.size(), 1);
        Test.assertEquals(queue.dequeue(), "I'm number three!");
        Test.assertEquals(queue.size(), 0);
    });

    it("The size of the queue cannnot be negative. If the size is zero, the size is returned as undefined.", function() {
        queue.enqueue("I'm number one!");
        Test.assertEquals(queue.size(), 1);
        Test.assertEquals(queue.dequeue(), "I'm number one!");
        Test.assertEquals(queue.size(), 0);
        Test.assertEquals(queue.dequeue(), undefined);
        Test.assertEquals(queue.size(), 0);
        Test.assertEquals(queue.dequeue(), undefined);
        Test.assertEquals(queue.size(), 0);
    });

    it("Should correctly enqueue and dequeue.", function() {
        queue.enqueue('Hello, there.');
        Test.assertEquals(queue.dequeue(), 'Hello, there.');
        queue.enqueue('Okay, bye.');
        Test.assertEquals(queue.dequeue(), 'Okay, bye.');
    });

});

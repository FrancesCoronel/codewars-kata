describe("linkedList", function() {

    var linkedList;

    before(function() {
        linkedList = new LinkedList();
    });

    it("The linked list should have 'addToTail', 'removeHead', and 'search' method functions.", function() {
        Test.expect(linkedList.addToTail, "'addToTail' is not defined.");
        Test.expect(linkedList.removeHead, "'removeHead' is not defined.");
        Test.expect(linkedList.search, "'search' is not defined.");
    });

    it("The linked list should have an undefined head and tail upon initialization.", function() {
        Test.assertEquals(linkedList.head, undefined);
        Test.assertEquals(linkedList.tail, undefined);
        Test.assertEquals(linkedList.removeHead(), undefined);
    });

    it("The linked list should not be able to add an undefined node.", function() {
        Test.assertEquals(linkedList.addToTail(), undefined);
    });

    it("The linked list should have a Node class defined to represent a node.", function() {
        Test.expect(Node, "'Node' class is not defined.");
    });

    it("The linked list should have a Node class that can take a value argument and have defined next and previous to be null.", function() {
        var node = new Node("Testing");
        Test.assertEquals(node.value, "Testing");
        Test.assertEquals(node.next, null);
        Test.assertEquals(node.previous, null);
    });

});

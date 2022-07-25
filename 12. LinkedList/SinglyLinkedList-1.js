

/* LinkediList
    1. While an array is indexed, a linkediList is not indexed
    2. It is a data structure that contains a head, tail, length
    3. Consists of nodes ,where each node has a value & a pointer to other node 
*/

/* 
    1. We need to have multiple nodes. 
        Hence we will have a Class which will create our Node

*/

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

// This is bad way of creating linked list
// We will define a linked List class to make this cleaner

let firstNode = new Node("hii")
firstNode.next = new Node("hiiii")
firstNode.next.next = new Node("hiiii")
firstNode.next.next.next = new Node("there")

console.log("first---", firstNode)
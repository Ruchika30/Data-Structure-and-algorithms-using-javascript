

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null

    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
}


const tree = new BinarySearchTree()
tree.root = new Node(10)
tree.root.left = new Node(8)
tree.root.right = new Node(15)

tree.root.left.right = new Node(9)

/* Inserting like this is diffilcut hence we will see insertion in a tree next ,
 which will handle all comparisons etc */
console.log("tree---", tree)
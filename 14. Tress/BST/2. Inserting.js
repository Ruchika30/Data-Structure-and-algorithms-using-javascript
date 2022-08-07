

class Node {
    constructor(value) {
        this.value = value
        this.right = null
        this.left = null
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.root == null) {
            this.root = newNode
            return this
        }
        else {
            let currentNode = this.root

            while (true) {
                if (value > currentNode.value) { // It will go on right 
                    // Check if there is a node on right already
                    // If not then, new node will be on the right
                    if (currentNode.right == null) {
                        currentNode.right = newNode
                        return this
                    }
                    /* If there is some node already, then keep moving on right,
                        until we find null to add our value 
                     */
                    currentNode = currentNode.right
                }
                else if (value < currentNode.value) { // It will go on left 
                    // Check if there is a node on left already
                    // If not then, new node will be on the left
                    if (currentNode.left == null) {
                        currentNode.left = newNode
                        return this
                    }
                    /* If there is some node already, then keep moving on right,
                        until we find null to add our value 
                     */
                    currentNode = currentNode.left
                }
            }

        }
    }
}

//            10
//      5            13    
//   2    7      11     16

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(2)
tree.insert(7)
tree.insert(11)
tree.insert(16)
console.log("tree--", JSON.stringify(tree))
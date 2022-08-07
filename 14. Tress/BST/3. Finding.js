/* 
FINDING
is same as inserting. Just that we have to return 
the node if u find it

•Starting at the root
  - Check if there is a root,if not-we're done searching!
  - If there is a root,check if the value of the new node is the value we are looking for.
    If we found it,we're done!
  - If not,check to see if the value is greater than or less than the value of the root
  - If it is greater
      - Check to see if there isanode to the right
         - If there is,move to that node and repeat these steps
         - If there is not,we're done searching!

  - If it is less
     - Check to see if there isanode to the left
        - If there is,move to that node and repeat these steps
        - If there is not,we're done searching!

*/

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

    find(value) {
        if (this.root == null) {
            return
        }

        else {
            let current = this.root

            while (true) {
                if (value == current.value) {
                    return current
                }
                else if (value > current.value) {
                    // move right
                    if (current.right == null) {
                        return
                    }
                    current = current.right
                }
                else if (value < current.value) {
                    // move left
                    if (current.left == null) {
                        return
                    }
                    current = current.left
                }
            }

        }
    }

}

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(13)
console.log("hey---", tree.find(13))
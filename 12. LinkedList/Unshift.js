

/* 
    UNSHIFT - Adding the item on left

    - The function should accept the value
    - Create a newNode using the value passed to the function
    - If there is no head in list, set the newly created node to be the head & tail both   
    - Else set the newly created node's next to the current head
    - Set the head on the list to be that newly created node
    

*/

class Node {
    constructor(val) {
        this.value = val
        this.next = null
    }
}

/* 
    At the beginning, head & tail point to null
 */
class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }



    push(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        }
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this

    }



    pop() {
        if (!this.head) {
            return undefined
        }

        let current = this.head
        let secondLast = current

        while (current.next) {
            secondLast = current
            current = current.next
        }

        this.tail = secondLast
        this.tail.next = null
        this.length--

        if (this.length == 0) {
            this.head = null
            this.tail = null
        }
        return current
    }

    shift() {
        if (!this.head) {
            return undefined
        }

        let currentHead = this.head
        this.head = currentHead.next

        this.length--

        if (this.length == 0) {
            this.tail = null
        }
        return currentHead

    }

    unshift(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        }
        newNode.next = this.head
        this.head = newNode
    }
}


const list = new SinglyLinkedList()

list.push("heyy")
list.push("Ruchiks")

list.unshift('GM!!')
// console.log("after unshift--", list)
console.log("before--", JSON.stringify(list))




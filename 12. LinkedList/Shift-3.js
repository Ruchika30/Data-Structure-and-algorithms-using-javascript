

/* 
    SHIFTING - Removing the item from left

    - If there are no nodes, return undefined
    - Store the current head in a variable
    - Set the head property to the current head's next 
    - Decrement length by 1
    - Return current head removed

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
}


const list = new SinglyLinkedList()

list.push("heyy")
list.push("Ruchiks")
// list.push("sood")
// list.push("how are you")
// console.log("list--", list)
console.log("before--", list)

list.shift()
list.shift()
list.shift()
console.log("after--", list)

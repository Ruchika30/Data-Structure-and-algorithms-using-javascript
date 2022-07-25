

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


    /*  PUSH
        - The function should accept that value
        - Create a node using that passed value to the function
        - If list is empty, (ie. no head), set the head & tail to the newly created node
        - Else set the next property on the current tail to be the new node, &
          set the tail property on the list to be the newly created node
        - Increment the length by one
    
    */
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


    /* POP
    - We just cannot pop of the last item & assign the second last as tail. that is not possible, 
        as we dont have a track of the second last item
    - For popping an item, we have to update the tail node
    - For getting that we have to TRAVERSE the whole linkedlist, with 2 variables,
        one which will keep track of last & other of second last
    - Hnece we will have traverse function
   
    */



    /* POP PESUDO CODE
    - If the length is zero, or no head then return undefined
    - Loop through until we reach the tail
        {
            Is this current end of list ?
                (If not then move ahead both, the current node, newTail which will be our second last node)
                (If yes, then I dont move my current node, & my newTail will be tail then & I will pop off my current )

        }
    - Set the next of the second last node to be null
    - Set the second last node to be the tail
    - Decrement the length by 1
    - Return the value of node that is removed (that means store it somewhere) 


                Hello => Ruchika => there?
    1st time  - curr
                newTail
    
    2nd time -            curr
                newTail 


    3rd time -                      curr
                         newTail
    */

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
}


const list = new SinglyLinkedList()

list.push("heyy")
list.push("Ruchiks")
// list.push("sood")
// list.push("how are you")
console.log("list--", list)
list.pop()
// list.pop()
// list.pop()
// list.pop()
console.log("listThen--", list)

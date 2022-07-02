/* 

Binary search

1. The function accepts a sorted array &  a value
2. Create a left pointer at the start of the array
3. Right pointer at the end of array
4. while the left pointer is lesser than the right pointer,
    a. Find the middle
    b. If you find the value you want equals middle, return index
    c. If the value is lesser than middle, move the pointer to right
    d. If the value is more than middle, move the pointer to left
    e. If value not found return -1

*/

function binarySearch(list, value) {
    let start = 0
    let end = list.length - 1

    while (start <= end) {
        let middle = Math.floor((start + end) / 2)
        console.log("vall--", start, end, middle)

        if (value == list[middle]) {
            return middle
        }

        else if (value < list[middle]) {
            end = middle - 1
        }
        else if (value > list[middle]) {
            start = middle + 1
        }



    }
    return -1



}


console.log(binarySearch([1, 2, 3, 4, 5], 2))
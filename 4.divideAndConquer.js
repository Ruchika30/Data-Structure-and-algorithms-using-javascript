/* 
Given a sorted array, write a funtion called search, that accepts a value & 
return the index of the number passed to the function. If not found pass -1


Naive soln (Linear search)
- Compare to every number, if yes then return index, ie. O(n) & remeber it is sorted

Good soln (Binary search) - Divide & conquer
- find the middle value in array
- compare it with the number and pick right/ left subarray 
*/


const search= (arr, numberToFind) =>{
const newarray =[]
let min = arr[0]
let max = arr[arr.length-1] 

while(min <= max){
    const middleIndex = Math.floor((min+ max)/2)
    const middleElement = arr[middleIndex]

    if(numberToFind < middleElement){
        max = middleIndex-1
    }

    else   if(numberToFind > middleElement){
        min = middleIndex+1
    }

   else  return middleIndex
}
   

   return -1
}


console.log(search([1,2,3,4,5,6, 7, 8, 9 ,10], 3) )  //2
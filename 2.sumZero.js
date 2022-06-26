
// Shift+opt+A

/* Find the pair which sum to zero from the array, in a new array

- Create 2 pointers , ie. start, end 
- If sum is eql to 0, then push it in array
- If sum is more than 0, then do end--
- If sum is less than 0, then do start++

*/

const sumZero =(arr) =>{
    let start =0 
    let end = arr.length-1
    let sum=0
    const validPairs =[]

       while(start<end){
            sum = arr[start] + arr[end]
           if(sum==0){
            return [arr[start], arr[end]]
           }

           else if(sum>0){
               end--
           }
           else {
            start++
           }
       }
}


console.log(sumZero([-3,-2,-1,0,1, 2, 3]))
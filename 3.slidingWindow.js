/* 
Siding window patterns
1. Find range having largest sum in array
2. Find largest range of unique characters

Naive solution 
1. Creating an outer loop till n 
2. Creating a n inner loop wch will keep chking the sum of numberfs in window

Good soln(below):
1. Find sum of window (3 mos)
2. Move window to rigt , so add number next to it & subtract the first number of that window
            2,9,6,7,2,3,4,2,1,3,4,4
1st pass    -   -
2nd pass      -   -

In 2nd pass,from the previous sum,  remove 2, add 7
*/

const maxSum =(arr, num) =>{
    let maxSum =0 
    let tmpSum =0 

    if(arr.length<num)
        return null

    for(let i=0; i< num ;i++){
        maxSum= maxSum+ arr[i]
    }

    tmpSum = maxSum

    for(let i=num; i < arr.length ;i++){
        tmpSum= tmpSum + arr[i] - arr[i-num]
        maxSum = Math.max(tmpSum, maxSum)
    }

    return maxSum
}

console.log(maxSum([2,9,6,7,2,3,4,2,1,3,4,4], 3))
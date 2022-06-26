 

/* 
    Count Unique values in aray

    // Method 1 - using Set 
    //  Method 2 - 
        - IF set is not allowed, then have 2 pointers, i, j 
        - i points to arr[0], j points to arr[1]
        - If arr[i] eqls, arr[j], then j++
        - At some point, when  arr[i], is not equal to arr[j], then store that new value at arr[i+1]  & i++
        - basucally "i" will maintain count of all unique numbers on left of array
 */

// ------- method 1 -------
    const unique =(arr) =>{
        const value = new Set(arr)
        return value
    }


console.log(unique([1,1,1,1,2,3]))


// ------- method 2 -------

const Unique = (arr) =>{
    let i =  arr[0]
    let j = arr[1]

  
    while(j < arr.length){      
        if(arr[i]==arr[j]){
            j++
        }
        else {
        arr[i+1] = arr[j]
        i++
        }

        console.log("arr[i]", arr[i], "arr[j]", arr[j], "i", i, "j", j)
    }
  
    return i

}
console.log(Unique([1,1,1,1,2,3]))


/* 

1. Two loops will be passing throught the entire array
2. For every iteration, j will chk the current value & next 
    value in the array
3. Swap the value, if the adjacent value is greater than the current value
4. With every iteration one value will be sorted & loved to the end of the array
4. Keep moving until the end of array

*/


/* Naive method , where we make already sorted comparisons as well, which can be avoided */
const bubbleSorting = (arr) => {
    let temp;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
            }
        }
    }
    console.log("arr---", arr)
}

bubbleSorting([17, 19, 2, 3, 49])

// Optimised method
/* 
    1. If there are 5 numbers , then number of comparisons needed is 4.
        When i=5, j =4
        After 1st iteration, [ 17, 2, 3, 19, 49 ]

    2. For next iteration, number of comparisons needed is 3, because one number is already sorted
         After 2nd iteration, [ 2, 3, 17, 19, 49 ]
         Now When i=4, j =3
         & so onn

 */
const bubbleSortingFn = (arr) => {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            console.log("comparing ---", arr[j], arr[j + 1])
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
            }
        }
        console.log("pass", i, arr)
    }

    return arr
}

bubbleSortingFn([17, 19, 2, 3, 49])
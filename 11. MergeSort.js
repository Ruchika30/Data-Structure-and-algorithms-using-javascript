




/* Merging 2 sorted arrays 
 1. Take one number from 1st array, 1 number fron 2nd array
 2. Compare them both
 3. If the number from 1st array is lesser than the one from 2nd array, then push the first to result array
 4. Move to next number of first array , (i++)
 5. If the number from 2nd array is lesser than the one from 1st array, then push the number from 2nd array to result array
 6. Increase the pointer (j++)
 7. Repeat the same until any of the array.length is reached
 8. Push all the remaining elememts from the another array whose length is not yet reached

*/
function MergeTwoSortedArrays(arr1, arr2) {
    let result = []
    let i = 0
    let j = 0
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i])
            i++
        }
        else if (arr1[i] > arr2[j]) {
            result.push(arr2[j])
            j++
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i])
        i++
    }

    while (j < arr2.length) {
        result.push(arr2[j])
        j++
    }

    return result


}

/*  MERGE SORT
1. Takes the array, checks base condition,ie.array length should be 1, but for [10, 24, 76, 73] it fails 
2. Finds the mid, ie.2 , 
    mid - arr[2] is 76
    left - arr[10, 24]
    Calls mergeFN again.
3. Checks if array length is 1 , but fails for [10, 24]
4. Finds 
    mid  - arr[1] is 24
    left  - [10]
   Calls mergeFN agian
5. This time array length is 1 , return the array, [10]
    right for the same ([10, 24]) is [24]
6. Calls MergeTwoSortedArrays([10], [24])  -- gets [10, 24]
    Same thing happends with  [73, 76]
7 . And then finally we have,
    MergeTwoSortedArrays( [10], [24], [73, 76])  - gets [ 10, 24, 73, 76 ]


 */
function mergeFN(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)

    let left = mergeFN(arr.slice(0, mid))
    let right = mergeFN(arr.slice(mid))
    // console.log(mid, right, left)
    return MergeTwoSortedArrays(left, right)

}

console.log(mergeFN([10, 24, 76, 73]))
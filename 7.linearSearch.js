
/* Write funtion linearsearch, wch accepts an array & value & returns the index at which the value exists. 
If not found return -1 */

function linearSearch(list, value) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] == value) {
            return i
        }
    }
    return -1
}

console.log(linearSearch([10, 15, 20, 25, 30], 15))
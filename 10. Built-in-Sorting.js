


function compareValues(str1, str2) {
    console.log("length---", str1.length - str2.length, str1, str2);
    return str1.length - str2.length
}

function compareNumbers(num1, num2) {
    console.log("numbers---", num1, num2)
    return num1 - num2
}
// With this, the value returned is [ 'Diamond', 'Ruby', 'coal', 'steeel' ], which is not right
const values = ["steeel", "coal", "Diamond", "Ruby"].sort()
//[ 'Diamond', 'Ruby', 'coal', 'steeel' ]

const comparedValues = ["steeel", "coal", "Diamond", "Ruby"].sort(compareValues)
// [ 'coal', 'Ruby', 'steeel', 'Diamond' ]


const compareNumbersValue = [19, 3, 2, 17, 49].sort(compareNumbers)
//[ 2, 3, 17, 19, 49 ]


const sortValues = [19, 3, 2, 17, 49].sort()
// incorrect [ 17, 19, 2, 3, 49 ]
// JS converts numbers to strings & finds their unicode values
console.log("values", sortValues)
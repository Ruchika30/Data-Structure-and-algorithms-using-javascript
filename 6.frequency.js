
/* Sqr of every item should be prsent in another

same([1,2,3] ,[4,1,9 ]) //true
same([1,2,3] ,[4,1 ])   //false

method 1
1. Avoid chking every squared item in another arrays . That will be O(n2)

method 2
2. Create 2 different arrays of key value pairs, having the number & its freq
3. Sqr of every key, shud be present in another
4. And the freq of them shud also be equal

ie: {1: 1, 2: 1, 3: 1}
    {1: 1, 4: 1, 9: 1}   // true


    key of - keys of array
    key in - key of object
*/



const findSquare=(input, output)=>{
    let inputFreq = {}
    let outputFreq = {}

    if(input.length != output.length){
        return false
    }

    for(let key of input){
        inputFreq[key] = (inputFreq[key] || 0) +1
    }

    for(let key of output){
        outputFreq[key] = (outputFreq[key] || 0) +1
    }
  

  for(let key in inputFreq){
      if(!(key**2 in outputFreq)){
        return false
      }

      if(inputFreq[key] !== outputFreq[key**2]){
        return false
      }
  }

    console.log("values--", outputFreq, inputFreq);
    return true

}


console.log(findSquare([1,2,3] ,[4,1,9] ))
console.log(findSquare([1,2,3] ,[4] ))
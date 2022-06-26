
const arraysEqual=(t1, t2) =>{
    if(t1.length != t2.length){
        return false
    }
    if (!Array.isArray(t1) || !Array.isArray(t2)) return false;

    for(let i=0; i<t1; i++){
        if(t1[i] != t2[i]){
            return false
        }
    }

            return true
}

const checkAnagrmas = (string1, string2) =>{

    const t1 = string1.split('').sort()
    const t2 = string2.split('').sort()
    console.log("j--", t1, t2)
    return arraysEqual(t1, t2)
}


console.log(checkAnagrmas('agag', 'ggaa'))
console.log(checkAnagrmas('agag', 'allal'))
// non-repeating el in an array :
function nonRepeating(arr){
 let freq={}
 let nonRepeating=[];
 for(let i=0;i<arr.length;i++){
    if(freq[arr[i]]){
        freq[arr[i]]++
    }
    else{
        freq[arr[i]]=1
    }
 }
 for(let key in freq){
    if(freq[key]===1){
        nonRepeating.push(Number(key))
    }
 }
 return nonRepeating
}
console.log(nonRepeating([1,2,3,4,2,1]))

// using XOR :

function findUnique(arr){
 let result=0;
 for(let num of arr){
    result^=num
 }
 return result
}
console.log(findUnique([1,2,3,2,1]))
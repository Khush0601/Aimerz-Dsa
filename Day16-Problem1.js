// given array where duplicates exist find them

function duplicates(arr){
arr.sort((a,b)=>a-b)

let duplicates=[];

for(let i=0;i<arr.length;i++){
    if(arr[i]===arr[i+1] && !duplicates.includes(arr[i])){// dupliactes agr same element contain kr rha hoga toh nhi krega
        duplicates.push(arr[i])
    }
}
return duplicates

}
console.log(duplicates([4,2,1,5,2,3,1,6]))


//alternate method

function findDuplicates(arr){
let freq={}
let dupliactes=[]

for(let num of arr){
    if(freq[num]){
        freq[num]=freq[num]+1
    }
    else{
        freq[num]=1
    }
}

for(let key in freq){
   if(freq[key]>1){
    dupliactes.push(Number(key))
   }
}
return dupliactes
}
console.log(findDuplicates([4,2,1,5,2,3,1,6]))
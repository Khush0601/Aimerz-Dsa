//sort an array containing o's and 1's

function sortBinaryArray(arr){
   let countZero=0

   for(let num of arr){
    if(num===0){
        countZero++
    }
    
   }
   for(let i=0;i<arr.length;i++){
    if(i<countZero){
        arr[i]=0
    }
    else{
        arr[i]=1
    }
}
   return arr
}
console.log(sortBinaryArray([0,1,1,1,0,1,0,0,1]))
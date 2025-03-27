// given an array find the el which repeats first in the array:

function firstRepeatt(arr){
   let n=arr.length;
   let count=new Array(n).fill(0);

   for(let num of arr){
    count[num]++
   }

   for(let num of arr){
    if(count[num]>1){
        return num
    }
   }
   return -1
}
console.log(firstRepeatt([3,5,1,1,6,7,8,6,4,3,2]))


//alternate method:

function firstRepeat(arr){
 let freq={}
 // first repeating dena hai 
 for(let num of arr){
    // already exist kr rha hai number phir aaya toh return kr do num q ki first repeating chyie
    if(freq[num]){
        return num
    }
    freq[num]=1 // matlb ek baar aa gya
 }
 return -1
}
console.log(firstRepeat([3,5,1,1,6,7,8,6,4,3,2]))


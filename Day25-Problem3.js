// majority el in array
function majority(arr){
    let freq={}
    let majorityCount=Math.ceil(arr.length/2);
    for(let i=0;i<arr.length;i++){
       if(freq[arr[i]]){
           freq[arr[i]]++
       }
       else{
           freq[arr[i]]=1
       }
    }
    for(let key in freq){
     if(freq[key]>=majorityCount){
        return Number(key)
     }
    }
    return -1
   }
   console.log(majority([3,3,4,2,4,4,2,4,4]))
// given arr, check whether el is in non-decreasing order or not means ascending order or not

function pairwise(arr){
   for(let i=0;i<arr.length;i++){
    if(arr[i]>arr[i+1]){
        return false;
    }
    else{
        return true
    }
   }
}
console.log(pairwise([8,2,4,5,6]))
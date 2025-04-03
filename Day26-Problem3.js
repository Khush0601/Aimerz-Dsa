//count the inversions and return the count nd inversion pairs:
// i<j and arr[i]>arr[j]
function countInversions(arr){
   let count=0;
   let inversionPairs=[];
   for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            count++;
            inversionPairs.push([arr[i],arr[j]])
        }
    }
   }
   return {count,inversionPairs}
}
console.log(countInversions([2,4,1,3,5]))
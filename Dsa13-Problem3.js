// count Inversions in an array
function countInversion(arr){
let count=0;
let n=arr.length;
let Inversions=[];

for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
        if(arr[i]>arr[j]){
            count++
            Inversions.push([arr[i],arr[j]])
        }
    }
}
return {count,Inversions}
}
console.log(countInversion([2, 4, 1, 3, 5]))
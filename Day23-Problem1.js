// find the kth smallest el 
// bubble sort 
function kthSmallestt(arr,k){
   for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr.length-i-1;j++){
        if(arr[j]>arr[j+1]){
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
   }
   return arr[k-1]
}
console.log(kthSmallestt([7,10,4,3,20,15],3))


// quick sort:

function quickSort(arr){
    if(arr.length<=1){
        return arr
    }

    let pivot=arr[arr.length-1]
    let left=[];
    let right=[];

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

function kthSmallest(arr,k){
  let sortedArr=quickSort(arr)
  return sortedArr[k-1]
}
console.log(kthSmallest([7,10,4,3,20,15],3))
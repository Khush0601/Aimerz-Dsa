// selection sort

function selection_sort(arr){
   for(let i=0;i<arr.length;i++){
    //i indicates the index where smallest el from i till last index has to be swapped 
    //find the smallest el from ith index till the last index
    
    let smallestIndex=i
    for(let j=i+1;j<arr.length;j++){
        if(arr[j]<arr[smallestIndex]){
            smallestIndex=j
        }
    }
    //smallest index will reperesent the index of smallest el
    //swap this el with the el at i
    let temp=arr[i] // smallest el hai isiliye
    arr[i]=arr[smallestIndex]
    arr[smallestIndex]=temp

   }
}

const arr=[3,5,2,1,4]
selection_sort(arr)
console.log(arr)
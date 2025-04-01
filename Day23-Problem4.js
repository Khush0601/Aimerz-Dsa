//find the 1st and last occurence of an element in a sorted array:

function findFirstAndLast(arr, target) {
    let firstIndex=-1
  for(let i=0;i<arr.length;i++){
   if(firstIndex===-1){
     firstIndex=i
   }
  }
  return firstIndex
}
console.log(findFirstAndLast([2, 4, 4, 4, 6, 7, 8], 4))
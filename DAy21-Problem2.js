//searching in an array whre adjacent differ by k:
//by linear search
function searchElement(arr,k,x){
  let i=0;
  while(i<arr.length){
    if(arr[i]===x){
        return i
    }
    let step=Math.max(1,Math.abs(arr[i]-x)/k);
    i+=step;
  }
  return -1
}
console.log(searchElement([10, 20, 30, 40, 50, 60, 70, 80],10,70))

// alternate :
function searchElement(arr,k,x){
   for(let i=0;i<arr.length;i++){
    if(arr[i]===x){
        return i
    }
   }
   return -1
  }
  console.log(searchElement([10, 20, 30, 40, 50, 60, 70, 80],10,70))

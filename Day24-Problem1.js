// rotate an array by k position:

function leftRotation(arr,k){
  let initialEl=arr.slice(0,k)
  let restEl=arr.slice(k)
  let newArr=[...restEl,...initialEl]
  return newArr
} 
console.log(leftRotation([1,2,45,44,3,4,5],4))
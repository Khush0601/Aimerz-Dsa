//binary search by recursion

function binary_search_rec(arr,target,left,right){
//base condition
if(left>right){
    return -1
}
let mid=left+Math.floor((right-left)/2)
if(arr[mid]==target){
    return mid;
}
else if(arr[mid]>target){
    right=mid-1;
   return  binary_search_rec(arr,target,left,right)
}
else{
    left=mid+1;
  return   binary_search_rec(arr,target,left,right)
}
}
console.log(binary_search_rec([1,2,3,4,5,6],4,0,5))
//search the el in a rotated sorted arr: given arr and target find the index of target el
// linear search
function searchInRotatedArr(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i
        }
    }
    return -1;
}
console.log(searchInRotatedArr([4,5,6,7,0,1,2],0))

//by binary search:

function searchInRotatedArr(arr,target){
let left=0;
let right=arr.length-1;
while(left<=right){
    let mid=Math.floor((left+right)/2)
    if(arr[mid]===target){
        return mid;
    }
    if(arr[left]<=arr[mid]){
      if(target>=arr[left] && target<arr[mid]){
        right=mid+1;
      }
      else{
        left=mid-1;
      }
    }
    else{
        if(target<=arr[right] && target>arr[mid]){
            left=mid+1;
          }
          else{
            right=mid-1;
          }
    }
}
return -1
}
console.log(searchInRotatedArr([4,5,6,7,0,1,2],0))

// binary_Search

function binary_search(arr,target){
    let left=0;
    let right=arr.length;

    while(left<=right){
        let mid=left+Math.floor((right-left)/2);
        if(arr[mid]==target){
            return mid;
        }
        else if(arr[mid]>target){
            right=mid-1;
        }
        else{
            left=mid+1;
        }
    }
    return -1;
}
console.log(binary_search([1,2,3,4,5],3))
//array initially sorted rotate x no of times:

function rotation_count_optimized(arr,left,right){
    // base condition:

    if(left > right){
        return 0;
    }
    // mid index:

    let mid=Math.floor(left+(right-left)/2);

    if(mid>left && arr[mid-1]>arr[mid]){
        return mid;

    }
    if(mid<right && arr[mid+1]<arr[mid]){
        return mid+1;
    }

    if(arr[right]>arr[mid]){
        return rotation_count_optimized(arr,left,mid-1)
    }
    else{
        return rotation_count_optimized(arr,mid+1,right)
    }
}
console.log(rotation_count_optimized([15,18,2,3,6,12],0,5))
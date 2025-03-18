function merge_sort(arr,left,right){
    //base condition
    if(left>=right){
        return
    }
    //divide the array into two parts

    let mid=Math.floor((left+(right-left)/2))

    // recursively sort them
    merge_sort(arr,left,mid)
    merge_sort(arr,mid+1,right)

    // merge them
    merge_sort(arr,left,mid,right)
}

function merge(arr,left,mid,right){
    let temp=[]
    let temp_i=0
}

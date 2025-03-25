// quick sort
function quick_sort(arr,left,right){
    //base condition
    if(left>=right){
        return
    }
    //find the pivot_index
    //index left to its all small and right to it is all big

    let pivot_index=partition(arr,left,right);
    quick_sort(arr,left,pivot_index-1)
    quick_sort(arr,pivot_index+1,right)
}

function partition(arr,left,right){
    let pivot_el=arr[right];
    p_i=left-1;
    for(let i=left;i<right;i++){
        if(arr[i]<pivot_el){
            p_i++;
            //swap the el
            [arr[p_i],arr[i]]=[arr[i],arr[p_i]]
        }
    }
    // i need to swap the el at i+1 & right index
    [arr[p_i+1],arr[right]]=[arr[right],arr[p_i+1]];
    return p_i+1;
}


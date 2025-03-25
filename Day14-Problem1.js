// merge Sort

function merge(arr,left,mid,right){
    let temp=[]
    let temp_i=0;
    let i=left;
    let j=mid+1;
    while(i<=mid && j<=right){
      if(arr[i]<arr[j]){
        temp[temp_i]=arr[i];
        i++;
        temp_i++;
      }
      else{
        temp[temp_i]=arr[j];
        j++;
        temp_i++;
      }
    }

    while(i<=mid){
        // if the el in the left part r still left to be inserted to the temp_arr
        temp[temp_i]=arr[j]
        i++;
        temp_i++;
    }
    while(j<=right){
        temp[temp_i]=arr[j];
        j++;
        temp_i++;
    }
    // copy the temp_arr into original arr
    for(let i=0;i<arr.length;i++){
        arr[i]=temp[i]
    }
}


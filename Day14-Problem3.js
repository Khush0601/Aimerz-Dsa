//count_sort
function count_sort(arr){
    let max=arr[0]
    for(let i=1;i<arr.length;i++){
        max=Math.max(max,arr[i]);

    }
    const count_arr=new Array(max+1).fill(0);
    for(let i=0;i<arr.length;i++){
        count_arr[arr[i]]+=1;
    }
    for(let i=1;i<count_arr.length;i++){
        count_arr[i]+=count_arr[i-1];
    }

    const output_arr=new Array(arr.length);
    for(let i=arr.length-1;i>=0;i--){
        output_arr[count_arr[arr[i]]-1]=arr[i];
        count_arr[arr[i]]--;
    }
    return output_arr
}
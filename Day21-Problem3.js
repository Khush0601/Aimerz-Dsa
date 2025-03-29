// count Inversions of size three in a given arary whre arr[i]>arr[j]>arr[k]

function countInversion(arr){
    let n=arr.length;
    let newArr=[]
    let count=0;
   
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            for(let k=j+1;k<n;k++){
                if(arr[i]>arr[j] && arr[j]>arr[k]){
                   newArr.push([arr[i],arr[j],arr[k]])
                  
                    count++;
                }
            }
        }
    }
    return newArr
}
console.log(countInversion([4, 3, 2, 1]))
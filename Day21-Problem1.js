//equilibrium index of an array:

function equilibrium(arr){
    let totalSum=arr.reduce((sum,num)=>sum+num,0);
    let leftsum=0;

    for(let i=0;i<arr.length;i++){
        if(leftsum===totalSum-leftsum-arr[i]){
            return i
        }
        leftsum+=arr[i]
    }
    return -1;
}

console.log(equilibrium([-7, 1, 5, 2, -4, 3, 0]))
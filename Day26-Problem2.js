// find largest sum contiguous subarray with at most one deletion:

function maxSumSubArray(arr){
let n=arr.length;
let maxSum=0;
//compute normal max subArray:
for(let i=0;i<n;i++){
    let currentsum=0;
    let maxSubArraySum=0;
    for(let j=i;j<n;j++){
        currentsum+=arr[j];// subarray sum
        maxSumSubArray=Math.max(maxSubArraySum,currentsum)// jis subarray ka max sum hoga wo store hoga
    }
    maxSum=Math.max(maxSum,maxSubArraySum)
}
//deleting each el nd find max sum:
for(let k=0;k<n;k++){
    let currentSum=0;
    let maxSubArraySum=0;
    for(let i=0;i<n;i++){
        if(i===k){
            continue;
        };
        currentSum=Math.max(arr[i],currentSum+arr[i]);
        maxSubArraySum=Math.max(maxSubArraySum,currentSum);

    }
    maxSum=Math.max(maxSum,maxSubArraySum)
}
return maxSum;
}
console.log(maxSumSubArray([1,-2,0,3]))
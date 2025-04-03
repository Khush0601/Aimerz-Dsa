//find the max.subarray sum nd return the subarray

function maxSubArray(arr){
  let maxSum=0;
  let maxSumSubArr=[];

  for(let i=0;i<arr.length;i++){
    let currentSum=0;
    let currentSubArr=[];
    for(let j=i;j<arr.length;j++){
        currentSum+=arr[j];
        currentSubArr.push(arr[j])
        
    }
    if(currentSum>maxSum){
        maxSum=currentSum;
        maxSumSubArr=[...currentSubArr]
    }
  }
  return {maxSum,maxSumSubArr}
}
console.log(maxSubArray([1, 2, 3, -2, 5]))
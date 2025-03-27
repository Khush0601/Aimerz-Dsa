//given n array of n elements sucth that sum of  3 elements should be equal to target

function threeSum(arr,target){
   arr.sort((a,b)=>a-b);
   let result=[]
   for(let i=0;i<arr.length-2;i++){
    let left=i+1;
    let right=arr.length-1;

    while(left<right){
        let sum=arr[i]+arr[left]+arr[right]
        if(sum===target){
         result.push(arr[i],arr[left],arr[right])
         left++;
         right--
        }
        else if(sum<target){
            left++;
           
        }
        else{
            right--
        }
    }
   }
   return result
}
console.log(threeSum([1, 4, 6, 8, 10, 45], 11));  
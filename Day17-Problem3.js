//given an array contains positive nd negatie num find two such num thats sum is closest to zero
//two pointer approach
function closestSumToZero(arr){
   arr.sort((a,b)=>a-b);
   let left=0;
   let right=arr.length-1;
   let closestSum=Infinity;
   let closestPair=[];

   while(left<right){
    let sum=arr[left]+arr[right];
    if(Math.abs(sum)<Math.abs(closestSum)){
        closestSum=sum;
        closestPair=[arr[left],arr[right]]
    }
    if(sum<0){
        left++
    }
    else{
        right--;
    }
   }
   return closestPair


}
console.log(closestSumToZero([-8, -5, -2, 3, 7, 10]))
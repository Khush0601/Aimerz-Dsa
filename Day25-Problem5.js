// array contains duplicate el within k distance:
function containsNearByDuplicate(nums,k){
let seen={};
for(let i=0;i<nums.length;i++){
    if(seen[nums[i]]!==undefined && i-seen[nums[i]]<=k){
        return true;
    }
    seen[nums[i]]=i;//store index of current number
    
}
return false;
}
console.log(containsNearByDuplicate([1,2,3,1,4,5], 4))
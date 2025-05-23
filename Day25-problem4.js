// longest consecutive subsequece in an array:

function longestConsecutive(nums){
if(nums.length===0){
    return 0
}
//sort the array:
nums.sort((a,b)=>a-b);
let maxLength=1;
let currentLength=1;

for(let i=1;i<nums.length;i++){
    if(nums[i]===nums[i-1]){
        continue;
    }
    else if(nums[i]===nums[i-1]+1){
        currentLength++;
    }
    else{
        maxLength=Math.max(maxLength,currentLength)
        currentLength=1;
    }
}
return Math.max(maxLength,currentLength)
}
console.log(longestConsecutive([100,4,200,1,3,2]))
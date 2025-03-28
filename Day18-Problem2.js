// majority El 

function majorityEl(nums){
let countMap={};
let n=nums.length;

for(let num of nums){
    if(countMap[num]){
        countMap[num]=countMap[num]+1
    }
    else{
        countMap[num]=1
    }
    if(countMap[num]>n/2){
        return num
    }
}
return null;
}
console.log(majorityEl([2,2,1,1,1,2,2]))
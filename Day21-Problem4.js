// trapping water 
// given n non-negative int.,representing an elevation map where the width of each bar is 1,
// compute how much water is able to trap after raning 

function trap(height){
    let left=0;
    let right=height.length-1;
    let leftMax=0;
    let rightmax=0;
    let totalwater=0;
    while(left<right){
        if(height[left]<height[right]){
            if(height[left]>=leftMax){
                leftMax=height[left]
            }
            else{
                totalwater=totalwater+leftMax-height[left]
            }
            left++;
        }
        else{
            if(height[right]>=rightmax){
                rightmax=height[right];
            }
            else{
                totalwater=totalwater+rightmax-height[right];
            }
            right--;
        }
    }
    return totalwater
}
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))

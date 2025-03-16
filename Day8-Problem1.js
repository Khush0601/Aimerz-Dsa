const subsets=(nums)=>{
    let res=[]
    function backtrack(start,path){
        res.push([...path])
        for(let i=start;i<nums.length;i++){
            path.push(nums[i])
            backtrack(i+1,path)
            path.pop()
        }
    }
    backtrack(0,[])
    return res
}
console.log(subsets([1,2,3]))
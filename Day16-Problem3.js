// missing no.

function missingNum(arr){
    let actualSum=0;
    let arrSum=0;
    for(let i=1;i<=arr.length+1;i++){
        actualSum+=i
    }
    for(let i=0;i<arr.length;i++){
        arrSum+=arr[i]
    }
    return actualSum-arrSum

}
console.log(missingNum([1,2,3,5,6,7]))

//alternate method:
function missingNumm(arr){
   let n=arr.length+1;
   let actualSum=n*(n+1)/2;
   let arrSum=arr.reduce((acc,curr)=>acc+curr,0)
   return actualSum-arrSum

}
console.log(missingNumm([1,2,3,5,6,7]))

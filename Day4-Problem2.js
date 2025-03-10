//countOf oddNumber in interval range

function CountOddNum(low,high){
    let count=0;
    for(let i=low;i<=high;i++){
        if(i%2!==0){
            count++
        }
    }
    return count
}
console.log(CountOddNum(5,7))
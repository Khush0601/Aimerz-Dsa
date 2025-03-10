//sum of first n natural number

function sumOfNaturalNum(n){
    let sum=0;
    for(let i=0;i<=n;i++){
        sum=sum+i
    }
    return sum
    // return (n*(n+1))/2
}
console.log(sumOfNaturalNum(12))



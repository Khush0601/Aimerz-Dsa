let result;
function CheckEvenOdd(n){
    if(n%2===0){
        result=`${n} is even`
    }
    else{
        result=`${n} is odd `
    }
    return result
}
console.log(CheckEvenOdd(5))
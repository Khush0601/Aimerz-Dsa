// factorial of a number

let factor=1;
function factorial(n){
    for(let i=1;i<=n;i++){
        factor=factor*i
    }
    return factor
}

console.log(factorial(5))
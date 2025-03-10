//LCM
//GCD
function findGcd(a,b){
    let gcd=1;
    for(let i=1;i<=Math.min(a,b);i++){
        if(a%i===0 && b%i===0){
            gcd=i
        }
    }
    return gcd
   
}

function findLcm(a,b){
    return Math.abs(a*b)/findGcd(a,b)
}

console.log(findLcm(9,32))
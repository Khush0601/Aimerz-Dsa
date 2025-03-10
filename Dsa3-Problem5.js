// print prime no upto n num
function isPrime(n){
    if(n<2){
        return false
    }
    if(n===2){
        return true
    }
     for(let i=2;i<n;i++){
            if(n%i===0){
                return false
            }
            
     }
        return true
    }


function printPrime(n){
 let primeNums=[]
 for(let i=2;i<=n;i++){
    if(isPrime(i)){
        primeNums.push(i)
    }
 }
 return primeNums
}
console.log(printPrime(40))
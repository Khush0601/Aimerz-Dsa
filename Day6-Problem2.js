// count the digits
function countdigits(n){
    if(n===0){
        return 0
    }
    return 1+countdigits(Math.floor(n/10))
}
console.log(countdigits(1234))
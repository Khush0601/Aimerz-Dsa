const myPow=(x,n)=>{
if(n===0){
    return 1
}
if(n<0){
    x=1/x;
    n=-n
}
let half=myPow(x,Math.floor(n/2))
return n%2===0?half*half:x*half*half
}
console.log(myPow(2,5))

// by manual method
const poww =(a,b)=>{
  return a**b
}
console.log(poww(2,5))

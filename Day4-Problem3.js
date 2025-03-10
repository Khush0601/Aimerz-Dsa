//reverseInteger-leetcode
function reverseInt(x){
    let rev=0;
    while(x!==0){
        let digit=x%10;
        x=(x/10) | 0;
        rev=rev*10 + digit;
}
return (rev<-(2**31)|| rev>(2**31)-1)?0:rev
}
console.log(reverseInt(-123))
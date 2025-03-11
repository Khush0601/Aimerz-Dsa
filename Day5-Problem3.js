//heap of coins
function moves(s,d,a,n){
    //base case
    if(n==1){
        return 1
    }
    //logic

    let step1=moves(s,d,a,n-1)
    let step2=1;
    let step3=moves(a,d,s,n-1);
    return step1+step2+step3
}

console.log(moves('s','d','a',3))
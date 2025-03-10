// fibonacci

function fibo(n){
    let arr=[0,1]
    let sum=0
    for(let i=2;i<n;i++){
       arr[i]=arr[i-1]+arr[i-2]
       
    }
    for(let el of arr){
        sum+=el
    }
    return sum
}
console.log(fibo(5))
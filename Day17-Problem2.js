// pythagoreanTriplet

function pythagoreanTriplet(arr){
    arr=arr.map((num)=>num*num).sort((a,b)=>a-b)

    for(let k=arr.length-1;k>=2;k--){
        for(let i=0;i<k-1;i++){
            for(let j=i+1;j<k;j++){
                if(arr[i]+arr[j]===arr[k]){
                    return [Math.sqrt(arr[i]),Math.sqrt(arr[j]),Math.sqrt(arr[k])]
                }
            }
        }
    }
    return []
}
console.log(pythagoreanTriplet([3,1,4,6,5]))
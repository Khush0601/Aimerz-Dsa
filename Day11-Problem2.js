//sort an array in wave form
function wave(arr){
    arr.sort((a,b)=>a-b)

    for(let i=0;i<arr.length-1;i+=2){
        [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
    }
    return arr
}
console.log(wave([10,5,6,3,2,20,100,80]))
//sort an array which contains 1 to n el
function inPlace(arr){
    let i=0;
    while(i<arr.length){
        let correctIndex=arr[i]-1;
        if(arr[i]!==arr[correctIndex]){
            [arr[i],arr[correctIndex]]=[arr[correctIndex],arr[i]]
        }
        else{
            i++
        }
    }
    
    return arr.join(' ')
}
console.log(inPlace([10,7,9,2,8,3,5,4,6,1]))
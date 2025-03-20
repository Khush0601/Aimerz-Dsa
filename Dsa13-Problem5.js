// sorting the array byfinding the min absolute difference blw the element :
function absDiff(arr) {
    let arr2 = [];
    let res=[]
    arr.sort((a, b) => a - b); // Sorting in ascending order

    for (let i = 0; i < arr.length - 1; i++) { 
        let diff = Math.abs(arr[i] - arr[i + 1]);
        arr2.push(diff);

    }
    let min=Math.min(...arr2)
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(Math.abs(arr[i]-arr[j])===min){
                res.push([arr[i],arr[j]])
            }
        }
    }
    
    return res
}

console.log(absDiff([3, 8, -10, 23, 19, -4, -14, 27])); 

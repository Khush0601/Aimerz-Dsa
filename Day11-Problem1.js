//alternate Sort
function alternativeSort(arr){
    arr.sort((a,b)=>a-b)
    let i=0;j=arr.length-1;
    let result=[]
    while(i<=j){
        if(j>=1){
            result.push(arr[j])
            j--
        }
        if(i<=j){
            result.push(arr[i])
            i++
        }
    }
    console.log(result.join(" "))

}
let arr1=[2,34,5,44,67,4,56]
alternativeSort(arr1)
//given arr and x:find the floor and ceil:

// function findFloorCei(arr,x){
//    let low=0;
//    let high=arr.length-1;
//    let floor=-1;
//    let ceil=-1;

//    while(low<=high){
//     let mid=Math.floor((low+high)/2);
//     if(arr[mid]===x){
//         return {floor:arr[mid],ceil:arr[mid]}
//     }
//     else if(arr[mid]<x){
//        floor=arr[mid];
//        low=mid+1
//     }
//     else{
//         //arr[mid]>x
//         ceil=arr[mid];
//         high=mid-1;
//     }
//    }
//    return {floor,ceil}
// }
// console.log(findFloorCei([1,2,8,10,10,12,19],5))

// alternate method:
function findFloorCei(arr,x){
let floor=-1;
let ceil=-1;
for(let i=0;i<arr.length;i++){
    if(arr[i]<x){
        floor=arr[i]
    }
    if(arr[i]>x){
        ceil=arr[i]
        break;
    }
}
return {floor,ceil}
}
console.log(findFloorCei([8,10,10,12,19],5))
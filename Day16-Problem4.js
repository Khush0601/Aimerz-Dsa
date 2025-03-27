// given arr, all no. occur an even no. of times except 1 which occurs an odd num of times 

function wiredNo(arr){
let result=0;
for(let num of arr){
    result=result^num
}
return result
}
console.log(wiredNo([1,2,3,2,3,1,3]))
//find the 1st and last occurence of an element in a sorted array:

function findFirstAndLast(arr, target) {
    let first = -1, last = -1;
 for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            if (first === -1){
                first = i; 
            }
            last = i; 
        }
    }

    return [first,last];
}
console.log(findFirstAndLast([2, 4, 4, 4, 6, 7, 8], 4))


// alternate method:
function findFirstAndLast(arr, target) {
   let first=arr.indexOf(target)
   let last=arr.lastIndexOf(target)
   return [first,last]
}
console.log(findFirstAndLast([2, 4, 4, 4, 6, 7, 8], 4))

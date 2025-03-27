// given an array of n elements.find two elements in the array such that their sum is equal to given el k

function twoNo(arr,k){
  let result=[];
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        let subArr=[]
        if(arr[i]+arr[j]===k){
            subArr.push(arr[i],arr[j])
            result.push(subArr)
        }
    }
  }
  return result
}
console.log(twoNo([1,4,6,8,10,45],14))

// quicksort

function quickSort(arr){
    if(arr.length<=1){
        return arr;
    }
    let pivot=arr[arr.length-1];
    let left=[];
    let right=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }

    }
    return [...quickSort(left),pivot,...quickSort(right)];
}

function findTwoSum(arr,k){
    arr = quickSort(arr); // First, sort the array
    let left = 0;
    let right = arr.length - 1;
    let result = [];
    while (left < right) { 
        let sum = arr[left] + arr[right];

        if (sum === k) {
            result.push([arr[left], arr[right]]);
            left++; 
            right--;
        } else if (sum < k) {
            left++;
        } else {
            right--;
        }
    }
    return result
}
console.log(findTwoSum([1,4,6,8,10,45],14))
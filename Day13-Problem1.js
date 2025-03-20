//merge an array of size n into another array of size m+n

function merge(nums1, m, nums2, n) {
    // Copy first m elements of nums1
    let mergedArray = nums1.slice(0, m).concat(nums2);

    // Sort the merged array
    mergedArray.sort((a, b) => a - b);

    // Copy back to nums1
    for (let i = 0; i < mergedArray.length; i++) {
        nums1[i] = mergedArray[i];
    }
    return nums1
}

console.log(merge([1, 2, 3, 0, 0, 0],3,[2, 5, 6],3)); 

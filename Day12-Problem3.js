function sortColors(nums) {
    let count0 = 0, count1 = 0, count2 = 0;

    // Count the occurrences of 0s, 1s, and 2s
    for (let num of nums) {
        if (num === 0) count0++;
        else if (num === 1) count1++;
        else count2++;
    }

    // Overwrite the array based on counts
    for (let i = 0; i < nums.length; i++) {
        if (count0 > 0) {
            nums[i] = 0;
            count0--;
        } else if (count1 > 0) {
            nums[i] = 1;
            count1--;
        } else {
            nums[i] = 2;
            count2--;
        }
    }
    return nums
}

// let nums = [2, 0, 2, 1, 1, 0];
// sortColors(nums);
console.log(sortColors([2, 0, 2, 1, 1, 0]));  // Output: [0, 0, 1, 1, 2, 2]

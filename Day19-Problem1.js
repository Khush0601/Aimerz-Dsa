// rotate k times the array 
function rotateArraySlice(arr, k) {
    let n = arr.length;
    k = k % n; // Optimize k to avoid extra rotations if k > n

    // Slice and rearrange
    return [...arr.slice(-k), ...arr.slice(0, n - k)];
}

// Test cases
console.log(rotateArraySlice([1, 2, 3, 4, 5], 2));

//alternate method

function rotateK(arr, k) {
    let n = arr.length;
    k = k % n; // Optimize k to avoid extra rotations if k > n

    let temp = []; // Temporary array to store last k elements

    // Step 1: Store last k elements in temp
    for (let i = n - k; i < n; i++) {
        temp.push(arr[i]);
    }

    // Step 2: Shift the first (n-k) elements to the right
    for (let i = n - k - 1; i >= 0; i--) {
        arr[i + k] = arr[i];
    }

    // Step 3: Copy elements from temp back to the beginning
    for (let i = 0; i < k; i++) {
        arr[i] = temp[i];
    }

    return arr; // Return the rotated array
}

// Test cases
console.log(rotateK([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]


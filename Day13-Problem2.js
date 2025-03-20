// sort 1 to N by swapping adjacent el
function mySortedArr(A, B) {
    let n = A.length;

    // Try swapping adjacent elements where B[i] is 1
    for (let i = 0; i < n - 1; i++) {
        if (B[i] === 1 && A[i] > A[i + 1]) {
            [A[i], A[i + 1]] = [A[i + 1], A[i]];
            i = Math.max(-1, i - 2); // Move back to recheck after swapping
        }
    }

    // Check if sorted
    return A.every((val, idx) => val === idx + 1);
}

// Test Case
console.log(mySortedArr([1, 2, 5, 3, 4, 6], [0, 1, 1, 1, 0]));  // Output: true

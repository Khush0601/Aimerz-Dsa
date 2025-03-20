// sort 1 to N by swapping adjacent el
function mySortedArr(A, B) {
    let n = A.length;
    let i = 0;

    while (i < n - 1) {
        if (B[i] === 1) {
            let j = i;
            while (j < n - 1 && B[j] === 1) {
                j++;  // Expand the swappable segment
            }

            // Sort only the allowed segment
            let segment = A.slice(i, j + 1).sort((a, b) => a - b);
            A.splice(i, segment.length, ...segment);

            i = j + 1; // Move to the next non-swappable region
        } else {
            i++;
        }
    }

    // Check if sorted
    for (let k = 0; k < n; k++) {
        if (A[k] !== k + 1) {
            return false;
        }
    }
    return true;
}

// Test Case
console.log(mySortedArr([1, 2, 5, 3, 4, 6], [0, 1, 1, 1, 0]));  // Output: true

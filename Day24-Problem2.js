function findPeakElement(grid) {
    let rows = grid.length;
    let cols = grid[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let current = grid[i][j];

            // Get neighbors (or -Infinity if out of bounds)
            let top = i > 0 ? grid[i - 1][j] : -Infinity;
            let bottom = i < rows - 1 ? grid[i + 1][j] : -Infinity;
            let left = j > 0 ? grid[i][j - 1] : -Infinity;
            let right = j < cols - 1 ? grid[i][j + 1] : -Infinity;

            // Check if it's a peak
            if (current >= top && current >= bottom && current >= left && current >= right) {
                return { value: current, row: i, col: j }; // Return first peak found
            }
        }
    }

    return "No peak element found";
}


let grid1 = [
    [10, 20, 15],
    [21, 30, 14],
    [7, 16, 32]
];
console.log(findPeakElement(grid1)); 


// sort an array according to the absolute difference with the given value
function abs(arr, x) {
    // Sort array based on absolute difference with x
    return arr.sort((a, b) => {
        let diffA = Math.abs(x - a);
        let diffB = Math.abs(x - b);
        
        return diffA - diffB; // Smaller difference first
    });
}

console.log(abs([2, 3, 4, 5, 6], 7));

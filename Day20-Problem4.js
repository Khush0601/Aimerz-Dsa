// find max zeros in matrix and return that row

function rowZeros(matrix){
let n=matrix.length;
let maxzeros=0;
let rowWithMaxZeroes=0;

for(let i=0;i<n;i++){
    let zeroCount=0
    for(let j=0;j<n;j++){
    if(matrix[i][j]===0){
        zeroCount++
    }
    }
    if(zeroCount>maxzeros){
        maxzeros=zeroCount;
        rowWithMaxZeroes=i
    }
}
return rowWithMaxZeroes
}
console.log(rowZeros([
    [0, 0, 0, 0, 0], 
    [1, 1, 0, 0, 0], 
    [1, 1, 1, 1, 0], 
    [1, 0, 0, 0, 0]
]))
// search matrix:

function searchMatrix(matrix,x){
  for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[0].length;j++){
        if(matrix[i][j]===x){
            return true
        }
       
    }
  }
  return false
}
console.log(searchMatrix([
    [1, 4, 7, 11],
    [2, 5, 8, 12],
    [3, 6, 9, 16],],7))
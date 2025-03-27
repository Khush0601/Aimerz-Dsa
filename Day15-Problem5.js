// num of rotations

function num_of_Rotations(arr){
  //index of the smallest element
  let s_i=0;
  for(let i=1;i<arr.length;i++){
    if(arr[i]<arr[s_i]){
        s_i=i
    }
  }
  return s_i
}
console.log(num_of_Rotations([15,18,21,25,12,14]))
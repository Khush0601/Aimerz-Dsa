// given array ,print frequencies without extra space

function printFrequencies(arr){
  arr.sort((a,b)=>a-b);

  let count=1;
  for(let i=1;i<=arr.length;i++){
    if(i<arr.length && arr[i]===arr[i-1]){
        count++;
    }
    else{
        console.log(arr[i-1]+" occured "+count);
        count=1;
    }
  }
  
}
console.log(printFrequencies([4,2,2,8,4,4,8,8]))
// sort elements by frequency
function sortOnFrequency(arr){
    let freqMap = {};

    // Count frequency of each element
    for (let i = 0; i < arr.length; i++) {
      if (freqMap[arr[i]]) {
        freqMap[arr[i]]++;
      } else {
        freqMap[arr[i]] = 1;
      }
    }
    arr.sort((a,b)=>{
        if(freqMap[a]>freqMap[b]){
            return -1
        }
      else if(freqMap[a]<freqMap[b]){
            return 1
        }
       else{
        if (a < b) {
            return -1; 
          } else if (a > b) {
            return 1;
          } else {
            return 0;
          }
       } 
    })
  return arr
}
console.log(sortOnFrequency([2,5,2,8,5,6,8,8]))
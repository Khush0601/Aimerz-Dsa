//find the median of two sorted arr
// given two sorted arr merge them nd find the median

function findMedian(arr1,arr2){
  let newArr=[...arr1,...arr2]
  newArr.sort((a,b)=>a-b)
  let median=Math.floor(newArr.length/2)
  return newArr[median]
}
console.log(findMedian([1,3,8],[7,9,10,11]))

// alternative method:

function findMedian(arr1,arr2){
    let newArr=[]
    for(let i=0;i<arr1.length;i++){
    newArr[i]=arr1[i]
    }

    for(let j=0;j<arr2.length;j++){
    newArr[arr1.length+j]=arr2[j]
     }

     newArr.sort((a,b)=>a-b)
     let median=Math.floor(newArr.length/2)
     return newArr[median]
    


}
console.log(findMedian([1,3,8],[7,9,10,11]))
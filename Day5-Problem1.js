// recursion ques-1 iterate the arr
function iterate(arr,sI){
 // base condition
 if(sI>=arr.length){
    return 
 }
 //logic
 console.log(arr[sI])
 // recursive call
 iterate(arr,sI+1)
}
iterate([1,2,3],0)
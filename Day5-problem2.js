//palindrome by recursion 
function palindrome(arr,sI,eI){
   //base condition
   if(sI>=eI){
    return true
   }
   //logic
   return arr[sI]==arr[eI] && palindrome(arr,sI+1,eI-1)
}
console.log(palindrome([1,2,3],0,2))
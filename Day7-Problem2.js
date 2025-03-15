function reverseString(arr){
  if(arr.length===1){
    return arr
  }
  return [arr[arr.length-1]].concat(reverseString(arr.slice(0,-1)))
}
console.log(reverseString(['h','e','l','l','o']))

// 
function reverse(s,left=0,right=s.length-1){
    
    
    if(left>=right){

        return s
    }
    [s[left],s[right]]=[s[right],s[left]]
   return reverse(s,left+1,right-1)
}
console.log(reverse(['h','e','l','l','o']))
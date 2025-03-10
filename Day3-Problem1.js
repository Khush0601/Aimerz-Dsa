// reverse the string
function reverseString(str){
    let reversedStr=''
    for(let i=str.length-1;i>=0;i--){
      reversedStr+=str[i]
    }
    return reversedStr
}
console.log(reverseString('what the hell'))

//alternative

function reverse(str){
  let reversed=''
  for(let char of str){
    reversed=char+reversed
  }
  return reversed
}
console.log(reverse('what the hell'))

//alternative
function reversing(str){
    
    let arr=str.split(' ')
    let reversed=arr.reverse()
    return reversed.join(' ')
}
console.log(reversing('what the hell'))
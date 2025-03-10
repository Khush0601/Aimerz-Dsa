// check palindrome or not

function Palindrome(n){
  let str=String(n)
  let reversedStr=str.split('').reverse().join('')
  let reversedNum=Number(reversedStr)
  return n===reversedNum?true:false
}
console.log(Palindrome(33))
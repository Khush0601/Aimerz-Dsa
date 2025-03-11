//isPalindrome
function isPalindrome(str,sI,eI){
if(sI>=eI){
    return true
}
return str[sI]===str[eI] && isPalindrome(str,sI+1,eI-1)
}
console.log(isPalindrome('maiii',0,4))
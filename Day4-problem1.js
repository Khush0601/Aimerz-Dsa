 //leetcode-fizzbuzz
 function fizzbuzz(n){
    
    let newArr=[]
    for(let i=1;i<=n;i++){
     if(i%3===0 && i%5===0){
            newArr.push('fizzBuzz')
        } 
      else  if(i%3===0){
          newArr.push('fizz')
        }
        else if(i%5===0){
            newArr.push('buzz')
        }
       
        else{
            newArr.push(i.toString())
        }
    }
    return newArr
}
console.log(fizzbuzz(25))
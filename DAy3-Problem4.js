function armstrong(n){
  let str=String(n)
  let sum=0;
  for(let i=0;i<str.length;i++){
    let num=Number(str[i])
    let multiply=num**str.length
    sum=sum+multiply
  }
  return sum===n?true : false
}
console.log(armstrong(123))
let n=3;
for(let i=1;i<=n;i++){
    // first print the empty spaces
    for(let j=1;j<=n-i;j++){
        process.stdout.write(" ")
    }
    for(let j=1;j<=(2*i-1);j++){
        process.stdout.write("*")
    }
    console.log()
}
n=2
for(let i=1;i<=n;i++){
    //empty spaces
    for(let j=1;j<=i;j++){
        process.stdout.write(" ")
    }
    for(let j=1;j<=(n-i)*2+1;j++){
        process.stdout.write("*")
    }
    console.log()
}
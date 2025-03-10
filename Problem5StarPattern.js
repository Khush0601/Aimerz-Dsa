for(let i=0;i<5;i++){
    for(let j=0;j<5;j++){
        if((i===0 || i===1 || i===2) && (j===0 || j===4)){
            process.stdout.write("*")
        }
        else if(i===3 && (j===1 || j===3)){
            process.stdout.write("*")
        }
        else if(i===4 && j===2){
            process.stdout.write("*")
        }
        else{
            process.stdout.write(" ")
        }
    }
    console.log()
}
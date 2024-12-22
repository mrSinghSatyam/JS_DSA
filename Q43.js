let bit = (op) =>{
    let x = 0
    if(op == "++x"){
        x++
    }
    if(op == "--x")
        x--;
    return x
}
console.log(bit("--x"))
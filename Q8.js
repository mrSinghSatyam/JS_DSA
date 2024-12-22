let wrong = (num,n) =>{
    for(let i=1;i<=n;i++){
        if(num>0 && num%2 == 0 && num%5==0 && num%10==0){
            num /= 10 
        }else{
            num -= 1
        }
    }
    return num   
}
console.log(wrong(1000000000,9))

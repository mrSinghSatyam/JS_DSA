let GorB = (username) =>{
    let a =username.split("").filter((char, index ,arr) => arr.indexOf(char) === index).join("")
    let n =a.length
    if(n%2!==0){
        return "CHAT WITH HER!"
    }else{
        return "IGNORE HIM!"
    }
}
console.log(GorB("anish"))
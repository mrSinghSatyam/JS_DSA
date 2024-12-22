let abbreviation =(word) =>{
    if(word.length > 10){
        let n = word.length-2
        let abb = word[0] + n + word[word.length-1]
        return abb
    }else{
        return word
    }
}
console.log(abbreviation("worjkhgkj,nbjkv"))
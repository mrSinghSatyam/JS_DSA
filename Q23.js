let parcipants =(arr,n) =>{
    let count = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i] > 0 && arr[n] <= arr[i]){
            count++;
        }
    }
    return count
    
}
let arr = [10,9,8,7,7,7,5,5]
// let arr =[0,0,0,0]
console.log(parcipants(arr,5))
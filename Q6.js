let newYear = (arr) =>{
    let a = arr.sort()
    return arr[2] - arr[0]
}
const arr = [30,20,10];
console.log(newYear(arr))
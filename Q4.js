let soldier = (k, n, w)=> {
    let totalCost = k * (w * (w + 1)) / 2;
    return totalCost - n
}
console.log(soldier(3,17,4))
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 40, 50, 32, 33, 53]

function getPares(array){
    return array.filter((num) => num%2 === 0);
}

console.log(getPares(array))
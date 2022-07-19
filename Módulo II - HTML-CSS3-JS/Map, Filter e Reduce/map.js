const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapThis(array, thisArg){
    return array.map(function(item){
        return item * this.value;
    }, thisArg)
}

const nums = [1, 2]

console.log(mapThis(nums, maca))
console.log(mapThis(nums, laranja))
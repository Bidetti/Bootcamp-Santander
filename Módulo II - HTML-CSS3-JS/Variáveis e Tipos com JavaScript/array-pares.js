function substituiPares(array){
    if (!array.length) return -1;

    for (let i = 0; i < array.length; i++){
        if(array[i] === 0) {
            console.log("já é zero!")
        }else if(array[i] % 2 === 0) {
            console.log(`antigo valor: ${array[i]}\nNovo: 0`)
            array[i] = 0;
        }
    }

    return array;
}

let arr = [1,3,4,6,80,33,23,90]
substituiPares(arr)
console.log(arr)
function validaArray(array, num){
    try{
        if(!array && !num) throw new ReferenceError("Parâmetros desconhecidos...")
        if(typeof array !== 'object') throw new TypeError("Array não é do tipo: Object")
        if(typeof num !== 'number') throw new TypeError("Número não é do tipo: Number")

        if(array.length !== num) throw new RangeError("Tamanho inválido")

        return array;
    }catch(e){
        if(e instanceof ReferenceError){
            console.log("ReferenceError!")
            console.log(e.name, e.stack)
        }else if(e instanceof TypeError){
            console.log("TypeError!")
            console.log(e.name, e.stack)
        } else if(e instanceof RangeError){
            console.log("RangeError!")
            console.log(e.name, e.stack)
        }else{
            console.log("Erro não esperado... - " + e)
        }
    }
}

console.log(validaArray())
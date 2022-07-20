// Generic Types

function adicioneApendiceaLista<NaoSei>(array: any[], valor: NaoSei){
    return array.map(item => item + valor)
}

adicioneApendiceaLista([1,2,3], 1)
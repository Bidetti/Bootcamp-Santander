function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: "Maria",
    idade: 30
}

const pessoa2 = {
    nome: "Carlos",
    idade: 26
}

const animal = {
    nome: "Jack",
    idade: 15,
    raca: "Bulldog Frances"
}


console.log(calculaIdade.call(pessoa2, 30))

console.log(calculaIdade.call(animal, 3))

console.log(calculaIdade.apply(pessoa2, [12]))
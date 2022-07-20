interface Cachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
    +readonly [K in keyof Cachorro]-?: Cachorro[K]
}

const meuCachorro: Cachorro = {
    nome: 'Apolo',
    idade: 14,
    parqueFavorito: "Parque do Povo"
}

class meuCachorroC implements CachorroSomenteLeitura {
    idade;
    nome;
    parqueFavorito;

    constructor(nome, idade) {
        this.idade = idade;
        this.nome = nome;
    }
}

const cao = new meuCachorroC("Apolo", 14)
cao.idade = 8;
console.log(cao)
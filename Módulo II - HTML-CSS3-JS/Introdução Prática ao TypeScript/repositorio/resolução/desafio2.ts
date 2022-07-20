enum Trabalhos {
    Atriz,
    Padeiro,
    Desempregado
}

interface Pessoa {
    nome: string;
    idade: number;
    profissao:  Trabalhos
}

let pessoa1: Pessoa = {
    nome: "Maria",
    idade: 29,
    profissao: Trabalhos.Atriz
}
let pessoa2: Pessoa = {
    nome: "Roberto",
    idade: 19,
    profissao: Trabalhos.Padeiro
}
let pessoa3: Pessoa = {
    nome: "Laura",
    idade: 32,
    profissao: Trabalhos.Atriz
}
let pessoa4: Pessoa = {
    nome: "Carlos",
    idade: 19,
    profissao: Trabalhos.Padeiro
}

let teste: Pessoa = {
    nome: "Rafael",
    idade: 18,
    profissao: Trabalhos.Desempregado
}
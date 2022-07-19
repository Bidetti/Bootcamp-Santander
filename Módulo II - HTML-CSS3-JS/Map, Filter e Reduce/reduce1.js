const lista = [
    {
        name: 'sabao em po',
        preco: 30
    },
    {
        name: "cereal",
        preco: 12
    },
    {
        name: "toalha",
        preco: 20
    }
];


const saldo = 100;

function calculaSaldo(saldoAtual, lista){
    return lista.reduce(function(prev, current){
        return prev - current.preco;
    }, saldoAtual)
}

console.log(calculaSaldo(saldo, lista))
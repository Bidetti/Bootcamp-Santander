function atividade(num1, num2){
    const igual = num1 === num2 ? "são iguais" : "não são iguais";
    const soma = num1 + num2;
    const resultado1 = soma > 10 ? "maior que 10" : "menor que 10";
    const resultado2 = soma < 10 ? "menor que 20" : "maior que 20";
    console.log(`Os números ${num1} e ${num2} ${igual}. Sua soma é ${soma}, que é ${resultado1} e ${resultado2}`)
}

atividade(20, 20)
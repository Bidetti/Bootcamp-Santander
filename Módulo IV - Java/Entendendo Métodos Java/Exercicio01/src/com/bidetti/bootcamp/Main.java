package com.bidetti.bootcamp;

import com.bidetti.bootcamp.metodos.Calculadora;
import com.bidetti.bootcamp.metodos.Emprestimo;
import com.bidetti.bootcamp.metodos.Horario;

public class Main {

    public static void main(String[] args) {
        Calculadora.soma(4,5);
        Calculadora.subtracao(10, 4);
        Calculadora.multiplicacao(4,4);
        Calculadora.divisao(20, 4);
        System.out.println("Horario");
        Horario.Horario();
        System.out.println("Empréstimo");
        Emprestimo.calcular(1000, Emprestimo.getDuasParcelas());
        Emprestimo.calcular(5000, Emprestimo.getTresParcelas());
        Emprestimo.calcular(10000, 5);
    }

    // correcao professor:  https://github.com/tlcdio/MAula01/blob/master/src/one/digitalinnovation/basecamp/Mensagem.java
}

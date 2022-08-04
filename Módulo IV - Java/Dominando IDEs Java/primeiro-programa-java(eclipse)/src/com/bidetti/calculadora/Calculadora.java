package com.bidetti.calculadora;

import java.util.Scanner;

public class Calculadora {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int a, b;
		System.out.println("Primeiro valor: ");
		a = scan.nextInt();
		System.out.println("Segundo valor: ");
		b = scan.nextInt();
		System.out.println("Soma: " + soma(a, b) + "\nSubtracao: " + subtracao(a, b) + "\nDivisao: " + divisao(a, b) + "\nMultiplicacao: " + multiplicacao(a, b));
	
	}
	
	public static int soma(int a, int b) {
		return a + b;
	}
	public static int subtracao(int a, int b) {
		return a - b;
	}
	public static int divisao(int a, int b) {
		return a / b;
	}
	public static int multiplicacao(int a, int b) {
		return a * b;
	}
	
	
	
}

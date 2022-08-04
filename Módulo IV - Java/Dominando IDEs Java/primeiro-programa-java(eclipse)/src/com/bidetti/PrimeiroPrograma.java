package com.bidetti;

import com.bidetti.model.Gato;

public class PrimeiroPrograma {

	public static void main(String[] args) {
		
		Gato gato = new Gato();
		Livros livros = new Livros();
		
		System.out.println(gato);
		System.out.println(livros);
		
		// System.out.println("Hello World!");
	}

}

class Livros {
	private String nome;
	private String npag;
}

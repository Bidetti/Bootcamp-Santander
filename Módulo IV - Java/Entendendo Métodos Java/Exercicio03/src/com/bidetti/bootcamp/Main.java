package com.bidetti.bootcamp;

import com.bidetti.bootcamp.modules.Quadrilateros;

public class Main {

    public static void main(String[] args) {
        System.out.println("Retornos");

        double areaQuadrado = Quadrilateros.area(3);
        System.out.println("Área do quadrado: " + areaQuadrado);

        double areaRetangulo = Quadrilateros.area(5, 5);
        System.out.println("Área do retângulo: " + areaRetangulo);

        double areaTrapezio = Quadrilateros.area(7, 8, 9);
        System.out.println("Área do trapézio: " + areaTrapezio);
    }
}

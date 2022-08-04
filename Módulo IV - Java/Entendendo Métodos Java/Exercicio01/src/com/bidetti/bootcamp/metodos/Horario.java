package com.bidetti.bootcamp.metodos;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Horario {

    static Date date = new Date();
    static int horario = Integer.parseInt(new SimpleDateFormat("HH").format(date));

    public static void Horario() {
        switch (horario) {
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
                System.out.println("Bom dia!");
                break;
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
                System.out.println("Bom tarde!");
                break;
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                System.out.println("Bom noite!");
                break;
            default:
                System.out.println("Horario inválido.");
                break;
        }
    }
}

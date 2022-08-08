package com.bidetti.bootcamp;

/*
 * Singleton "apressado"
 *
 * @author bidetti
 */

public class SingletonEager {

    private static SingletonEager instance = new SingletonEager();

    private SingletonEager() {
        super();
    }

    public static SingletonEager getInstance() {
        return instance;
    }
}

package org.example;

import io.javalin.Javalin;
import io.javalin.http.staticfiles.Location;


public class MyServer {

    private static final String PAGES_PATH = "/public";

    public MyServer() {
        Javalin server1 = Javalin.create(config -> config.addStaticFiles(PAGES_PATH, Location.CLASSPATH));
    }

    public static void main(String[] args) {

        MyServer server = new MyServer();
        server.start(5000);

        System.out.println("Hello world!");
    }

    private void start(int port) {
    }

    private void stop(){

    }

    private void port(){

    }
}
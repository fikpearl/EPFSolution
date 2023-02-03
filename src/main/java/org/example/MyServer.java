package org.example;

import io.javalin.Javalin;
import io.javalin.http.staticfiles.Location;


public class MyServer {

    private static final String PAGES_PATH = "/path";

    private final Javalin server1;

    public MyServer() {
        server1 = Javalin.create(config -> config.addStaticFiles(PAGES_PATH, Location.CLASSPATH));
    }

    public static void main(String[] args) {
        MyServer server = new MyServer();
        server.start();

        System.out.println("Hello world!");
    }

    private void start() {
        server1.start(5000);
    }

    private void stop(){
        server1.stop();
    }

    public int port(){
        return server1.port();
    }
}
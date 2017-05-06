import express from 'express';
import Server from './index'

let app=express();
let server=new Server(app);
server.setMiddleware();
server.getRoute();
server.setCrossOrigin();
server.setStartPage();
server.startServer();
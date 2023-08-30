import express from "express";
import cookieParser from "cookie-parser";

//fix dirname
import path from "path"
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import {methods as authentication} from "./controllers/authentication.controller.js";
import {methods as authorization} from "./middlewares/authorization.js";

//sv
const app = express ();
app.set("port", 4000);
app.listen(app.get("port"));
console.log("Servidor corriendo en puerto",app.get("port"));

//cfg
app.use(express.static(__dirname + "/public"));
app.use(express.json());

//routes
app.get("/", authorization.soloPublico, (req,res)=> res.sendFile(__dirname + "/pages/login.html"));
app.get("/register", authorization.soloPublico, (req,res)=> res.sendFile(__dirname + "/pages/register.html"));
app.get("/admin", authorization.soloAdmin, (req,res)=> res.sendFile(__dirname + "/pages/admin/admin.html"));
app.get("/fnartesgpt", authorization.soloAdmin, (req,res)=> res.sendFile(__dirname + "/pages/admin/pages/fnartesgpt/index.html"));
app.get("/chatbot", authorization.soloAdmin, (req,res)=> res.sendFile(__dirname + "/pages/admin/pages/asistente-de-derechos/index.html"));
app.post("/api/login",authentication.login);
app.post("/api/register",authentication.register);
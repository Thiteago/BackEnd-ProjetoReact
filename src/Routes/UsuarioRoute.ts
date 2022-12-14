import {Router} from "express"
import { UsuarioController } from "../Controller/UsuarioController";
import { AuthController } from "../Controller/AuthController";
import { AuthMiddleware } from "../middlewares/auth";

const usuariocontroller = new UsuarioController()
const authcontroller = new AuthController()
export const routerUser = Router();


routerUser.post("/NovoUsuario", usuariocontroller.cadastrar);
routerUser.get('/Usuarios', AuthMiddleware ,usuariocontroller.listar);
routerUser.post("/Autenticar", authcontroller.authenticate)
routerUser.get('/Usuarios/:id/dados', usuariocontroller.mostrarInfo)
routerUser.patch('/Usuarios/:id/Alterar', usuariocontroller.alterarUser)





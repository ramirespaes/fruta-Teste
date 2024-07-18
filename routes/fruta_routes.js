import express from "express";
import fruta from "../controller/fruta_controller.js";

const frutaRouter = express.Router();
frutaRouter.get('/', fruta.Todas);
frutaRouter.post('/', fruta.Inserir);
frutaRouter.put('/:cod_fruta', fruta.Atualizar);
frutaRouter.delete('/:cod_fruta', fruta.Deletar);
frutaRouter.get('/:cod_fruta', fruta.ObterPorCodigo);

export default frutaRouter;

console.log("porta 5000 - fruta_routes.js");

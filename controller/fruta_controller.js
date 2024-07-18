import Fruta from "../models/fruta_model.js";

let fruta = {};

fruta.Todas = async function (req, res) {
    try {
        const frutas = await Fruta.findAll();
        res.send(frutas);
    } catch (e) {
        console.log("Não foi possível acessar os dados da tabela de frutas.", e);
        res.status(500).json({ erro: e.message });
    }
};

fruta.Inserir = async function (req, res) {
    try {
        const novaFruta = await Fruta.create(req.body);
        res.send(novaFruta);
    } catch (e) {
        console.log("Não foi possível adicionar a fruta à base de dados.", e);
        res.status(500).json({ erro: e.message });
    }
};

fruta.Atualizar = async function (req, res) {
    try {
        const cod_fruta = req.params.cod_fruta;
        await Fruta.update(req.body, { where: { cod_fruta: cod_fruta } });
        res.status(200).json();
    } catch (e) {
        console.log("Não foi possível atualizar os dados da fruta na base de dados.", e);
        res.status(500).json({ erro: e.message });
    }
};

fruta.Deletar = async function (req, res) {
    try {
        const cod_fruta = req.params.cod_fruta;
        await Fruta.destroy({ where: { cod_fruta: cod_fruta } });
        res.status(200).json();
    } catch (e) {
        console.log("Não foi possível remover a fruta da base de dados.", e);
        res.status(500).json({ erro: e.message });
    }
};

fruta.ObterPorCodigo = async function (req, res) {
    try {
        const cod_fruta = req.params.cod_fruta;
        const fruta = await Fruta.findOne({ where: { cod_fruta: cod_fruta } });
        res.send(fruta);
    } catch (e) {
        console.log("Não foi possível encontrar a fruta pelo código.", e);
        res.status(500).json({ erro: e.message });
    }
};

export default fruta;
console.log("porta 5000 - fruta_controller");

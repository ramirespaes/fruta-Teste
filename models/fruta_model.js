import { Sequelize } from "sequelize"

import bd from "../config/connection.js"

const Fruta = bd.define("fruta",{
    cod_fruta: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome_fruta: {
      type: Sequelize.STRING(100)
    },
    qtde_fruta: {
      type: Sequelize.INTEGER
    },
  },{
    FreezeTableName: true,
    timestamps: false,
  },
  

  
)
export default Fruta
console.log("porta 5000 - Fruta_Model")

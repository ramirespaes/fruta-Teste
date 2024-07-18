import { Sequelize } from 'sequelize';

const sequelize = new Sequelize("mysql://root:@localhost:3306/fruta");

try {
    await sequelize.authenticate();
    console.log('Conexão estabelecida com sucesso.');
} catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
}

export default sequelize;
console.log("porta 5000 - connection")

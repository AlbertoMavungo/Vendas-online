const db = require('./db')

const Cliente = db.sequelize.define('cliente', {  
    codigo_cliente: {type: db.Sequelize.INTEGER},
    nome: {type: db.Sequelize.STRING},
    email: {type: db.Sequelize.STRING},
    cpf: {type: db.Sequelize.STRING},
    cep: {type: db.Sequelize.STRING},
    endereco: {type: db.Sequelize.STRING},
    estado: {type: db.Sequelize.STRING},
    cidade: {type: db.Sequelize.STRING},
    numero: {type: db.Sequelize.INTEGER},
    complemento: {type: db.Sequelize.STRING},
    telefone: {type: db.Sequelize.STRING},
    senha: {type: db.Sequelize.STRING}
});

Cliente.sync();
//Cliente.create({nome:'maria',email:'maria@norton.net.bt',senha:'345345'});

module.exports = Cliente;

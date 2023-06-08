const db = require('./db')

const Produto = db.sequelize.define('produto', {  
    codigo_produto: {type: db.Sequelize.INTEGER},
    titulo: {type: db.Sequelize.STRING},
    descritivo: {type: db.Sequelize.STRING},
    valor_produto: {type: db.Sequelize.DOUBLE},
    destaque: {type: db.Sequelize.BOOLEAN},
    quantidade_produto: {type: db.Sequelize.INTEGER},
    categoria: {type: db.Sequelize.STRING}
});

Produto.sync();
//Cliente.create({nome:'maria',email:'maria@norton.net.bt',senha:'345345'});

module.exports = Produto;

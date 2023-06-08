const db = require('./db')

const Cesta = db.sequelize.define('cesta', {  
    session_id: {type: db.Sequelize.INTEGER},
    valor_total: {type: db.Sequelize.INTEGER},
    codigo_cliente: {type: db.Sequelize.INTEGER},
    codigo_produto: {type: db.Sequelize.INTEGER}
});

Cesta.sync();
//Cliente.create({nome:'maria',email:'maria@norton.net.bt',senha:'345345'});

module.exports = Cesta;

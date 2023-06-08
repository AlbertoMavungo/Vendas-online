//conectando ao banco
//para executar: node index.js
const Sequelize = require('sequelize');
//nome_banco , username , senha , {host , dialect(linguagem)}
const sequelize = new Sequelize('id4', 'root', '',  {host: "localhost", dialect:"mysql"});

sequelize.authenticate().then(function(){
    console.log("conectado");
}).catch(function(erro){
    console.log("falha "+erro);
}) ;

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}


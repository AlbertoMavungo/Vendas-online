//cria uma referência dos links com os métodos
var express = require("express");
const res = require("express/lib/response");
var router = express.Router();
var Cliente = require("../model/cliente");
var Produto = require("../model/produto");


router.get("/cliente", function (req, res) {
  Cliente.findAll().then(function(obj){    
      res.send(obj);
    }).catch(function(err){
      res.send('Oops! something went wrong, : ', err);
    });
  });

router.get("/cliente/:id", function (req, res) {
  Cliente.findAll({ where : {id: req.params.id }}).then(function(obj){    
      res.send(obj);
    }).catch(function(err){
      res.send('Oops! something went wrong, : ', err);
    });
  });

router.post("/cliente", function (req, res) {

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
  Cliente.create({
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha}).then(
          function(){
            res.send("cliente criado com sucesso !!!"+ req.body.nome);
          }).catch(
            function(erro){
              res.send("ocorreu um erro !!");
            }
          );
});

router.put("/cliente/:id", function (req, res) { 
  Cliente.update({
    nome: req.body.nome,
    email: req.body.email,
    senha: req.body.senha},
    {
      where: {id: req.params.id}
    }).then(
        function(){
          res.send("cliente alterado com sucesso !!!"+ req.body.nome);
        }).catch(
          function(erro){
            res.send("ocorreu um erro !!");
          }
        );

});

router.delete("/cliente/:id", function (req, res) {  
  Cliente.destroy(    
    {where: {id: req.params.id}}
    ).then(
        function(){
          res.send("cliente removido com sucesso !!!"+req.params.id);
        }).catch(
          function(erro){
            res.send("ocorreu um erro !!");
          }
        );

});

//PRODUTO
router.get("/produto", function (req, res) {
  Produto.findAll().then(function(obj){    
      res.send(obj);
    }).catch(function(err){
      res.send('Oops! something went wrong, : ', err);
    });
  });

router.get("/produto/:id", function (req, res) {
  Produto.findAll({ where : {id: req.params.id }}).then(function(obj){    
      res.send(obj);
    }).catch(function(err){
      res.send('Oops! something went wrong, : ', err);
    });
  });

router.post("/produto", function (req, res) {

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
  Produto.create({
      titulo: req.body.titulo,
      valor: req.body.valor,
      descritivo: req.body.descritivo,
      estoque: req.body.estoque}).then(
          function(){
            res.send("produto criado com sucesso !!!"+ req.body.titulo);
          }).catch(
            function(erro){
              res.send("ocorreu um erro !!");
            }
          );
});

router.put("/produto/:id", function (req, res) { 
  Produto.update({
    titulo: req.body.titulo,
      valor: req.body.valor,
      descritivo: req.body.descritivo,
      estoque: req.body.estoque},
    {
      where: {id: req.params.id}
    }).then(
        function(){
          res.send("produto alterado com sucesso !!!"+ req.body.titulo);
        }).catch(
          function(erro){
            res.send("ocorreu um erro !!");
          }
        );

});

router.delete("/produto/:id", function (req, res) {  
  Produto.destroy(    
    {where: {id: req.params.id}}
    ).then(
        function(){
          res.send("produto removido com sucesso !!!"+req.params.id);
        }).catch(
          function(erro){
            res.send("ocorreu um erro !!");
          }
        );

});

module.exports = router;
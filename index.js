//modulos necessários para criar uma API REST 
//(metedos do htpp para fazer a manipulação desses serviços)
const express = require('express');
const morgan  = require('morgan');
const cors  = require('cors');
const bodyParser  = require('body-parser');
const router = require('./js/config/route');

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");	
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended :false}));
app.use(express.json());

app.use('/', router);

//porta que o node irá usar
app.listen(3307,()=>{
    console.log('nodejs started 3306');
});
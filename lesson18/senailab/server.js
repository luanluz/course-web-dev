// Importando as bibliotecas instaladas
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// Instanciando app do tipo express
const app = express();

// Importando rotas
app.use(require('./routes/routes'));

// Habilitando o CORS
app.use(function(req, res, next)
{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Iniciando servidor
app.listen(3000, function(req, res){});

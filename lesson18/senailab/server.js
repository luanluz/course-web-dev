// Importando as bibliotecas instaladas
const express = require('express');

// Instanciando app do tipo express
const app = express();

// Importando rotas
app.use(require('./controllers/project_controller'));

// Habilitando o CORS
app.use(function(req, res, next)
{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Iniciando servidor
app.listen(3000, function(req, res){});
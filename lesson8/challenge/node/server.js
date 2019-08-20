// Importando os módulos externos e internos
const filter = require('./filterData')
const http = require("http");
const express = require("express");
const app = express();

// Dando acesso CORS
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

// Retornando o resultado dos filtros para o servidor na porta 3000
app.get('/', function (req, res) {

  res.send(filter.result_filter);
});
http.createServer(app).listen(3000, () => console.log("Servidor rodando local na porta 3000"));
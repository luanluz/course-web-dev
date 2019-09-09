// Obtendo os pacotes instalados
const bodyParser = require('body-parser');
const express = require('express');
const multer = require('multer');

// Instancinado app como express
const app = express();


// Funções middle

// Função para mostrar todos os arquivos estáticos
// que estão dentro do diretório onde foi executado
// o app
app.use(express.static('.'));

// usado para converter dados de formulário
app.use(bodyParser.urlencoded({extended: true}));

// usado para transformar JSON em informações
// tratáveis no servidor
app.use(bodyParser.json());


app.get('/teste',(req, res) => res.send('OK'));


app.listen(3000, () => console.log('Executando na porta 8080'));
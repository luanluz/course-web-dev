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

// definindo o storage
const storage = multer.diskStorage(
    {
        // definindo o local onde será salvo o arquivo
        destination: function(req, file, callback)
        {
            callback(null, './uploads');
        },

        // definindo o nome final do arquivo
        filename: function(req, file, callback)
        {
            callback(null, `${Date.now()}_${file.originalname}`);
        }
    }
);

const upload = multer({storage}).single('arquivo');

// quando o arquivo chegar, ele vai ter esse tratamento
app.post('/upload', (req, res) => {
    upload(req, res, err =>
        {
            if(err)
            {
                // caso tenha tido erro
                return res.end('Ocorreu um erro ao enviar arquivo.')
            }
            // caso não tenha erro
            res.end('Concluído com sucesso.')
        });
});

app.listen(3000, () => console.log('Executando na porta 3000'));
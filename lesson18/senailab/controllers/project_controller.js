// Importando as bibliotecas instaladas
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const multer = require('multer');

// Instanciando objeto
const router = express();

const urlencodeParser = bodyParser.urlencoded({extended:false});

// usado para transformar JSON em informações
// tratáveis no servidor
router.use(bodyParser.json());


// Importando configurações do db
var db = (require('../models/senailab'));

// Definindo template engine
router.engine("handlebars", handlebars({defaultLayout: 'main'}));
router.set('view engine', 'handlebars');

// Dando acesso aos arquivos estáticos
router.use('/lib', express.static('public/lib'));
router.use('/assets', express.static('public/assets'));
router.use('/uploads', express.static('public/uploads'));

// Definindo rotas
// Home
router.get("/", function(req, res)
{
    res.render('index');
});

// Projetos
router.get("/projects/:id?", function(req, res)
{
    // Se não houver parâmetro,
    // busca todos os projetos no
    // banco de dados e apresenta
    if(!req.params.id)
    {
        db.getProjects(function(err, data)
        {
            if(err)
                console.log("ERROR: ", err);
            else
                res.render('projects', {data: data});
        });
    }

    // Caso haja parâmetro, busca
    // as informações específicas
    // daquele projeto e apresenta
    else
    {
        db.getProject(req.params.id, function(err, data)
        {
            if(err)
                console.log("ERROR: ", err);
            else
            {
                db.getComments(req.params.id, function(err, comments)
                {
                    if(err)
                        console.log("ERROR: ", err)
                    else
                        res.render('project', {data: data, comments: comments});
                });
            }
        });
    }
});

// definindo o storage
const storage = multer.diskStorage(
    {
        // definindo o local onde será salvo o arquivo
        destination: function(req, file, callback)
        {
            callback(null, './public/uploads');
        },

        // definindo o nome final do arquivo
        filename: function(req, file, callback)
        {
            callback(null, `${Date.now()}_${file.originalname}`);
        }
    }
);

const upload = multer({storage}).array('file');

// Inserir projeto
router.post("/insertProject", urlencodeParser, function(req, res)
{
    upload(req, res, err =>
    {
        if(err)
        {
            // caso tenha tido erro
            return res.end('Ocorreu um erro ao enviar arquivo.')
        }
        // caso não tenha erro

        db.insertProject(
            [
                req.body.project_name,
                req.body.project_author,
                req.body.project_license,
                req.body.project_description,
                req.body.project_tag,
                req.files[0].filename,
                req.files[1].filename
            ]
        );
    });

    res.redirect('/projects');
});

// Inserir projeto
router.post("/insertComment/:id", urlencodeParser, function(req, res)
{
    db.insertComment(
        [
            req.params.id,
            'Anônimo',
            req.body.comment,
        ]
    );

    res.redirect(`/projects/${req.params.id}`);
});

// Equipe
router.get("/team", function(req, res)
{
    res.render('team');
});

// Sobre
router.get("/about", function(req, res)
{
    res.render('about');
});

// Exportando módulo
module.exports = router;
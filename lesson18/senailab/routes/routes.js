// Importando as bibliotecas instaladas
const express = require('express');
const handlebars = require('express-handlebars');

// Instanciando objeto
const router = express();

// Definindo template engine
router.engine("handlebars", handlebars({defaultLayout: 'main'}));
router.set('view engine', 'handlebars');

// Dando acesso aos arquivos estáticos
router.use('/lib', express.static('public/lib'));
router.use('/assets', express.static('public/assets'));

// Definindo rotas
// Home
router.get("/", function(req, res)
{
    res.render('index');
});

// Projetos
router.get("/projects", function(req, res)
{
    res.render('projects');
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
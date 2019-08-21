// Importando os módulos externos e internos
const axios = require('axios')
const data = require('./data')


// Adicionando os filtros personalizados
const curso_aluno = f => f.curso.nome === '004 - T\u00e9cnico em Inform\u00e1tica Integrado - Campina Grande (CAMPUS CAMPINA GRANDE)'
const campus_projeto = f => f.uo.nome === 'CAMPUS CAJAZEIRAS'


// Aplicando os filtros e exportando para outros módulos
axios.get(data.url_alunos).then(response => {
    const server = response.data
    module.exports.result_filter_aluno = server.filter(curso_aluno)
})

axios.get(data.url_projetos).then(response => {
    const server = response.data
    module.exports.result_filter_projeto = server.filter(campus_projeto)
})
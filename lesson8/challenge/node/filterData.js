// Importando os módulos externos e internos
const axios = require('axios')
const data = require('./data')

// Adicionando os filtros personalizados
const cargo = f => f.cargo_emprego === 'CONTADOR'
const situacao = f => f.situacao.nome === 'APOSENTADO'
const jornada = f => f.jornada_trabalho === '40 HORAS SEMANAIS'

// Aplicando os filtros e exportando para outros módulos
axios.get(data.url).then(response => {
    const server = response.data
    module.exports.result_filter = server.filter(cargo).filter(situacao).filter(jornada)
})
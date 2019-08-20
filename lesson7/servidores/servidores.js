const axios = require('axios')

const url = 'https://dados.ifpb.edu.br/dataset/26d67876-0cb2-41a4-83ed-7bde06eb736c/resource/0d03ee6a-2af1-4dde-9b3d-90419c48fabe/download/servidores.json'

const cargo = f => f.cargo_emprego === 'PROFESSOR ENS BASICO TECN TECNOLOGICO'
const situacao = f => f.situacao.nome === 'ATIVO PERMANENTE'
const jornada = f => f.jornada_trabalho === 'DEDICACAO EXCLUSIVA'

axios.get(url).then(response => {
    const server = response.data
    const result_filter = server.filter(cargo).filter(situacao).filter(jornada)
    console.log(result_filter)
})
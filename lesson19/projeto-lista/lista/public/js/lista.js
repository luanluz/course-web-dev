let cont = 0
let edit = 0;
function salvar() {
    if (
        document.querySelector('#nome').value == "" ||
        document.querySelector('#idade').value == "" ||
        document.querySelector('#telefone').value == ""
    ) {
        alert("Você deve informar todos os valores")
    } else {
        if (edit != 0) {
            console.log(edit)
            const item = document.getElementsByTagName('li')[edit]
            item.childNodes[1].innerHTML = document.querySelector('#nome').value
            item.childNodes[3].innerHTML = document.querySelector('#idade').value
            item.childNodes[5].innerHTML = document.querySelector('#telefone').value
            edit = 0
            limpar()
        }
        else {
            cont++
            const lista = document.querySelector('ul')
            const item = document.createElement('li')
            const nome = document.createElement('span')
            const telefone = document.createElement('span')
            const idade = document.createElement('span')
            const r_nome = document.createElement('span')
            const r_idade = document.createElement('span')
            const r_telefone = document.createElement('span')
            r_nome.innerHTML = 'Nome: '
            r_idade.innerHTML = ' | Idade: '
            r_telefone.innerHTML = '| Telefone: '
            nome.innerHTML = document.querySelector('#nome').value
            idade.innerHTML = document.querySelector('#idade').value
            telefone.innerHTML = document.querySelector('#telefone').value

            const editar = document.createElement('a')
            editar.innerHTML = 'Editar'
            editar.setAttribute('href', '#')
            editar.setAttribute('class', 'editar')
            editar.setAttribute('onclick', `editar(${cont})`)

            const excluir = document.createElement('a')
            excluir.innerHTML = 'Excluir'
            excluir.setAttribute('href', '#')
            excluir.setAttribute('class', 'excluir')
            excluir.setAttribute('onclick', `excluir(${cont})`)

            item.appendChild(r_nome)
            item.appendChild(nome)
            item.appendChild(r_idade)
            item.appendChild(idade)
            item.appendChild(r_telefone)
            item.appendChild(telefone)

            item.appendChild(editar)
            item.appendChild(excluir)
            lista.appendChild(item)
            limpar()
        }
    }
}

function excluir(id) {
    let lista = document.querySelector('ul')
    let item = document.getElementsByTagName('li')[id]
    let nome = item.childNodes[1].innerHTML
    if (confirm(`Deseja realmente excluir ${nome} da lista? `)) {

        cont--;
        lista.removeChild(item)
        atualizar_id()
        limpar()
        edit = 0;
    }
}

function editar(id) {
    const item = document.getElementsByTagName('li')[id]
    nome = document.querySelector('#nome')
    idade = document.querySelector('#idade')
    telefone = document.querySelector('#telefone')
    nome.value = item.childNodes[1].innerHTML
    idade.value = item.childNodes[3].innerHTML
    telefone.value = item.childNodes[5].innerHTML
    edit = id;
}

function limpar() {
    const lista_input = Array.from(document.getElementsByTagName('input'))
    lista_input.forEach(lista => lista.value = "")
}

function atualizar_id() {

    var excluir = document.getElementsByClassName('excluir')
    var editar = document.getElementsByClassName('editar')
    for (let d = 0; d < excluir.length; d++) {
        excluir[d].attributes[2].value = `excluir(${d + 1})`
        editar[d].attributes[2].value = `editar(${d + 1})`
    }
}
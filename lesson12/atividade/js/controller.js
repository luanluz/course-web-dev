var increment = 0;
function salvar()
{
    let valorNome = document.getElementsByName('nome')[0].value;
    let valorTelefone = document.getElementsByName('telefone')[0].value;
    let valorEndereco = document.getElementsByName('endereco')[0].value;

    const body = document.querySelector('body');
    const section = document.createElement('section');
    const nome = document.createElement('p');
    const telefone = document.createElement('p');
    const endereco = document.createElement('p');
    const editar = document.createElement('div');
    const excluir = document.createElement('div');

    nome.innerHTML = `Nome: ${valorNome}`;
    telefone.innerHTML = `Telefone: ${valorTelefone}`;
    endereco.innerHTML = `Endereço: ${valorEndereco}`;

    editar.innerHTML = `<button name="editar" onclick="editar(${increment});"> editar</button>`;
    excluir.innerHTML = `<button name="excluir" onclick="excluir(${increment});"> excluir</button>`;

    increment++;

    body.appendChild(section);

    section.appendChild(nome);
    section.appendChild(telefone);
    section.appendChild(endereco);
    section.appendChild(editar);
    section.appendChild(excluir);

    const linha = document.createElement('p');
    linha.innerHTML = '--------------------------------------------'
    section.appendChild(linha);
}

function editar(index)
{
    let nome = document.getElementsByName('nome')[0];
    let telefone = document.getElementsByName('telefone')[0];
    let endereco = document.getElementsByName('endereco')[0];

    let section = document.querySelectorAll('section');
}

function excluir(index)
{
    const body = document.querySelector('body');
    let section = document.querySelectorAll('section');
    console.log(section.length);

    body.removeChild(section[index]);
    if(section.length > 1)
    {
        for(let i=0; i<section.length; i++)
        {
            console.log(i);
            document.getElementsByName("editar")[i].setAttribute("onclick", `editar(${i})`);
            document.getElementsByName("excluir")[i].setAttribute("onclick", `excluir(${i})`);
        }
    }
    else
    {
        document.getElementsByName("editar")[0].setAttribute("onclick", `editar(0)`);
        document.getElementsByName("excluir")[0].setAttribute("onclick", `excluir(0)`);
    }

    increment--;

    if(section.length == 0)
    {
        increment = 0;
    }
}
// Função para listar todos os alunos
// que estejam dentro do filtro
function listaAlunos()
{
    // Adicionado dados do título
    document.getElementById("dados-nome").innerHTML = "Alunos";
    document.getElementById("dados-description").innerHTML = "lista de alunos";

    // Adicionando a source do JSON
    document.getElementById("data-src-link").innerHTML = "https://dados.ifpb.edu.br/dataset/d02eb6b8-5745-4436-ae22-ef1c182897d9/resource/61f5a0ad-642d-4580-ab62-1110318d0eea/download/alunos.json"

    // Função do jQuery para obter os dados JSON do servidor local
    $(document).ready(function()
    {
        $.get( "http://localhost:3000/alunos", function(data)
        {

            // Limpando dados
            document.getElementById("dados").innerHTML = '';
    
            // For para percorrer todos os dados e imprimir no HTML
            for(let i=0; i<data.length; i++)
            {
        
                // Adicionado dados
                document.getElementById("dados").innerHTML += "Nome: <strong>" + data[i].nome + "</strong><br>";
                document.getElementById("dados").innerHTML += "Matrícula: <strong>" + data[i].matricula + "</strong><br>";
                document.getElementById("dados").innerHTML += "Curso: <strong>" + data[i].curso.nome + "</strong><br><br>";
            }
        
        });
    });
}

// Função para listar todos os projetos
// que estejam dentro do filtro
function listaProjetos()
{
    // Adicionado dados do título
    document.getElementById("dados-nome").innerHTML = "Projetos";
    document.getElementById("dados-description").innerHTML = "lista de projetos";

    // Adicionando a source do JSON
    document.getElementById("data-src-link").innerHTML = "https://dados.ifpb.edu.br/dataset/e99b5cfd-f2f3-4b54-bb4f-6ddd9e480af7/resource/f81de6aa-afde-4cdb-bee0-a9ed2f87c4c3/download/projetos-pesquisa.json"

    // Função do jQuery para obter os dados JSON do servidor local
    $(document).ready(function()
    {
        $.get( "http://localhost:3000/projetos", function(data)
        {
            // Limpando dados
            document.getElementById("dados").innerHTML = '';
    
            // For para percorrer todos os dados e imprimir no HTML
            for(let i=0; i<data.length; i++)
            {
        
                // Adicionado dados
                document.getElementById("dados").innerHTML += "Título: <strong>" + data[i].titulo + "</strong><br>";
                document.getElementById("dados").innerHTML += "Campus: <strong>" + data[i].uo.nome + "</strong><br>";
                document.getElementById("dados").innerHTML += "Início de Execução: <strong>" + data[i].inicio_execucao + "</strong><br><br>";
            }
        
        });
    });
}
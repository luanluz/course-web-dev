// Setando as cores para usar
// de acordo com os valores
// inseridos no vetor valuePairs
var colors = [];

colors[0] = "#b676b1";
colors[1] = "#82caaf";
colors[2] = "#75c0e0";
colors[3] = "#fecf6a";
colors[4] = "#39a275";
colors[5] = "#df1c44";
colors[6] = "#8f3985";
colors[7] = "#194a8d";
colors[8] = "#b93b8f";
colors[9] = "#4b0082";


// Declarando o total de matches do jogo
var totalMatches = 0;


// Função para iniciar o jogo
function getStart()
{
     // Obtendo o id da seção principal
     const view = document.getElementById("game");
    
     // Substituindo o conteúdo dentro da seção principal
     view.innerHTML = '<div> Quantidade de pares: <input type="number" name="quantityPairs" id="quantityPairs" step="2" min="2" max="10"> <button onclick="getMaxPairs()">Começar</button>';
}


// Função para obter o número máximo de pares no jogo. 
// E setar os valores baseado no número máximo de pares
var maxPair;
var valuePairs = [];
function getMaxPairs()
{

    // Declarando vetores para os pares A e B
    let pairA = [];
    let pairB = [];

    // Obtendo o valor máximo de pares pelo DOM
    maxPair = document.getElementById("quantityPairs").value;

    // Obtendo o valor total das cartas
    total = (maxPair*2);

    // Obtendo o total dos matches
    totalMatches = maxPair;

    // Atribuindo valores aos pares A e B
    for(let i=0; i<maxPair; i++)
    {
        pairA[i] = (i+1);
        pairB[i] = (i+1);
    }

    // Atribuindo valores aleatórios em todos os índices
    for(let i=0; i<total; i++)
    {

        // Se for menor que a metade do total
        if(i < maxPair)
        {

            // Obtendo um índice aleatório que esteja dentro
            // do valor máximo de pares
            index = Math.floor(Math.random() * pairA.length);
            
            // Atribuindo à variável valuePairs um
            // valor na posição aleatória do vetor
            // pairA e removendo-o depois
            valuePairs[i] = pairA[index];

            // Removendo para que não tenha valores
            // duplicados
            pairA.splice(index, 1);
        }
        // Se for maior que a metade do total
        else
        {

            // Obtendo um índice aleatório que esteja dentro
            // do valor máximo de pares
            index = Math.floor(Math.random() * pairB.length);

            // Atribuindo à variável valuePairs um
            // valor na posição aleatória do vetor
            // pairB e removendo-o depois
            valuePairs[i] = pairB[index];

            // Removendo para que não tenha valores
            // duplicados
            pairB.splice(index, 1);
        }
    }

    // Por motivos de debug
    for(let i=0; i<total; i++)
    {
        console.log(valuePairs[i]);
    }
    console.log("------");

    buildGrid();
}


// Função para construir uma grid e inserir elementos nela
function buildGrid()
{

    // Obtendo o id da seção principal
    const view = document.getElementById("game");
    
    // Substituindo o conteúdo dentro da seção principal
    view.innerHTML = '<div id="goals"> Pontuação: 10</div>';

    // Inserindo uma grid na seção principal
    view.innerHTML += '<div id="grid" class="grid-container">';

    // Obtendo o id da grid para inserir os itens dentro
    const grid = document.getElementById("grid");
    
    // Inserindo itens na grid de acordo com o tamanho do
    // vetor de valores do pares
    valuePairs.forEach((valuePair, index) => {
        grid.innerHTML += `<div id="item${index}" class="grid-item card" onclick="countGoals(${valuePair},${index})"><h1>.</h1></div>`;
    });

    // Fechando a div da grid
    view.innerHTML += '</div>';
}


// Função para contar os pontos de acordo com
// os acertos ou erros do usuário
var quantityClicks = 0;
var addValue = 0;
var goals = 10;
var values = [];
var indexes = [];
var lastIsntMatch = false;
function countGoals(value, index)
{

    // Remove as cores dos cards caso
    // os dois ultimos não tenham sido
    // iguais
    if((lastIsntMatch) && quantityClicks == 0)
    {
        changeColor(values[0], indexes[0], false);
        changeColor(values[1], indexes[1], false);
    }
    
    // Atribui valores do primeiro e segundo
    // click a um vetor auxiliar
    values[quantityClicks] = value;
    indexes[quantityClicks] = index;

    // Incrementa a quantidade de clicks
    quantityClicks++;
    
    // Adiciona o valor do card para conferir
    // se são iguais
    addValue += value;

    // Muda a cor do card atual
    changeColor(value, index, true);

    // Se tiver selecionado os dois cards
    // para comparação
    if(quantityClicks == 2)
    {

        // Se o primeiro valor mais o segundo valor
        // dividido por dois for igual ao primeiro
        // ou ao segundo, então ambos são iguais
        if((addValue/2) == value)
        {

            // Logo, deu match
            isMatch(true, indexes);
            
            // O último, que no caso é o atual,
            // deu match. Portanto, atribui falso
            lastIsntMatch = false;
        }
        else
        {
            // Não são iguais, portanto
            // não deu match
            isMatch(false, indexes);

            // Atribui true, pois os dois ultimos
            // não deram match
            lastIsntMatch = true;
        }
    }
}


// Função para setar valores caso
// tenha dado match ou não
var matches = 0;
function isMatch(match, indexes)
{
    const view = document.getElementById("goals");
    let firstCard;
    let secondCard;

    // Quando dá match é atribuido 0
    // as variáveis de quantidade de
    // clicks e adição de valores.
    // E são somados mais dez pontos
    if(match)
    {
        quantityClicks = 0;
        addValue = 0;
        goals += 10;
        view.innerText = ` Pontuação: ${goals}`;

        // Removendo as funções onclick dos cards
        firstCard = document.getElementById(`item${indexes[0]}`);
        secondCard = document.getElementById(`item${indexes[1]}`);
        firstCard.onclick = function(){};
        secondCard.onclick = function(){};

        // Incrementando a variável matches para
        // verificar o estado do jogo
        matches++;
        console.log(matches);

        // Se os matches atuais for igual ao total de matches,
        // então zerou o jogo
        if(matches == totalMatches)
        {
            winOrLost(true);
            goals = 10;
            matches = 0;
        }

        console.log(goals);
    }

    // Quando não dá match é atribuido 0
    // as variáveis de quantidade de
    // clicks e adição de valores.
    // E é subtraído um ponto
    else
    {
        quantityClicks = 0;
        addValue = 0;
        goals--;
        view.innerText = ` Pontuação: ${goals}`;

        // Se o total de pontos for menor que 1,
        // então acabou o jogo.
        if(goals < 1)
        {
            winOrLost(false);
            goals = 10;
        }

        console.log(goals);
    }
}


// Função para setar as cores de acordo com
// os valores dos cards e setar a cor padrão
// caso não tenha dado match.
function changeColor(value, index, change)
{

    // Obtendo o elemento do card para poder manipular o
    // estilo
    const card = document.getElementById(`item${index}`);
    if(change)
    {

        // Setando cor correspondente ao valor
        card.style.backgroundColor = colors[value-1];
        card.innerHTML = `<h1>${value}</h1>`;
    }
    else
    {

        // Setando cor padrão
        card.style.backgroundColor = '#333';
        card.innerHTML = '<h1>.</h1>';
    }
}


// Função para mostrar se o jogo acabou bem
// ou mal
function winOrLost(win)
{

    if(win)
    {
        alert(`Parabéns, você ganhou! Sua pontuação foi: ${goals}`);
        getStart();
    }
    else
    {
        alert("Não foi dessa vez... Tente novamente mais tarde.");
        getStart();
    }
}
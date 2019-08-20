// Função do jQuery para obter os dados JSON do servidor local
$(document).ready(function(){
  $.get( "http://localhost:3000/", function(data) {

    // Impressão dos dados
    // (Uso para teste)
    console.log(data);

    // For para percorrer todos os dados e imprimir no HTML
    for(let index=0; index<data.length; index++)
    {

      // Adicionando o index atual no HTML com o incremento de 1
      document.getElementById("list").innerHTML += (index + 1) + " - <br>";

      // Adicionado nome do dado atual 
      document.getElementById("list").innerHTML += data[index].nome + "<br>";

      // Adicionado cargo do dado atual
      document.getElementById("list").innerHTML += data[index].cargo_emprego + "<br>";
      
      // Adicionado situação do dado atual
      document.getElementById("list").innerHTML += data[index].situacao.nome + "<br><br>";
    }
  
  });
});
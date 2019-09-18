<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/lista.css">
    
    <title>Lista</title>
</head>
<body>
    <header>
        <h1>Lista Dinâmica</h1>
    </header>
    <main>
        <div class="form">
            <label>Nome:</label>
            <input id="nome" type="text" placeholder="Digite o nome">
            <label>Idade:</label>
            <input id="idade" type="number" placeholder="18" min="1">
            <label>Telefone:</label>
            <input id="telefone" type="text" placeholder="(00) 90000-0000">
            <a href="#" onclick="salvar()">SALVAR</a>
        </div>
        <div class="lista">
            <ul>
                <li class="li-title">
                    LISTA
                </li>

                @foreach($listas as $lista)
                <li>
                    <span>Nome: </span> <span> {{ $lista -> nome }} | </span>
                    <span> Idade: </span> <span> {{ $lista -> idade }} | </span>
                    <span> Telefone: </span> <span> {{ $lista -> telefone }} </span> 
                </li>
                @endforeach

            </ul>
        </div>
    </main>
    <footer>
        <p>
            &#9400 Copyright -  2019 - Luan Luz
        </p>
    </footer>
    <script src="js/lista.js"></script>
</body>
</html>
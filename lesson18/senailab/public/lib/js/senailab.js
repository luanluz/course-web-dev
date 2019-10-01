/* ------------- Change background color every loading ------------- */
var colors = [];

colors[0] = "#2980b9";
colors[1] = "#f39c12";
colors[2] = "#27ae60";
colors[3] = "#8e44ad";
colors[4] = "#f3c13a";

var color = Math.floor(Math.random() * colors.length);

var main = document.getElementsByClassName("main");
    if(main.length != 0)
        main[0].style.backgroundColor = colors[color];

/* ------------- Change color of bottom navigation items ------------- */
document.getElementsByClassName("bottom-navbar-itens")[0].childNodes[1].style.color = colors[color];
document.getElementsByClassName("bottom-navbar-itens")[1].childNodes[1].style.color = colors[color];
document.getElementsByClassName("bottom-navbar-itens")[2].childNodes[1].style.color = colors[color];
document.getElementsByClassName("bottom-navbar-itens")[3].childNodes[1].style.color = colors[color];


/* ------------- Function sticky navbar ------------- */
window.onscroll = function() { stickyNavbar() };

var navbar = document.getElementsByTagName("nav")[0];
var senai = document.getElementsByTagName("svg")[0].childNodes[1].childNodes[3].childNodes[1];
var lab = document.getElementsByTagName("svg")[1].childNodes[3];

var li_inicio = document.getElementById("inicio");
var li_projetos = document.getElementById("projetos");
var li_equipe = document.getElementById("equipe");
var li_sobre = document.getElementById("sobre");

var verifyWhichPageIs = li_inicio.childNodes[1].classList[0];

var sticky = navbar.offsetTop;

function stickyNavbar()
{
    if(window.pageYOffset > sticky)
    {
        navbar.classList.add("sticky");
        lab.classList.remove("header-lab");
        senai.classList.remove("header-senai");
        lab.classList.add("header-lab-colored");
        senai.classList.add("header-senai-colored");
        li_inicio.childNodes[1].style.color = colors[color];
        li_projetos.childNodes[1].style.color = colors[color];
        li_equipe.childNodes[1].style.color = colors[color];
        li_sobre.childNodes[1].style.color = colors[color];
    }
    else
    {
        navbar.classList.remove("sticky");
        lab.classList.remove("header-lab-colored");
        senai.classList.remove("header-senai-colored");
        lab.classList.add("header-lab");
        senai.classList.add("header-senai");
        if(verifyWhichPageIs == 'pages')
        {
            li_inicio.childNodes[1].style.color = "#a0a0a0";
            li_projetos.childNodes[1].style.color = "#a0a0a0";
            li_equipe.childNodes[1].style.color = "#a0a0a0";
            li_sobre.childNodes[1].style.color = "#a0a0a0";
        }
        else
        {
            li_inicio.childNodes[1].style.color = "#fff";
            li_projetos.childNodes[1].style.color = "#fff";
            li_equipe.childNodes[1].style.color = "#fff";
            li_sobre.childNodes[1].style.color = "#fff";
        }
    }
}

/* ------------- Function to show and hide modal ------------- */
function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);
    if(modal) {
        modal.classList.add('show');
        modal.addEventListener('click', (e) =>
        {
            if(e.target.id == modalID || e.target.className == 'fa fa-times-circle')
            {
                modal.classList.remove('show');
            }
        });
    }
}

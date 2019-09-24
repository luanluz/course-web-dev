/* ------------- Change background color every loading ------------- */
var colors = [];

colors[0] = "#2980b9";
colors[1] = "#f39c12";
colors[2] = "#27ae60";
colors[3] = "#8e44ad";
colors[4] = "#f1c40f";

var color = Math.floor(Math.random() * colors.length);

var main = document.getElementsByClassName("main");
main[0].style.backgroundColor = colors[color];

/* ------------- Function to make sticky on navbar ------------- */
window.onscroll = function() { stickyNavbar() };

var navbar = document.getElementsByTagName("nav")[0];
var senai = document.getElementsByTagName("svg")[0].childNodes[1].childNodes[3].childNodes[1];
var lab = document.getElementsByTagName("svg")[1].childNodes[3];

var li_inicio = document.getElementById("inicio");
var li_projetos = document.getElementById("projetos");
var li_equipe = document.getElementById("equipe");
var li_contato = document.getElementById("contato");
var li_sobre = document.getElementById("sobre");

var sticky = navbar.offsetTop;

function stickyNavbar()
{
    if(window.pageYOffset > sticky)
    {
        navbar.classList.add("sticky");
        lab.classList.remove("st1");
        senai.classList.remove("cls-2");
        lab.classList.add("st1-colored");
        senai.classList.add("cls-2-colored");
        li_inicio.childNodes[1].style.color = colors[color];
        li_inicio.childNodes[1].style.color = colors[color];
        li_projetos.childNodes[1].style.color = colors[color];
        li_equipe.childNodes[1].style.color = colors[color];
        li_contato.childNodes[1].style.color = colors[color];
        li_sobre.childNodes[1].style.color = colors[color];
    }
    else
    {
        navbar.classList.remove("sticky");
        lab.classList.remove("st1-colored");
        senai.classList.remove("cls-2-colored");
        lab.classList.add("st1");
        senai.classList.add("cls-2");
        li_inicio.childNodes[1].style.color = "#fff";
        li_inicio.childNodes[1].style.color = "#fff";
        li_projetos.childNodes[1].style.color = "#fff";
        li_equipe.childNodes[1].style.color = "#fff";
        li_contato.childNodes[1].style.color = "#fff";
        li_sobre.childNodes[1].style.color = "#fff";
    }
}
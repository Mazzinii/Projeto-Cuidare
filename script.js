const hamburguer = document.querySelector(".hamburguer"); //pegando o elemento hamburguer
const nav = document.querySelector(".nav"); // pegando o elemento nav

const pai = document.querySelector(".pai"); //pegando o elemento pai
const filhos = document.querySelector(".nav-contemfilhos"); //pegando o elemento filho

const pai1 = document.querySelector(".pai1"); //pegando o elemento pai
const filhos1 = document.querySelector(".nav-contemfilhos1"); //pegando o elemento filho

/* --------FORMULARIO------  */
function thanks() {
  window.open("https://institutocuidare.netlify.app/thanks", "_top");
}
/* --------MENU HAMBURGUER------  */
hamburguer.addEventListener("click", () => nav.classList.toggle("active")); //adicionando evento de clique que quando ativo mostra o menu nav

/* --------SUBMENUS------  */

pai.addEventListener("click", () => filhos.classList.toggle("active")); //adicionando evento de clique que quando ativo mostrar o primeiro submenu

pai1.addEventListener("click", () => filhos1.classList.toggle("active")); //adicionando evento de clique que quando ativo mostrar o segundo submenu

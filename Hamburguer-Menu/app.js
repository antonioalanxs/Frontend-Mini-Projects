const hamburguerBtn = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");

hamburguerBtn.onclick = () => nav.classList.toggle("nav--active");

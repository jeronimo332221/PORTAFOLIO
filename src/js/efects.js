function cl($data) {
  console.log($data);
}
const body = document.getElementById("body");
const onload = document.getElementById("onload");

window.onload = function () {
  body.classList.remove("hover");
  body.removeChild(onload);
};

let animado = document.querySelectorAll(".animado");
let animado1 = document.querySelectorAll(".animado1");
let animado2 = document.querySelectorAll(".animado2");
let animado3 = document.querySelectorAll(".animado3");

function scroll() {
  const scrollTop = document.documentElement.scrollTop;

  for (var i = 0; i < animado.length; i++) {
    const alturaAnimado = animado[i].offsetTop;
    if (alturaAnimado - 600 < scrollTop) {
      animado[i].style.opacity = 1;
      animado[i].classList.add("bounce");
    }
  }
  for (var i = 0; i < animado1.length; i++) {
    const alturaAnimado = animado1[i].offsetTop;
    if (alturaAnimado - 800 < scrollTop) {
      animado1[i].style.opacity = 1;
      animado1[i].classList.add("fadeLeft");
      volver();
    }
  }
  for (var i = 0; i < animado2.length; i++) {
    const alturaAnimado = animado2[i].offsetTop;
    if (alturaAnimado - 800 < scrollTop) {
      animado2[i].style.opacity = 1;
      animado2[i].classList.add("fadeRight");
      volver();
    }
  }
}

function volver() {
  setTimeout(() => {
    for (var i = 0; i < animado2.length; i++) {
      animado2[i].classList.add("fadeLeft");
    }
    for (var i = 0; i < animado1.length; i++) {
      animado1[i].classList.add("fadeRight");
    }
  }, 1000);
}

window.addEventListener("scroll", scroll);

const masInfo = document.querySelectorAll(".masInfo");
const linkUrl = document.querySelectorAll("#linkUrl");

masInfo.forEach(function (mi) {
  mi.addEventListener("click", (e) => {
    document.querySelector("body").appendChild(modal);

    id = e.target.id;
    linkActual = document.querySelectorAll("#link");
    linkActual = linkActual[id];
    link.setAttribute("href", linkActual);

    if (e.target.id === "0") {
      linkActualImg = "../../../build/img/festival.webp";
      moreDescripcionProyecto.textContent =
        "Esta Pagina fue desarrollada en paralelo al curso de desarrollo web. Es completamente estatica sin ninguna funcion avanzada.";
      moreDescripcionProyecto.textContent +=
        "Sin embargo tiene una interesante rama amplia de colores llamativos los cuales generan que dicha pagina sea atractiva visualmente.";
    }
    if (e.target.id === "1") {
      linkActualImg = "../../../build/img/uptask.jpg";
      moreDescripcionProyecto.textContent =
        "Tiene como funcionalidad principal realizar de manera ordenada tareas necesarias para el usuario. Esta Aplicacion cuenta con Login, Usuarios, Tokens y confirmacion de cuentas via E-mail (esta desabilitada la confirmacion temporalmente). Si quieren probarla pueden ingresar con invitado@invitado.com   Password: invitado1";
    }
    if (e.target.id === "2") {
      linkActualImg = "../../../build/img/appsalon.jpg";
      moreDescripcionProyecto.textContent =
        "Appsalon esta diseñada exclusivamente para registrar y administrar las citas propuestas por el usuario. Cuenta con una base de datos la cual permite guardar la informacion de cada usuario particular. pueden ingresar con invitado@invitado.com   Password: invitado1";
    }

    imagen.setAttribute("src", linkActualImg);
    tituloProyecto.textContent =
      e.target.parentElement.childNodes[1].textContent;

    descripcionProyecto.textContent =
      e.target.parentElement.childNodes[3].textContent;
  });
});

mi1 = masInfo[0];
mi2 = masInfo[1];
mi3 = masInfo[2];
mostrarModal = false;

const modal = document.createElement("DIV");
const proyecto = document.createElement("DIV");
const tituloProyecto = document.createElement("H2");
const imagen = document.createElement("IMG");
const descripcionProyecto = document.createElement("P");
const link = document.createElement("A");
const btnCerrar = document.createElement("A");

btnCerrar.addEventListener("click", () => {
  document.querySelector("body").removeChild(modal);
  imagen.removeAttribute("src", linkActualImg);
});

const moreDescripcionProyecto = document.createElement("P");

btnCerrar.textContent = "Volver";
link.textContent = "<  Click aqui para visitar el sitio Web  >";

modal.classList.add("modal");
descripcionProyecto.classList.add("descripcion-modal");
moreDescripcionProyecto.classList.add("descripcion-modal");
proyecto.classList.add("proyecto-modal");
tituloProyecto.classList.add("h4-modal");
btnCerrar.classList.add("boton-modal");
link.classList.add("link-modal");
imagen.classList.add("imagen-modal");

modal.appendChild(proyecto);
proyecto.appendChild(tituloProyecto);
proyecto.appendChild(imagen);
proyecto.appendChild(descripcionProyecto);
proyecto.appendChild(moreDescripcionProyecto);
proyecto.appendChild(link);
proyecto.appendChild(btnCerrar);

// mi1.addEventListener("click", (e) => {
//   document.querySelector("body").appendChild(modal);
// });

/**
 * Fonction scrollFunction
 * 
 * ajouter un arrière-plan à la barre de navigation lorsque l'utilisateur descend la page
 */

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector("nav").style.backgroundColor = "white";
        document.querySelector("nav").classList.add("onscroll");
    } else {
        document.querySelector("nav").style.backgroundColor = "rgba(0,0,0,0)";
        document.querySelector("nav").classList.remove("onscroll");
    }
  }
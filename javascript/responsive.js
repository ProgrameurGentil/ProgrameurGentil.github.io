window.addEventListener("resize", afficherBoutonMenu);
document.addEventListener("DOMContentLoaded", () => {
  afficherBoutonMenu();
});

function afficherBoutonMenu() {
  var divMenu = document.getElementsByClassName("ConteneurMenu")[0];
  var sommaire = document.getElementsByClassName("Sommaire")[0];
  var bouton = document.getElementById("boutonMenu");
  if (window.screen.width <= 425) {
    divMenu.style.display = "block";
  } else {
    divMenu.style.display = "none";
    sommaire.style.transform = "";
    bouton.style.transform = "";
  }
}




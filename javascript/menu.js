let ouvert = false;

document.addEventListener("DOMContentLoaded", () => {
	// bouton
    document.getElementById("boutonMenu").addEventListener("click", () => {
        afficherMenu();
    });
});

function afficherMenu() {
	var sommaire = document.getElementsByClassName("Sommaire")[0];
	var bouton = document.getElementById("boutonMenu");
	if (ouvert) {
		sommaire.style.transform = "";
		bouton.style.transform = "";
		ouvert = false;
	} else {
		sommaire.style.transform = "translateX(275px)";
		bouton.style.transform = "rotate(180deg)";
		ouvert = true;
	}
}
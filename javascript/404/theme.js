console.log("Script chargé : gestion du theme");

document.addEventListener("DOMContentLoaded", () => {
	if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
	  setDark();
	} else {
	  setLight();
	}
});

function setDark() {
	document.body.setAttribute("data-theme", "dark");
	setThemeIconBouton("dark");
}

function setLight() {
	document.body.setAttribute("data-theme", "light");
	setThemeIconBouton("light");
}

function setThemeIconBouton(theme) {
	var icon = document.getElementById("imageTheme");

	if (theme === "light") {
        icon.src = "./ressources/bouton/theme/light.png";
    } else {
    	icon.src = "./ressources/bouton/theme/dark.png";
    }
}

function setTheme() {
	var theme = document.body.getAttribute("data-theme");

    if (theme === "light") {
        setDark();
    } else {
    	setLight();
    }
}
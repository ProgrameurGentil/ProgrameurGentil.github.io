console.log("Script chargé : gestion des messages");

document.addEventListener("DOMContentLoaded", () => {

    // bouton
    document.getElementById("envoiMessage").addEventListener("click", () => {
        envoyerMessage();
    });

    //input
    var mail = document.getElementById("mail");
    var sujet = document.getElementById("sujet");
    var corps = document.getElementById("corps");

    mail.addEventListener("click", () => {
        enlever_elementManquant(mail);
    });

    sujet.addEventListener("click", () => {
        enlever_elementManquant(sujet);
    });

    corps.addEventListener("click", () => {
        enlever_elementManquant(corps);
    });

});

function mettre_elementManquant(balise) {
    balise.classList.add("elementManquant");
}

function enlever_elementManquant(balise) {
    balise.classList.remove("elementManquant");
}

function verifEmail(email) {
  var patern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return patern.test(email);
}

function afficher_message_envoie(message, couleur) {
    var balise = document.getElementById("messageDEnvoie");
    balise.style.color = couleur;
    balise.textContent = message;

    setTimeout(() => {
      cacher_message_envoie();
    }, 5000);
}

function cacher_message_envoie() {
    document.getElementById("messageDEnvoie").textContent = "";
}

function envoyerMessage() {
    var mail = document.getElementById("mail");
    var sujet = document.getElementById("sujet");
    var corps = document.getElementById("corps");

    mail.value = mail.value.trim();

    var message = "# Message de mon Portefolio\n## Mail : \n" + mail.value + "\n## Sujet : \n" + sujet.value + "\n## Corps : \n" + corps.value;

    if (mail.value != "" && sujet.value != "" && corps.value != "" && verifEmail(mail.value)) {
        fetch("XXX", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                content: message,
            })
        })
        .then(response => {
            if (response.ok) {
                afficher_message_envoie("Message bien envoyé. Merci !", "green");
                mail.value = "";
                sujet.value = "";
                corps.value = "";

                enlever_elementManquant(mail);
                enlever_elementManquant(sujet);
                enlever_elementManquant(corps);
            } else {
                afficher_message_envoie("Erreur lors de l'envoie. Essayez plus tard.", "red");
            }
        });
    } else {
        if (mail.value.trim() == "" || !(verifEmail(mail.value))) mettre_elementManquant(mail);
        if (sujet.value.trim() == "") mettre_elementManquant(sujet);
        if (corps.value.trim() == "") mettre_elementManquant(corps);
    }

}


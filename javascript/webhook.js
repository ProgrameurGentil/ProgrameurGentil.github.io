console.log("Script chargé : gestion des messages");

function envoyerMessage() {
    var mail = document.getElementById("mail");
    var sujet = document.getElementById("sujet");
    var corps = document.getElementById("corps");

    var message = "# Message de mon Portefolio\n## Mail : \n" + mail.value + "\n## Sujet : \n" + sujet.value + "\n## Corps : \n" + corps.value;

    if (mail.value != "" && sujet.value != "" && corps.value != "") {
        fetch("https://discord.com/api/webhooks/1391430838004088943/LBis0t3tbvig7DYz7HXD-x-VnGzYruaUTTKfaYVjhL6ZhqSvgagRwa_HqmvSqP0qH4Eb", {
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
                alert("Message bien envoyé. Merci !");
                mail.value = "";
                sujet.value = "";
                corps.value = "";
            } else {
                alert("Erreur lors de l'envoi. :/");
            }
        });
    } else {
        alert("Veuillez remplir tout les champs")
    }

}

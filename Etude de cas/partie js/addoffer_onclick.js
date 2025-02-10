function validerFormulaire() {
    const titre = document.getElementById("titre").value;
    const destination = document.getElementById("destination").value;
    const dateDepart = new Date(document.getElementById("dateDepart").value);
    const dateRetour = new Date(document.getElementById("dateRetour").value);
    const prix = parseFloat(document.getElementById("prix").value);
    if (titre.length < 3) {
        alert("Le titre doit contenir au moins 3 caractères.");
        return false;
    }

    if (!/^[a-zA-Z\s]{3,}$/.test(destination)) {
        alert("La destination doit contenir uniquement des lettres et des espaces, et au moins 3 caractères.");
        return false;
    }
    if (dateRetour <= dateDepart) {
        alert("La date de retour doit être ultérieure à la date de départ.");
        return false;
    }
    if (isNaN(prix) || prix <= 0) {
        alert("Le prix doit être un nombre positif.");
        return false;
    }
    alert("Formulaire validé avec succès !");
    return true;
}
document.getElementById("addOfferButton").onclick = function () {
    validerFormulaire();
};

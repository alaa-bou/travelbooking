// addOffer.js

// Fonction de validation
function validerFormulaire(event) {
    // Empêcher l'envoi du formulaire par défaut
    event.preventDefault();

    // Récupérer les valeurs des champs
    const titre = document.getElementById("titre").value;
    const destination = document.getElementById("destination").value;
    const dateDepart = new Date(document.getElementById("dateDepart").value);
    const dateRetour = new Date(document.getElementById("dateRetour").value);
    const prix = parseFloat(document.getElementById("prix").value);

    // Variables pour gérer les messages d'erreur et de succès
    let valid = true;

    // Réinitialiser les messages d'erreur et de succès
    document.getElementById("titreError").textContent = "";
    document.getElementById("destinationError").textContent = "";
    document.getElementById("dateDepartError").textContent = "";
    document.getElementById("dateRetourError").textContent = "";
    document.getElementById("prixError").textContent = "";
    document.getElementById("formSuccess").textContent = "";

    // Vérification du champ titre
    if (titre.length < 3) {
        document.getElementById("titreError").textContent = "Le titre doit contenir au moins 3 caractères.";
        valid = false;
    } else {
        document.getElementById("titreError").textContent = "Titre valide.";
        document.getElementById("titreError").classList.add("success");
    }

    // Vérification du champ destination
    if (!/^[a-zA-Z\s]{3,}$/.test(destination)) {
        document.getElementById("destinationError").textContent = "La destination doit contenir uniquement des lettres et des espaces, et au moins 3 caractères.";
        valid = false;
    } else {
        document.getElementById("destinationError").textContent = "Destination valide.";
        document.getElementById("destinationError").classList.add("success");
    }

    // Vérification de la date de départ
    if (isNaN(dateDepart.getTime())) {
        document.getElementById("dateDepartError").textContent = "La date de départ n'est pas valide.";
        valid = false;
    } else {
        document.getElementById("dateDepartError").textContent = "Date de départ valide.";
        document.getElementById("dateDepartError").classList.add("success");
    }

    // Vérification de la date de retour
    if (isNaN(dateRetour.getTime()) || dateRetour <= dateDepart) {
        document.getElementById("dateRetourError").textContent = "La date de retour doit être ultérieure à la date de départ.";
        valid = false;
    } else {
        document.getElementById("dateRetourError").textContent = "Date de retour valide.";
        document.getElementById("dateRetourError").classList.add("success");
    }

    // Vérification du prix
    if (isNaN(prix) || prix <= 0) {
        document.getElementById("prixError").textContent = "Le prix doit être un nombre positif.";
        valid = false;
    } else {
        document.getElementById("prixError").textContent = "Prix valide.";
        document.getElementById("prixError").classList.add("success");
    }

    // Afficher un message de succès si tout est valide
    if (valid) {
        document.getElementById("formSuccess").textContent = "Formulaire validé avec succès !";
    }
}

// Attacher l'événement de soumission du formulaire
document.getElementById("offerForm").addEventListener("submit", validerFormulaire);

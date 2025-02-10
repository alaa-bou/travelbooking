// addOffer.js

// Fonction pour vérifier le champ Title
function verifierTitre() {
    const titre = document.getElementById("titre").value;
    const titreMessage = document.getElementById("titreMessage");

    if (titre.length < 3) {
        titreMessage.textContent = "Le titre doit contenir au moins 3 caractères.";
        titreMessage.className = "error";
    } else {
        titreMessage.textContent = "Correct.";
        titreMessage.className = "success";
    }
}

// Fonction pour vérifier le champ Destination
function verifierDestination() {
    const destination = document.getElementById("destination").value;
    const destinationMessage = document.getElementById("destinationMessage");

    if (!/^[a-zA-Z\s]{3,}$/.test(destination)) {
        destinationMessage.textContent = "La destination doit contenir uniquement des lettres et des espaces, et au moins 3 caractères.";
        destinationMessage.className="error"
    } else {
        destinationMessage.textContent = "Correct.";
        destinationMessage.className="success";
    }
}
// Fonction pour verifier la date de depart et retour  
function verifdate(){
    const date_depart = document.getElementById("dateDepart").value;
    const dateRetourMessage=document.getElementById("dateRetourError");
    const retour_date = document.getElementById("dateRetour").value;
    if date_depart>retour_date {
        dateRetourMessage.textContent="La date de retour doit être ultérieure à la date de départ."
        dateRetourMessage.className="error";
    }
    else{
        dateRetourMessage.textContent="correct.";
        dateRetourMessage.className="success";
    }
}
// Fonction pour vérifier le champ Price
function verifierPrix() {
    const prix = parseFloat(document.getElementById("prix").value);
    const prixMessage = document.getElementById("prixMessage");

    if (isNaN(prix) || prix <= 0) {
        prixMessage.textContent = "Le prix doit être un nombre positif.";
        prixMessage.className = "error";
    } else {
        prixMessage.textContent = "Correct.";
        prixMessage.className = "success";
    }
}
// Ajout d'événements "keyup" pour chaque champ
document.getElementById("titre").addEventListener("keyup", verifierTitre);
document.getElementById("destination").addEventListener("keyup", verifierDestination);
document.getElementById("retour_date").addEventListener("keyup",verifdate);
document.getElementById("prix").addEventListener("keyup", verifierPrix);

// script.js

// Attendre que le DOM soit complètement chargé
document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner les éléments nécessaires dans le DOM
    const colorBox = document.getElementById("color-box");
    const changeColorBtn = document.getElementById("change-color-btn");

    // Fonction pour générer une couleur aléatoire en format hexadécimal
    function getRandomColor() {
        const letters = '0123456789ABCDEF'; // Caractères possibles pour un code hexadécimal
        let color = '#'; // Début du code hexadécimal

        // Générer les 6 caractères de la couleur
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]; // Ajouter un caractère aléatoire
        }

        return color; // Retourner la couleur générée
    }

    // Ajouter un événement au bouton pour changer la couleur du carré
    changeColorBtn.addEventListener("click", function() {
        const newColor = getRandomColor(); // Générer une nouvelle couleur aléatoire
        colorBox.style.backgroundColor = newColor; // Appliquer la couleur au carré
    });
});

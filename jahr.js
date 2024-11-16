// Funktion zum Aktualisieren von Datum in Copyright

document.getElementById("jahr").textContent = new Date().getFullYear();

// Funktion zum Anzeigen des Buttons, wenn gescrollt wird
window.onscroll = function() {
    var button = document.getElementById("nachOben");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

// Funktion, um nach oben zu scrollen
function nachObenFunktion() {
    document.body.scrollTop = 0; // Für Safari
    document.documentElement.scrollTop = 0; // Für Chrome, Firefox, IE und Opera
}
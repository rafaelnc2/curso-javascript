// IIFE -> Immediately Invoked Function Expression
// Ótima alternativa para fugir do escopo global

(function() {
    console.log("Será executado imediatamente!");
    console.log("Foge do escopo mais abrangente!");
})();
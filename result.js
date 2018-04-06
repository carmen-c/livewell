//remove everything from local storage but the name
document.getElementById("playAgain").addEventListener("click", function() {
    localStorage.removeItem("chosenFood");
    location.href = "recipes.html"; 
});
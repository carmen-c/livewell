
$(document).ready (function() {
    if (typeof(Storage) !== "undefined") {
        var myScore = localStorage.getItem("score");
        $("#score").text = "Your Score: "+myScore+" / 3";
    } else {
        document.getElementById("string").innerHTML = "Sorry, your browser does not support Web Storage...";
    } 
});

//remove everything from local storage but the name
document.getElementById("playAgain").addEventListener("click", function() {
    
    localStorage.removeItem("chosenFood");
    location.href = "recipes.html"; 
});
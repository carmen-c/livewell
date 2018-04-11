var food = null;

$(document).ready (function() {
    if (typeof(Storage) !== "undefined") {
        var myScore = localStorage.getItem("score");
        var myFood = localStorage.getItem("chosenFood");
        
        $("#score").text("Your Score: "+myScore+" / 3");
        food = JSON.parse(myFood);
        newSuggestion(food.suggestion);
        
    } else {
        document.getElementById("string").innerHTML = "Sorry, your browser does not support Web Storage...";
    } 
});

//remove everything from local storage but the name
document.getElementById("playAgain").addEventListener("click", function() {
    
    localStorage.removeItem("chosenFood");
    location.href = "recipes.html"; 
});


function newSuggestion(suggestionArray) {
    
    newDiv = document.createElement("div");
    newDiv.className = "suggestionBox";
    newDiv.innerText = suggestionArray[x];
}
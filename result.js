
//load score and suggestions
$(document).ready (function() {
    if (typeof(Storage) !== "undefined") {
        var myScore = localStorage.getItem("score");
        var myFood = localStorage.getItem("chosenFood");
        
        $("#score").text("Your Score: "+myScore+" / 3");
        var food = JSON.parse(myFood);
        newSuggestion(food.suggestion);
        
    } else {
        document.getElementById("string").innerHTML = "Sorry, your browser does not support Web Storage...";
    } 
});

//remove everything from local storage but the name
document.getElementById("playAgain").addEventListener("click", function() {
    localStorage.removeItem("score");
    localStorage.removeItem("chosenFood");
    location.href = "recipes.html"; 
});

//display ingredient suggestions
function newSuggestion(suggestionArray) {
    for(i=0;i<suggestionArray.length;i++) {
//        newPic = document.createElement("img");
        
        newDiv = document.createElement("div");
        newDiv.className = "suggestionBox";
        newDiv.innerText = suggestionArray[i];
        document.getElementById("suggestions").appendChild(newDiv);
    }
}

//show feedback depending on the score
var feedback = document.getElementById("feedback"),
    resultPic = document.getElementById("resultPic");

function showFeedback(score) {
    if(score == 0) {
        resultPic.src= "";
        feedback.innerText = "";
        
    } else if (score == 1) {
        resultPic.src= "";
        feedback.innerText = "";
        
    } else if (score == 2) {
        resultPic.src= "";
        feedback.innerText = "";
        
    } else if (score == 3) {
        resultPic.src= "";
        feedback.innerText = "";
    }
}
    
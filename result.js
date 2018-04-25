
//load score and suggestions
$(document).ready (function() {
    if (typeof(Storage) !== "undefined") {
        var myScore = localStorage.getItem("score");
        var myFood = localStorage.getItem("chosenFood");
        var myName = localStorage.getItem("name");
        
        $("#score").text("Your Score: "+myScore+" / 3");
        var food = JSON.parse(myFood);
        newSuggestion(food.suggestion);
        showFeedback(parseInt(myScore), myName);
        
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

function showFeedback(score, name) {
    if(score == 0) {
        resultPic.src= "imgs/icon_imgs/try_again_emo.svg";
        feedback.innerText = "Oh no!"+ name +" Why don't you try again? Remember, look through the recipe carefully and remember the facts.";
        
    } else if (score == 1) {
        resultPic.src= "imgs/icon_imgs/try_again_emo.svg";
        feedback.innerText = name +", you have put in some effort, but not enough. Try looking for the facts, it's important to remember them.";
        
    } else if (score == 2) {
        resultPic.src= "imgs/icon_imgs/well_done_emo.svg";
        feedback.innerText = "Good job "+ name +"! You almost got all the questions right.";
        console.log(name);
        
    } else if (score == 3) {
        resultPic.src= "imgs/icon_imgs/well_done_emo.svg";
        feedback.innerText = "Hurray!! "+ name +" you are well on your way to becoming an awesome cook! Check out the suggestions below to see what you can subsitute in this recipe to lower your calorie intake.";
    }
}
    
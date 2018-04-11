//get the food object that was clicked on
$(document).ready(function() {
    if (typeof(Storage) !== "undefined") {
        var chosen = localStorage.getItem("chosenFood");
        var food = JSON.parse(chosen);
        display(food);
            
    } else {
        document.getElementById("string").innerHTML = "Sorry, your browser does not support Web Storage...";
    } 
    
});

//to the quiz!
document.getElementById("toTest").addEventListener("click", function() {
    location.href = "quiz.html"; 
});

document.getElementById("back").addEventListener("click", function() {
   location.href = "recipes.html"; 
});

//show the info related to the food object
function display(food) {
    document.getElementById("image").src = food.image;
    document.getElementById("dishName").innerText = food.name;
    document.getElementById("calories").innerText = food.calories + " calories, "+food.servings; 
    document.getElementById("recipeBox").innerHTML = food.recipeHTML;
    for (x=0;x<food.ingredients.length;x++) {
        $("#ingredientBox").append(food.ingredients[x]+"<br>");
    }
}
$(document).ready(function() {
    
    if (typeof(Storage) !== "undefined") {
        var chosen = localStorage.getItem("chosenFood");
        var food = JSON.parse(chosen);
        display(food);
            
    } else {
        document.getElementById("string").innerHTML = "Sorry, your browser does not support Web Storage...";
    } 
    
});

document.getElementById("toTest").addEventListener("click", function() {
    location.href = "quiz.html"; 
});

function display(food) {
    document.getElementById("image").src = food.image;
    document.getElementById("dishName").innerText = food.name;
    document.getElementById("recipeBox").innerHTML = food.recipeHTML;
    for (x=0;x<food.ingredients.length;x++) {
        $("#ingredientBox").append(food.ingredients[x]+"<br>");
    }
}
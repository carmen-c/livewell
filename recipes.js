$(document).ready(function() {
        
    $.getJSON("http://localhost:8888/livewell/food.json", function(json) {
        foodArray = json;
        loop(foodArray);
    });
    
    document.getElementsByTagName("select")[0].onchange  = function () {
    var index = this.selectedIndex;
    if (index == 0) {
        foodArray.sort(function(a, b){
            var keyA = a.calories,
                keyB = b.calories;
            if(keyA < keyB) return -1;
            if(keyA > keyB) return 1;
            return 0;
        });
        loop(foodArray);
        
    } else if (index == 1) {
        foodArray.sort(function(a, b){
            var keyA = a.calories,
                keyB = b.calories;
            if(keyA > keyB) return -1;
            if(keyA < keyB) return 1;
            return 0;
        });
        loop(foodArray);
        
    } else if (index == 2) {
        foodArray.sort(function(a, b){
            var textA = a.type,
                textB = b.type;
            return textA.localeCompare(textB);
        });
        loop(foodArray);
        
    }
}
}); 

var boxArray = [];
var foodArray = [];

function createNew (foodItem) {
    var newBox = document.createElement('div');
    newBox.className = 'foodDiv';
    newBox.style.backgroundImage = 'url('+foodItem.image+')';
    
    newBox.addEventListener("click", function() {
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("chosenFood", JSON.stringify(foodItem));
            
        } else {
            document.getElementById("string").innerHTML = "Sorry, your browser does not support Web Storage...";
        } 
        location.href = "recipeView.html";
    });
    boxArray.push(newBox);
}

function showFoods () {
    document.getElementById("foodList").innerHTML = "";
    for (i=0; i < boxArray.length; i++) {
        document.getElementById("foodList").appendChild(boxArray[i]);
    } 
}

function loop (array) {
    boxArray = [];
    for (x=0; x < array.length; x++){
        createNew(foodArray[x]);
    }
    showFoods();
}

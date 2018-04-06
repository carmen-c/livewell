//these are empty at the beginning
var boxArray = [];
var foodArray = [];

$(document).ready(function() {
        
    //get food objects
    $.getJSON("http://localhost:8888/livewell/food.json", function(json) {
        foodArray = json;
        loop(foodArray);
    });
    
    //depending on dropdown choice, change sorting rules
    document.getElementsByTagName("select")[0].onchange  = function () {
    var index = this.selectedIndex;
    
    //sort ascending
    if (index == 0) {
        foodArray.sort(function(a, b){
            var keyA = a.calories,
                keyB = b.calories;
            if(keyA < keyB) return -1;
            if(keyA > keyB) return 1;
            return 0;
        });
        loop(foodArray);
       
    //sort descending
    } else if (index == 1) {
        foodArray.sort(function(a, b){
            var keyA = a.calories,
                keyB = b.calories;
            if(keyA > keyB) return -1;
            if(keyA < keyB) return 1;
            return 0;
        });
        loop(foodArray);
        
    //sort by breakfast, lunch, or dinner
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


function createNew (foodItem) {
    //make a new div for each food object and add them to the boxArray
    var newBox = document.createElement('div');
    newBox.className = 'foodDiv';
    newBox.style.backgroundImage = 'url('+foodItem.image+')';
    
    //each new div will move to the next page if clicked on
    newBox.addEventListener("click", function() {
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("chosenFood", JSON.stringify(foodItem));
            
        } else {
            document.getElementById("string").innerHTML = "Sorry, your browser does not support Web Storage...";
        } 
        location.href = "recipeView.html";
    });
    
    //add the divs into the boxArray, but don't display them yet
    boxArray.push(newBox);
}

//display all the divs in the boxArray
function showFoods () {
    document.getElementById("foodList").innerHTML = "";
    for (i=0; i < boxArray.length; i++) {
        document.getElementById("foodList").appendChild(boxArray[i]);
    } 
}


function loop (array) {
    //clear boxArray and recreate the divs after sorting
    boxArray = [];
    for (x=0; x < array.length; x++){
        createNew(foodArray[x]);
    }
    
    //ok now you can show them
    showFoods();
}

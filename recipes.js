//these are empty at the beginning
var boxArray = [];
var foodArray = [];
var searchArray = [];

$(document).ready(function() {
        
    //get food objects
    $.getJSON("food.json", function(json) {
        foodArray = json;
        loop(foodArray);
    });
    
    //depending on dropdown choice, change sorting rules
    document.getElementsByTagName("select")[0].onchange = function () {
    var index = this.selectedIndex;

    if (index == 1) {
        foodArray.sort(ascending);
        loop(foodArray);
       
    } else if (index == 2) {
        foodArray.sort(descending);
        loop(foodArray);
        
    } else if (index == 3) {
        foodArray.sort(compare);
        loop(foodArray);
    }
}
}); 

//sort ascending
function descending(a, b){
    if(a.calories > b.calories) return -1;
    if(a.calories< b.calories) return 1;
    return 0;
}

//sort descending
function ascending(a,b) {
    if(a.calories < b.calories) return -1;
    if(a.calories > b.calories) return 1;
    return 0;
}

//sort by breakfast, lunch, or dinner
function compare(a,b) {
    if(a.type < b.type) return -1;
    if(a.type > b.type) return 1;
    return 0;
}

//search for the food and display it
document.getElementById("search").addEventListener("keyup", function(ev) {
   if (ev.keyCode = 13) {
       var result = search(this.value.toUpperCase());
       loop(searchArray);
   }
});


function createNew (foodItem) {
    //make a new div for each food object and add them to the boxArray
    var newBox = document.createElement('div');
    newBox.className = 'foodDiv';
    newBox.style.backgroundImage = 'url('+foodItem.image+')';
    newBox.style.backgroundSize = "cover";
    
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
        createNew(array[x]);
    }
    
    //ok now you can show them
    showFoods();
}

//search foodArray using the input
function search (keyword) {
    searchArray = [];
    for (i=0;i<foodArray.length;i++) {
        if (foodArray[i].name === keyword) {
             searchArray.push(foodArray[i]);
        }
    }
}

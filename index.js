
document.getElementById("start").addEventListener("click", function() {
    //new name, new person! clear all saved data.
    localStorage.clear(); 
    
    //save their name for later use
    userName = document.getElementById("name").value; 
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("name", userName);

    } else {
        document.getElementById("string").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
    
    //to the next page
    location.href = "recipes.html";
});
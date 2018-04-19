var dropdown = document.getElementById("menuDropdown");

//toggle dropdown menu
document.getElementById("menu").addEventListener("click", function() {
    
   if (dropdown.style.display == "none") {
       dropdown.style.display = "block";
   } else {
       dropdown.style.display = "none";
   }
});

document.getElementById("mhome").addEventListener("click", function() {
    location.href="index.html";
});

document.getElementById("mabout").addEventListener("click", function() {
    location.href="about.html";
});

document.getElementById("mrecipe").addEventListener("click", function() {
    location.href="recipes.html";
});
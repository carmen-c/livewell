var dropdown = document.getElementById("menuDropdown");

document.getElementById("menu").addEventListener("click", function() {
    
   //toggle dropdown menu
   if (dropdown.style.display == "none") {
       dropdown.style.display = "block";
   } else {
       dropdown.style.display = "none";
   }
});
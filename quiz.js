var food = null;
$(document).ready(function() {
        
    //get food object from localStorage
    if (typeof(Storage) !== "undefined") {
        var chosen = localStorage.getItem("chosenFood");
        food = JSON.parse(chosen);
        setUp(food);
    } else {
        document.getElementById("string").innerHTML = "Sorry, your browser does not support Web Storage...";
    } 
});

function setUp(food) {
    //display images
    console.log(food);
    document.getElementById("foodBanner").src = food.image;
    document.getElementById("foodBanner2").src = food.image;
    document.getElementById("foodBanner3").src = food.image;
    document.getElementById("iradio1").src = "imgs/ingredients/"+food.Qimages[0]+".svg";
    document.getElementById("iradio2").src = "imgs/ingredients/"+food.Qimages[1]+".svg";
    document.getElementById("iradio3").src = "imgs/ingredients/"+food.Qimages[2]+".svg";
}

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the crurrent tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "flex";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
//  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//    document.getElementById("regForm").submit();
      checkAnswers();
      location.href = "result.html";
//    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

//function validateForm() {
//  // This function deals with validation of the form fields
//  var x, y, i, valid = true;
//  x = document.getElementsByClassName("tab");
//  y = x[currentTab].getElementsByTagName("input");
//  // A loop that checks every input field in the current tab:
//  for (i = 0; i < y.length; i++) {
//    // If a field is empty...
//    if (y[i].value == "") {
//      // add an "invalid" class to the field:
//      y[i].className += " invalid";
//      // and set the current valid status to false
//      valid = false;
//    }
//  }
//  // If the valid status is true, mark the step as finished and valid:
//  if (valid) {
//    document.getElementsByClassName("step")[currentTab].className += " finish";
//  }
//  return valid; // return the valid status
//}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}

var score = 0,
    answer1 = document.getElementById("calories"),
//    answer2 = document.getElementById(""),
    answer3 = document.getElementById("time");

function checkAnswers() {
    if(answer1.value == food.Q1) {
        score++;
    }
//    if(answer2.value == food.Q2) {
//        score ++;
//    }
    if(answer3.value == food.Q3) {
        score++;
    }
    
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("score", score);
    } else {
        document.getElementById("string").innerHTML = "Sorry, your browser does not support Web Storage...";
    } 
}
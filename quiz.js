var food = null;

var radio1 = document.getElementById("radio1"),
    radio2 = document.getElementById("radio2"),
    radio3 = document.getElementById("radio3");

$(document).ready(function() {
        
    //get food object from localStorage
    if (typeof(Storage) !== "undefined") {
        var chosen = localStorage.getItem("chosenFood");
        food = JSON.parse(chosen);
        setUp(food);
        console.log(food);
    } else {
        document.getElementById("string").innerHTML = "Sorry, your browser does not support Web Storage...";
    } 
});

function setUp(food) {
    //display images and set values
    document.getElementById("foodBanner").src = food.image;
    document.getElementById("foodBanner2").src = food.image;
    document.getElementById("foodBanner3").src = food.image;
    document.getElementById("fact1").innerText = food.fact1;
    document.getElementById("fact2").innerText = food.fact2;
    radio1.value = food.Qimages[0];
    radio2.value = food.Qimages[1];
    radio3.value = food.Qimages[2];
    document.getElementById("iradio1").src = "imgs/icon_imgs/"+food.Qimages[0]+".svg";
    document.getElementById("iradio2").src = "imgs/icon_imgs/"+food.Qimages[1]+".svg";
    document.getElementById("iradio3").src = "imgs/icon_imgs/"+food.Qimages[2]+".svg";
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
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted!
    document.getElementById("regForm").submit();
      checkAnswers();
      location.href = "result.html";
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

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
    answer2 = "boo",
    answer3 = document.getElementById("country");

//check my answers and update the score
function checkAnswers() {
    findQ2Answer();
    check1 = answer1.value +" per serving";
    
    if(check1 == food.Q1) {
        score++;
        console.log("q1 correct");
    }
    if(answer2 == food.Q2) {
        score++;
        console.log("q2 correct");
    }
    if(answer3.value == food.Q3) {
        score++;
        console.log("q3 correct");
    }
    console.log(answer2, score);
    
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("score", score);
    } else {
        document.getElementById("string").innerHTML = "Sorry, your browser does not support Web Storage...";
    } 
}

// what radio button is checked?
function findQ2Answer () {
    if (radio1.checked) {
        answer2 = radio1.value;
        
    } else if (radio2.checked) {
        answer2 = radio2.value;
        
    } else if (radio3.checked) {
        answer2 = radio3.value;
    }
}
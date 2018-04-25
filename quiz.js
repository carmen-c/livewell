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

//display images and set values for the entire quiz
function setUp(food) {
    var Qimg = food.Qimages;
    document.getElementById("foodBanner").src = food.image;
    document.getElementById("foodBanner2").src = food.image;
    document.getElementById("foodBanner3").src = food.image;
    document.getElementById("fact1").innerText = food.fact1;
    document.getElementById("fact2").innerText = food.fact2;
    radio1.value = Qimg[0];
    radio2.value = Qimg[1];
    radio3.value = Qimg[2];
    document.getElementById("iradio1").src = "imgs/icon_imgs/"+Qimg[0]+".svg";
    document.getElementById("iradio2").src = "imgs/icon_imgs/"+Qimg[1]+".svg";
    document.getElementById("iradio3").src = "imgs/icon_imgs/"+Qimg[2]+".svg";
    
    animation(Qimg);
}

//setup animation for fact 2
function animation (images) {
    var sec = 1;
    var left = 0;
    for(i=0;i<images.length;i++) {
        sec = sec + 0.2;
        left = left + 60;
        
        newImg = document.createElement("img");
        newImg.className = "item";
        newImg.src = "imgs/icon_imgs/"+images[i]+".svg";
        newImg.style.left = left + "px";
        newImg.style.animation ="jiggle "+sec+"s alternate infinite";
        document.getElementById("fact2Img").appendChild(newImg);
    }
}

function removeImg(img) {
    document.getElementById("fact2Img").removeChild(img);
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

//check my answers and update the score then save the score
function checkAnswers() {
    findQ2Answer();
    check1 = answer1.value;
    
    if(check1 == food.Q1) {
        score++;
        console.log("q1 correct");
    }
    if(answer2 == food.Q2) {
        score++;
        console.log("q2 correct");
    }
    if(answer3.value.toUpperCase() == food.Q3) {
        score++;
        console.log("q3 correct");
    }
    console.log(check1, answer2, answer3.value, score);
    
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
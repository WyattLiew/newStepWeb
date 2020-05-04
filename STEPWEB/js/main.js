/** Hambyrger menu function */
function mainNarbarFunction() {
  var x = document.getElementById("myTopnav");
  var menu = document.getElementById("menu");
  menu.classList.remove("fa-bars");
  if (x.className === "navbar__ul") {
    x.className += " responsive";
    menu.classList.add("fa-times");

  } else {
    x.className = "navbar__ul";
    menu.classList.remove("fa-times");
    menu.classList.add("fa-bars");

  }
}

// number counter
$(".global__counter").counterUp({delay:30,time:1500});

// enable page transition
// const swup = new Swup();


var countrylist = ["Singapore", "Malaysia","Vietnam","Thailand","Combodia", "Hong Kong","Macau","China",
                    "South Korea","Japan","New Zealand", "Australia","Guam","Saipan","Brunei"];

var countries = document.getElementById("country");

startTimer();
var countDownTime = 1500;
var i = 0;

function startTimer() {
  // Update the count down every 1 second
  var tapGameReadyTimer = setInterval(function() {

   countries.innerHTML = `<i class="fas fa-globe-asia"></i><p class"country">${countrylist[i]}</p>`;

    countDownTime -= 100;
    i++;

    // If the count down is over, write some text
    if (i > 15) {
      clearInterval(tapGameReadyTimer);
      countries.innerHTML = `<i class="fas fa-globe-asia"></i><p>Singapore</>`;
      countDownTime = 1500;
      i=0;
      startTimer();
    }
  }, 1500);
}









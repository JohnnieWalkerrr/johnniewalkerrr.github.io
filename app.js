// My first calculator
// v1.0
// (c) Eugeny Vasilev

// Declaring varables
const calculatingScreen = document.getElementById("history");
const resultScreen = document.getElementById("result");
const keyboard = document.querySelector(".keyboard");
const back = document.querySelector(".back");
let result = 0;

// Load event listeners
window.addEventListener("DOMContentLoaded", function (e) {

  // Number pressed event
  keyboard.addEventListener("click", function (e) {
    if (e.target.classList.contains("number")) {
      calculatingScreen.value += e.target.textContent;
    }
    e.preventDefault();
  });

  // Arithmetic action event
  keyboard.addEventListener("click", function (e) {

    if (e.target.classList.contains("action")) {

      let lastLetter = calculatingScreen.value.charAt(calculatingScreen.value.length - 1);
      let actionsArray = ["+", "-", "*", "/"];
      // Checking that arithmetic action is not first and not following another arithmetic action
      if ((actionsArray.includes(lastLetter) === true) || (calculatingScreen.value === " ")) {
        e.target.style.backgroundColor = "#FF6A61";
        setTimeout(() => {
          e.target.style.backgroundColor = "#425062";
        }, 500);
      } else { // if ok, typing expression to calcScreen
        calculatingScreen.value += e.target.textContent;
      }
      e.preventDefault();
    }
  });

  // "=" history clears, result shows
  keyboard.addEventListener("click", function (e) {
    if (e.target.classList.contains("calculate")) {
      let tempResult = eval(calculatingScreen.value);
      // checking if result of eval = undefined
      if (tempResult !== undefined) {
        resultScreen.value  = tempResult; // tempResult for "back" button
        tempResult = calculatingScreen.value;
        calculatingScreen.value = " ";
      }
    }
    e.preventDefault();
  });

  // "C" all clear
  keyboard.addEventListener("click", function (e) {
    if (e.target.classList.contains("clear")) {
      calculatingScreen.value = " ";
      resultScreen.value = " ";
    }
    e.preventDefault();
  });

  // BACK - deleting right symbol in histiry, returning history back from result
  keyboard.addEventListener("click", function (e) {
    if (e.target.classList.contains("back")) {
      if (calculatingScreen.value !== " ") {
        tempResult = calculatingScreen.value.slice(0, -1);
        calculatingScreen.value = tempResult;
      } else {
        //return result to calc screen
        calculatingScreen.value = resultScreen.value;
        resultScreen.value = " ";
      }
    }
    e.preventDefault();
  });

  e.preventDefault();
});

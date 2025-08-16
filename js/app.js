// DOM selectors
const form = document.getElementById("form");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const button = document.getElementById("btn");
const resultContainer = document.querySelector(".result-info");
const score = document.getElementById("score");
const bmiInfoContainer = document.querySelector(".bmi-info");
const infoBtn = document.querySelector(".info-btn");
const cancelBtn = document.querySelector(".cancel-btn");

function calcBMI(weight, height) {
  if (weight === "" || height === "" || weight < 0 || height < 0) {
    return "Invalid info!";
  }

  weight = parseFloat(weight);
  height = parseFloat(height) / 100;
  let result = weight / Math.pow(height, 2);
  result = result.toFixed(1);
  return result;
}

function bgColors(result) {
  const styleContainer = resultContainer.style;
  const colors = {
    darkRed: "rgba(192, 57, 43, 1)",
    yellow: "rgba(241, 196, 15, 1)",
    green: "rgba(33, 140, 116, 1)",
    red: "rgba(231, 76, 60, 1)",
  };

  if (result >= 30) {
    styleContainer.backgroundColor = colors["darkRed"];
  } else if (result >= 25) {
    styleContainer.backgroundColor = colors["yellow"];
  } else if (result >= 18.5) {
    styleContainer.backgroundColor = colors["green"];
  } else {
    styleContainer.backgroundColor = colors["red"];
  }
}

button.addEventListener("click", () => {
  const newWeight = weight.value;
  const newHeight = height.value;
  const bmi = calcBMI(newWeight, newHeight);
  score.textContent = bmi;
  bgColors(score.textContent);
  resultContainer.style.display = "block";
});

infoBtn.addEventListener("click", () => {
  bmiInfoContainer.style.display = "block";
});

cancelBtn.addEventListener("click", () => {
  bmiInfoContainer.style.display = "none";
});

// Preventing from reload on submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

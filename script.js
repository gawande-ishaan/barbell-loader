const weightsKG = [25, 20, 15, 10, 5, 2.5, 2, 1.5, 1, 0.5];
const weightsLB = [55, 45, 35, 25, 15, 10, 5, 2.5];

function calculate() {
  var weight = parseFloat(document.getElementById("text1").value); // get textbox, store in weight.
  var checkBox = document.getElementById("checkbox");

  var weights;
  if (checkBox.checked == false) {
    weights = weightsKG;
    weight = (weight - 20) / 2;
  } else {
    weights = weightsLB;
    weight = (weight - 45) / 2;
  }

  let combination = [];

  for (var i = 0; i < weights.length; i++) {
    while (weight >= weights[i]) {
      weight -= weights[i];
      combination.push(weights[i]);
    }
  }

  alert("Weights needed: " + combination.join(", "));
}

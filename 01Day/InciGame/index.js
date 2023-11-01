const form = document.querySelector("form");
const guess = document.getElementById("number"); // Typo fix: "nuber" to "number"
const res = document.getElementById("res");
const buttons = document.querySelectorAll(".button");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the value from the input field
  let inputValue = parseInt(guess.value);

  res.innerHTML = inputValue;

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      if (e.target.id === "inci") {
        inputValue += 1;
      }
      if (e.target.id === "dec") {
        inputValue -= 1;
      }

      // Update the input field with the new value
      guess.value = inputValue;

      // Update the result display
      res.innerHTML = inputValue;
    });
  });
});

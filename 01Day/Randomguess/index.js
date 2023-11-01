const form = document.querySelector('form');

const guess= document.getElementById("rannumb");

const res= document.getElementById("res");
const rannu= Math.floor((Math.random())*1);
// if (guess==rannu) {
//     res.innerHTML= "I have changed!";
      
// } else {
//     res.innerHTML= "I did changed!";
// }


form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the value from the input field
  const inputValue = parseInt(guess.value);

  if (inputValue === rannu) {
    res.innerHTML = 'I have changed!';
  } else {
    res.innerHTML = 'I didnt change!';
  }
});



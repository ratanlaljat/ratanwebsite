const texts = [
  "Electronics & Communication Engineer",
  "Researcher",
  "Embedded Systems Enthusiast",
  "Technology Innovator"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing-text").textContent = letter;

  if (letter.length === currentText.length) {

    setTimeout(() => {
      index = 0;
      count++;
      type();
    }, 1500);

  } else {

    setTimeout(type, 100);
  }

})(); 

console.log("Website Loaded Successfully");

// Contact Form Message

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(event){

event.preventDefault();

alert("Thank You! Your message has been received.");

form.reset();

});
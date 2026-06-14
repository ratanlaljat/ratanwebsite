const text = document.getElementById("typing-text");

const roles = [
    "Electronics & Communication Engineer",
    "Researcher",
    "Embedded Systems Enthusiast",
    "Technology Innovator"
];

let roleIndex = 0;

setInterval(() => {
    text.textContent = roles[roleIndex];
    roleIndex++;

    if(roleIndex >= roles.length){
        roleIndex = 0;
    }
}, 2000);
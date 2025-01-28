var visitorName = prompt("Please enter your name:");

alert("Welcome to the my website, " + visitorName + "!");

window.onload = function() {
    document.getElementById("welcome-message").innerText = "Hello, " + visitorName + "! Welcome to my website.";
};
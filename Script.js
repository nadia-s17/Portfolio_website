let hour = new Date().getHours();
let greetText = "";

if (hour < 12) {
    greetText = "Good Morning!";
} else if (hour < 18) {
    greetText = "Good Afternoon!";
} else {
    greetText = "Good Evening!";
}

document.getElementById("greeting").textContent = greetText;


// Dark Mode
let themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️ Light Mode";
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
    }
});


// Add Skills
let addSkillBtn = document.getElementById("addSkillBtn");
let skillInput = document.getElementById("skillInput");
let skillsList = document.getElementById("skillsList");

addSkillBtn.addEventListener("click", function() {

    let newSkill = skillInput.value.trim();

    if (newSkill === "") {
        alert("Type a skill first");
    } else {
        let li = document.createElement("li");
        li.textContent = newSkill;
        skillsList.appendChild(li);
        skillInput.value = "";
    }

});


// Contact Form Validation
let contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("nameInput").value.trim();
    let email = document.getElementById("emailInput").value.trim();
    let message = document.getElementById("messageInput").value.trim();


    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");


    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";


    let valid = true;


    if (name === "") {
        nameError.textContent = "Please enter your name.";
        valid = false;
    }


    if (!email.includes("@") || !email.includes(".")) {
        emailError.textContent = "Please enter a valid email.";
        valid = false;
    }


    if (message.length < 15) {
        messageError.textContent = "Message is too short.";
        valid = false;
    }


    if (valid) {
        document.getElementById("formSuccess")
        .classList.remove("hidden");

        contactForm.reset();
    }

});
const form = document.querySelector("#form");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError")
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const messageSuccess = document.querySelector("#messageSucess");
 
function validateForm() {
    event.preventDefault(); 

    if(checkLength(name.value, 5) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if(checkEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if(checkLength(subject.value, 15) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if(checkLength(message.value, 25) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if(value.trim().length > len) {
        return true;
    }
    else {
        return false;
    }
}

function checkEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function messageSubmit(event) {
    event.preventDefault(); 
    if(checkLength(name.value, 5) && checkEmail(email.value) && checkLength(subject.value, 15) && checkLength(message.value, 25)) {
        messageSuccess.innerHTML = `<div class="message-success">
                                        <h2>Message sent.</h2>
                                        <p>We will contact you as soon as possible.</p>
                                    </div>`;
        form.reset();
    }
}

form.addEventListener("submit", messageSubmit);
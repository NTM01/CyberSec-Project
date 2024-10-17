function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const strengthBar = document.getElementById('strength-bar');
    const feedbackElement = document.getElementById('feedback');
    const strengthText = document.getElementById('strength-text');

    let strengthScore = 0;
    let feedback = [];

    // Clear previous feedback
    feedbackElement.innerHTML = "";

    // Check length
    if (password.length >= 8) {
        strengthScore += 1;
    } else {
        feedback.push("Password should be at least 8 characters long.");
    }

    // Check for uppercase letters
    if (/[A-Z]/.test(password)) {
        strengthScore += 1;
    } else {
        feedback.push("Password should contain at least one uppercase letter.");
    }

    // Check for lowercase letters
    if (/[a-z]/.test(password)) {
        strengthScore += 1;
    } else {
        feedback.push("Password should contain at least one lowercase letter.");
    }

    // Check for digits
    if (/[0-9]/.test(password)) {
        strengthScore += 1;
    } else {
        feedback.push("Password should contain at least one number.");
    }

    // Check for special characters
    if (/[\W_]/.test(password)) {
        strengthScore += 1;
    } else {
        feedback.push("Password should contain at least one special character.");
    }

    // Update strength bar and text based on strength score
    let strength = "";
    let bar = strengthBar.querySelector('div') || document.createElement('div');
    strengthBar.appendChild(bar);

    switch (strengthScore) {
        case 1:
            bar.style.width = "20%";
            bar.style.backgroundColor = "red";
            strengthText.textContent = "Very Weak";
            break;
        case 2:
            bar.style.width = "40%";
            bar.style.backgroundColor = "orange";
            strengthText.textContent = "Weak";
            break;
        case 3:
            bar.style.width = "60%";
            bar.style.backgroundColor = "yellow";
            strengthText.textContent = "Moderate";
            break;
        case 4:
            bar.style.width = "80%";
            bar.style.backgroundColor = "lightgreen";
            strengthText.textContent = "Strong";
            break;
        case 5:
            bar.style.width = "100%";
            bar.style.backgroundColor = "green";
            strengthText.textContent = "Very Strong";
            break;
        default:
            bar.style.width = "0%";
            strengthText.textContent = "";
    }

    // Display feedback
    if (feedback.length > 0) {
        feedbackElement.innerHTML = feedback.join("<br>");
        feedbackElement.classList.remove("feedback-good");
    } else {
        feedbackElement.innerHTML = "Great! Your password is strong!";
        feedbackElement.classList.add("feedback-good");
    }
}

// Toggle password visibility
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const visibilityIcon = document.querySelector('.toggle-visibility');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        visibilityIcon.textContent = '🙈';
    } else {
        passwordInput.type = 'password';
        visibilityIcon.textContent = '👁️';
    }
}
// Listen for the "Enter" key to trigger the checkPasswordStrength function
document.getElementById('password').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkPasswordStrength();
    }
});
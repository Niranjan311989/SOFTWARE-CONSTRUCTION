function loginAlert() {

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let password = document.getElementById("pass").value;
    let confirmPassword = document.getElementById("cpass").value;

    // Username check
    if (username.length < 3) {
        alert("Username must be at least 3 characters long.");
        return false;
    }

    // Email check (basic regex)
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Password check: at least 6 characters, alphanumeric
    let passwordPattern = /^(?=.*[0-9])(?=.*[a-zA-Z]).{6,}$/;
    if (!password.match(passwordPattern)) {
        alert("Password must be at least 6 characters and alphanumeric.");
        return false;
    }

    //Confirm Mobile Number 
    if (mobile.length != 10 || isNaN(mobile)) {
        alert("Mobile number must be contain 10 characters.");
        return false;
    }

    // Confirm password check
    if (password !== confirmPassword) {
        alert("Confirm password does not match the password.");
        return false;
    }

    alert("Login successful! Welcome" + username);
    return true;
}

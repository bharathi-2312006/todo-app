
function validateSignup() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill all the fields");
        return false;
    }

    alert("Signup successful!");
    window.location.href = "index.html";
    return true;
}
function validateLogin() {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    if (email === "" || password === "") {
        alert("Please enter email and password");
        return false;
    }

    alert("Login successful!");
    window.location.href = "home.html";
    return true;
}
function showMessage() {
    alert("JavaScript is working perfectly!");
}

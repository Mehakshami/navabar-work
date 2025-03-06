const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");

signupBtn.addEventListener("click", function() {
    window.location.href = "signup/signup.html";
});

loginBtn.addEventListener("click", function() {
    window.location.href = "login/login.html";
});

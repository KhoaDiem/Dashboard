const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

//logic form SignUp
function signUpForm(e) {
  event.preventDefault();
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let user = {
    username: username,
    email: email,
    password: password,
  };

  let json = JSON.stringify(user);
  localStorage.setItem(username, json);
  alert("Sign Up Success!!!");
}
//logic form Login
function signInForm() {
  event.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let user = localStorage.getItem(username);
  let data = JSON.parse(user);
  if (!user) {
    alert("Please enter username password");
  } else if (username == data.username && password == data.password) {
    alert("Logged in successfully");
    window.location.href = "index.html";
  } else {
    alert("I'm typing so bad");
  }
}

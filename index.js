const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");

function error(input, message) {
  input.className = "form-control is-invalid";
  const div = input.nextElementSibling;
  div.innerText = message;
}
function success(input) {
  input.className = "form-control is-valid";
}
const validateEmail = (email) => {

  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

form.addEventListener("submit", function (e) {
  e.preventDefault();


  username.value === ""
    ? error(username, "Username gerekli!")
    : success(username);
  if (email.value === "") {
    error(email, "Email giriniz!");
  } else if (!validateEmail(email.value)) {
    error(email, "Emaili formata uygun girin!");
  } else {
    success(email);
  }

  password.value === ""
    ? error(password, "Parola girmediniz!")
    : success(password);
  repassword.value === ""
    ? error(repassword, "Parolalar eslesmedi!")
    : submit(repassword);
});

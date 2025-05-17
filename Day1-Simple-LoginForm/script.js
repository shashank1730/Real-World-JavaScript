document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username && password) {
    alert("Login succefull");
  } else {
    alert("Please fill in all the fields");
  }
});

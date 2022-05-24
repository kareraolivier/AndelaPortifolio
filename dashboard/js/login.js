// SIGNUP

const signup = async (e) => {
  e.preventDefault();

  const body = {
    fullName: document.getElementById("signup_name").value,
    email: document.getElementById("signup_email").value,
    password: document.getElementById("singup_password").value,
    confirmPassword: document.getElementById("singup_confirmpassword").value,
  };

  await fetch("https:/karerandela.herokuapp.com/api/v1/users", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
  document.getElementById("login_email").value = "";
  document.getElementById("login_password").value = "";
};
document.getElementById("signup_button").addEventListener("click", signup);

// ........LOGIN...................

const login = async (e) => {
  e.preventDefault();

  const body = {
    email: document.getElementById("login_email").value,
    password: document.getElementById("login_password").value,
  };
  await fetch("https:/karerandela.herokuapp.com/api/v1/users/login", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((json) => {
      const { token } = json;
      localStorage.setItem("token", JSON.stringify({ token: token }));
    });
  document.getElementById("login_email").value = "";
  document.getElementById("login_password").value = "";
  location.href = "../../dashboard/html/dashboard.html";
};
document.getElementById("login_button").addEventListener("click", login);

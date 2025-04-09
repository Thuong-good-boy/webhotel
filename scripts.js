document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("register-form");
  const loginForm = document.getElementById("login-form");

  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const fullname = document.getElementById("fullname").value;
      const dob = document.getElementById("dob").value;
      const gender = document.getElementById("gender").value;
      const cccd = document.getElementById("cccd").value;
      const phone = document.getElementById("phone").value;
      const nationality = document.getElementById("nationality").value;
      const email = document.getElementById("email").value;

      if (localStorage.getItem(username)) {
        alert("Tài khoản đã tồn tại!");
      } else {
        const user = {
          password,
          fullname,
          dob,
          gender,
          cccd,
          phone,
          nationality,
          email,
        };
        localStorage.setItem(username, JSON.stringify(user));
        alert("Đăng ký thành công!");
        window.location.href = "login.html";
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("login-username").value;
      const password = document.getElementById("login-password").value;

      const user = JSON.parse(localStorage.getItem(username));

      if (user && user.password === password) {
        alert("Đăng nhập thành công!");
        // Thực hiện chuyển hướng hoặc thao tác sau khi đăng nhập thành công
      } else {
        alert("Tài khoản hoặc mật khẩu không đúng!");
      }
    });
  }
});

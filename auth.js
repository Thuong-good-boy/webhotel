document.addEventListener("DOMContentLoaded", function () {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const loginBtn = document.getElementById("loginBtn");
  const registerBtn = document.getElementById("registerBtn");
  const userNameDisplay = document.getElementById("userNameDisplay");
  const logoutBtn = document.getElementById("logoutBtn");

  if (currentUser) {
    // Ẩn đăng nhập/đăng ký
    if (loginBtn) loginBtn.style.display = "none";
    if (registerBtn) registerBtn.style.display = "none";

    // Hiện tên người dùng
    if (userNameDisplay) {
      userNameDisplay.textContent = "Xin chào, " + currentUser.fullname;
      userNameDisplay.style.display = "inline-block";
    }

    // Hiện nút đăng xuất (nếu có)
    if (logoutBtn) logoutBtn.style.display = "inline-block";
  } else {
    // Nếu chưa đăng nhập, ẩn tên và nút đăng xuất
    if (userNameDisplay) userNameDisplay.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "none";
  }
});

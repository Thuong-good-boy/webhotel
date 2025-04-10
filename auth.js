document.addEventListener("DOMContentLoaded", function () {
  let authSection = document.querySelector(".auth-buttons");
  // Kiểm tra thông tin đăng nhập hiện tại
  let currentUser = localStorage.getItem("currentUser");
  if (currentUser) {
    currentUser = JSON.parse(currentUser);
    authSection.innerHTML =
      '<a href="../accounts/account.html" class="user-link">' +
      currentUser.fullname +
      "</a>";
  } else {
    authSection.innerHTML =
      '<a href="../accounts/login.html">Đăng nhập</a> <a href="../accounts/register.html">Đăng ký</a>';
  }
});

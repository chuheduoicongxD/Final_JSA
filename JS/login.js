document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        alert("Sai username hoặc mật khẩu!");
        return;
    }

    alert("Đăng nhập thành công!");
    window.location.href = "home.html";
});
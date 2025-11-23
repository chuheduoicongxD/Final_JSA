document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    if (username.length < 6) return alert("Username ít nhất 6 ký tự!");
    if (!email.includes("@")) return alert("Email không hợp lệ!");
    if (password.length < 8) return alert("Password ít nhất 8 ký tự!");
    if (password !== confirm) return alert("Mật khẩu nhập lại không trùng!");

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(u => u.username === username)) {
        return alert("Username đã tồn tại!");
    }

    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Đăng ký thành công!");
    window.location.href = "login.html";
});
const btn = document.getElementById('login-btn');
const username = document.getElementById('username');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const errors = document.getElementById('form-errors');

function setErrorMessages(msgs) {
  errors.style.color = '#ffb3c6';
  errors.innerHTML = msgs.map(m => `<div>• ${m}</div>`).join('');
}

function validate() {
  errors.innerHTML = '';
  const msgs = [];
  const u = username.value.trim();
  const p = password.value;
  const c = confirmPassword.value;

  if (!u) msgs.push('Username không được để trống.');
  else if (u.length < 3) msgs.push('Username phải >= 3 ký tự.');

  if (p.length < 8) msgs.push('Password phải >= 8 ký tự.');
  if (!/[a-z]/.test(p)) msgs.push('Password cần ít nhất 1 chữ thường.');
  if (!/[A-Z]/.test(p)) msgs.push('Password cần ít nhất 1 chữ hoa.');
  if (!/\d/.test(p)) msgs.push('Password cần ít nhất 1 chữ số.');

  if (p !== c) msgs.push('Confirm password không khớp.');

  if (msgs.length) {
    setErrorMessages(msgs);
    btn.disabled = true;
    btn.style.opacity = '0.7';
    return false;
  }

  errors.innerHTML = '';
  btn.disabled = false;
  btn.style.opacity = '1';
  return true;
}

username.addEventListener('input', validate);
password.addEventListener('input', validate);
confirmPassword.addEventListener('input', validate);

btn.addEventListener('click', () => {
  if (!validate()) return;

  const u = username.value.trim();
  const p = password.value;

  // Lấy danh sách accounts từ localStorage
  const raw = localStorage.getItem('accounts');
  const accounts = raw ? JSON.parse(raw) : [];

  // Kiểm tra trùng username (không phân biệt hoa thường)
  const exists = accounts.some(a => a.username.toLowerCase() === u.toLowerCase());
  if (exists) {
    setErrorMessages(['Username đã tồn tại. Vui lòng chọn tên khác.']);
    return;
  }

  // Thêm account mới (LƯU Ý: lưu mật khẩu plaintext chỉ dùng demo)
  accounts.push({ username: u, password: p, createdAt: Date.now() });
  localStorage.setItem('accounts', JSON.stringify(accounts));

  // Hiển thị thông báo thành công và chuyển hướng tới login
  errors.style.color = 'lightgreen';
  errors.innerHTML = 'Đăng ký thành công. Chuyển tới trang đăng nhập...';
  setTimeout(() => location.href = 'login.html', 1000);
});

document.addEventListener('DOMContentLoaded', validate);
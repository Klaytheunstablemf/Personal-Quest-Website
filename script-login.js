document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.querySelector('form');
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
      alert('Login successful! Redirecting to home page.');
      window.location.href = 'home-page.html';
    } else {
      alert('Invalid email or password. Please try again.');
    }

    loginForm.reset();
  });
});
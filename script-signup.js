document.addEventListener("DOMContentLoaded", function() {
    const signUpForm = document.querySelector('form');
    signUpForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const email = document.getElementById('signup-email').value;
      const password = document.getElementById('signup-password').value;
      const fullName = document.getElementById('fullname').value;
      const birthDate = document.getElementById('date').value;
      const gender = document.getElementById('gender').value;
  
      // Validation and signup logic
      if (validateSignup(email, password, fullName, birthDate, gender)) {
        alert('Signup successful! Redirecting to login page.');
        window.location.href = 'login-form.html';
      }
    });
  
    function validateSignup(email, password, fullName, birthDate, gender) {
      // Perform your validation logic here
  
      // For demonstration purposes, let's assume all fields are required
      if (!email || !password || !fullName || !birthDate || !gender) {
        alert('All fields must be filled.');
        return false;
      }
  
      // Additional validation logic goes here...
  
      // Save user data to localStorage
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      localStorage.setItem('fullName', fullName);
      localStorage.setItem('birthDate', birthDate);
      localStorage.setItem('gender', gender);
  
      return true;
    }
  });
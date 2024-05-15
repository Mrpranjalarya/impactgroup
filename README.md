<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login/Logout Page</title>
  <style>
    body {
      background-color: #F8F9FA;
      font-family: Arial, sans-serif;
      color: #343A40;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }
    .container {
      text-align: center;
      max-width: 400px;
      width: 100%;
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .logo {
      font-size: 2rem;
      font-weight: bold;
      color: #007BFF;
      margin-bottom: 1rem;
    }
    .login-form h2, .logout-message h2 {
      margin-bottom: 1.5rem;
    }
    .input-group {
      margin-bottom: 1rem;
    }
    .input-group label {
      display: block;
      margin-bottom: 0.5rem;
    }
    .input-group input {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #CED4DA;
      border-radius: 4px;
    }
    .toggle-password {
      cursor: pointer;
      color: #6C757D;
      margin-left: 10px;
    }
    .remember-me {
      display: flex;
      align-items: center;
      margin: 1rem 0;
    }
    .remember-me input {
      margin-right: 0.5rem;
    }
    .forgot-password {
      display: block;
      margin-bottom: 1rem;
      color: #007BFF;
    }
    .btn-login, .btn-logout, .btn-home {
      background-color: #007BFF;
      color: white;
      border: none;
      padding: 0.75rem;
      border-radius: 4px;
      cursor: pointer;
      width: 100%;
      margin-bottom: 1rem;
    }
    .sign-up-link, .home-link {
      color: #28A745;
    }
  </style>
</head>
<body>

  <!-- Login Page -->
  <div class="container" id="login-page">
    <div class="logo">YourLogo</div>
    <div class="login-form">
      <h2>Welcome Back! Please log in to your account.</h2>
      <form>
        <div class="input-group">
          <label for="username">Email or Username</label>
          <input type="text" id="username" placeholder="Enter your email or username">
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password">
          <span class="toggle-password">Show</span>
        </div>
        <div class="remember-me">
          <input type="checkbox" id="remember-me">
          <label for="remember-me">Remember Me</label>
        </div>
        <a href="#" class="forgot-password">Forgot Password?</a>
        <button type="submit" class="btn-login">Log In</button>
      </form>
      <p>Don't have an account? <a href="#" class="sign-up-link">Sign Up</a></p>
    </div>
  </div>

  <!-- Logout Page -->
  <div class="container" id="logout-page" style="display:none;">
    <div class="logo">YourLogo</div>
    <div class="logout-message">
      <h2>You have been successfully logged out.</h2>
      <button class="btn-logout">Log In Again</button>
      <p><a href="#" class="home-link">Return to Home Page</a></p>
    </div>
  </div>

  <script>
    // JavaScript to toggle between login and logout pages for demonstration
    document.querySelector('.btn-login').addEventListener('click', function(event) {
      event.preventDefault();
      document.getElementById('login-page').style.display = 'none';
      document.getElementById('logout-page').style.display = 'block';
    });

    document.querySelector('.btn-logout').addEventListener('click', function() {
      document.getElementById('login-page').style.display = 'block';
      document.getElementById('logout-page').style.display = 'none';
    });

    // JavaScript to toggle password visibility
    document.querySelector('.toggle-password').addEventListener('click', function() {
      const passwordField = document.getElementById('password');
      const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordField.setAttribute('type', type);
      this.textContent = this.textContent === 'Show' ? 'Hide' : 'Show';
    });
  </script>

</body>
</html>

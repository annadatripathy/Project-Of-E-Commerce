import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in with username:', username, 'and password:', password);
  };

  const handleGmailLogin = () => {
    // Handle login with Gmail logic here
    console.log('Logging in with Gmail');
  };

  const handleFacebookLogin = () => {
    // Handle login with Facebook logic here
    console.log('Logging in with Facebook');
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
      </div>
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
      <div>
        <button onClick={handleGmailLogin}>Login with Gmail</button>
      </div>
      <div>
        <button onClick={handleFacebookLogin}>Login with Facebook</button>
      </div>
    </div>
  );
}

export default Login;
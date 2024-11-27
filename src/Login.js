import React, { useState } from 'react';

const Login = () => {
  const [credentials, setCredentials] = useState({ name: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    if (credentials.name === "test" && credentials.password === "password") {
      alert('Login successful!');
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
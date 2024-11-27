import React, { useState } from 'react';
// import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    profession: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate API call
    alert('User  registered successfully!');
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required />
      <select name="profession" onChange={handleChange} required>
        <option value="">Select Profession</option>
        <option value="Engineer">Engineer</option>
        <option value="Doctor">Doctor</option>
        <option value="Teacher">Teacher</option>
        <option value="Artist">Artist</option>
      </select>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
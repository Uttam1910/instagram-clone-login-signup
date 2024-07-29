// src/components/SignUpForm.js
import React, { useState } from 'react';

const SignUpForm = ({ toggleForm }) => {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the error for the specific field when corrected
    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email is not valid.';
    }

    if (!formData.fullName) newErrors.fullName = 'Full name is required.';
    if (!formData.username) newErrors.username = 'Username is required.';
    if (!formData.password) newErrors.password = 'Password is required.';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      console.log('Form data:', formData);
      // Handle successful form submission
      // Reset form and errors if needed
      setFormData({
        email: '',
        fullName: '',
        username: '',
        password: '',
      });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="form-container">
      <h1>Instagram</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Mobile number or email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />
        {errors.fullName && <p className="error">{errors.fullName}</p>}

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <p className="error">{errors.username}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">Sign Up</button>
      </form>
      <p>Have an account? <span onClick={toggleForm}>Log in</span></p>
    </div>
  );
};

export default SignUpForm;

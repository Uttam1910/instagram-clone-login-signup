// src/components/LoginForm.js
import React, { useState } from 'react';

const LoginForm = ({ toggleForm }) => {
  const [formData, setFormData] = useState({
    usernameOrEmail: '',
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

  const validateForm = () => {
    const newErrors = {};

    if (!formData.usernameOrEmail) newErrors.usernameOrEmail = 'Username or email is required.';
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
        usernameOrEmail: '',
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
          name="usernameOrEmail"
          placeholder="Phone number, username, or email"
          value={formData.usernameOrEmail}
          onChange={handleChange}
        />
        {errors.usernameOrEmail && <p className="error">{errors.usernameOrEmail}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">Sign In</button>
      </form>
      <p>Don't have an account? <span onClick={toggleForm}>Sign up</span></p>
    </div>
  );
};

export default LoginForm;

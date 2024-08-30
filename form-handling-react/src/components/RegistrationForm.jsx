import React, { useState } from 'react';

function RegistrationForm() {
  // Initialize state for each input field
  const [Username, setUsername]= useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Validation logic
  const validateForm = () => {
    let validationErrors = {};
    let isValid = true;

    if (!value.Username.trim()) {
      validationErrors.name = 'Name is required';
      isValid = false;
    }
    if (!value.email.trim()) {
      validationErrors.email = 'Email is required';
      isValid = false;
    }
    if (!value.password.trim()) {
      validationErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(validationErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // If the form is valid, proceed with form submission
      console.log('Form data:', value);
      alert('Form submitted successfully!');
      // Reset form or perform other actions here
    } else {
      alert('Please fill in all the fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input
            type="text"
            name="name"
            value={Username}
          onChange={(e) => setUsername(e.target.value)}   />
        </label>
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;

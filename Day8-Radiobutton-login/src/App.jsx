import React, { useState } from 'react';

function LoginForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Details:', formData);
    alert(`Welcome ${formData.name}! You logged in as a ${formData.role}`);
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc' }}>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input type="text" name="name" value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email:</label><br />
          <input type="email" name="email" value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Mobile:</label><br />
          <input type="tel" name="mobile" value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Role:</label><br />
          <input type="radio" name="role" value="Student" onChange={handleChange}
            checked={formData.role === 'Student'}
          /> Student

          <input type="radio" name="role" value="Teacher" onChange={handleChange}
            checked={formData.role === 'Teacher'}
            
          /> Teacher
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
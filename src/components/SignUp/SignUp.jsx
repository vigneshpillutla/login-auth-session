import useAuth from 'customHooks/useAuth';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SignUpPage = () => {
  const auth = useAuth();
  const history = useHistory();
  const defaultForm = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  const [formData, setFormData] = useState(defaultForm);
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      let newFormData = { ...prev };
      newFormData[name] = value;
      return newFormData;
    });
  };
  const onSignUp = (e) => {
    e.preventDefault();
    auth.signUp(formData, () => {
      setFormData(defaultForm);
      history.replace('/');
    });
  };
  return (
    <div>
      <form>
        <input
          type="text"
          name="firstName"
          placeholder="Enter your first name"
          value={formData.firstName}
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Enter your last name"
          value={formData.lastName}
          onChange={handleFormChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleFormChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleFormChange}
        />
        <button onClick={onSignUp}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;

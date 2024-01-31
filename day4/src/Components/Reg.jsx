// src/components/Register.jsx
import { useState } from 'react';
// import {BrowserRouter,Routes,Route} from "react-router-dom";
import '../style/Reg.css';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      // Basic validation
      if (!validateEmail(email)) {
        setError('Please enter a valid email.');
        return;
      }

      if (password.length < 6) {
        setError('Password must be at least 6 characters.');
        return;
      }

      if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return;
      }

      // Your registration logic here

      // Dummy logic for demonstration
      console.log('Registration successful!');
      setError(''); // Clear any previous error
    } catch (error) {
      console.error('Registration failed', error);
      // Handle registration failure (show error message, etc.)
    }
  };

  // Basic email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
  };

  return (
    <div className="register-container">
      <div className="box">
      <div className="register-content">
        <h1 className="yu">Registration Page</h1>
        {error && <div className="error-message">{error}</div>}
        <label className="huio">
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          
        </label>
        <label className="huio">
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label className="huio">
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <label className="huio" >
          Select Role:
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Select Role</option>
            <option value="admin">Student</option>
            <option value="user">Employee</option>
           
          </select>
        </label>
        <Link to="/Home"><button className="kl"onClick={handleRegister}>Register</button></Link>
        <h3>
          {/* <></>Already have an account? Login */}
          Already have an account? <Link to="/Login">Login</Link>
        
        </h3>
        <div className="homy">
          <img src="https://img.freepik.com/free-vector/recruitment-agency-searching-job-applicants_1262-19873.jpg?w=740&t=st=1706208419~exp=1706209019~hmac=235126856c32c5e35e804ff536607214128eadc6b3dfbea5159fc022c182d210" alt="" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Register;

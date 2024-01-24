
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      // Simple email validation
      if (!validateEmail(email)) {
        setError('Please enter a valid email.');
        return;
      }

      // Simple password validation
      if (password.length < 6) {
        setError('Password must be at least 6 characters.');
        return;
      }

      // Your login logic here

      // Dummy logic for demonstration
      console.log('Login successful!');
      setError(''); // Clear any previous error
    } catch (error) {
      console.error('Login failed', error);
      // Handle login failure (show error message, etc.)
    }
  };

  // Basic email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
  };

  return (
    <div className="gbody">
    <div className="login-container">
      <div className="box">
        <div className="login-content">
          <h1 className="yu">Login Page</h1>
          {error && <div className="error-message">{error}</div>}
          <label>
            Email:
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <Link to="/Home"><button className="gh"onClick={handleLogin}>Login</button>
          </Link>
          <p>
            New user? <Link to="/Reg">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Login
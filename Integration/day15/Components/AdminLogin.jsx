
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/AdminLogin.css';

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
      <div className="box78">
        <div className="login-content">
          <h1 className="abi">Login Page</h1>
          {error && <div className="error-message">{error}</div>}
          <label className="tyr">
            Email:
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label className="tyr">
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label >
          <Link to="/Dash"><button className="gh"onClick={handleLogin}>Login</button>
          </Link>
          <br></br>
         
          <h3>
            New user? <Link to="/Reg">Create an account</Link>
          </h3>
        </div>
        <div className="homy">
          <img src="https://img.freepik.com/free-photo/hiring-concept-with-empty-chair_23-2149519862.jpg?w=740&t=st=1706205928~exp=1706206528~hmac=abb3361acb2e0a2cd77c6d10b07845061e95d04629cb74371d7c4bb8339f2977" alt="" />
        </div>
      </div>
    </div>
    </div>
  );
};
export default Login
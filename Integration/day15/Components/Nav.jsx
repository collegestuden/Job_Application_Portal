import  { useEffect } from 'react';
import "../style/Nav.css";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const NavBar1 = () => {
  const navigate = useNavigate();

  const gotoProfile = () => {
    navigate('/profile');
  }

  // Placeholder for checking login status
  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (window.scrollY > 0) {
        nav.classList.add('black');
      } else {
        nav.classList.remove('black');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
    <header className='headgreen'>
  
      <div className="responsive-bar">
        <div className="logo">
          <img src="https://www.shutterstock.com/image-vector/financial-investments-money-savings-concept-600nw-2042511212.jpg" alt="logo" />
        </div>
        
      </div>
      <nav className="fgh">
        {/* <div className="logo">
          <img src="" alt="logo" />
        </div> */}
        <ul>
        
          <li><a href="/Dash">Dashboard</a></li>
          <li ><a href="/Add">Jobs</a></li>
          <li><a href="/Jobsearch">Get Jobs</a></li>
          <li><a href="/adminProfile">Profile</a></li>
          </ul>
          <Link to="/AdminLogin"><button className="erf" >LogOut</button></Link>
      </nav>
        
      
    </header>
   
  );
};

export default NavBar1;
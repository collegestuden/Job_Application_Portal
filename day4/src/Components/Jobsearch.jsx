import '../style/Jobsearch.css';
import {Link} from 'react-router-dom';

function Jobsearch() {
  return (
   
      <div>
        <div className="qw">
<section className="top-bar">
  <div className="left-content">
      <h2 className="title">JobJunction</h2>
      <ul className="navigation">
          <li><Link to="/Home"><a className="active1"href="#">Home</a></Link></li>
          <li><Link to="/Location"><a className="active1">Jobs</a></Link></li>
          
          <li><Link to="/Jobsearch"><a className="active"href="#">JobSearch</a></Link></li>
          <li><Link to="/Aboutus"><a className="active1"href="#">AboutUs</a></Link></li>
  </ul>
     
  </div>
  
<div className="right-content">
  

<ul className="nav">
          <a className=""><Link to="/Login"><li><a href="#">LogOut</a></li></Link></a>
          
      </ul>
      <a><Link to="/Profile">
      <div className="profile-img-box">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4X-UKegvFJk9xQtCqkjcj7m1Wr-cUWk4P0Q&usqp=CAU" alt=""/>
          
      </div>
      </Link>
          </a>
      
  </div>
  </section>
  </div>
    
    <br></br>
    <br></br>
    <div className="content-container">
    <div className="searc-bar">
            <input type="text" placeholder="Search..." />
            <button className="yut" type="button">Search</button>
          </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>About Us</h2>
            <p>
              Welcome to JobJunction, your go-to platform for finding the best job opportunities.
              Connect with us to explore a world of possibilities in your career journey.
            </p>
          </div>
          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Jobs">Jobs</Link></li>
              <li><Link to="/Jobfair">JobFair</Link></li>
              {/* ... Add more links as needed ... */}
            </ul>
          </div>
          <div className="footer-section contact">
            <h2>Contact Us</h2>
            <p>
              Have questions or feedback? Reach out to us at <a href="mailto:abinaya123567@gmail.com">info@livetix.com</a>.
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 LiveTix. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </div>
  )
}

export default Jobsearch


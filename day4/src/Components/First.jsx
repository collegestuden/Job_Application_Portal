import '../style/First.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="boy">
    <div className="home-container">
      
      
      <div className="home-banner-container">
        
        <div className="home-text-section">
          <h1 className="primary-heading">
          Discover your Next Career move with our user-friendly Job Application Platform
          </h1>
          <p className="primary-text">
          Unlock your career potential with our seamless job application portal—your pathway to exciting opportunities.
          </p>
          <div className="button-container">
           <Link to="Reg"><button className="secondary-button">User</button></Link>
           <Link to="AdminLogin"><button className="secondary-button">Admin</button></Link>
  </div>
        </div>
        <div className="hom">
          <img src="https://img.freepik.com/premium-vector/job-search-concept-with-icon-concept-with-round-circle-shape-badge_25156-1204.jpg" alt="" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
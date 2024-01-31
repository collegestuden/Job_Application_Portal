import {Link} from 'react-router-dom';
import '../style/Aboutus.css';
function Aboutus() {
  return (
    <div className="bod">
    <div className="qw">
    <section className="top-bar">
      <div className="left-content">
          <h2 className="title">JobJunction</h2>
          <ul className="navigation">
              <li><Link to="/Home"><a className="active1"href="#">Home</a></Link></li>
              <li><Link to="/Location"><a className="active1">Jobs</a></Link></li>
             
              <li><Link to="/Jobsearch"><a className="active1"href="#">JobSearch</a></Link></li>
              <li><Link to="/Aboutus"><a className="active"href="#">AboutUs</a></Link></li>
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
      <br></br>
      <br></br>
      <br></br>
    

      <div className="dfg">
      
      <h2><center>About Us</center></h2>
      <br></br>
      <h3 className="kop">Simplified Job Search:
Ensure a seamless and intuitive job search experience for professionals at all career stages through our user-friendly interface.
<br></br>
<br></br>
Smart Matching Algorithm:
Leverage our advanced algorithm that intelligently connects your skills and aspirations with the most suitable job opportunities.
<br></br>
<br></br>
Real-Time Updates:
Stay informed with instant updates on your application status and new job postings, ensuring you are always in the loop during the hiring process.
<br></br>
<br></br>
Transformative Employment:
Experience the power of meaningful employment as we believe in aligning your career goals with opportunities that drive business success.
<br></br>
<br></br>
Your Dream Job Awaits:
Take the next step towards a brighter future with Job Junction, where your dream job is just a click away. Join us for a journey of professional fulfillment.</h3>
   </div>
   </div>
  )
}

export default Aboutus

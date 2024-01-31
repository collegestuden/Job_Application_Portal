
import {Link} from 'react-router-dom';
import '../style/Home.css';






function Home() {
  
  return (
        <div className="bod">
          <div className="qwe">
<div className="animated-heading">
      <h1 className="main-heading">Welcome to Job Application Portal</h1>
      <p className="sub">Your Gateway to Exciting Opportunities!</p>
      .
    </div>
    </div>
      <section className="top-bar">
        <div className="left-content">
            <h2 className="title">JobJunction</h2>
            <ul className="navigation">
                <li><a className="active"href="#">Home</a></li>
                <li><Link to="/Location"><a className="active1">Jobs</a></Link></li>
                <li><Link to="/Jobsearch"><a className="active1"href="#">JobSearch</a></Link></li>
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
        

        <section className="main-container">
  
  <div className="sidebar">
          <div className="sidebar-groups">
            <div className="crt">
              <h3 className="sg-title">Categories</h3>
             <br></br>
             
              <a><Link to="/Location"><a href="#">Jobs By Location</a></Link></a>
              <br></br>
              <br></br>
              <a><Link to="/Type"><a href="#">Jobs By Type</a></Link></a>
              <br></br>
              <br></br>
              <a><Link to="/Sector"><a href="#">Jobs By Sector</a></Link></a>
              <br></br>
              <br></br>
              <a><Link to="/Gender"><a href="#">Jobs By Gender</a></Link></a>
              <br></br>
              <br></br>
              <a><Link to="/Companies"><a href="#">Companies</a></Link></a>
              <br></br>
              <br></br>
              
             </div>
              </div>
  
            </div>
            
            <div className="content-container">
          {/* Search bar and button side by side */}
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button className="yut" type="button">Search</button>
          </div>

          <div className="movies-container">
            
             <div className="current-movies">
                <div className="current-movie">
                    <div className="cm-img-box">
                        <img src="https://hace-software.com/wp-content/uploads/2023/03/Software-Testing.webp" alt=""/>
                    </div>
                    <h3 className="movie-title">Software Testing</h3>
                    <p className="screen-name">job offer</p>
                    <div className="booking">
                        <h2 className="price">Posted Date : 03-01-2024 | Open Until : 24-01-2024
 15,000 - 25,000 |  Kanniyakumari |  IT-ITES</h2>
                        <a><Link to="/Appform"><a href="#" className="btn">Apply</a></Link></a>
                    </div>
                </div>
                <div className="current-movie">
                    <div className="cm-img-box">
                        <img src="https://thumbs.dreamstime.com/b/software-development-word-cloud-concept-grey-background-88535408.jpg" alt=""/>
                    </div>
                    <h3 className="movie-title">Software Developer</h3>
                    <p className="screen-name">offer....</p>
                    <div className="booking">
                        <h2 className="price">Posted Date : 07-01-2024 | Open Until : 24-01-2024
 15,000 - 25,000 |  Chennai |  Telecom</h2>
                        <a><Link to="/Appform"><a href="#" className="btn">Apply</a></Link></a>
                    </div>
                </div>
                <div className="current-movie">
                    <div className="cm-img-box">
                        <img src="https://www.cheggindia.com/wp-content/uploads/2023/04/How-to-Become-Medical-Officer_-Career-Advice-Educational-Requirements-Jobs-Scope-Salary.png" alt=""/>
                    </div>
                    <h3 className="movie-title">Doctor</h3>
                    <p className="screen-name">offer....</p>
                    <div className="booking">
                        <h2 className="price">Posted Date : 07-01-2024 | Open Until : 24-01-2024
 15,000 - 25,000 |  Chennai |  Telecom</h2>
                        <a><Link to="/Appform"><a href="#" className="btn">Apply</a></Link></a>
                    </div>
                </div>

                <div className="current-movie">
                    <div className="cm-img-box">
                        <img src="https://thumbs.dreamstime.com/b/software-development-word-cloud-concept-grey-background-88535408.jpg" alt=""/>
                    </div>
                    <h3 className="movie-title">Software Developer</h3>
                    <p className="screen-name">offer....</p>
                    <div className="booking">
                        <h2 className="price">Posted Date : 07-01-2024 | Open Until : 24-01-2024
 15,000 - 25,000 |  Chennai |  Telecom</h2>
                        <a><Link to="/Appform"><a href="#" className="btn">Apply</a></Link></a>
                    </div>
                </div>

          

             
                
</div>

          
            

        </div>
        </div>
        
         </section>
        
         {/* <div>
      <div className="slider-frame">
        <div className="slide-images">
          <div className="img-container">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/022/596/287/small/judge-gavel-with-justice-lawyers-having-team-meeting-at-law-firm-in-background-concepts-of-law-generative-ai-photo.jpg" alt="Slide 1" />
          </div>
          <div className="img-container">
            <img src="https://media.licdn.com/dms/image/D4D12AQGRJflkxuoQ6g/article-cover_image-shrink_600_2000/0/1680502810634?e=2147483647&v=beta&t=VUNVhXfZpJ_861TvINU2ltMqPngi9N3PfbOQDOHwk3w" alt="Slide 2" />
          </div>
          <div className="img-container">
            <img src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2019/11/29144739/HR-career.png" alt="Slide 3" />
          </div>

          <div className="img-container">
            <img src="https://d3kqdc25i4tl0t.cloudfront.net/articles/content/543_378726_tech.hero.jpg" alt="Slide 3" />
          </div>

          <div className="img-container">
            <img src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2019/11/29144739/HR-career.png" alt="Slide 3" />
          </div>
          <div className="img-container">
            <img src="https://www.emuarticles.com/wp-content/uploads/2021/02/Untitled-design-1.jpg" alt="Slide 3" />
          </div>

          <div className="img-container">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/022/596/287/small/judge-gavel-with-justice-lawyers-having-team-meeting-at-law-firm-in-background-concepts-of-law-generative-ai-photo.jpg" alt="Slide 1" />
          </div>
          <div className="img-container">
            <img src="https://media.licdn.com/dms/image/D4D12AQGRJflkxuoQ6g/article-cover_image-shrink_600_2000/0/1680502810634?e=2147483647&v=beta&t=VUNVhXfZpJ_861TvINU2ltMqPngi9N3PfbOQDOHwk3w" alt="Slide 2" />
          </div>
          <div className="img-container">
            <img src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2019/11/29144739/HR-career.png" alt="Slide 3" />
          </div>
        </div>
      </div>
    </div> */}
  
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
          <div className="footer-section feedback">
            <h2>Feedback</h2>
            <p>
              We value your feedback! Let us know how we can improve our services.
              <br />
              <textarea
                placeholder="Type your feedback here..."
                rows="4"
                cols="50"
              ></textarea>
              <button className="erl">Submit</button>
            </p>
          </div>
        
          <div className="footer-section contact">
            <h2>Contact Us</h2>
            <p>
              Have questions or feedback? Reach out to us at <a href="mailto:abinaya123567@gmail.com">info@jobjunction.com</a>.
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 JobJunction. All rights reserved.</p>
        </div>
      </footer>
      
        </div>
        

  )
}
export default Home;




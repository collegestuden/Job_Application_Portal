// // Slider.js

// import '../style/Slideshow.css';

// const Slider = () => {
//   return (
//     <div>
//       <h1>Auto - Image Slider React</h1>
//       <div className="slider-frame">
//         <div className="slide-images">
//           <div className="img-container">
//             <img src="https://media.istockphoto.com/id/931587220/photo/high-court-in-chennai-india.jpg?s=612x612&w=0&k=20&c=J3TvXZRRVhlKsqea9z9cplmUmlWJ-2BwWarxWyMvyo8=" alt="Slide 1" />
//           </div>
//           <div className="img-container">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwWO5ey-lskMBK9__wzfPY2QPeWp9ChTHBU9VvRnTteA&s" alt="Slide 2" />
//           </div>
//           <div className="img-container">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwWO5ey-lskMBK9__wzfPY2QPeWp9ChTHBU9VvRnTteA&s" alt="Slide 3" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slider;

// import {Link} from 'react-router-dom';
    
       {/* <section className="top-bar">
        <div className="left-content">
            <h2 className="title">JobJunction</h2>
            <ul className="navigation">
                <li><a className="active1"href="#">Home</a></li>
                <li><Link to="/Jobs"><a className="active">Jobs</a></Link></li>
                <li><a><Link to="/Jobfair"><a className="active1"href="#">JobFair</a></Link></a></li>
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
        
        </section> */}
        import '../style/Gender.css';
        import {Link} from 'react-router-dom';


        function Gender() {
          return (
            <div className="bod">
            <section className="top-bar">
        <div className="left-content">
            <h2 className="title">JobJunction</h2>
            <ul className="navigation">
                <li><Link to="/Home"><a className="active1"href="#">Home</a></Link></li>
                <li><Link to="/Jobs"><a className="active">Jobs</a></Link></li>
                <li><a><Link to="/Jobfair"><a className="active1"href="#">JobFair</a></Link></a></li>
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

            <div id="slider">
            <input type="radio" name="slider" id="slide1" checked/>
            <input type="radio" name="slider" id="slide2"/>
            <input type="radio" name="slider" id="slide3"/>
            <input type="radio" name="slider" id="slide4"/>
            <div id="slides">
               <div id="overflow">
                  <div className="inner">
                     <div className="slide slide_1">
                        <div className="slide-content">
                           <h2>Slide 1</h2>
                           <p>Content for Slide 1</p>
                        </div>
                     </div>
                     <div className="slide slide_2">
                        <div className="slide-content">
                           <h2>Slide 2</h2>
                           <p>Content for Slide 2</p>
                        </div>
                     </div>
                     <div className="slide slide_3">
                        <div className="slide-content">
                           <h2>Slide 3</h2>
                           <p>Content for Slide 3</p>
                        </div>
                     </div>
                     <div className="slide slide_4">
                        <div className="slide-content">
                           <h2>Slide 4</h2>
                           <p>Content for Slide 4</p>
                        </div>
                     </div>
                     
                  </div>
               </div>
            </div>
            <div id="controls">
               <label htmlFor="slide1"></label>
               <label htmlFor="slide2"></label>
               <label htmlFor="slide3"></label>
               <label htmlFor="slide4"></label>
            </div>
            <div id="bullets">
               <label htmlFor="slide1"></label>
               <label htmlFor="slide2"></label>
               <label htmlFor="slide3"></label>
               <label htmlFor="slide4"></label>
            </div> 

            </div>
            <section id="all" className="all">
            <div className="section-content">
   <div className="box567">
    <div className="content-left">
      {/* Movie Content */}
      <div className="movies-contain">
        <div className="current-mov">
          {/* Movie 1 */}
          <div className="current-movi">
            <div className="cm-img-bo">
              <img src="https://hace-software.com/wp-content/uploads/2023/03/Software-Testing.webp" alt="" />
            </div>
            <h3 className="movie-title">Software Testing</h3>
            <p className="screen-name">job offer</p>
            <div className="booking">
              <h2 className="price">Posted Date : 03-01-2024 | Open Until : 24-01-2024 15,000 - 25,000 | Kanniyakumari | IT-ITES</h2>
              <a><Link to="/Appform"><a href="#" className="btn">Apply</a></Link></a>
            </div>
          </div>

          {/* Movie 2 */}
          <div className="current-movi">
            <div className="cm-img-bo">
              <img src="https://thumbs.dreamstime.com/b/software-development-word-cloud-concept-grey-background-88535408.jpg" alt="" />
            </div>
            <h3 className="movie-title">Software Developer</h3>
            <p className="screen-name">offer....</p>
            <div className="booking">
              <h2 className="price">Posted Date : 07-01-2024 | Open Until : 24-01-2024 15,000 - 25,000 | Chennai | Telecom</h2>
              <a><Link to="/Appform"><a href="#" className="btn">Apply</a></Link></a>
            </div>
          </div>

          {/* Movie 3 */}
          <div className="current-movi">
            <div className="cm-img-bo">
              <img src="https://www.cheggindia.com/wp-content/uploads/2023/04/How-to-Become-Medical-Officer_-Career-Advice-Educational-Requirements-Jobs-Scope-Salary.png" alt="" />
            </div>
            <h3 className="movie-title">Doctor</h3>
            <p className="screen-name">offer....</p>
            <div className="booking">
              <h2 className="price">Posted Date : 07-01-2024 | Open Until : 24-01-2024 15,000 - 25,000 | Chennai | Telecom</h2>
              <a><Link to="/Appform"><a href="#" className="btn">Apply</a></Link></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    {/* Additional content on the right side, if needed */}
    <div className="content-right">{/* Additional content on the right side */}</div>
  </div>
            </section>
            <div className="sideba">
          <div className="sidebar-grous">
            <div className="crt">
              <h3 className="sg-title">Categories</h3>
             <br></br>
             
              <a href="#all">All</a>
              <br></br>
              <br></br>
              <a href="#male">Male</a>
              <br></br>
              <br></br>
              <a href="#female">Female</a>
              <br></br>
              <br></br>
            
             </div>
              </div>
  
            </div>
            
            <div>
            <section id="all" className="all">
            <div className="section-content">
   <div className="box567">
    <div className="content-left">
      {/* Movie Content */}
      <div className="movies-contain">
        <div className="current-mov">
          {/* Movie 1 */}
          <div className="current-movi">
            <div className="cm-img-bo">
              <img src="https://hace-software.com/wp-content/uploads/2023/03/Software-Testing.webp" alt="" />
            </div>
            <h3 className="movie-title">Software Testing</h3>
            <p className="screen-name">job offer</p>
            <div className="booking">
              <h2 className="price">Posted Date : 03-01-2024 | Open Until : 24-01-2024 15,000 - 25,000 | Kanniyakumari | IT-ITES</h2>
              <a><Link to="/Appform"><a href="#" className="btn">Apply</a></Link></a>
            </div>
          </div>

          {/* Movie 2 */}
          <div className="current-movi">
            <div className="cm-img-bo">
              <img src="https://thumbs.dreamstime.com/b/software-development-word-cloud-concept-grey-background-88535408.jpg" alt="" />
            </div>
            <h3 className="movie-title">Software Developer</h3>
            <p className="screen-name">offer....</p>
            <div className="booking">
              <h2 className="price">Posted Date : 07-01-2024 | Open Until : 24-01-2024 15,000 - 25,000 | Chennai | Telecom</h2>
              <a><Link to="/Appform"><a href="#" className="btn">Apply</a></Link></a>
            </div>
          </div>

          {/* Movie 3 */}
          <div className="current-movi">
            <div className="cm-img-bo">
              <img src="https://www.cheggindia.com/wp-content/uploads/2023/04/How-to-Become-Medical-Officer_-Career-Advice-Educational-Requirements-Jobs-Scope-Salary.png" alt="" />
            </div>
            <h3 className="movie-title">Doctor</h3>
            <p className="screen-name">offer....</p>
            <div className="booking">
              <h2 className="price">Posted Date : 07-01-2024 | Open Until : 24-01-2024 15,000 - 25,000 | Chennai | Telecom</h2>
              <a><Link to="/Appform"><a href="#" className="btn">Apply</a></Link></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    {/* Additional content on the right side, if needed */}
    <div className="content-right">{/* Additional content on the right side */}</div>
  </div>
            </section>
            <section id="male" className="male">
  <div className="section-content">
   <div className="box567">
    <div className="content-left">
      {/* Movie Content */}
      <div className="movies-contain">
        <div className="current-mov">
          {/* Movie 1 */}
          <div className="current-movi">
            <div className="cm-img-bo">
              <img src="https://hace-software.com/wp-content/uploads/2023/03/Software-Testing.webp" alt="" />
            </div>
            <h3 className="movie-title">Software Testing</h3>
            <p className="screen-name">job offer</p>
            <div className="booking">
              <h2 className="price">Posted Date : 03-01-2024 | Open Until : 24-01-2024 15,000 - 25,000 | Kanniyakumari | IT-ITES</h2>
              <a><Link to="/Appform"><a href="#" className="btn">Apply</a></Link></a>
            </div>
          </div>

          {/* Movie 2 */}
          <div className="current-movi">
            <div className="cm-img-bo">
              <img src="https://thumbs.dreamstime.com/b/software-development-word-cloud-concept-grey-background-88535408.jpg" alt="" />
            </div>
            <h3 className="movie-title">Software Developer</h3>
            <p className="screen-name">offer....</p>
            <div className="booking">
              <h2 className="price">Posted Date : 07-01-2024 | Open Until : 24-01-2024 15,000 - 25,000 | Chennai | Telecom</h2>
              <a><Link to="/Appform"><a href="#" className="btn">Apply</a></Link></a>
            </div>
          </div>

          {/* Movie 3 */}
          <div className="current-movi">
            <div className="cm-img-bo">
              <img src="https://www.cheggindia.com/wp-content/uploads/2023/04/How-to-Become-Medical-Officer_-Career-Advice-Educational-Requirements-Jobs-Scope-Salary.png" alt="" />
            </div>
            <h3 className="movie-title">Doctor</h3>
            <p className="screen-name">offer....</p>
            <div className="booking">
              <h2 className="price">Posted Date : 07-01-2024 | Open Until : 24-01-2024 15,000 - 25,000 | Chennai | Telecom</h2>
              <a><Link to="/Appform"><a href="#" className="btn">Apply</a></Link></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    {/* Additional content on the right side, if needed */}
    <div className="content-right">{/* Additional content on the right side */}</div>
  </div>
</section>
            <section id="female" className="female">kl</section>
            </div>
            <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>About Us</h2>
            <p>
              Welcome to LiveTix, your go-to platform for finding the best job opportunities.
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
              Have questions or feedback? Reach out to us at <a href="mailto:info@livetix.com">info@livetix.com</a>.
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 LiveTix. All rights reserved.</p>
        </div>
      </footer>
            
            </div>
         
  );
}

export default Gender;






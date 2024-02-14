
        import '../style/Gender.css';
        import {Link} from 'react-router-dom';


        function Gender() {
          return (
            <div className="jio">
            <div className="bod">
               <div className="qwe">
            <section className="top-bar">
        <div className="lef-content">
            <h2 className="title">JobJunction</h2>
            <ul className="navigation">
                <li><Link to="/Home"><a className="active1"href="#">Home</a></Link></li>
                <li><Link to="/Location"><a className="active">Jobs</a></Link></li>
                <li><Link to="/Jobsearch"><a className="active1"href="#">JobSearch</a></Link></li>
                <li><Link to="/Aboutus"><a className="active1"href="#">AboutUs</a></Link></li>
        </ul>
           
        </div>
        
    <div className="righ-content">
        

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
                           <h2></h2>
                           <p></p>
                        </div>
                     </div>
                     <div className="slide slide_2">
                        <div className="slide-content">
                           <h2></h2>
                           <p></p>
                        </div>
                     </div>
                     <div className="slide slide_3">
                        <div className="slide-content">
                           <h2></h2>
                           <p></p>
                        </div>
                     </div>
                     <div className="slide slide_4">
                        <div className="slide-content">
                           <h2></h2>
                           <p></p>
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
            
        <section className="mai-container">
         <div className="jkl">
  
  <div className="sidebar">
          <div className="sidebar-groups">
            <div className="crt">
           
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
            </div>
            
            <div className="contet-container">
          {/* Search bar and button side by side */}
          <section id="all" className="all">
          <div className="box567">

          <div className="movies-container">
            
             <div className="current-movies">
                <div className="current-movie">
                    <div className="cm-img-bo">
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
                    <div className="cm-img-bo">
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
                    <div className="cm-img-bo">
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
                </div>
                

          
            

        </div>
        </div>
        </section>
        <section id="male" className="male">
          <div className="box567">

          <div className="movies-container">
            
             <div className="current-movies">
                <div className="current-movie">
                    <div className="cm-img-bo">
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
                    <div className="cm-img-bo">
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
                    <div className="cm-img-bo">
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
                </div>
                

          
            

        </div>
        </div>
        </section>
        <br></br>
        
        <section id="female" className="female">
          <div className="box567">

          <div className="movies-container">
            
             <div className="current-movies">
                <div className="current-movie">
                    <div className="cm-img-bo">
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
                    <div className="cm-img-bo">
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
                    <div className="cm-img-bo">
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
                </div>
                

          
            

        </div>
        </div>
        </section>
        </div>
        
        
         </section>
        
         <div>
      
    </div>
  
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
              Have questions or feedback? Reach out to us at <a href="mailto:abinaya123567@gmail.com">info@livetix.com</a>.
            </p>
          </div>
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
        <div className="footer-bottom">
          <p>&copy; 2024 LiveTix. All rights reserved.</p>
        </div>
      </footer>
      
        </div>
        </div>
        

  )
}
export default Gender;





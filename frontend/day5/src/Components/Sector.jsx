

// <div className="wrapper">
//       <div className="card front-face">
//         <img src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Front Face" />
//       </div>
//       <div className="card back-face">
//         <img src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Back Face" />
//         <div className="info">
//           <div className="title">
//             CodingLab
//           </div>
//           <p>
//             User interface designer and <br />front-end developer
//           </p>
//         </div>
        
//         <ul>
//           <a href="#"> <i className="fab fa-facebook-f"></i></a>
//           <a href="#"><i className="fab fa-twitter"></i></a>
//           <a href="#"><i className="fab fa-instagram"></i></a>
//           <a href="#"><i className="fab fa-youtube"></i></a>
//         </ul>
//       </div>
      
      
//     </div>
    
//     </div>
import {Link} from 'react-router-dom';
import '../style/Sector.css';

function Location() {
  return (
    
    <div className="bode">
        <div className="qw">
<section className="top-bar">
  <div className="left-content">
      <h2 className="title">JobJunction</h2>
      <ul className="navigation">
          <li><Link to="/Home"><a className="active1"href="#">Home</a></Link></li>
          <li><Link to="/Location"><a className="active">Jobs</a></Link></li>
          
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
  </div>
  
  <div className="slider-frae">
        <div className="slide-imaes">
          <div className="img-container">
            <img src="https://m.economictimes.com/thumb/height-450,width-600,imgsize-297517,msid-90759045/agencies.jpg" alt="Slide 1" />
          </div>
          <div className="img-container">
            <img src="https://m.economictimes.com/thumb/height-450,width-600,imgsize-52514,msid-75080944/it-getty.jpg" alt="Slide 2" />
          </div>
          <div className="img-container">
            <img src="https://st.depositphotos.com/1035886/5026/i/450/depositphotos_50267171-stock-photo-non-profit-organization.jpg" alt="Slide 3" />
          </div>

          <div className="img-container">
            <img src="https://d3kqdc25i4tl0t.cloudfront.net/articles/content/543_378726_tech.hero.jpg" alt="Slide 3" />
          </div>

          <div className="img-container">
            <img src="https://eduvoice.in/wp-content/uploads/2019/09/Education-industry.png" alt="Slide 3" />
          </div>
          <div className="img-container">
            <img src="https://www.emuarticles.com/wp-content/uploads/2021/02/Untitled-design-1.jpg" alt="Slide 3" />
          </div>

          <div className="img-container">
            <img src="https://www.shutterstock.com/image-photo/public-sector-government-education-health-260nw-1797190885.jpg" alt="Slide 1" />
          </div>
          <div className="img-container">
            <img src="https://www.niir.org/blog/wp-content/uploads/2021/09/download.jpg" alt="Slide 2" />
          </div>
          <div className="img-container">
            <img src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2019/11/29144739/HR-career.png" alt="Slide 3" />
          </div>
        </div>
      </div>
      <div className="plx">
      <section className="mi-container">
         <div className="jkl">
  
  <div className="sidebar">
          <div className="sidebar-groups">
            <div className="crt">
           
             <br></br>
             
             <a href="#agri">Agriculture Sector</a>
              <br></br>
              <br></br>
              <a href="#it">IT Sector</a>
              <br></br>
              <br></br>
              <a href="#gov">Government Sector</a>
              <br></br>
              <br></br>
              <a href="#non">Non profit Sector</a>
              <br></br>
              <br></br>
              <a href="#leg">Legal Sector</a>
              <br></br>
              <br></br>
              

             </div>
              </div>
  
            </div>
            </div>
            
            <div className="contet-container">
          {/* Search bar and button side by side */}
          <section id="agri" className="all">
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
        <section id="it" className="male">
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
        
        <section id="gov" className="female">
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

        <section id="non" className="female">
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
        <section id="leg" className="female">
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
          <div className="footer-section contact">
            <h2>Contact Us</h2>
            <p>
              Have questions or feedback? Reach out to us at <a href="mailto:abinaya123567@gmail.com">info@livetix.com</a>.
            </p>
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
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 LiveTix. All rights reserved.</p>
        </div>
      </footer>
    </div>
    
  
  
  )
}

export default Location

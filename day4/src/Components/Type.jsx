
import '../style/Type.css';
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
     
     <a href="#entry">Entry-Level Jobs</a>
      <br></br>
      <br></br>
      <a href="#tech">Technical Jobs</a>
      <br></br>
      <br></br>
      <a href="#health">Healthcare Jobs</a>
      <br></br>
      <br></br>
      <a href="#finance">Financial Jobs</a>
      <br></br>
      <br></br>
      <a href="#edu">Education Jobs</a>
     </div>
      </div>

    </div>
    </div>
    
    <div className="contet-container">
  {/* Search bar and button side by side */}
  <section id="entry" className="all">
  <div className="box567">

  <div className="movies-container">
    
     <div className="current-movies">
        <div className="current-movie">
            <div className="cm-img-bo">
                <img src="https://studiousguy.com/wp-content/uploads/2021/01/Operations-scheduling.png" alt=""/>
            </div>
            <h3 className="movie-title">US operation Scheduler</h3>
            <p className="screen-name">Master Mavericks LLC</p>
            <div className="booking">
                <h2 className="price">Posted Date : 03-01-2024 | Open Until : 24-01-2024
15,000 - 25,000 |  Kanniyakumari |  IT-ITES</h2>
                <a><Link to="/Appform"><a href="#" className="btn">Apply</a></Link></a>
            </div>
        </div>
        <div className="current-movie">
            <div className="cm-img-bo">
                <img src="https://media.istockphoto.com/id/1199060494/photo/insurance-protecting-family-health-live-house-and-car-concept.jpg?s=612x612&w=0&k=20&c=W8bPvwF5rk7Rm2yDYnMyFhGXZfNqK4bUPlDcRpKVsB8=" alt=""/>
            </div>
            <h3 className="movie-title">HC Insurance Operations</h3>
            <p className="screen-name">NTT Data</p>
            <div className="booking">
                <h2 className="price">Posted Date : 07-01-2024 | Open Until : 24-01-2024
15,000 - 25,000 |  Chennai |  Telecom</h2>
                <a><Link to="/Appform"><a href="#" className="btn">Apply</a></Link></a>
            </div>
        </div>
        <div className="current-movie">
            <div className="cm-img-bo">
                <img src="data:image/jpeg;base64,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" alt=""/>
            </div>
            <h3 className="movie-title">Ecommerce Specialist</h3>
            <p className="screen-name">Rieter</p>
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
<section id="tech" className="male">
  <div className="box567">

  <div className="movies-container">
    
     <div className="current-movies">
        <div className="current-movie">
            <div className="cm-img-bo">
                <img src="https://hace-software.com/wp-content/uploads/2023/03/Software-Testing.webp" alt=""/>
            </div>
            <h3 className="movie-title">Software Testing</h3>
            <p className="screen-name">ZOHO</p>
            <div className="booking">
                <h2 className="price">Posted Date : 03-01-2024 | Open Until : 24-01-2024
15,000 - 25,000 |  Chennai |  IT-ITES</h2>
                <a><Link to="/Appform"><a href="#" className="btn">Apply</a></Link></a>
            </div>
        </div>
        <div className="current-movie">
            <div className="cm-img-bo">
                <img src="https://thumbs.dreamstime.com/b/software-development-word-cloud-concept-grey-background-88535408.jpg" alt=""/>
            </div>
            <h3 className="movie-title">Software Developer</h3>
            <p className="screen-name">TCS</p>
            <div className="booking">
                <h2 className="price">Posted Date : 07-01-2024 | Open Until : 24-01-2024
15,000 - 25,000 |  Chennai | 2-5years Experience</h2>
                <a><Link to="/Appform"><a href="#" className="btn">Apply</a></Link></a>
            </div>
        </div>
        <div className="current-movie">
            <div className="cm-img-bo">
                <img src="data:image/png;base64,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" alt=""/>
            </div>
            <h3 className="movie-title">IT Project Manager</h3>
            <p className="screen-name">Cognizant</p>
            <div className="booking">
                <h2 className="price">Posted Date : 07-01-2024 | Open Until : 24-01-2024
15,000 - 25,000 |  Chennai |  2-5years Experience</h2>
                <a><Link to="/Appform"><a href="#" className="btn">Apply</a></Link></a>
            </div>
        </div>
        </div>
        

  
    

</div>
</div>
</section>
<br></br>

<section id="edu" className="female">
  <div className="box567">

  <div className="movies-container">
    
     <div className="current-movies">
        <div className="current-movie">
            <div className="cm-img-bo">
                <img src="https://c8.alamy.com/comp/DDYG10/portrait-of-young-female-teacher-holding-ruler-against-chalkboard-DDYG10.jpg" alt=""/>
            </div>
            <h3 className="movie-title">Professor</h3>
            <p className="screen-name">Anna University</p>
            <div className="booking">
                <h2 className="price">Posted Date : 03-01-2024 | Open Until : 24-01-2024
50K -80k |  Chennai | 3-5 years Experience</h2>
                <a><Link to="/Appform"><a href="#" className="btn">Apply</a></Link></a>
            </div>
        </div>
        <div className="current-movie">
            <div className="cm-img-bo">
                <img src="data:image/png;base64,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" alt=""/>
            </div>
            <h3 className="movie-title">Assistance</h3>
            <p className="screen-name">Karpagam Institutions</p>
            <div className="booking">
                <h2 className="price">Posted Date : 07-01-2024 | Open Until : 24-01-2024
15,000 - 25,000 |Coimbatore| no experience needed</h2>
                <a><Link to="/Appform"><a href="#" className="btn">Apply</a></Link></a>
            </div>
        </div>
        <div className="current-movie">
            <div className="cm-img-bo">
                <img src="https://img.freepik.com/free-vector/teacher-standing-near-blackboard-holding-stick-isolated-flat-vector-illustration-cartoon-woman-character-near-chalkboard-pointing-alphabet_74855-8600.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1706486400&semt=sph" alt=""/>
            </div>
            <h3 className="movie-title">Teacher</h3>
            <p className="screen-name">RVS SChool</p>
            <div className="booking">
                <h2 className="price">Posted Date : 07-01-2024 | Open Until : 24-01-2024
15,000 - 25,000 |  Coimbatore |0-2 years Experience</h2>
                <a><Link to="/Appform"><a href="#" className="btn">Apply</a></Link></a>
            </div>
        </div>
        </div>
        

  
    

</div>
</div>
</section>
<section id="health" className="female">
  <div className="box567">

  <div className="movies-container">
    
     <div className="current-movies">
        <div className="current-movie">
            <div className="cm-img-bo">
                <img src="https://www.shutterstock.com/image-photo/nutritional-food-heart-health-wellness-260nw-1896814594.jpg" alt=""/>
            </div>
            <h3 className="movie-title">Wanted Nutrition &Dietetics,Dietitian,nutritionist,food tech grad</h3>
            <p className="screen-name">Achievers Spot</p>
            <div className="booking">
                <h2 className="price">Posted Date : 03-01-2024 | Open Until : 24-01-2024
15,000 - 25,000 |Theni|0-3 years Experience</h2>
                <a><Link to="/Appform"><a href="#" className="btn">Apply</a></Link></a>
            </div>
        </div>
        <div className="current-movie">
            <div className="cm-img-bo">
                <img src="https://cdn1.vectorstock.com/i/1000x1000/57/15/medical-healthcare-service-vector-17715715.jpg" alt=""/>
            </div>
            <h3 className="movie-title">Manager-Medical Services</h3>
            <p className="screen-name">Adani Groups</p>
            <div className="booking">
                <h2 className="price">Posted Date : 07-01-2024 | Open Until : 24-01-2024
15,000 - 25,000 |  Chennai |  Telecom</h2>
                <a><Link to="/Appform"><a href="#" className="btn">Apply</a></Link></a>
            </div>
        </div>
        <div className="current-movie">
            <div className="cm-img-bo">
                <img src="https://img.freepik.com/free-photo/biotechnology-specialist-laboratory-conducting-experiments_23-2150468696.jpg" alt=""/>
            </div>
            <h3 className="movie-title">Lead Analyst - Healthcare Research

</h3>
            <p className="screen-name">Evalueserve</p>
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
<section id="finance" className="female">
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
<div className="footer-bottom">
  <p>&copy; 2024 LiveTix. All rights reserved.</p>
</div>
</footer>

</div>
</div>


)
}
export default Gender;





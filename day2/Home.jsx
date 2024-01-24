
import {Link} from 'react-router-dom';
import '../style/Home.css';



function Home() {
 
   
  return (
        <div className="body">
      <section className="top-bar">
        <div className="left-content">
            <h2 className="title">LiveTix</h2>
            <ul className="navigation">
                <li><a className="active"href="#">Home</a></li>
                <li><Link to="/Comedy"><a className="active1">Jobs</a></Link></li>
                <li><a><Link to="/Theater"><a className="active1"href="#">JobFair</a></Link></a></li>
                <li><Link to="/Search"><a className="active1"href="#">JobSearch</a></Link></li>
                <li><Link to="/Search"><a className="active1"href="#">AboutUs</a></Link></li>
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
             
              <a><Link to="/Adventure"><a href="#">Jobs By Location</a></Link></a>
              <br></br>
              <br></br>
              <a><Link to="/Animation"><a href="#">Jobs By Type</a></Link></a>
              <br></br>
              <br></br>
              <a><Link to="/Science"><a href="#">Jobs By Sector</a></Link></a>
              <br></br>
              <br></br>
              <a><Link to="/Comedy"><a href="#">Jobs By Gender</a></Link></a>
              <br></br>
              <br></br>
              <a><Link to="/Thriller"><a href="#">Jobs By Experience</a></Link></a>
              <br></br>
              <br></br>
              <a><Link to="/Thriller"><a href="#">Companies</a></Link></a>
              <br></br>
              <br></br>
              <a><Link to="/Thriller"><a href="#">Qualification</a></Link></a>
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
                        <a><Link to="/Theater"><a href="#" className="btn">Apply</a></Link></a>
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
                        <a><Link to="/Theater"><a href="#" className="btn">Apply</a></Link></a>
                    </div>
                </div>

          

             
                
</div>
          
            

        </div></div>
        
         </section>
        </div>
        

  )
}
export default Home;
Home.jsx



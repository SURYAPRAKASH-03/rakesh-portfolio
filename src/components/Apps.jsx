import Navbars from './Navbars';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyImage2 from './image/blurepng.png';
import "./App.css"
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin, FaDribbble, FaBehance } from 'react-icons/fa';
import ContactForms from './Contactof';


const Apps = () => {
  
    return (
      <div className='container'>
        <Navbars />
        <section id="section1">   
        <div className='rakesh-image'>
       <center>
        <img src='src/components/image/rakeshravi.png' alt="rakesh"/>
        </center>
        </div>
        
        <center>
        <div style={{maxWidth:"80%"}}>
        <p style={{color:"#000000",textAlign:"center"}}>Hello! I'm Rakesh R, a passionate UI/UX Designer committed to transforming complex ideas into elegant,
          user-friendly designs. With a keen eye for detail and a drive for innovation,
          I specialize in creating seamless digital experiences that captivate and engage. 
          Let's collaborate to turn your vision into reality and make a lasting impact in the digital world.
        </p>
        </div>
        </center>
        <center>
        <a href='https://drive.google.com/file/d/1w7OODay92lIkWJaEAyA0ZHb0VFHRhiQk/view?usp=drivesdk'><button className="buttoncv">View CV</button></a>
        </center>
        <div  className='img1 ' style={{ backgroundImage:`url(${MyImage2})`,backgroundSize: "cover",backgroundPosition: "center",width: '100%',height: '500px',marginTop:"-450px"}}data-aos="fade-up">
        </div>
        </section>
        <section id="section2">
          <br></br><br></br><br></br>
          <p className='abouttopic'data-aos="fade-up">Something</p>
           <a style={{fontFamily:" 'Yeseva One', cursive",fontSize:"36px",display: "flex",justifyContent: "center",alignItems: "center",textDecoration:"none"}}className='fade-in-section'data-aos="fade-up">About me</a>
           <center>
           <div className="row">
        <div className="col-md6">
          <div className='aboutimg'>
            <center>
            <img src='src/components/image/11.png'alt='img'data-aos="fade-up"/>
            </center>
            </div>
        </div>

        <div className="col-md16">
          <div>
            <p className='aboutpara'>I’m Rakesh R, a UI/UX Designer and Computer Science undergraduate at Velalar College of Engineering and Technology.
               I work at Scable, a startup focused on innovative communication solutions.
                My passion lies in creating user-friendly designs that make a difference.
                 Always eager to learn and collaborate, I'm excited to connect and explore new opportunities</p>
           </div>
        </div>
      </div>
      </center>
        </section>
        <section id="section3" >
            <br></br>
            <center>
              <br></br><br></br><br></br>
          <h4 style={{color:"#3843D0"}}>These are</h4>
          <h2 style={{color:"#000000(75%)"}}>My portfolios</h2>
          </center>
 <br></br>
<div className="cards">

  <div className='card1'>
    <center>
      <br></br>
    <a className='cardtopic1'>Animals of Erode</a>
    <p className='subtopic1'>Awareness about Street <br></br> animals</p>
    <img src='src/components/image/aoe portfolio.png'/>
    </center> 
  </div>
  <div className='card2'>
  <center>
    <br></br>
  <a className='cardtopic2'>Clubbook</a>
    <p className='subtopic2'>An application for connecting<br></br> clubs</p>
    <img src='src/components/image/cb.png'/>
    </center> 
  </div>
</div>
<br></br>
<center>
<div className='cards1'>
<div className="row2">
        <div className="col-md-4">
        <center>
        <div><p className='lakma'>9lakma</p> </div>
<div className='lakma2'>A fentastic clothing website design</div>
</center>
        </div>
        <div className="col-md-6">
        <div className='cardimg'><img src='src/components/image/9lakma[1].png'alt='img'/></div>
        </div>
      </div>
</div>
</center>
<br></br>
<div className="cards">
  <div className='card1'>
    <center>
      <br></br>
      <a className='cardtopic3'>Scable</a>
      <p className='subtopic3'>A eye melting design for our <br></br>startup</p>
      <img src='src/components/image/scable portfolio.png'/>
    </center> 
  </div>
  <div className='card3'>
  <center>
    <br></br>
    <a className='cardtopic4'>Factify</a>
    <p className='subtopic4'>An application for finding <br></br>missmatching datas</p>
    <img src='src/components/image/Group 29.png'/></center> 
  </div>
</div>
<br></br>
<center>
<div className='footer'>
  <div className='right'>
    <img src='src/components/image/tea-lover (1).png'/>
  </div>
  <div className='center'>
    <p className='foottopic1'>
    <br></br> <br></br>
      Have an idea? </p>
    <p className='foottopic2'>Let’s talk about it!</p>
     </div>
  <div className='left'>
    <img src='src/components/image/dancing-guy.png'/>
  </div>
</div>
</center>
</section>
<section id="section4">
<ContactForms />
  <br></br><br></br><br></br><br></br>
<div className='footlogo'>
  <div className='logo1'><img src='src/components/image/Vector.png' />&emsp;</div>
  <div className='logo2'><p>RAKESH RAVI</p>
  <div style={{float:"right",paddingLeft:"30px",marginTop:"-30px"}}>
  <a href='https://www.instagram.com/_.rakkii._05/profilecard/?igsh=MW51ZXBvb3UxMzVqag=='><FaInstagram size={20} className='insta'/>&emsp;</a>
  <a href='https://www.linkedin.com/in/rakesh-ravi-736721276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><FaLinkedin size={20} className='link'/>&emsp;</a>
  <a href='https://dribbble.com/rakesh_2005/about?utm_source=Clipboard_%22clipboard_about%22&utm_campaign=%22rakesh_2005%22&utm_content=%22About%20rakesh_2005%22&utm_medium=Social_Share'><FaDribbble size={20}className='dribble' />&emsp;</a>
  <a href='https://www.behance.net/rakeshravi2005'><FaBehance size={20}className='beh'/>&emsp;</a>
  </div>
  </div>
</div>   
        </section>
      </div>
      );
  };
  export default Apps;
import { Link } from 'react-scroll';
import "./Navbar.css"
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin, FaDribbble, FaBehance } from 'react-icons/fa';


const Navbars = () => {
  return (
    <nav style={{width:'100%'}}>
      <img src='src\components\image\Vector.png'style={{marginRight:"53%"}}/>
      <ul>
        <div className='navlist'>
        <li>

          <Link to="section1" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="section2" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="section3" smooth={true} duration={500}>
            Service
          </Link>
        </li>
        <li>
          <Link to="section4" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        
        </div>
        
      </ul>
      <div className='navicons'>
     <a href='https://www.instagram.com/_.rakkii._05/profilecard/?igsh=MW51ZXBvb3UxMzVqag=='><FaInstagram size={20} className='insta'/>&emsp;</a> 
     <a href='https://www.linkedin.com/in/rakesh-ravi-736721276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'> <FaLinkedin size={20} className='link'/>&emsp;</a> 
     <a href='https://dribbble.com/rakesh_2005/about?utm_source=Clipboard_%22clipboard_about%22&utm_campaign=%22rakesh_2005%22&utm_content=%22About%20rakesh_2005%22&utm_medium=Social_Share'><FaDribbble size={20}className='dribble' />&emsp;</a> 
      <a href='https://www.behance.net/rakeshravi2005'><FaBehance size={20}className='beh'/>&emsp;</a>
      </div>
    </nav>
  );
};


export default Navbars;
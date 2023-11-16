import React from 'react'
import {Link} from 'react-router-dom'
import logoImg from "../assets/CircleLogo-removebg-preview.png";

//images
import aboutusImg from '../assets/aboutus_footer.svg'
import FaqImg from '../assets/faq_footer.svg'
import FeedbackImg from '../assets/feedback_footer.svg'


//icons
import {FaInstagramSquare} from '../../node_modules/react-icons/fa'
import {ImFacebook2} from '../../node_modules/react-icons/im'
import {RiTwitterXFill} from '../../node_modules/react-icons/ri'
import {BsLinkedin} from '../../node_modules/react-icons/bs'
import './Footer.css'


export default function Footer() {
  return (
    <>
        <div className='footer'>
           
               <div className="footerIconContainer">
                    <div className='footerIconWithText'>
                        <div className='footerBigIcons'>
                            <img width={50} src={FaqImg} alt="" />
                        </div>
                        <Link className='icontextlink' to="/"><h4>FAQ</h4></Link>      
                    </div>

                    <div className='footerIconWithText'>
                        <div className='footerBigIcons'>
                            <img width={50} src={aboutusImg} alt="" />
                        </div>
                        <Link className='icontextlink' to="/"><h4>ABOUT US</h4></Link>
                    </div>
                    
                    <div className='footerIconWithText'>
                        <div className='footerBigIcons'>
                            <img width={50} src={FeedbackImg} alt="" />
                        </div>
                        <Link className='icontextlink' to="/"><h4 >FEEDBACK</h4></Link>
                    </div>

               </div>
          
               <hr  className='socialLine'/>
            <div className="footerlinksContainer">
                <div className="logo">
                    <img src={logoImg} alt="" />
                </div>
                <div className="links">
                    <h3 className=''>Links</h3>
                    <span><Link to="/" className='footer__links'>Home</Link></span>
                    <span><Link to="/login" className='footer__links'>Login</Link></span>
                    <span> <Link to="/signup" className='footer__links'>Register</Link></span>
                    
                </div>

                <div className="links">
                    <h3 className=''>General</h3>
                    <span><Link to="/" className='footer__links'>FAQs</Link></span>
                    <span><Link to="/" className='footer__links'>About Us</Link></span>
                    <span><Link to="/" className='footer__links'>Feedback</Link></span>
                </div>
                <div className="links">
                    <h3 className=''>Policy</h3>
                    <span><Link to="/" className='footer__links'>Privacy Policy</Link></span>
                    <span><Link to="/" className='footer__links'>Cookie Policy</Link></span>
                    <span><Link to="/" className='footer__links'>Terms & conditions</Link></span>
                </div>
            </div>

            <div className="socialLinksRow">
                {/* <hr className='socialLine'/> */}
                <div className="">
                    <div className="icons_container">
                       <Link className='socialiconslink' to="/"><FaInstagramSquare className='socialIcons'  fontSize='x-large'/></Link>
                       <Link className='socialiconslink' to="/"><ImFacebook2 className='socialIcons' fontSize='x-large'/></Link>
                       <Link className='socialiconslink' to="/"><BsLinkedin className='socialIcons'  fontSize='x-large'/></Link>
                       <Link className='socialiconslink' to="/"> <RiTwitterXFill className='socialIcons'  fontSize='x-large'/></Link>      
                    </div>
                </div>
                <hr  className='socialLine'/>
                <p>Copyright@2023 private limited</p>
            </div>
        </div>
    </>
  )
}

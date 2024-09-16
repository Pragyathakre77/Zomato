import React from 'react'
import './Footer.scss'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import Google from '../../Images-Zomato/Google-Play.png'
import App from '../../Images-Zomato/App-Store.png'

const Footer = () => {
  return (
    <div className='Footer'>
       <div className='top'>
         <div className='top1'>
            <h2>Zomato</h2>
            <div className='lang'>
                <select>
                  <option value="India">India</option>
                  <option value="Australia">Australia</option>
                  <option value="London">London</option>
                  <option value="America">America</option>
                  <option value="France">France</option>
                  <option value="Brazil">Brazil</option>
                  <option value="England">England</option>
                  <option value="South Africa">South Africa</option>
                  <option value="Russia">Russia</option>
                </select>
                <select>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Polish">Polish</option>
                </select>
            </div>
         </div>
         <div className='bottom1'>
            <div className="bottomContent">
                <h4>About Zomato</h4>
                <p>Who we are</p>
                <p>Blog</p>
                <p>Work with us</p>
                <p>Investor Relations</p>
                <p>Report Fraud</p>
                <p>Press kit</p>
                <p>Contact us</p>
            </div>
            <div className="bottomContent">
                <h4>Zomaverse</h4>
                <p>Zomato</p>
                <p>Blinkit</p>
                <p>Feeding India</p>
                <p>Hyperpure</p>
                <p>Zomaland</p>
            </div>
            <div className="bottomContent">
                <h4>For Restaurants</h4>
                <p>Partner With Us</p>
                <p>Apps For You</p>
            </div>
            <div className="bottomContent">
                <h4>Learn More</h4>
                <p>Privacy</p>
                <p>Security</p>
                <p>Terms</p>
                <p>Sitemap</p>
            </div>
            <div className="bottomContent">
                <h4>Social Links</h4>
                <div className='links'>
                   <LinkedInIcon/>
                   <TwitterIcon/>
                   <InstagramIcon/>
                   <YouTubeIcon/>
                   <FacebookIcon/>
                </div>
                <img src={App} alt="app" />
                <img src={Google} alt="google" />
            </div>
         </div>
       </div>
       <hr/>
       <div className='bottom'>
        <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.</p>
       </div>
    </div>
  )
}

export default Footer

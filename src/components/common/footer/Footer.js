import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <>
        <footer>
            <div id="footer1">
                <div className='footer1indiv'>
                    <ul>
                        <li style={{color : "red"}}><b><i>Company</i></b></li>
                        <li>About Us</li>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className='footer1indiv'>
                    <ul>
                        <li style={{color : "red"}}><b><i>Policies</i></b></li>
                        <li>Privacy Policies</li>
                        <li>Terms of Use</li>
                        <li>Secure Shopping</li>
                        <li>Copyright Policy</li>
                    </ul>   
                </div>
                <div className='footer1indiv'>
                    <ul>
                        <li style={{color : "red"}}><b><i>Help</i></b></li>
                        <li>Payment</li>
                        <li>Shipping</li>
                        <li>Return</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className='footer1indiv'>
                    <ul>
                        <li style={{color : "red"}}><b><i>Misc</i></b></li>
                        <li>Affiliate</li>
                        <li>Sitemap</li>
                    </ul>
                </div>
            </div>
            <div id="footer2">
                <div><i className="fa-brands fa-facebook"></i></div>
                <div><i className="fa-brands fa-twitter"></i></div>
                <div><i className="fa-brands fa-instagram"></i></div>
            </div>
            <div id="footer3">Copyright © 2023 . Bookswagon.com. All Rights Reserved</div>
        </footer>
    </>
  )
}

export default Footer
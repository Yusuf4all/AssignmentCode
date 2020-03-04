import React from 'react';
import './footerStyle.css';
export const Footer = (props) => {
    return (
        <footer>
            <div id='contactUs'>
                <div className='row'>
                    <div className='col-md-4 col-xl-4 col-lg-4 email'>
                        <h6>SIGN UP FOR EMAIL OFFERS & UPDATES</h6>
                        <input type='text' placeholder='Email' /><button>SUBMIT</button>
                    </div>
                    <div className='col-md-4 col-xl-4 col-lg-4 social'>
                        <h6>CONNECT WITH US</h6>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-google-plus"></i>
                    </div>
                    <div className='col-md-4 col-xl-4 col-lg-4 secure'>
                        <h6>SECURE ORDERING & TRANSACTIONS</h6>
                        <i className="fab fa-cc-visa"></i>
                        <i className="fab fa-cc-mastercard"></i>
                        <i className="fab fa-cc-paypal"></i>
                        <i className="fab fa-cc-amex"></i>
                    </div>
                </div>
            </div>

            <div id='footerNav'>
                <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>FAWs</li>
                    <li>Blog</li>
                    <li>Download App</li>
                    <li>Care Guide</li>
                    <li>Flower Astology</li>
                    <li>Articles Hub</li>
                    <li>Wishes & Messages</li>
                    <li>FNP World</li>
                </ul>
                <h4>Copyright © 2020 www.fnp.ae . All rights reserved.</h4>
            </div>
        </footer>
    )
}
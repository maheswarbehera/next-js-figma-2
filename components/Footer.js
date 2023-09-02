import React from 'react';
import Link from 'next/link'
import logo from '../assets/images/imeet - white 2.png'
import playstore from '../assets/images/image 20.png'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import styles from '@/styles/maheswar.module.css'

function Footer() {
    return (
        <>
            <footer className='footer'>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className='footer-logo pb-4'>
                                <img src={logo} alt="" />
                            </div>
                            <div className="footer-info">
                                iMeet provides a wide range of e-learning services under one roof.
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="footer-links">
                                <span className="footer-title">Quick Links</span>
                                <ul className='list-unstyled'>
                                    <li><Link href='/'>Home</Link></li>
                                    <li><Link href='/'>About Us</Link></li>
                                    <li><Link href='/'>Insights</Link></li>
                                    <li><Link href='/'>Privacy & policy</Link></li>
                                    <li><Link href='/'>Refund Policy</Link></li>
                                    <li><Link href='/'>Terms & Condition</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="footer-links">
                                <span className="footer-title">Courses</span>
                                <ul className='list-unstyled'>
                                    <li><Link href='/'>Machine Learnning</Link></li>
                                    <li><Link href='/'>Web Development</Link></li>
                                    <li><Link href='/'>Cyber Security</Link></li>
                                    <li><Link href='/'>Data Science</Link></li>
                                    <li><Link href='/'>Auto Card</Link></li>
                                    <li><Link href='/'>All Courses</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="footer-links">
                                <span className="footer-title">Contact Information</span>
                                <ul className='list-unstyled'>
                                    <li className='contact'>Phone: +91 000000000</li>
                                    <li className='contact'>Email : imeet.mathura@gmail.com</li>
                                    <li className='contact'>Address:  Mathura, Uttar Pradesh - 281001</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="playstore">
                        <img src={playstore} alt="" />
                    </div>
                    <div className="copyright">
                       
                            <div className="d-flex align-items-center justify-content-between gap-3">
                            <span className='copy'>iMeet Technology © 2023. All Rights Reserved. </span>
                                <div>
                                <div className="icon d-flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                                    <path d="M21.5 3.65479C11.6459 3.65479 3.58337 11.6994 3.58337 21.6073C3.58337 30.5656 10.1409 38.001 18.705 39.3448V26.8031H14.1542V21.6073H18.705V17.6477C18.705 13.1506 21.3746 10.6781 25.4775 10.6781C27.4305 10.6781 29.473 11.0185 29.473 11.0185V15.444H27.2155C24.9938 15.444 24.295 16.8235 24.295 18.239V21.6073H29.2759L28.4696 26.8031H24.295V39.3448C28.517 38.678 32.3615 36.5238 35.1345 33.2711C37.9075 30.0184 39.4263 25.8816 39.4167 21.6073C39.4167 11.6994 31.3542 3.65479 21.5 3.65479Z" fill="white" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                                    <path d="M13.975 3.5835H29.025C34.7584 3.5835 39.4167 8.24183 39.4167 13.9752V29.0252C39.4167 31.7812 38.3219 34.4244 36.3731 36.3732C34.4242 38.322 31.7811 39.4168 29.025 39.4168H13.975C8.24171 39.4168 3.58337 34.7585 3.58337 29.0252V13.9752C3.58337 11.2191 4.67821 8.57596 6.62702 6.62714C8.57584 4.67833 11.219 3.5835 13.975 3.5835ZM13.6167 7.16683C11.9061 7.16683 10.2655 7.84638 9.05587 9.05599C7.84626 10.2656 7.16671 11.9062 7.16671 13.6168V29.3835C7.16671 32.9489 10.0513 35.8335 13.6167 35.8335H29.3834C31.094 35.8335 32.7346 35.1539 33.9442 33.9443C35.1538 32.7347 35.8334 31.0941 35.8334 29.3835V13.6168C35.8334 10.0514 32.9488 7.16683 29.3834 7.16683H13.6167ZM30.9063 9.85433C31.5003 9.85433 32.0699 10.0903 32.4899 10.5103C32.9099 10.9303 33.1459 11.4999 33.1459 12.0939C33.1459 12.6879 32.9099 13.2575 32.4899 13.6775C32.0699 14.0975 31.5003 14.3335 30.9063 14.3335C30.3123 14.3335 29.7427 14.0975 29.3227 13.6775C28.9027 13.2575 28.6667 12.6879 28.6667 12.0939C28.6667 11.4999 28.9027 10.9303 29.3227 10.5103C29.7427 10.0903 30.3123 9.85433 30.9063 9.85433ZM21.5 12.5418C23.8759 12.5418 26.1545 13.4857 27.8345 15.1657C29.5146 16.8457 30.4584 19.1243 30.4584 21.5002C30.4584 23.8761 29.5146 26.1546 27.8345 27.8347C26.1545 29.5147 23.8759 30.4585 21.5 30.4585C19.1241 30.4585 16.8456 29.5147 15.1655 27.8347C13.4855 26.1546 12.5417 23.8761 12.5417 21.5002C12.5417 19.1243 13.4855 16.8457 15.1655 15.1657C16.8456 13.4857 19.1241 12.5418 21.5 12.5418ZM21.5 16.1252C20.0745 16.1252 18.7073 16.6915 17.6993 17.6995C16.6913 18.7075 16.125 20.0746 16.125 21.5002C16.125 22.9257 16.6913 24.2929 17.6993 25.3009C18.7073 26.3089 20.0745 26.8752 21.5 26.8752C22.9256 26.8752 24.2927 26.3089 25.3007 25.3009C26.3087 24.2929 26.875 22.9257 26.875 21.5002C26.875 20.0746 26.3087 18.7075 25.3007 17.6995C24.2927 16.6915 22.9256 16.1252 21.5 16.1252Z" fill="white" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                                    <path d="M17.9167 26.8752L27.2155 21.5002L17.9167 16.1252V26.8752ZM38.6284 12.8464C38.8613 13.6885 39.0225 14.8172 39.13 16.2506C39.2555 17.6839 39.3092 18.9202 39.3092 19.9952L39.4167 21.5002C39.4167 25.4239 39.13 28.3085 38.6284 30.1539C38.1805 31.7664 37.1413 32.8056 35.5288 33.2535C34.6867 33.4864 33.1459 33.6477 30.7809 33.7552C28.4517 33.8806 26.3196 33.9343 24.3488 33.9343L21.5 34.0418C13.993 34.0418 9.31671 33.7552 7.47129 33.2535C5.85879 32.8056 4.81962 31.7664 4.37171 30.1539C4.13879 29.3118 3.97754 28.1831 3.87004 26.7497C3.74462 25.3164 3.69087 24.0802 3.69087 23.0052L3.58337 21.5002C3.58337 17.5764 3.87004 14.6918 4.37171 12.8464C4.81962 11.2339 5.85879 10.1947 7.47129 9.74683C8.31337 9.51391 9.85421 9.35266 12.2192 9.24516C14.5484 9.11975 16.6805 9.066 18.6513 9.066L21.5 8.9585C29.0071 8.9585 33.6834 9.24516 35.5288 9.74683C37.1413 10.1947 38.1805 11.2339 38.6284 12.8464Z" fill="white" />
                                </svg>
                                </div>
                                
                                </div>
                            </div>
                        </div>
                   
                </div>
            </footer>
        </>
    );
}

export default Footer;

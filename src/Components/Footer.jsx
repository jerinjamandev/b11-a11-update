import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/footer-logo.png';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
                {/* Logo & Info */}
                <aside>
                    <img src={Logo} alt="" />
                    <h1 className="mb-2 text-xl font-bold">Connect Through Community Events</h1>
                    <p className="mb-5">
                        Join hands to clean, plant, donate, and build a better society. <br /> Explore  upcoming events,
                        volunteer opportunities, <br /> and create your own impact!
                    </p>
                </aside>

                {/* Navigation - Quick Links */}
                <nav>
                    <h6 className="footer-title text-xl mb-2 ">Quick Links</h6>
                    <ul>
                        <li><Link className="link link-hover" to="/">Home</Link></li>
                        <li><Link className="link link-hover" to="/events">Upcoming Events</Link></li>
                    </ul>
                </nav>

                {/* Navigation - Resources */}
                <nav>
                    <h6 className="footer-title text-xl mb-2 ">Resources</h6>
                    <a className="link link-hover" href="/blog">Blog</a>
                    <a className="link link-hover" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
                    <a className="link link-hover" href="/terms">Terms & Conditions</a>
                    <a className="link link-hover" href="/privacy">Privacy Policy</a>
                </nav>

                {/* Social Media Links */}
                <nav>
                    <h6 className="footer-title text-xl mb-2 ">Follow Me</h6>
                    <div className="grid grid-flow-col gap-6">
                      
                            <FaFacebook className='text-2xl' />
                            <FaInstagram className='text-2xl' />
                            <FaTwitter className='text-2xl' />
                        
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;

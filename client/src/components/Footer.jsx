import React from 'react';
import { FaInstagram, FaEnvelope, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import API_BASE_URL from '../utils/api';


const Footer = () => {
    return (
        <footer style={{ background: 'linear-gradient(to right, #fdfbfb, #ebedee)', color: '#2d3436', paddingTop: '4rem', paddingBottom: '2rem', marginTop: 'auto', borderTop: '4px solid var(--primary-color)' }}>
            <div className="container">
                {/* Top Section: Brand & Navigation */}
                <div className="footer-top">
                    <div className="footer-column footer-brand">
                        <Link to="/" className="footer-logo">
                            <img src={`${API_BASE_URL}/uploads/logo.png`} alt="Logo" />
                            CareNest
                        </Link>
                        <p className="footer-description">
                            Where Extra Food Becomes Someone's Meal. We bridge the gap between surplus food and those in need.
                        </p>
                    </div>

                    <div className="footer-column">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/donate">Donate Food</Link></li>
                            <li><Link to="/request">Request Food</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Legal</h4>
                        <ul>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                            <li><Link to="/terms">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section: Developer Credits & Socials */}
                <div className="footer-bottom">
                    <p className="copyright">&copy; {new Date().getFullYear()} CareNest. All rights reserved.</p>

                    <div className="developer-credits">
                        <p className="credit-text">
                            Crafted with <FaHeart className="heart-icon" /> by
                            <span className="dev-name">DevXign</span>
                        </p>

                        <div className="social-links">
                            <a href="https://www.instagram.com/devxign.tech/" target="_blank" rel="noopener noreferrer" className="social-icon insta">
                                <FaInstagram />
                            </a>
                            <div className="divider"></div>
                            <a href="mailto:tech@devxign.online" className="social-icon email">
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.2); }
                    100% { transform: scale(1); }
                }
                .social-icon { transition: transform 0.2s; }
                .social-icon:hover { transform: translateY(-3px); }
            `}</style>
        </footer>
    );
};

export default Footer;

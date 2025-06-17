import { useEffect } from 'react';
import '../../assets/client/css/bootstrap.min.css';
import '../../assets/client/css/font-awesome.min.css';
import '../../assets/client/css/elegant-icons.css';
import '../../assets/client/css/jquery-ui.min.css';
import '../../assets/client/css/magnific-popup.css';
import '../../assets/client/css/owl.carousel.min.css';
import '../../assets/client/css/slicknav.min.css';
import '../../assets/client/css/style.css';
import '../../assets/client/js/jquery-3.3.1.min.js';
import '../../assets/client/js/bootstrap.min.js';
import '../../assets/client/js/jquery.magnific-popup.min.js';
import '../../assets/client/js/jquery-ui.min.js'
import '../../assets/client/js/mixitup.min.js';
import '../../assets/client/js/jquery.countdown.min.js';
import '../../assets/client/js/jquery.slicknav.js';
import '../../assets/client/js/owl.carousel.min.js';
import '../../assets/client/js/jquery.nicescroll.min.js';
import '../../assets/client/js/main.js';

import l1 from '../../assets/client/img/logo.png'

interface LoaderProps {
    isMenuOpen: boolean;
    onCloseMenu: () => void;
}

const Loaderclient = ({ isMenuOpen, onCloseMenu }: LoaderProps) => {
    useEffect(() => {
        // Add event listener for escape key
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onCloseMenu();
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [onCloseMenu]);

    return (
        <>
            <div id="preloder">
                <div className="loader"></div>
            </div>

            <div 
                className={`offcanvas-menu-overlay ${isMenuOpen ? 'active' : ''}`}
                onClick={onCloseMenu}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 998,
                    display: isMenuOpen ? 'block' : 'none'
                }}
            ></div>
            <div 
                className={`offcanvas-menu-wrapper ${isMenuOpen ? 'active' : ''}`}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: isMenuOpen ? 0 : '-300px',
                    width: '300px',
                    height: '100%',
                    background: '#ffffff',
                    zIndex: 999,
                    padding: '50px 20px 30px',
                    transition: 'all 0.3s ease 0s',
                    overflowY: 'auto'
                }}
            >
                <div 
                    className="offcanvas__close" 
                    onClick={onCloseMenu}
                    style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        fontSize: '20px',
                        cursor: 'pointer'
                    }}
                >+</div>
                <ul className="offcanvas__widget">
                    <li><span className="icon_search search-switch"></span></li>
                    <li><a href="#"><span className="icon_heart_alt"></span>
                        <div className="tip">2</div>
                    </a></li>
                    <li><a href="#"><span className="icon_bag_alt"></span>
                        <div className="tip">2</div>
                    </a></li>
                </ul>
                <div className="offcanvas__logo">
                    <a href="/">
                        <img src={l1} alt="Logo" />
                    </a>
                </div>
                <nav className="header__menu">
                    <ul>
                        <li className="active"><a href="./index.html">Home</a></li>
                        <li><a href="#">Women's</a></li>
                        <li><a href="#">Men's</a></li>
                        <li><a href="./shop.html">Shop</a></li>
                        <li><a href="#">Pages</a>
                            <ul className="dropdown">
                                <li><a href="./product-details.html">Product Details</a></li>
                                <li><a href="./shop-cart.html">Shop Cart</a></li>
                                <li><a href="./checkout.html">Checkout</a></li>
                                <li><a href="./blog-details.html">Blog Details</a></li>
                            </ul>
                        </li>
                        <li><a href="./blog.html">Blog</a></li>
                        <li><a href="./contact.html">Contact</a></li>
                    </ul>
                </nav>
                <div className="offcanvas__auth">
                    <a href="#">Login</a>
                    <a href="#">Register</a>
                </div>
            </div>

            <style jsx>{`
                .offcanvas-menu-wrapper {
                    position: fixed;
                    top: 0;
                    left: -300px;
                    width: 300px;
                    height: 100%;
                    background: #ffffff;
                    z-index: 999;
                    padding: 50px 20px 30px;
                    transition: all 0.3s ease 0s;
                    overflow-y: auto;
                }
                .offcanvas-menu-wrapper.active {
                    left: 0;
                }
                .offcanvas-menu-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                    z-index: 998;
                    display: none;
                }
                .offcanvas-menu-overlay.active {
                    display: block;
                }
                .offcanvas__menu {
                    margin-bottom: 30px;
                }
                .offcanvas__menu li {
                    position: relative;
                    display: block;
                }
                .offcanvas__menu li a {
                    font-size: 14px;
                    color: #111111;
                    font-weight: 500;
                    padding: 10px 0;
                    display: block;
                    border-bottom: 1px solid #f5f5f5;
                }
                .offcanvas__menu li.dropdown {
                    position: relative;
                }
                .offcanvas__menu li.dropdown .dropdown {
                    padding-left: 20px;
                    display: none;
                }
                .offcanvas__menu li.dropdown.active .dropdown {
                    display: block;
                }
                .offcanvas__close {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    font-size: 20px;
                    cursor: pointer;
                }
            `}</style>
        </>
    )
}

export default Loaderclient;
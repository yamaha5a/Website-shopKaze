import { useState } from 'react';
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
import { Link } from 'react-router-dom';

interface HeaderProps {
    onMenuToggle: () => void;
}

const Headerclient = ({ onMenuToggle }: HeaderProps) => {
    return (
        <>
            <header className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-2">
                            <div className="header__logo">
                                <a href="./index.html">
                                    <img src="/img/logo.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <nav className="header__menu">
                                <ul>
                                    <li className="active">
                                    <Link to="/">Home</Link>
                                    </li>
                                    <li><a href="#">Women's</a></li>
                                    <li><a href="#">Men's</a></li>
                                    <li><Link to="/shop">Shop</Link></li>
                                    <li><a href="#">Pages</a>
                                        <ul className="dropdown">
                                            <li><Link to="/shop/detail">Product Details</Link></li>
                                            <li><Link to="/shop/cart">Cart</Link></li>
                                            <li><Link to="/shop/checkout">Checkout</Link></li>

                                            <li><a href="./blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/shop/blog">Blog</Link></li>
                                    <li><Link to="/shop/contact">Contact</Link></li>

                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="header__right">
                                <div className="header__right__auth">
                                    <a href="#">Login</a>
                                    <a href="#">Register</a>
                                </div>
                                <ul className="header__right__widget">
                                    <li><span className="icon_search search-switch"></span></li>
                                    <li><a href="#"><span className="icon_heart_alt"></span>
                                        <div className="tip">2</div>
                                    </a></li>
                                    <li><a href="#"><span className="icon_bag_alt"></span>
                                        <div className="tip">2</div>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="canvas__open" onClick={onMenuToggle}>
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Headerclient;
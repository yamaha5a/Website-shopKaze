import '../../assets/client/css/bootstrap.min.css';
import '../../assets/client/css/font-awesome.min.css';
import '../../assets/client/css/elegant-icons.css';
import '../../assets/client/css/jquery-ui.min.css';
import '../../assets/client/css/magnific-popup.css';
import '../../assets/client/css/owl.carousel.min.css';
import '../../assets/client/css/slicknav.min.css';
import '../../assets/client/css/style.css';
import l1 from '../../assets/client/img/logo.png'
import l2 from '../../assets/client/img/payment/payment-1.png'
import l3 from '../../assets/client/img/payment/payment-2.png'
import l4 from '../../assets/client/img/payment/payment-3.png'
import l5 from '../../assets/client/img/payment/payment-4.png'
import l6 from '../../assets/client/img/payment/payment-5.png'


const Footerclient = () =>{
    return(
        <>
        <footer className="footer">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-7">
                <div className="footer__about">
                    <div className="footer__logo">
                    <a href="./index.html">
                    <img src={l1} alt="" />
                    </a>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    cilisis.</p>
                    <div className="footer__payment">
                        <a href="#"><img src={l2} alt="" /></a>
                    <a href="#"><img src={l3} alt="" /></a>
                    <a href="#"><img src={l4} alt="" /></a>
                    <a href="#"><img src={l5} alt="" /></a>
                    <a href="#"><img src={l6} alt="" /></a>

                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-5">
                <div className="footer__widget">
                    <h6>Quick links</h6>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4">
                <div className="footer__widget">
                    <h6>Account</h6>
                    <ul>
                        <li><a href="#">My Account</a></li>
                        <li><a href="#">Orders Tracking</a></li>
                        <li><a href="#">Checkout</a></li>
                        <li><a href="#">Wishlist</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-4 col-md-8 col-sm-8">
                <div className="footer__newslatter">
                    <h6>NEWSLETTER</h6>
                    <form action="#">
                    <input type="text" placeholder="Email" />
                        <button type="submit" className="site-btn">Subscribe</button>
                    </form>
                    <div className="footer__social">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-youtube-play"></i></a>
                        <a href="#"><i className="fa fa-instagram"></i></a>
                        <a href="#"><i className="fa fa-pinterest"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <div className="footer__copyright__text">
                    <p>Copyright &copy; <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
                </div>
            </div>
        </div>
    </div>
</footer>
        </>
    )
}

export default Footerclient;
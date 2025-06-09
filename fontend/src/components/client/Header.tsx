import "../../assets/client/css/main.css";
import "../../assets/client/css/util.css";
import logo from "../../assets/client/images/icons/logo-01.png"; 
import "../../assets/client/vendor/bootstrap/css/bootstrap.min.css";
import "../../assets/client/fonts/font-awesome-4.7.0/css/font-awesome.min.css"
import "../../assets/client/fonts/iconic/css/material-design-iconic-font.min.css";
import "../../assets/client/fonts/linearicons-v1.0.0/icon-font.min.css";
import "../../assets/client/vendor/animate/animate.css";
import "../../assets/client/vendor/css-hamburgers/hamburgers.min.css";
import "../../assets/client/vendor/animsition/css/animsition.min.css";
import "../../assets/client/vendor/select2/select2.min.css";
import "../../assets/client/vendor/daterangepicker/daterangepicker.css";
import "../../assets/client/vendor/slick/slick.css";
import "../../assets/client/vendor/MagnificPopup/magnific-popup.css";
import "../../assets/client/vendor/perfect-scrollbar/perfect-scrollbar.css";


const Header = () => {
  return (
    (
    <header>
      {/* Header desktop */}
      <div className="container-menu-desktop">
        {/* Topbar */}
        <div className="top-bar">
          <div className="content-topbar flex-sb-m h-full container">
            <div className="left-top-bar">
              Free shipping for standard order over $100
            </div>

            <div className="right-top-bar flex-w h-full">
              <a href="#" className="flex-c-m trans-04 p-lr-25">
                Help & FAQs
              </a>

              <a href="#" className="flex-c-m trans-04 p-lr-25">
                My Account
              </a>

              <a href="#" className="flex-c-m trans-04 p-lr-25">
                EN
              </a>

              <a href="#" className="flex-c-m trans-04 p-lr-25">
                USD
              </a>
            </div>
          </div>
        </div>

        <div className="wrap-menu-desktop">
          <nav className="limiter-menu-desktop container">
            {/* Logo desktop */}
            <a href="#" className="logo">
              <img src={logo} alt="IMG-LOGO" />
            </a>

            {/* Menu desktop */}
            <div className="menu-desktop">
              <ul className="main-menu">
                <li className="active-menu">
                  <a href="index.html">Home</a>
                  <ul className="sub-menu">
                    <li><a href="index.html">Homepage 1</a></li>
                    <li><a href="home-02.html">Homepage 2</a></li>
                    <li><a href="home-03.html">Homepage 3</a></li>
                  </ul>
                </li>

                <li>
                  <a href="product.html">Shop</a>
                </li>

                <li className="label1" data-label1="hot">
                  <a href="shoping-cart.html">Features</a>
                </li>

                <li>
                  <a href="blog.html">Blog</a>
                </li>

                <li>
                  <a href="about.html">About</a>
                </li>

                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  ));
};

export default Header;

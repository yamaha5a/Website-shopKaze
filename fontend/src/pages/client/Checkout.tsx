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






const CheckoutClient = () =>{
    return(
        <>
          <div className="breadcrumb-option">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb__links">
                        <a href="./index.html"><i className="fa fa-home"></i> Home</a>
                        <span>Shopping cart</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section className="checkout spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h6 className="coupon__link"><span className="icon_tag_alt"></span> <a href="#">Have a coupon?</a> Click
                    here to enter your code.</h6>
                </div>
            </div>
            <form action="#" className="checkout__form">
                <div className="row">
                    <div className="col-lg-8">
                        <h5>Billing detail</h5>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="checkout__form__input">
                                    <p>First Name <span>*</span></p>
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="checkout__form__input">
                                    <p>Last Name <span>*</span></p>
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="checkout__form__input">
                                    <p>Country <span>*</span></p>
                                    <input type="text"/>
                                </div>
                                <div className="checkout__form__input">
                                    <p>Address <span>*</span></p>
                                    <input type="text" placeholder="Street Address"/>
                                    <input type="text" placeholder="Apartment. suite, unite ect ( optinal )"/>
                                </div>
                                <div className="checkout__form__input">
                                    <p>Town/City <span>*</span></p>
                                    <input type="text"/>
                                </div>
                                <div className="checkout__form__input">
                                    <p>Country/State <span>*</span></p>
                                    <input type="text"/>
                                </div>
                                <div className="checkout__form__input">
                                    <p>Postcode/Zip <span>*</span></p>
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="checkout__form__input">
                                    <p>Phone <span>*</span></p>
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="checkout__form__input">
                                    <p>Email <span>*</span></p>
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="checkout__form__checkbox">
                                    <label htmlFor="acc">
                                        Create an acount?
                                        <input type="checkbox" id="acc"/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <p>Create am acount by entering the information below. If you are a returing
                                        customer login at the <br />top of the page</p>
                                    </div>
                                    <div className="checkout__form__input">
                                        <p>Account Password <span>*</span></p>
                                        <input type="text"/>
                                    </div>
                                    <div className="checkout__form__checkbox">
                                        <label htmlFor="note">
                                            Note about your order, e.g, special noe for delivery
                                            <input type="checkbox" id="note"/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="checkout__form__input">
                                        <p>Oder notes <span>*</span></p>
                                        <input type="text"
                                        placeholder="Note about your order, e.g, special noe for delivery"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="checkout__order">
                                <h5>Your order</h5>
                                <div className="checkout__order__product">
                                    <ul>
                                        <li>
                                            <span className="top__text">Product</span>
                                            <span className="top__text__right">Total</span>
                                        </li>
                                        <li>01. Chain buck bag <span>$ 300.0</span></li>
                                        <li>02. Zip-pockets pebbled<br /> tote briefcase <span>$ 170.0</span></li>
                                        <li>03. Black jean <span>$ 170.0</span></li>
                                        <li>04. Cotton shirt <span>$ 110.0</span></li>
                                    </ul>
                                </div>
                                <div className="checkout__order__total">
                                    <ul>
                                        <li>Subtotal <span>$ 750.0</span></li>
                                        <li>Total <span>$ 750.0</span></li>
                                    </ul>
                                </div>
                                <div className="checkout__order__widget">
                                    <label htmlFor="o-acc">
                                        Create an acount?
                                        <input type="checkbox" id="o-acc"/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <p>Create am acount by entering the information below. If you are a returing customer
                                    login at the top of the page.</p>
                                    <label htmlFor="check-payment">
                                        Cheque payment
                                        <input type="checkbox" id="check-payment"/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label htmlFor="paypal">
                                        PayPal
                                        <input type="checkbox" id="paypal"/>
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <button type="submit" className="site-btn">Place oder</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>

        <div className="instagram">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                        <div className="instagram__item set-bg" data-setbg="img/instagram/insta-1.jpg">
                            <div className="instagram__text">
                                <i className="fa fa-instagram"></i>
                                <a href="#">@ ashion_shop</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                        <div className="instagram__item set-bg" data-setbg="img/instagram/insta-2.jpg">
                            <div className="instagram__text">
                                <i className="fa fa-instagram"></i>
                                <a href="#">@ ashion_shop</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                        <div className="instagram__item set-bg" data-setbg="img/instagram/insta-3.jpg">
                            <div className="instagram__text">
                                <i className="fa fa-instagram"></i>
                                <a href="#">@ ashion_shop</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                        <div className="instagram__item set-bg" data-setbg="img/instagram/insta-4.jpg">
                            <div className="instagram__text">
                                <i className="fa fa-instagram"></i>
                                <a href="#">@ ashion_shop</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                        <div className="instagram__item set-bg" data-setbg="img/instagram/insta-5.jpg">
                            <div className="instagram__text">
                                <i className="fa fa-instagram"></i>
                                <a href="#">@ ashion_shop</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                        <div className="instagram__item set-bg" data-setbg="img/instagram/insta-6.jpg">
                            <div className="instagram__text">
                                <i className="fa fa-instagram"></i>
                                <a href="#">@ ashion_shop</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CheckoutClient;
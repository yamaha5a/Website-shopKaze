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



const ShopCart = () =>{
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

    <section className="shop-cart spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="shop__cart__table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="cart__product__item">
                                        <img src="img/shop-cart/cp-1.jpg" alt=""/>
                                        <div className="cart__product__item__title">
                                            <h6>Chain bucket bag</h6>
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="cart__price">$ 150.0</td>
                                    <td className="cart__quantity">
                                        <div className="pro-qty">
                                            <input type="text" value="1"/>
                                        </div>
                                    </td>
                                    <td className="cart__total">$ 300.0</td>
                                    <td className="cart__close"><span className="icon_close"></span></td>
                                </tr>
                                <tr>
                                    <td className="cart__product__item">
                                        <img src="img/shop-cart/cp-2.jpg" alt=""/>
                                        <div className="cart__product__item__title">
                                            <h6>Zip-pockets pebbled tote briefcase</h6>
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="cart__price">$ 170.0</td>
                                    <td className="cart__quantity">
                                        <div className="pro-qty">
                                            <input type="text" value="1"/>
                                        </div>
                                    </td>
                                    <td className="cart__total">$ 170.0</td>
                                    <td className="cart__close"><span className="icon_close"></span></td>
                                </tr>
                                <tr>
                                    <td className="cart__product__item">
                                        <img src="img/shop-cart/cp-3.jpg" alt=""/>
                                        <div className="cart__product__item__title">
                                            <h6>Black jean</h6>
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="cart__price">$ 85.0</td>
                                    <td className="cart__quantity">
                                        <div className="pro-qty">
                                            <input type="text" value="1"/>
                                        </div>
                                    </td>
                                    <td className="cart__total">$ 170.0</td>
                                    <td className="cart__close"><span className="icon_close"></span></td>
                                </tr>
                                <tr>
                                    <td className="cart__product__item">
                                        <img src="img/shop-cart/cp-4.jpg" alt=""/>
                                        <div className="cart__product__item__title">
                                            <h6>Cotton Shirt</h6>
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="cart__price">$ 55.0</td>
                                    <td className="cart__quantity">
                                        <div className="pro-qty">
                                            <input type="text" value="1"/>
                                        </div>
                                    </td>
                                    <td className="cart__total">$ 110.0</td>
                                    <td className="cart__close"><span className="icon_close"></span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="cart__btn">
                        <a href="#">Continue Shopping</a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="cart__btn update__btn">
                        <a href="#"><span className="icon_loading"></span> Update cart</a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="discount__content">
                        <h6>Discount codes</h6>
                        <form action="#">
                            <input type="text" placeholder="Enter your coupon code"/>
                            <button type="submit" className="site-btn">Apply</button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-2">
                    <div className="cart__total__procced">
                        <h6>Cart total</h6>
                        <ul>
                            <li>Subtotal <span>$ 750.0</span></li>
                            <li>Total <span>$ 750.0</span></li>
                        </ul>
                        <a href="#" className="primary-btn">Proceed to checkout</a>
                    </div>
                </div>
            </div>
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

export default ShopCart
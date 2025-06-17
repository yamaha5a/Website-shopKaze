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
import bannerImg from '../../assets/client/img/banner/banner-1.jpg';
import banner2 from '../../assets/client/img/discount.jpg';

declare global {
    interface Window {
        $: any;
    }
}

const Homeclient = () => {
    useEffect(() => {
        window.$('.banner__slider').owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            dots: false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            smartSpeed: 1200,
            autoHeight: false,
            autoplay: true,
            mouseDrag: false
        });
    }, []);

    return (
        <>  
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="section-title">
                                <h4>New product</h4>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                            <ul className="filter__controls">
                                <li className="active" data-filter="*">All</li>
                                <li data-filter=".women">Women's</li>
                                <li data-filter=".men">Men's</li>
                                <li data-filter=".kid">Kid's</li>
                                <li data-filter=".accessories">Accessories</li>
                                <li data-filter=".cosmetic">Cosmetics</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row property__gallery">
                        <div className="col-lg-3 col-md-4 col-sm-6 mix women">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="img/product/product-1.jpg">
                                    <div className="label new">New</div>
                                    <ul className="product__hover">
                                        <li><a href="img/product/product-1.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                                        <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                        <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Buttons tweed blazer</a></h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mix men">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="img/product/product-2.jpg">
                                    <ul className="product__hover">
                                        <li><a href="img/product/product-2.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                                        <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                        <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Flowy striped skirt</a></h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 49.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mix accessories">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="img/product/product-3.jpg">
                                    <div className="label stockout">out of stock</div>
                                    <ul className="product__hover">
                                        <li><a href="img/product/product-3.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                                        <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                        <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Cotton T-Shirt</a></h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mix cosmetic">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="img/product/product-4.jpg">
                                    <ul className="product__hover">
                                        <li><a href="img/product/product-4.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                                        <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                        <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Slim striped pocket shirt</a></h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mix kid">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="img/product/product-5.jpg">
                                    <ul className="product__hover">
                                        <li><a href="img/product/product-5.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                                        <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                        <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Fit micro corduroy shirt</a></h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
                            <div className="product__item sale">
                                <div className="product__item__pic set-bg" data-setbg="img/product/product-6.jpg">
                                    <div className="label sale">Sale</div>
                                    <ul className="product__hover">
                                        <li><a href="img/product/product-6.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                                        <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                        <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Tropical Kimono</a></h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 49.0 <span>$ 59.0</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="img/product/product-7.jpg">
                                    <ul className="product__hover">
                                        <li><a href="img/product/product-7.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                                        <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                        <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Contrasting sunglasses</a></h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
                            <div className="product__item sale">
                                <div className="product__item__pic set-bg" data-setbg="img/product/product-8.jpg">
                                    <div className="label">Sale</div>
                                    <ul className="product__hover">
                                        <li><a href="img/product/product-8.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                                        <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                        <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Water resistant backpack</a></h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 49.0 <span>$ 59.0</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="banner set-bg" style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-8 m-auto">
                            <div className="banner__slider owl-carousel">
                                <div className="banner__item">
                                    <div className="banner__text">
                                        <span>The Chloe Collection</span>
                                        <h1>The Project Jacket</h1>
                                        <a href="#">Shop now</a>
                                    </div>
                                </div>
                                <div className="banner__item">
                                    <div className="banner__text">
                                        <span>The Chloe Collection</span>
                                        <h1>The Project Jacket</h1>
                                        <a href="#">Shop now</a>
                                    </div>
                                </div>
                                <div className="banner__item">
                                    <div className="banner__text">
                                        <span>The Chloe Collection</span>
                                        <h1>The Project Jacket</h1>
                                        <a href="#">Shop now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="trend spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="trend__content">
                                <div className="section-title">
                                    <h4>Hot Trend</h4>
                                </div>
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src="img/trend/ht-1.jpg" alt="" />
                                    </div>

                                    <div className="trend__item__text">
                                        <h6>Chain bucket bag</h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">$ 59.0</div>
                                    </div>
                                </div>
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src="img/trend/ht-2.jpg" alt="" />
                                    </div>

                                    <div className="trend__item__text">
                                        <h6>Pendant earrings</h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">$ 59.0</div>
                                    </div>
                                </div>
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src="img/trend/ht-2.jpg" alt="" />
                                    </div>

                                    <div className="trend__item__text">
                                        <h6>Cotton T-Shirt</h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">$ 59.0</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="trend__content">
                                <div className="section-title">
                                    <h4>Best seller</h4>
                                </div>
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src="img/trend/ht-3.jpg" alt="" />
                                    </div>

                                    <div className="trend__item__text">
                                        <h6>Cotton T-Shirt</h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">$ 59.0</div>
                                    </div>
                                </div>
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src="img/trend/bs-2.jpg" alt="" />
                                    </div>

                                    <div className="trend__item__text">
                                        <h6>Zip-pockets pebbled tote <br />briefcase</h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">$ 59.0</div>
                                    </div>
                                </div>
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src="img/trend/bs-3.jpg" alt="" />
                                    </div>

                                    <div className="trend__item__text">
                                        <h6>Round leather bag</h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">$ 59.0</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="trend__content">
                                <div className="section-title">
                                    <h4>Feature</h4>
                                </div>
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src="img/trend/f-1.jpg" alt="" />
                                    </div>

                                    <div className="trend__item__text">
                                        <h6>Bow wrap skirt</h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">$ 59.0</div>
                                    </div>
                                </div>
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src="img/trend/f-2.jpg" alt="" />
                                    </div>

                                    <div className="trend__item__text">
                                        <h6>Metallic earrings</h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">$ 59.0</div>
                                    </div>
                                </div>
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src="img/trend/f-3.jpg" alt="" />
                                    </div>

                                    <div className="trend__item__text">
                                        <h6>Flap cross-body bag</h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">$ 59.0</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="discount">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 p-0">
                            <div className="discount__pic">
                                <img src={banner2} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 p-0">
                            <div className="discount__text">
                                <div className="discount__text__title">
                                    <span>Discount</span>
                                    <h2>Summer 2025</h2>
                                    <h5><span>Sale</span> 50%</h5>
                                </div>
                                <div className="discount__countdown" id="countdown-time">
                                    <div className="countdown__item">
                                        <span>22</span>
                                        <p>Days</p>
                                    </div>
                                    <div className="countdown__item">
                                        <span>18</span>
                                        <p>Hour</p>
                                    </div>
                                    <div className="countdown__item">
                                        <span>46</span>
                                        <p>Min</p>
                                    </div>
                                    <div className="countdown__item">
                                        <span>05</span>
                                        <p>Sec</p>
                                    </div>
                                </div>
                                <a href="#">Shop now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="services spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="services__item">
                                <i className="fa fa-car"></i>
                                <h6>Free Shipping</h6>
                                <p>For all oder over $99</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="services__item">
                                <i className="fa fa-money"></i>
                                <h6>Money Back Guarantee</h6>
                                <p>If good have Problems</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="services__item">
                                <i className="fa fa-support"></i>
                                <h6>Online Support 24/7</h6>
                                <p>Dedicated support</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="services__item">
                                <i className="fa fa-headphones"></i>
                                <h6>Payment Secure</h6>
                                <p>100% secure payment</p>
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
    );
};

export default Homeclient;
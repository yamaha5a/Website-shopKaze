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

import l1 from '../../assets/client/img/categories/category-1.jpg'



const Bannerclient = () => {
  return (
    
    <section className="categories">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 p-0">
            <div
              className="categories__item categories__large__item"
              style={{ backgroundImage: `url(${l1})` }}
            >
              <div className="categories__text">
                <h1>Women’s fashion</h1>
                <p>
                  Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Pendisse ultrices
                  gravida.
                </p>
                <a href="#">Shop now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                <div
                  className="categories__item"
                  style={{
                    backgroundImage: `url(img/categories/category-2.jpg)`,
                  }}
                >
                  <div className="categories__text">
                    <h4>Men’s fashion</h4>
                    <p>358 items</p>
                    <a href="#">Shop now</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                <div
                  className="categories__item"
                  style={{
                    backgroundImage: `url(img/categories/category-3.jpg)`,
                  }}
                >
                  <div className="categories__text">
                    <h4>Kid’s fashion</h4>
                    <p>273 items</p>
                    <a href="#">Shop now</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                <div
                  className="categories__item"
                  style={{
                    backgroundImage: `url(img/categories/category-4.jpg)`,
                  }}
                >
                  <div className="categories__text">
                    <h4>Cosmetics</h4>
                    <p>159 items</p>
                    <a href="#">Shop now</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                <div
                  className="categories__item"
                  style={{
                    backgroundImage: `url(img/categories/category-5.jpg)`,
                  }}
                >
                  <div className="categories__text">
                    <h4>Accessories</h4>
                    <p>792 items</p>
                    <a href="#">Shop now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bannerclient;
import React, { Component } from "react";

class ProductDetail extends Component {
  render() {
    return (
      <div>
        <header className="top-header sec-strt">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-3 col-12">
                {" "}
                <img
                  src="images/logo.png"
                  alt=""
                  className="img-fluid logo"
                />{" "}
              </div>
              <div className="col-lg-8 col-md-8 col-sm-9 col-12">
                <div className="search-wrapper">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Quick Search"
                  />
                  <button type="submit" className="search-btn" />
                </div>
                <div className="tolfree-wrapper">
                  <p>Toll Free: +92 3 336662</p>
                  <ul>
                    <li>
                      <a href="#">Login </a>
                    </li>
                    <li>
                      <a href="#">My Account </a>
                    </li>
                    <li>
                      <a href="#">Cart</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="nav-wrapper sec-strt">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                {" "}
                <span className="navbar-toggler-icon" />{" "}
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    {" "}
                    <a className="nav-link" href="#">
                      Home <span className="sr-only">(current)</span>
                    </a>{" "}
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="#">
                      Features
                    </a>{" "}
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="#">
                      Vegitables
                    </a>{" "}
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="#">
                      fruits
                    </a>{" "}
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="#">
                      spices
                    </a>{" "}
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="#">
                      Drinks
                    </a>{" "}
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="#">
                      Something
                    </a>{" "}
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="#">
                      Apples
                    </a>{" "}
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="#">
                      phones
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="catnav-wrapper sec-strt">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav1"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                {" "}
                Categories Menu{" "}
              </button>
              <div className="collapse navbar-collapse" id="navbarNav1">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="#">
                      Best Sales <span className="sr-only">(current)</span>
                    </a>{" "}
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="#">
                      Stock Clearance{" "}
                    </a>{" "}
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="#">
                      Sasta Bazar{" "}
                    </a>{" "}
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="#">
                      Ramadan Supplies{" "}
                    </a>{" "}
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="#">
                      Party Supplies{" "}
                    </a>{" "}
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="#">
                      Instant Sahoor
                    </a>{" "}
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="#">
                      Instant Iftar
                    </a>{" "}
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="#">
                      Apples
                    </a>{" "}
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="#">
                      more categories{" "}
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <main className="sec-strt">
          <div className="Product-detail-page sec-strt">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-0 col-0">
                  <div className="featured-categories-holder">
                    <div className="cross-holder">X</div>
                    <h3>Featured</h3>
                    <ul>
                      <li>
                        <a href="#" className="active">
                          Sugar
                        </a>
                      </li>
                      <li>
                        <a href="#">Flour</a>
                      </li>
                      <li>
                        <a href="#">Chocolates</a>
                      </li>
                      <li>
                        <a href="#">Batteries/Power</a>
                      </li>
                      <li>
                        <a href="#">Organic Juice</a>
                      </li>
                      <li>
                        <a href="#">Watermelon</a>
                      </li>
                      <li>
                        <a href="#">Kiwi</a>
                      </li>
                      <li>
                        <a href="#">Pastery</a>
                      </li>
                      <li>
                        <a href="#">Ciggarets</a>
                      </li>
                      <li>
                        <a href="#">Drinks</a>
                      </li>
                      <li>
                        <a href="#">Drugs</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-12 col-12">
                  <div className="featured-triger">Featured Categories</div>
                  <div className="productimg-detail-wrapper">
                    <div className="product-title-holder">
                      <h1>Beautiful Miracle Aloo</h1> <span>1 kilo Pack</span>{" "}
                    </div>
                    <div className="row">
                      <div className="col-lg-8 col-md-12 col-12">
                        <div className="thumbnail-holder">
                          <ul>
                            <li>
                              <img src="images/thumb1.png" alt="" />
                            </li>
                            <li>
                              <img src="images/thumb2.png" alt="" />
                            </li>
                            <li>
                              <img src="images/thumb3.png" alt="" />
                            </li>
                          </ul>
                        </div>
                        <div className="detailed-imge-holder">
                          {" "}
                          <img src="images/detail-product.png" alt="" />{" "}
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-12 col-12">
                        <div className="product-description-wrapper sec-strt">
                          <p>
                            shadi mein rukawat, karobar ka na hona, bairoon e
                            mulk safar is aloo se ap k sare masly hal ho jayn gy
                            Beautiful miracle aloo # 576349861
                            <br />
                            <br />
                            It's past time for NextDay delivery tomorrow. Order
                            now &amp; get it Sat, May 2.
                            <br /> Free 2-day delivery on $35+ orders Arrives by
                            Tue, May 5
                            <br />
                            <br />
                            More delivery &amp; pickup options Sold &amp;
                            shipped byWalmartReturn policy
                          </p>
                          <div className="detail-price-holder">
                            <h3>RS 120</h3>
                            <div className="quentity-holder">
                              <button type="button" id="sub" className="sub">
                                -
                              </button>
                              <input
                                type="number"
                                id={1}
                                defaultValue={1}
                                min={1}
                                max={3}
                              />
                              <button type="button" id="add" className="add">
                                +
                              </button>
                            </div>
                          </div>
                          <div className="cart-button-holder sec-strt">
                            {" "}
                            <a href="#" className="detail-cart-btn">
                              ADD To Cart
                            </a>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="customer-also-baught sec-strt">
                    <h3>CUSTOMER ALSO BOUGHT</h3>
                    <div className="customer-slider owl-carousel">
                      <div className="small-item">
                        <div className="inner-wrapper">
                          <div className="img-holder">
                            {" "}
                            <img src="images/baught1.png" alt="" />{" "}
                          </div>
                          <h2>Tamater</h2> <span>5 kilo pack</span>
                          <div className="price-holder">
                            <h3>RS 620</h3>
                            <div className="quentity-holder">
                              <button type="button" id="sub1" className="sub">
                                -
                              </button>
                              <input
                                type="number"
                                id={1}
                                defaultValue={1}
                                min={1}
                                max={3}
                              />
                              <button type="button" id="add1" className="add">
                                +
                              </button>
                            </div>
                          </div>
                        </div>{" "}
                        <a href="#" className="baught-to-cart">
                          add to cart
                        </a>{" "}
                      </div>
                      <div className="small-item">
                        <div className="inner-wrapper">
                          <div className="img-holder">
                            {" "}
                            <img src="images/baught2.png" alt="" />{" "}
                          </div>
                          <h2>Tamater</h2> <span>5 kilo pack</span>
                          <div className="price-holder">
                            <h3>RS 620</h3>
                            <div className="quentity-holder">
                              <button type="button" id="sub1" className="sub">
                                -
                              </button>
                              <input
                                type="number"
                                id={1}
                                defaultValue={1}
                                min={1}
                                max={3}
                              />
                              <button type="button" id="add1" className="add">
                                +
                              </button>
                            </div>
                          </div>
                        </div>{" "}
                        <a href="#" className="baught-to-cart">
                          add to cart
                        </a>{" "}
                      </div>
                      <div className="small-item">
                        <div className="inner-wrapper">
                          <div className="img-holder">
                            {" "}
                            <img src="images/baught3.png" alt="" />{" "}
                          </div>
                          <h2>Tamater</h2> <span>5 kilo pack</span>
                          <div className="price-holder">
                            <h3>RS 620</h3>
                            <div className="quentity-holder">
                              <button type="button" id="sub1" className="sub">
                                -
                              </button>
                              <input
                                type="number"
                                id={1}
                                defaultValue={1}
                                min={1}
                                max={3}
                              />
                              <button type="button" id="add1" className="add">
                                +
                              </button>
                            </div>
                          </div>
                        </div>{" "}
                        <a href="#" className="baught-to-cart">
                          add to cart
                        </a>{" "}
                      </div>
                      <div className="small-item">
                        <div className="inner-wrapper">
                          <div className="img-holder">
                            {" "}
                            <img src="images/baught4.png" alt="" />{" "}
                          </div>
                          <h2>Tamater</h2> <span>5 kilo pack</span>
                          <div className="price-holder">
                            <h3>RS 620</h3>
                            <div className="quentity-holder">
                              <button type="button" id="sub1" className="sub">
                                -
                              </button>
                              <input
                                type="number"
                                id={1}
                                defaultValue={1}
                                min={1}
                                max={3}
                              />
                              <button type="button" id="add1" className="add">
                                +
                              </button>
                            </div>
                          </div>
                        </div>{" "}
                        <a href="#" className="baught-to-cart">
                          add to cart
                        </a>{" "}
                      </div>
                      <div className="small-item">
                        <div className="inner-wrapper">
                          <div className="img-holder">
                            {" "}
                            <img src="images/baught5.png" alt="" />{" "}
                          </div>
                          <h2>Tamater</h2> <span>5 kilo pack</span>
                          <div className="price-holder">
                            <h3>RS 620</h3>
                            <div className="quentity-holder">
                              <button type="button" id="sub1" className="sub">
                                -
                              </button>
                              <input
                                type="number"
                                id={1}
                                defaultValue={1}
                                min={1}
                                max={3}
                              />
                              <button type="button" id="add1" className="add">
                                +
                              </button>
                            </div>
                          </div>
                        </div>{" "}
                        <a href="#" className="baught-to-cart">
                          add to cart
                        </a>{" "}
                      </div>
                      <div className="small-item">
                        <div className="inner-wrapper">
                          <div className="img-holder">
                            {" "}
                            <img src="images/sponser1.png" alt="" />{" "}
                          </div>
                          <h2>Tamater</h2> <span>5 kilo pack</span>
                          <div className="price-holder">
                            <h3>RS 620</h3>
                            <div className="quentity-holder">
                              <button type="button" id="sub1" className="sub">
                                -
                              </button>
                              <input
                                type="number"
                                id={1}
                                defaultValue={1}
                                min={1}
                                max={3}
                              />
                              <button type="button" id="add1" className="add">
                                +
                              </button>
                            </div>
                          </div>
                        </div>{" "}
                        <a href="#" className="baught-to-cart">
                          add to cart
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="product-details-tabs-wrapper sec-strt">
                    {/* Nav pills */}
                    <ul className="nav nav-pills" role="tablist">
                      <li className="nav-item">
                        {" "}
                        <a
                          className="nav-link active"
                          data-toggle="pill"
                          href="#home"
                        >
                          ABOUT THIS PRODUCT
                        </a>{" "}
                      </li>
                      <li className="nav-item">
                        {" "}
                        <a
                          className="nav-link"
                          data-toggle="pill"
                          href="#menu1"
                        >
                          PORDUCT SPECIFATION
                        </a>{" "}
                      </li>
                      <li className="nav-item">
                        {" "}
                        <a
                          className="nav-link"
                          data-toggle="pill"
                          href="#menu2"
                        >
                          DIRECTION OF USE
                        </a>{" "}
                      </li>
                      <li className="nav-item">
                        {" "}
                        <a
                          className="nav-link"
                          data-toggle="pill"
                          href="#menu3"
                        >
                          INGREDIENTS
                        </a>{" "}
                      </li>
                    </ul>
                    {/* Tab panes */}
                    <div className="tab-content">
                      <div id="home" className="container tab-pane active">
                        <div className="sponsered-items sec-strt">
                          <h3>SPONSORED ITEMS</h3>
                          <ul>
                            <li>
                              <div className="small-item">
                                <div className="inner-wrapper">
                                  <div className="img-holder">
                                    {" "}
                                    <img src="images/baught1.png" alt="" />{" "}
                                  </div>
                                  <h2>Tamater</h2> <span>5 kilo pack</span>
                                  <div className="price-holder">
                                    <h3>RS 620</h3>
                                    <div className="quentity-holder">
                                      <button
                                        type="button"
                                        id="sub1"
                                        className="sub"
                                      >
                                        -
                                      </button>
                                      <input
                                        type="number"
                                        id={1}
                                        defaultValue={1}
                                        min={1}
                                        max={3}
                                      />
                                      <button
                                        type="button"
                                        id="add1"
                                        className="add"
                                      >
                                        +
                                      </button>
                                    </div>
                                  </div>
                                </div>{" "}
                                <a href="#" className="baught-to-cart">
                                  add to cart
                                </a>{" "}
                              </div>
                            </li>
                            <li>
                              <div className="small-item">
                                <div className="inner-wrapper">
                                  <div className="img-holder">
                                    {" "}
                                    <img
                                      src="images/sponser1.png"
                                      alt=""
                                    />{" "}
                                  </div>
                                  <h2>Tamater</h2> <span>5 kilo pack</span>
                                  <div className="price-holder">
                                    <h3>RS 620</h3>
                                    <div className="quentity-holder">
                                      <button
                                        type="button"
                                        id="sub1"
                                        className="sub"
                                      >
                                        -
                                      </button>
                                      <input
                                        type="number"
                                        id={1}
                                        defaultValue={1}
                                        min={1}
                                        max={3}
                                      />
                                      <button
                                        type="button"
                                        id="add1"
                                        className="add"
                                      >
                                        +
                                      </button>
                                    </div>
                                  </div>
                                </div>{" "}
                                <a href="#" className="baught-to-cart">
                                  add to cart
                                </a>{" "}
                              </div>
                            </li>
                            <li>
                              <div className="small-item">
                                <div className="inner-wrapper">
                                  <div className="img-holder">
                                    {" "}
                                    <img src="images/baught2.png" alt="" />{" "}
                                  </div>
                                  <h2>Tamater</h2> <span>5 kilo pack</span>
                                  <div className="price-holder">
                                    <h3>RS 620</h3>
                                    <div className="quentity-holder">
                                      <button
                                        type="button"
                                        id="sub1"
                                        className="sub"
                                      >
                                        -
                                      </button>
                                      <input
                                        type="number"
                                        id={1}
                                        defaultValue={1}
                                        min={1}
                                        max={3}
                                      />
                                      <button
                                        type="button"
                                        id="add1"
                                        className="add"
                                      >
                                        +
                                      </button>
                                    </div>
                                  </div>
                                </div>{" "}
                                <a href="#" className="baught-to-cart">
                                  add to cart
                                </a>{" "}
                              </div>
                            </li>
                            <li>
                              <div className="small-item">
                                <div className="inner-wrapper">
                                  <div className="img-holder">
                                    {" "}
                                    <img src="images/baught4.png" alt="" />{" "}
                                  </div>
                                  <h2>Tamater</h2> <span>5 kilo pack</span>
                                  <div className="price-holder">
                                    <h3>RS 620</h3>
                                    <div className="quentity-holder">
                                      <button
                                        type="button"
                                        id="sub1"
                                        className="sub"
                                      >
                                        -
                                      </button>
                                      <input
                                        type="number"
                                        id={1}
                                        defaultValue={1}
                                        min={1}
                                        max={3}
                                      />
                                      <button
                                        type="button"
                                        id="add1"
                                        className="add"
                                      >
                                        +
                                      </button>
                                    </div>
                                  </div>
                                </div>{" "}
                                <a href="#" className="baught-to-cart">
                                  add to cart
                                </a>{" "}
                              </div>
                            </li>
                            <li>
                              <div className="small-item">
                                <div className="inner-wrapper">
                                  <div className="img-holder">
                                    {" "}
                                    <img src="images/baught3.png" alt="" />{" "}
                                  </div>
                                  <h2>Tamater</h2> <span>5 kilo pack</span>
                                  <div className="price-holder">
                                    <h3>RS 620</h3>
                                    <div className="quentity-holder">
                                      <button
                                        type="button"
                                        id="sub1"
                                        className="sub"
                                      >
                                        -
                                      </button>
                                      <input
                                        type="number"
                                        id={1}
                                        defaultValue={1}
                                        min={1}
                                        max={3}
                                      />
                                      <button
                                        type="button"
                                        id="add1"
                                        className="add"
                                      >
                                        +
                                      </button>
                                    </div>
                                  </div>
                                </div>{" "}
                                <a href="#" className="baught-to-cart">
                                  add to cart
                                </a>{" "}
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div id="menu1" className="container tab-pane fade">
                        <br />
                        <h3>Menu 1</h3>
                        <p>
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo
                          consequat.
                        </p>
                      </div>
                      <div id="menu2" className="container tab-pane fade">
                        <br />
                        <h3>Menu 2</h3>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam.
                        </p>
                      </div>
                      <div id="menu3" className="container tab-pane fade">
                        <br />
                        <h3>Menu 2</h3>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rating-wrapper sec-strt">
                    <div className="rating-counter-left">
                      <div className="avg-rate"> 4.8 </div>
                      <div className="rate-strs">
                        <div className="rating-stars text-center">
                          <ul id="stars">
                            <li
                              className="star selected"
                              title="Poor"
                              data-value={1}
                            >
                              {" "}
                              <i className="fa fa-star fa-fw" />{" "}
                            </li>
                            <li
                              className="star selected"
                              title="Fair"
                              data-value={2}
                            >
                              {" "}
                              <i className="fa fa-star fa-fw" />{" "}
                            </li>
                            <li
                              className="star selected"
                              title="Good"
                              data-value={3}
                            >
                              {" "}
                              <i className="fa fa-star fa-fw" />{" "}
                            </li>
                            <li
                              className="star selected"
                              title="Excellent"
                              data-value={4}
                            >
                              {" "}
                              <i className="fa fa-star fa-fw" />{" "}
                            </li>
                            <li className="star" title="WOW!!!" data-value={5}>
                              {" "}
                              <i className="fa fa-star fa-fw" />{" "}
                            </li>
                          </ul>
                        </div>{" "}
                        <span>12 Reviews</span>{" "}
                      </div>
                      <div className="tags-wrapper sec-strt">
                        <ul>
                          <li>Smell</li>
                          <li>Packing</li>
                          <li>Delivery</li>
                        </ul>
                      </div>
                    </div>
                    <div className="rating-bars-right">
                      <div className="rating-bar-title">
                        <span>5 Stars</span>
                        <div className="progress">
                          <div
                            className="progress-bar bg-warning progress-bar-striped"
                            style={{ width: "80%" }}
                          />
                        </div>
                      </div>
                      <div className="rating-bar-title">
                        <span>4 Stars</span>
                        <div className="progress">
                          <div
                            className="progress-bar bg-warning progress-bar-striped"
                            style={{ width: "70%" }}
                          />
                        </div>
                      </div>
                      <div className="rating-bar-title">
                        <span>3 Stars</span>
                        <div className="progress">
                          <div
                            className="progress-bar bg-warning progress-bar-striped"
                            style={{ width: "50%" }}
                          />
                        </div>
                      </div>
                      <div className="rating-bar-title">
                        <span>2 Stars</span>
                        <div className="progress">
                          <div
                            className="progress-bar bg-warning progress-bar-striped"
                            style={{ width: "30%" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="rating-reviews-wrapper sec-strt">
                      <ul>
                        <li className="comments-list">
                          <div className="rating-stars text-center">
                            <ul id="stars">
                              <li
                                className="star selected"
                                title="Poor"
                                data-value={1}
                              >
                                {" "}
                                <i className="fa fa-star fa-fw" />{" "}
                              </li>
                              <li
                                className="star selected"
                                title="Fair"
                                data-value={2}
                              >
                                {" "}
                                <i className="fa fa-star fa-fw" />{" "}
                              </li>
                              <li
                                className="star selected"
                                title="Good"
                                data-value={3}
                              >
                                {" "}
                                <i className="fa fa-star fa-fw" />{" "}
                              </li>
                              <li
                                className="star selected"
                                title="Excellent"
                                data-value={4}
                              >
                                {" "}
                                <i className="fa fa-star fa-fw" />{" "}
                              </li>
                              <li
                                className="star selected"
                                title="WOW!!!"
                                data-value={5}
                              >
                                {" "}
                                <i className="fa fa-star fa-fw" />{" "}
                              </li>
                            </ul>
                          </div>{" "}
                          <strong className="sec-strt">Perfect serum</strong>
                          <p>
                            is aloo ne to meri zindagi badal di, is aloo se
                            pehly meri zindagi bohot bay rang aur pheeki pheeki
                            thi. phir mujhy mere aik dost ne zyada alookhany ka
                            mashwara dia yakeen karain jab se maine yeh aloo
                            khany shuru kiey hain, har taraf bahar hi bahar hai
                          </p>
                        </li>
                        <li className="comments-list">
                          <div className="rating-stars text-center">
                            <ul id="stars">
                              <li
                                className="star selected"
                                title="Poor"
                                data-value={1}
                              >
                                {" "}
                                <i className="fa fa-star fa-fw" />{" "}
                              </li>
                              <li
                                className="star selected"
                                title="Fair"
                                data-value={2}
                              >
                                {" "}
                                <i className="fa fa-star fa-fw" />{" "}
                              </li>
                              <li
                                className="star selected"
                                title="Good"
                                data-value={3}
                              >
                                {" "}
                                <i className="fa fa-star fa-fw" />{" "}
                              </li>
                              <li
                                className="star selected"
                                title="Excellent"
                                data-value={4}
                              >
                                {" "}
                                <i className="fa fa-star fa-fw" />{" "}
                              </li>
                              <li
                                className="star selected"
                                title="WOW!!!"
                                data-value={5}
                              >
                                {" "}
                                <i className="fa fa-star fa-fw" />{" "}
                              </li>
                            </ul>
                          </div>{" "}
                          <strong className="sec-strt">Perfect serum</strong>
                          <p>
                            is aloo ne to meri zindagi badal di, is aloo se
                            pehly meri zindagi bohot bay rang aur pheeki pheeki
                            thi. phir mujhy mere aik dost ne zyada alookhany ka
                            mashwara dia yakeen karain jab se maine yeh aloo
                            khany shuru kiey hain, har taraf bahar hi bahar hai
                          </p>
                        </li>
                        <li className="comments-list">
                          <div className="rating-stars text-center">
                            <ul id="stars">
                              <li
                                className="star selected"
                                title="Poor"
                                data-value={1}
                              >
                                {" "}
                                <i className="fa fa-star fa-fw" />{" "}
                              </li>
                              <li
                                className="star selected"
                                title="Fair"
                                data-value={2}
                              >
                                {" "}
                                <i className="fa fa-star fa-fw" />{" "}
                              </li>
                              <li
                                className="star selected"
                                title="Good"
                                data-value={3}
                              >
                                {" "}
                                <i className="fa fa-star fa-fw" />{" "}
                              </li>
                              <li
                                className="star selected"
                                title="Excellent"
                                data-value={4}
                              >
                                {" "}
                                <i className="fa fa-star fa-fw" />{" "}
                              </li>
                              <li
                                className="star selected"
                                title="WOW!!!"
                                data-value={5}
                              >
                                {" "}
                                <i className="fa fa-star fa-fw" />{" "}
                              </li>
                            </ul>
                          </div>{" "}
                          <strong className="sec-strt">Perfect serum</strong>
                          <p>
                            is aloo ne to meri zindagi badal di, is aloo se
                            pehly meri zindagi bohot bay rang aur pheeki pheeki
                            thi. phir mujhy mere aik dost ne zyada alookhany ka
                            mashwara dia yakeen karain jab se maine yeh aloo
                            khany shuru kiey hain, har taraf bahar hi bahar hai
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="footer-wrapper sec-strt">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                <ul className="footer-links">
                  <li>
                    <a href="#">Here to help</a>
                  </li>
                  <li>
                    <a href="#">Help &amp; FAQs</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">About Falcon</a>
                  </li>
                  <li>
                    <a href="#">Store vacancies</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                <ul className="footer-links">
                  <li>
                    <a href="#">Here to help</a>
                  </li>
                  <li>
                    <a href="#">Help &amp; FAQs</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">About Falcon</a>
                  </li>
                  <li>
                    <a href="#">Store vacancies</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                <ul className="footer-links">
                  <li>
                    <a href="#">Here to help</a>
                  </li>
                  <li>
                    <a href="#">Help &amp; FAQs</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">About Falcon</a>
                  </li>
                  <li>
                    <a href="#">Store vacancies</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                <ul className="footer-links">
                  <li>
                    <a href="#">Here to help</a>
                  </li>
                  <li>
                    <a href="#">Help &amp; FAQs</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">About Falcon</a>
                  </li>
                </ul>
                <div className="social-holder sec-strt">
                  <ul>
                    <li>
                      <a href="#">
                        <img
                          src="images/twitter.png"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="images/facebook.png"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="images/youtube.png"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="copywrites-wrapper sec-strt">
            <p>Copyright © 2014 Photonics. All rights reserved.</p>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Store Policies</a>
              </li>
              <li>
                <a href="#">Driving Directions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default ProductDetail;

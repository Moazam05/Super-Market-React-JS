import React, { Component } from "react";

class Cart extends Component {
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
          <div className="featured-wrapper sec-strt">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-0 col-0">
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
                <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                  <div className="featured-triger">Featured Categories</div>
                  <div className="cart-wrapper sec-strt">
                    <h3>My Cart</h3>
                    <ul className="cart-list">
                      <li>
                        <div className="img-holder">
                          {" "}
                          <img
                            src="images/cart1.png"
                            alt=""
                            className="img-fluid"
                          />{" "}
                        </div>
                        <div className="info-holder">
                          <h2>White Sugar</h2> <span>3 kilo pack</span>
                          <h4>Rs 120</h4>{" "}
                        </div>
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
                      </li>
                      <li>
                        <div className="img-holder">
                          {" "}
                          <img
                            src="images/cart2.png"
                            alt=""
                            className="img-fluid"
                          />{" "}
                        </div>
                        <div className="info-holder">
                          <h2>White Sugar</h2> <span>3 kilo pack</span>
                          <h4>Rs 120</h4>{" "}
                        </div>
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
                      </li>
                      <li>
                        <div className="img-holder">
                          {" "}
                          <img
                            src="images/cart1.png"
                            alt=""
                            className="img-fluid"
                          />{" "}
                        </div>
                        <div className="info-holder">
                          <h2>White Sugar</h2> <span>3 kilo pack</span>
                          <h4>Rs 120</h4>{" "}
                        </div>
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
                      </li>
                    </ul>
                    <div className="checkout-button-holder">
                      <button type="submit" className="checkout-btn">
                        Checkout
                      </button>
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

export default Cart;

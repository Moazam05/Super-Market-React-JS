import React, { Component } from "react";

class StoreLocator extends Component {
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
          <div className="slider-wrapper sec-strt">
            <div className="container">
              <div id="demo" className="carousel slide" data-ride="carousel">
                {/* Indicators */}
                <ul className="carousel-indicators">
                  <li
                    data-target="#demo"
                    data-slide-to={0}
                    className="active"
                  />
                  <li data-target="#demo" data-slide-to={1} />
                  <li data-target="#demo" data-slide-to={2} />
                </ul>
                {/* The slideshow */}
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="slider-caption-holder">
                          <h2>
                            Massive sale on Ghee <br />
                            and Oil
                          </h2>
                          <p>and other itmes on sale</p>
                          <div className="slider-buttons-holder">
                            <a href="#" className="fill-button">
                              Order Now
                            </a>
                            <a href="#" className="empty-btn">
                              Learn More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <img
                          src="images/slider-img.png"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    {" "}
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="slider-caption-holder">
                          <h2>
                            Massive sale on Ghee <br />
                            and Oil
                          </h2>
                          <p>and other itmes on sale</p>
                          <div className="slider-buttons-holder">
                            <a href="#" className="fill-button">
                              Order Now
                            </a>
                            <a href="#" className="empty-btn">
                              Learn More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <img
                          src="images/slider-img.png"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>{" "}
                  </div>
                  <div className="carousel-item">
                    {" "}
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="slider-caption-holder">
                          <h2>
                            Massive sale on Ghee <br />
                            and Oil
                          </h2>
                          <p>and other itmes on sale</p>
                          <div className="slider-buttons-holder">
                            <a href="#" className="fill-button">
                              Order Now
                            </a>
                            <a href="#" className="empty-btn">
                              Learn More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <img
                          src="images/slider-img.png"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>{" "}
                  </div>
                </div>
                {/* Left and right controls */}
                <a
                  className="carousel-control-prev"
                  href="#demo"
                  data-slide="prev"
                >
                  {" "}
                  <span className="carousel-control-prev-icon" />{" "}
                </a>
                <a
                  className="carousel-control-next"
                  href="#demo"
                  data-slide="next"
                >
                  {" "}
                  <span className="carousel-control-next-icon" />{" "}
                </a>
              </div>
            </div>
          </div>
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
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.737518523692!2d74.30467641450328!3d31.47640588138411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903f9420b81e1%3A0x2443f9f35c178a3d!2sMasood%20Pharmacy!5e0!3m2!1sen!2s!4v1588536851461!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    frameBorder={0}
                    style={{ border: 0 }}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex={0}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="new-items-wrapper sec-strt">
            <div className="container">
              <h3>New Items</h3>
              <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="product-container">
                    <div className="img-holder">
                      <a href="#">
                        <img src="images/prod7.jpg" alt="" />
                      </a>
                      <div className="new-holder">
                        <p>NEW!</p>
                      </div>
                    </div>
                    <div className="product-title-holder sec-strt">
                      <div className="title-wrap">Brown Sugar 2 kgs pack</div>
                      <div className="stock-info">In stock</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="product-container">
                    <div className="img-holder">
                      <a href="#">
                        <img src="images/prod8.jpg" alt="" />
                      </a>
                      <div className="new-holder">
                        <p>NEW!</p>
                      </div>
                    </div>
                    <div className="product-title-holder sec-strt">
                      <div className="title-wrap">Brown Sugar 2 kgs pack</div>
                      <div className="stock-info">In stock</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="product-container">
                    <div className="img-holder">
                      <a href="#">
                        <img src="images/prod9.jpg" alt="" />
                      </a>
                      <div className="new-holder">
                        <p>NEW!</p>
                      </div>
                    </div>
                    <div className="product-title-holder sec-strt">
                      <div className="title-wrap">Brown Sugar 2 kgs pack</div>
                      <div className="stock-info">In stock</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="product-container">
                    <div className="img-holder">
                      <a href="#">
                        <img src="images/prod10.jpg" alt="" />
                      </a>
                      <div className="new-holder">
                        <p>NEW!</p>
                      </div>
                    </div>
                    <div className="product-title-holder sec-strt">
                      <div className="title-wrap">Brown Sugar 2 kgs pack</div>
                      <div className="stock-info">In stock</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="weekly-wrapper sec-strt">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <h3>Week’s Special Offer.</h3>
                  <div className="img-holder">
                    <img
                      src="images/weekly-offer.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <h3>Adv.</h3>
                  <div className="img-holder">
                    <img src="images/adv1.jpg" alt="" className="img-fluid" />
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

export default StoreLocator;

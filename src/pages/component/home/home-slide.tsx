import React, { useEffect } from 'react';

const HomeSlide = () => {
    return (
        <section className="home-slider owl-carousel js-fullheight">
        <div
          className="slider-item js-fullheight"
          style={{ backgroundImage: "url(images/bg_1.jpg)" }}
        >
          <div className="overlay" />
          <div className="container">
            <div
              className="row slider-text js-fullheight justify-content-center align-items-center"
              data-scrollax-parent="true"
            >
              <div className="col-md-12 col-sm-12 text-center ftco-animate">
                <span className="subheading">Feliciano</span>
                <h1 className="mb-4">Best Restaurant</h1>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slider-item js-fullheight"
          style={{ backgroundImage: "url(images/bg_2.jpg)" }}
        >
          <div className="overlay" />
          <div className="container">
            <div
              className="row slider-text js-fullheight justify-content-center align-items-center"
              data-scrollax-parent="true"
            >
              <div className="col-md-12 col-sm-12 text-center ftco-animate">
                <span className="subheading">Feliciano</span>
                <h1 className="mb-4">Nutritious &amp; Tasty</h1>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slider-item js-fullheight"
          style={{ backgroundImage: "url(images/bg_3.jpg)" }}
        >
          <div className="overlay" />
          <div className="container">
            <div
              className="row slider-text justify-content-center align-items-center"
              data-scrollax-parent="true"
            >
              <div className="col-md-12 col-sm-12 text-center ftco-animate">
                <span className="subheading">Feliciano</span>
                <h1 className="mb-4">Delicious Specialties</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default HomeSlide;
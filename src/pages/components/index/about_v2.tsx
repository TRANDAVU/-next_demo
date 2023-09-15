import React, { useEffect } from 'react';
import Image from 'next/image';
const AboutComponentV2 = () => {
    return (
        <section className="ftco-section ftco-wrap-about">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 d-flex">
                        <div className="img img-1 mr-md-2" style={{ backgroundImage: 'url(images/about.jpg)' }} />
                        <div className="img img-2 ml-md-2" style={{ backgroundImage: 'url(images/about-1.jpg)' }} />
                    </div>
                    <div className="col-md-5 wrap-about pt-5 pt-md-5 pb-md-3 ftco-animate">
                        <div className="heading-section mb-4 my-5 my-md-0">
                            <span className="subheading">About</span>
                            <h2 className="mb-4">Feliciano Films</h2>
                        </div>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
                            paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        <p className="time">
                            <span>Mon - Fri <strong>8 AM - 11 PM</strong></span>
                            <span><a href="#">+ 1-978-123-4567</a></span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutComponentV2;

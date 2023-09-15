import React, { useEffect } from 'react';
import Image from 'next/image';
const AboutTitleComponent = () => {
    return (
        <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: 'url("images/bg_3.jpg")' }} data-stellar-background-ratio="0.5">
            <div className="overlay" />
            <div className="container">
                <div className="row no-gutters slider-text align-items-end justify-content-center">
                    <div className="col-md-9 ftco-animate text-center mb-4">
                        <h1 className="mb-2 bread">About</h1>
                        <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i className="ion-ios-arrow-forward" /></a></span> <span>About <i className="ion-ios-arrow-forward" /></span></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutTitleComponent;

import React, { useEffect } from 'react';
import Image from 'next/image';
const AboutComponent = () => {
    return (
        <section className="ftco-section ftco-no-pt ftco-no-pb">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="featured">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="featured-menus ftco-animate">
                                        <div className="menu-img img" style={{ backgroundImage: 'url(images/breakfast-1.jpg)' }} />
                                        <div className="text text-center">
                                            <h3>Natasha Romanoff</h3>
                                            <p><span>Disney</span>, <span>Mavel</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="featured-menus ftco-animate">
                                        <div className="menu-img img" style={{ backgroundImage: 'url(images/breakfast-2.jpg)' }} />
                                        <div className="text text-center">
                                            <h3>Steve Rogers</h3>
                                            <p><span>Disney</span>, <span>Mavel</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="featured-menus ftco-animate">
                                        <div className="menu-img img" style={{ backgroundImage: 'url(images/breakfast-3.jpg)' }} />
                                        <div className="text text-center">
                                            <h3>Tony Stark</h3>
                                            <p><span>Disney</span>, <span>Mavel</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="featured-menus ftco-animate">
                                        <div className="menu-img img" style={{ backgroundImage: 'url(images/breakfast-4.jpg)' }} />
                                        <div className="text text-center">
                                            <h3>Thor</h3>
                                            <p><span>Disney</span>, <span>Mavel</span></p>
                                        </div>
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

export default AboutComponent;

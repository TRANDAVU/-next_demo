import React, { useEffect } from 'react';
import Image from 'next/image';
const ManagerComponent = () => {
    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-2">
                    <div className="col-md-12 text-center heading-section ftco-animate">
                        <span className="subheading">Managers</span>
                        <h2 className="mb-4">Senior manager</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-3 ftco-animate">
                        <div className="staff">
                            <div className="img" style={{ backgroundImage: 'url(images/chef-4.jpg)' }} />
                            <div className="text pt-4">
                                <h3>John Smooth</h3>
                                <span className="position mb-2">Customer care</span>
                                <div className="faded">
                                    <ul className="ftco-social d-flex">
                                        <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
                                        <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
                                        <li className="ftco-animate"><a href="#"><span className="icon-google-plus" /></a></li>
                                        <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 ftco-animate">
                        <div className="staff">
                            <div className="img" style={{ backgroundImage: 'url(images/chef-2.jpg)' }} />
                            <div className="text pt-4">
                                <h3>Rebeca Welson</h3>
                                <span className="position mb-2">Box office management</span>
                                <div className="faded">
                                    <ul className="ftco-social d-flex">
                                        <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
                                        <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
                                        <li className="ftco-animate"><a href="#"><span className="icon-google-plus" /></a></li>
                                        <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 ftco-animate">
                        <div className="staff">
                            <div className="img" style={{ backgroundImage: 'url(images/chef-3.jpg)' }} />
                            <div className="text pt-4">
                                <h3>Kharl Branyt</h3>
                                <span className="position mb-2">Service management</span>
                                <div className="faded">
                                    <ul className="ftco-social d-flex">
                                        <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
                                        <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
                                        <li className="ftco-animate"><a href="#"><span className="icon-google-plus" /></a></li>
                                        <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 ftco-animate">
                        <div className="staff">
                            <div className="img" style={{ backgroundImage: 'url(images/chef-1.jpg)' }} />
                            <div className="text pt-4">
                                <h3>Luke Simon</h3>
                                <span className="position mb-2">Employee manager</span>
                                <div className="faded">
                                    <ul className="ftco-social d-flex">
                                        <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
                                        <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
                                        <li className="ftco-animate"><a href="#"><span className="icon-google-plus" /></a></li>
                                        <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManagerComponent;

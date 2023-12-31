import React, { useEffect } from 'react';
import Image from 'next/image';
const ServiceComponent = () => {
    return (
        <section className="ftco-section bg-light">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-2">
                    <div className="col-md-12 text-center heading-section ftco-animate">
                        <span className="subheading">Services</span>
                        <h2 className="mb-4">Catering Services</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 d-flex align-self-stretch ftco-animate text-center">
                        <div className="media block-6 services d-block">
                            <div className="icon d-flex justify-content-center align-items-center">
                                <span className="flaticon-cake" />
                            </div>
                            <div className="media-body p-2 mt-3">
                                <h3 className="heading">Birthday Party</h3>
                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex align-self-stretch ftco-animate text-center">
                        <div className="media block-6 services d-block">
                            <div className="icon d-flex justify-content-center align-items-center">
                                <span className="flaticon-meeting" />
                            </div>
                            <div className="media-body p-2 mt-3">
                                <h3 className="heading">Business Meetings</h3>
                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex align-self-stretch ftco-animate text-center">
                        <div className="media block-6 services d-block">
                            <div className="icon d-flex justify-content-center align-items-center">
                                <span className="flaticon-tray" />
                            </div>
                            <div className="media-body p-2 mt-3">
                                <h3 className="heading">Wedding Party</h3>
                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceComponent;

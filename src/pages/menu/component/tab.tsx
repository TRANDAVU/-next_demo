import React, { useEffect } from 'react';
import Image from 'next/image';
const TabsComponent = () => {
    return (
        <section className="ftco-section">
            <div className="container">
                <div className="ftco-search">
                    <div className="row">
                        <div className="col-md-12 nav-link-wrap">
                            <div className="nav nav-pills d-flex text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a className="nav-link ftco-animate active" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">Movie</a>
                                <a className="nav-link ftco-animate" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">TV Show</a>
                                <a className="nav-link ftco-animate" id="v-pills-3-tab" data-toggle="pill" href="#v-pills-3" role="tab" aria-controls="v-pills-3" aria-selected="false">Cartoon</a>
                                <a className="nav-link ftco-animate" id="v-pills-4-tab" data-toggle="pill" href="#v-pills-4" role="tab" aria-controls="v-pills-4" aria-selected="false">Disney channel</a>
                                <a className="nav-link ftco-animate" id="v-pills-5-tab" data-toggle="pill" href="#v-pills-5" role="tab" aria-controls="v-pills-5" aria-selected="false">Disney princess</a>
                                <a className="nav-link ftco-animate" id="v-pills-6-tab" data-toggle="pill" href="#v-pills-6" role="tab" aria-controls="v-pills-6" aria-selected="false">Other</a>
                            </div>
                        </div>
                        <div className="col-md-12 tab-wrap">
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="day-1-tab">
                                    <div className="row no-gutters d-flex align-items-stretch">
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img" style={{ backgroundImage: 'url(images/breakfast-1.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>
                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img" style={{ backgroundImage: 'url(images/breakfast-2.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>
                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img order-md-last" style={{ backgroundImage: 'url(images/breakfast-3.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>
                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img order-md-last" style={{ backgroundImage: 'url(images/breakfast-4.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>
                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img" style={{ backgroundImage: 'url(images/breakfast-5.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>
                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img" style={{ backgroundImage: 'url(images/breakfast-6.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>
                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img order-md-last" style={{ backgroundImage: 'url(images/breakfast-7.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>
                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img order-md-last" style={{ backgroundImage: 'url(images/breakfast-8.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>
                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-day-2-tab">
                                    <div className="row no-gutters d-flex align-items-stretch">
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img" style={{ backgroundImage: 'url(images/lunch-1.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>
                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img" style={{ backgroundImage: 'url(images/lunch-2.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>
                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img order-md-last" style={{ backgroundImage: 'url(images/lunch-3.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>
                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img order-md-last" style={{ backgroundImage: 'url(images/lunch-4.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>
                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img" style={{ backgroundImage: 'url(images/lunch-5.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>
                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img" style={{ backgroundImage: 'url(images/lunch-6.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>
                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img order-md-last" style={{ backgroundImage: 'url(images/lunch-7.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>
                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img order-md-last" style={{ backgroundImage: 'url(images/lunch-8.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>
                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-day-3-tab">
                                    <div className="row no-gutters d-flex align-items-stretch">
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img" style={{ backgroundImage: 'url(images/dinner-1.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>
                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img" style={{ backgroundImage: 'url(images/dinner-2.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>
                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img order-md-last" style={{ backgroundImage: 'url(images/dinner-3.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>
                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img order-md-last" style={{ backgroundImage: 'url(images/dinner-4.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>
                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img" style={{ backgroundImage: 'url(images/dinner-5.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>
                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img" style={{ backgroundImage: 'url(images/dinner-6.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>
                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-4" role="tabpanel" aria-labelledby="v-pills-day-4-tab">
                                    <div className="row no-gutters d-flex align-items-stretch">
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img" style={{ backgroundImage: 'url(images/drink-1.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>
                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img" style={{ backgroundImage: 'url(images/drink-2.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>
                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img order-md-last" style={{ backgroundImage: 'url(images/drink-3.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>
                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img order-md-last" style={{ backgroundImage: 'url(images/drink-4.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>
                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img" style={{ backgroundImage: 'url(images/drink-5.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>
                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img" style={{ backgroundImage: 'url(images/drink-6.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>
                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-5" role="tabpanel" aria-labelledby="v-pills-day-5-tab">
                                    <div className="row no-gutters d-flex align-items-stretch">
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img" style={{ backgroundImage: 'url(images/dessert-1.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>
                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img" style={{ backgroundImage: 'url(images/dessert-2.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>
                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img order-md-last" style={{ backgroundImage: 'url(images/dessert-3.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>
                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img order-md-last" style={{ backgroundImage: 'url(images/dessert-4.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>
                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img" style={{ backgroundImage: 'url(images/dessert-5.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>
                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img" style={{ backgroundImage: 'url(images/drink-6.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>
                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-6" role="tabpanel" aria-labelledby="v-pills-day-6-tab">
                                    <div className="row no-gutters d-flex align-items-stretch">
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img" style={{ backgroundImage: 'url(images/wine-1.jpg)' }}>
                                                </div>
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>
                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img" style={{ backgroundImage: 'url(images/wine-2.jpg)' }}>
                                                </div>
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>

                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img order-md-last" style={{ backgroundImage: 'url(images/wine-3.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>

                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img order-md-last" style={{ backgroundImage: 'url(images/wine-4.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>

                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img" style={{ backgroundImage: 'url(images/wine-5.jpg)' }}>
                                                </div>
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>

                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img" style={{ backgroundImage: 'url(images/wine-6.jpg)' }}>
                                                </div>
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>

                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img order-md-last" style={{ backgroundImage: 'url(images/wine-7.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>

                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <div className="menus d-sm-flex ftco-animate align-items-stretch">
                                                <div className="menu-img img order-md-last" style={{ backgroundImage: 'url(images/wine-8.jpg)' }} />
                                                <div className="text d-flex align-items-center">
                                                    <div>
                                                        <div className="d-flex">
                                                            <div className="one-half">
                                                                <h3>Mavel Movie</h3>
                                                            </div>
                                                            <div className="one-forth">
                                                                <span className="price">$29</span>
                                                            </div>
                                                        </div>
                                                        <p><span>Disney</span>, <span>Mavel</span></p>

                                                        <p><a href="#" className="btn btn-primary">Order now</a></p>
                                                    </div>
                                                </div>
                                            </div>
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

export default TabsComponent;

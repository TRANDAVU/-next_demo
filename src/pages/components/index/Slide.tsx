import React, { useEffect } from 'react';
import Image from 'next/image';
const Slide = () => {
    return (
        <div className="demo-cont">
            {/* slider start */}
            <div className="fnc-slider example-slider">
                <div className="fnc-slider__slides">
                    {/* slide start */}
                    <div className="fnc-slide m--blend-green m--active-slide">
                        <div className="fnc-slide__inner">
                            <div className="fnc-slide__mask">
                                <div className="fnc-slide__mask-inner" />
                            </div>
                            <div className="fnc-slide__content">
                                <h2 className="fnc-slide__heading">
                                    <div className="fnc-slide__heading-line">
                                        <span>Black</span>
                                    </div>
                                    <div className="fnc-slide__heading-line">
                                        <span>Widow</span>
                                    </div>
                                </h2>
                                <button type="button" className="fnc-slide__action-btn">
                                    Credits
                                    <span data-text="Credits">Credits</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* slide end */}
                    {/* slide start */}
                    <div className="fnc-slide m--blend-dark">
                        <div className="fnc-slide__inner">
                            <div className="fnc-slide__mask">
                                <div className="fnc-slide__mask-inner" />
                            </div>
                            <div className="fnc-slide__content">
                                <h2 className="fnc-slide__heading">
                                    <div className="fnc-slide__heading-line">
                                        <span>Captain</span>
                                    </div>
                                    <div className="fnc-slide__heading-line">
                                        <span>America</span>
                                    </div>
                                </h2>
                                <button type="button" className="fnc-slide__action-btn">
                                    Credits
                                    <span data-text="Credits">Credits</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* slide end */}
                    {/* slide start */}
                    <div className="fnc-slide m--blend-red">
                        <div className="fnc-slide__inner">
                            <div className="fnc-slide__mask">
                                <div className="fnc-slide__mask-inner" />
                            </div>
                            <div className="fnc-slide__content">
                                <h2 className="fnc-slide__heading">
                                    <div className="fnc-slide__heading-line">
                                        <span>Iron</span>
                                    </div>
                                    <div className="fnc-slide__heading-line">
                                        <span>Man</span>
                                    </div>
                                </h2>
                                <button type="button" className="fnc-slide__action-btn">
                                    Credits
                                    <span data-text="Credits">Credits</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* slide end */}
                    {/* slide start */}
                    <div className="fnc-slide m--blend-blue">
                        <div className="fnc-slide__inner">
                            <div className="fnc-slide__mask">
                                <div className="fnc-slide__mask-inner" />
                            </div>
                            <div className="fnc-slide__content">
                                <h2 className="fnc-slide__heading">
                                    <div className="fnc-slide__heading-line">
                                        <span>Thor</span>
                                    </div>
                                    <div className="fnc-slide__heading-line">
                                        <span>Just Thor</span>
                                    </div>
                                </h2>
                                <button type="button" className="fnc-slide__action-btn">
                                    Credits
                                    <span data-text="Credits">Credits</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* slide end */}
                </div>
                <nav className="fnc-nav">
                    <div className="fnc-nav__bgs">
                        <div className="fnc-nav__bg m--navbg-green m--active-nav-bg" />
                        <div className="fnc-nav__bg m--navbg-dark" />
                        <div className="fnc-nav__bg m--navbg-red" />
                        <div className="fnc-nav__bg m--navbg-blue" />
                    </div>
                    <div className="fnc-nav__controls">
                        <button className="fnc-nav__control">
                            Black Widow
                            <span className="fnc-nav__control-progress" />
                        </button>
                        <button className="fnc-nav__control">
                            Captain America
                            <span className="fnc-nav__control-progress" />
                        </button>
                        <button className="fnc-nav__control">
                            Iron Man
                            <span className="fnc-nav__control-progress" />
                        </button>
                        <button className="fnc-nav__control">
                            Thor
                            <span className="fnc-nav__control-progress" />
                        </button>
                    </div>
                </nav>
            </div>
            {/* slider end */}
            {/* <div className="demo-cont__credits">
                <div className="demo-cont__credits-close" />
                <h2 className="demo-cont__credits-heading">Made by</h2>
                <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/142996/profile/profile-512_5.jpg" alt="" className="demo-cont__credits-img" />
                <h3 className="demo-cont__credits-name">Nikolay Talanov</h3>
                <a href="https://codepen.io/suez/" target="_blank" className="demo-cont__credits-link">My codepen</a>
                <a href="https://twitter.com/NikolayTalanov" target="_blank" className="demo-cont__credits-link">My twitter</a>
                <h2 className="demo-cont__credits-heading">Based on</h2>
                <a href="https://dribbble.com/shots/2375246-Fashion-Butique-slider-animation" target="_blank" className="demo-cont__credits-link">Concept by Kreativa Studio</a>
                <h4 className="demo-cont__credits-blend">Global Blend Mode</h4>
                <div className="colorful-switch">
                    <input type="checkbox" className="colorful-switch__checkbox js-activate-global-blending" id="colorful-switch-cb" />
                    <label className="colorful-switch__label" htmlFor="colorful-switch-cb">
                        <span className="colorful-switch__bg" />
                        <span className="colorful-switch__dot" />
                        <span className="colorful-switch__on">
                            <span className="colorful-switch__on__inner" />
                        </span>
                        <span className="colorful-switch__off" />
                    </label>
                </div>
            </div> */}
        </div>
    );
};

export default Slide;

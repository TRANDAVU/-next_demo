import React, { useEffect } from 'react';
import Image from 'next/image';
const BlogComponent = () => {
    return (
        <section className="ftco-section bg-light">
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-md-7 text-center heading-section ftco-animate">
                        <span className="subheading">Blog</span>
                        <h2 className="mb-4">Recent Posts</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 ftco-animate">
                        <div className="blog-entry">
                            <a href="blog-single.html" className="block-20" style={{ backgroundImage: 'url("images/image_1.jpg")' }}>
                            </a>
                            <div className="text pt-3 pb-4 px-4">
                                <div className="meta">
                                    <div><a href="#">Sept. 06, 2019</a></div>
                                    <div><a href="#">Admin</a></div>
                                </div>
                                <h3 className="heading"><a href="#">Taste the delicious foods in Asia</a></h3>
                                <p className="clearfix">
                                    <a href="#" className="float-left read">Read more</a>
                                    <a href="#" className="float-right meta-chat"><span className="icon-chat" /> 3</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ftco-animate">
                        <div className="blog-entry">
                            <a href="blog-single.html" className="block-20" style={{ backgroundImage: 'url("images/image_2.jpg")' }}>
                            </a>
                            <div className="text pt-3 pb-4 px-4">
                                <div className="meta">
                                    <div><a href="#">Sept. 06, 2019</a></div>
                                    <div><a href="#">Admin</a></div>
                                </div>
                                <h3 className="heading"><a href="#">Taste the delicious foods in Asia</a></h3>
                                <p className="clearfix">
                                    <a href="#" className="float-left read">Read more</a>
                                    <a href="#" className="float-right meta-chat"><span className="icon-chat" /> 3</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ftco-animate">
                        <div className="blog-entry">
                            <a href="blog-single.html" className="block-20" style={{ backgroundImage: 'url("images/image_3.jpg")' }}>
                            </a>
                            <div className="text pt-3 pb-4 px-4">
                                <div className="meta">
                                    <div><a href="#">Sept. 06, 2019</a></div>
                                    <div><a href="#">Admin</a></div>
                                </div>
                                <h3 className="heading"><a href="#">Taste the delicious foods in Asia</a></h3>
                                <p className="clearfix">
                                    <a href="#" className="float-left read">Read more</a>
                                    <a href="#" className="float-right meta-chat"><span className="icon-chat" /> 3</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogComponent;

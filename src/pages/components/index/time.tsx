import React, { useEffect } from 'react';
import Image from 'next/image';

const TimeComponent = () => {
    return (
        <section className="ftco-section ftco-counter img ftco-no-pt" id="section-counter">
        <div className="container">
          <div className="row d-md-flex">
            <div className="col-md-9">
              <div className="row d-md-flex align-items-center">
                <div className="col-md-6 col-lg-3 mb-4 mb-lg-0 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="text">
                      <strong className="number">18</strong>
                      <span>Years of Experienced</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-4 mb-lg-0 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="text">
                      <strong className="number">100</strong>
                      <span>Films/week</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-4 mb-lg-0 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="text">
                      <strong className="number">50</strong>
                      <span>Staffs</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-4 mb-lg-0 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="text">
                      <strong className="number">15000</strong>
                      <span>Happy Customers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center text-md-left">
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default TimeComponent;

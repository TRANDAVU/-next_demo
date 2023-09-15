import React, { useEffect } from "react";
import Image from "next/image";
const ReservationComponent = () => {
  return (
    <section className="ftco-section ftco-no-pt ftco-no-pb">
      <div className="container-fluid px-0">
        <div className="row d-flex no-gutters">
          <div className="col-md-6 order-md-last ftco-animate makereservation p-4 p-md-5 pt-5">
            <div className="py-md-5">
              <div className="heading-section ftco-animate mb-5">
                <span className="subheading">Book a table</span>
                <h2 className="mb-4">Make Reservation</h2>
              </div>
              <form action="#">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor>Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor>Email</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor>Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor>Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        id="book_date"
                        placeholder="Date"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor>Time</label>
                      <input
                        type="text"
                        className="form-control"
                        id="book_time"
                        placeholder="Time"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor>Person</label>
                      <div className="select-wrap one-third">
                        <div className="icon">
                          <span className="ion-ios-arrow-down" />
                        </div>
                        <select name id className="form-control">
                          <option value>Person</option>
                          <option value>1</option>
                          <option value>2</option>
                          <option value>3</option>
                          <option value>4+</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <div className="form-group">
                      <input
                        type="submit"
                        defaultValue="Make a Reservation"
                        className="btn btn-primary py-3 px-5"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch pb-5 pb-md-0">
            <div className="gmap_canvas">
              <iframe
                src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=16&ie=UTF8&iwloc=&output=embed"
                frameBorder={0}
                scrolling="no"
                style={{ width: "1090px", height: "750px" }}
              />
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    ".mapouter{position:relative;height:550px;width:590px}.gmap_canvas{overflow:hidden;height:550px;width:590px}.gmap_canvas iframe{position:relative;z-index:2}.gmap_canvas a{top:0;z-index:0}",
                }}
              />
              <a href="https://www.eireportingonline.com">
                ei reporting online
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationComponent;

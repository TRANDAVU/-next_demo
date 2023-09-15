import React, { useEffect } from "react";
import Image from "next/image";
const ContactComponent = () => {
  return (
    <div>
      <section className="ftco-section ftco-no-pt ftco-no-pb contact-section">
        <div className="container">
          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 pt-5 px-2 pb-2 p-md-5 order-md-last">
              <h2 className="h4 mb-2 mb-md-5 font-weight-bold">Contact Us</h2>
              <form action="#">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name
                    id
                    cols={30}
                    rows={7}
                    className="form-control"
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    defaultValue="Send Message"
                    className="btn btn-primary py-3 px-5"
                  />
                </div>
              </form>
            </div>
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    frameBorder={0}
                    scrolling="no"
                    style={{ width: "590px", height: "550px" }}
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
        </div>
      </section>
      <section className="ftco-section contact-section">
        <div className="container">
          <div className="row d-flex contact-info">
            <div className="col-md-12 mb-4">
              <h2 className="h4 font-weight-bold">Contact Information</h2>
            </div>
            <div className="w-100" />
            <div className="col-md-3 d-flex">
              <div className="dbox">
                <p>
                  <span>Address:</span> 198 West 21th Street, Suite 721 New York
                  NY 10016
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="dbox">
                <p>
                  <span>Phone:</span>{" "}
                  <a href="tel://1234567920">+ 1235 2355 98</a>
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="dbox">
                <p>
                  <span>Email:</span>{" "}
                  <a href="https://preview.colorlib.com/cdn-cgi/l/email-protection#f990979f96b980968c8b8a908d9cd79a9694">
                    <span
                      className="__cf_email__"
                      data-cfemail="80e9eee6efc0f9eff5f2f3e9f4e5aee3efed"
                    >
                      [email&nbsp;protected]
                    </span>
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="dbox">
                <p>
                  <span>Website</span> <a href="#">yoursite.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactComponent;

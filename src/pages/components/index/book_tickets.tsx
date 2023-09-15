import React, { useEffect } from 'react';
import Image from 'next/image';
const BookTicketsComponent = () => {
    return (
        <section className="ftco-section img" style={{backgroundImage: 'url(images/bg_3.jpg)'}}>
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-7 ftco-animate makereservation p-4 px-md-5 pb-md-5">
              <div className="heading-section ftco-animate mb-5 text-center">
                <span className="subheading">Book ticker</span>
                <h2 className="mb-4">Make Film</h2>
              </div>
              <form action="#">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Name</label>
                      <input type="text" className="form-control" placeholder="Your Name" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Email</label>
                      <input type="text" className="form-control" placeholder="Your Email" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Phone</label>
                      <input type="text" className="form-control" placeholder="Phone" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Phone</label>
                      <input type="text" className="form-control" id="book_date" placeholder="Date" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Time</label>
                      <input type="text" className="form-control" id="book_time" placeholder="Time" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Person</label>
                      <div className="select-wrap one-third">
                        <div className="icon"><span className="ion-ios-arrow-down" /></div>
                        <select name='' id='' className="form-control">
                          <option value=''>Person</option>
                          <option value=''>1</option>
                          <option value=''>2</option>
                          <option value=''>3</option>
                          <option value=''>4+</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <div className="form-group text-center">
                      <input type="submit" defaultValue="Make a Reservation" className="btn btn-primary py-3 px-5" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
};

export default BookTicketsComponent;

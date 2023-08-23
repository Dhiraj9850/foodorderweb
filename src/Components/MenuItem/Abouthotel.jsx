import React from 'react'


const Abouthotel = () => {
  return (
    <div>
      <div className="bg-black py-4 m-top">
        <div className="container position-relative">
          <img src="/images/trending/trending1.png" className="img-fluid resta-img" alt="" />
          <div className="pt-3 text-white">
            <h2 className="fw-bold">xyz Restarant</h2>
            <p className="text-white big mb-0">22,noida sector,delhi</p>

            <div className="rating d-flex align-items-center mt-2">
              <ul className="list-unstyled">
                <li className="small">
                   <i className="bi bi-star text-warning"></i>
                   <i className="bi bi-star text-warning ms-1"></i>
                   <i className="bi bi-star text-warning ms-1"></i>
                   <i className="bi bi-star text-warning ms-1"></i>
                   <i className="bi bi-star ms-1"></i>
                </li>
              </ul>
              <p className="text-white ms-2 mt-1">(255 reviews)</p>
            </div>

            <div className="pb-4">
              <div className="row">
                <div className="col-6 col-md-2">
                  <p className="text-white-50 fw-bold m-0 small">Delivery</p>
                  <p className="text-white mt-1 mb-0 big">Free</p>
                </div>
                <div className="col-6 col-md-2">
                  <p className="text-white-50 fw-bold m-0 small">Time</p>
                  <p className="text-white mt-1 mb-0 big">10:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="p-3 bg-primarygrd mt-n3 rounded position-relative">
          <div className="d-flex align-items-center">
            <div className="feature-icons">
              <button  className="btn btn-sm btn-light rounded-circle">
                <i className="bi bi-upload"></i>
              </button>
              <button  className="btn btn-sm btn-light  rounded-circle mx-3">
                <i className="bi bi-star"></i>
              </button>
              <button  className="btn btn-sm btn-light  rounded-circle">
                <i className="bi bi-geo-alt"></i>
              </button>
            </div>

            <a href="" className="btn btn-sm btn-outline-light ms-auto">contact</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Abouthotel
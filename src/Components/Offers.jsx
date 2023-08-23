import React from 'react'
import Card from '../UI/Card'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Offers = () => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-white">
      <div className="container my-3">
        <div className="row">
          <Slider {...settings}>
            <div className="col-3">
              <Card>
                <div className="bg-img text-white position-relative">
                  <img src="/images/offers/offer50.jpg" alt="" />
                  <p className="position-absolute top-0 start-0 text-white m-3">Lorem ipsum dolor sit amet.</p>
                  <button className="position-absolute bottom-0 start-0 m-3 btnorder">Order Now</button>
                </div>
              </Card>
            </div>
            <div className="col-3">
              <Card>
                <div className="bg-img text-white position-relative">
                  <img src="/images/offers/offer50.jpg" alt="" />
                  <p className="position-absolute top-0 start-0 text-white m-3">Lorem ipsum dolor sit amet.</p>
                  <button className="position-absolute bottom-0 start-0 m-3 btnorder">Order Now</button>
                </div>
              </Card>
            </div>
            <div className="col-3">
              <Card>
                <div className="bg-img text-white position-relative">
                  <img src="/images/offers/offer50.jpg" alt="" />
                  <p className="position-absolute top-0 start-0 text-white m-3">Lorem ipsum dolor sit amet.</p>
                  <button className="position-absolute bottom-0 start-0 m-3 btnorder">Order Now</button>
                </div>
              </Card>
            </div>
            <div className="col-3">
              <Card>
                <div className="bg-img text-white position-relative">
                  <img src="/images/offers/offer50.jpg" alt="" />
                  <p className="position-absolute top-0 start-0 text-white m-3">Lorem ipsum dolor sit amet.</p>
                  <button className="position-absolute bottom-0 start-0 m-3 btnorder">Order Now</button>
                </div>
              </Card>
            </div>
            <div className="col-3">
              <Card>
                <div className="bg-img text-white position-relative">
                  <img src="/images/offers/offer50.jpg" alt="" />
                  <p className="position-absolute top-0 start-0 text-white m-3">Lorem ipsum dolor sit amet.</p>
                  <button className="position-absolute bottom-0 start-0 m-3 btnorder">Order Now</button>
                </div>
              </Card>
            </div>
          </Slider>


        </div>
      </div>
    </div>

  )
}

export default Offers
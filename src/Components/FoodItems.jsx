import React from 'react';
import Card from '../UI/Card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FoodItems = () => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-dark m-top">
      <div className="container">
        <div className="row d-flex flex-row py-3">
          <Slider {...settings}>
            <div className="col-2">
              <Card>
              <div className="slider d-flex justify-content-center align-items-center flex-column py-2 px-1">
                <img src="/images/categories/main-course.jpg" className="img-fluid" alt="" />
                <h6 className="text-center fw-semibold mt-2 mb-0">Main Course</h6>
                <span className="text-success">230 Items</span>
               </div>
              </Card>
            </div>
            <div className="col-2">
              <Card>
              <div className="slider d-flex justify-content-center align-items-center flex-column py-2 px-1">
                <img src="/images/categories/main-course.jpg" className="img-fluid" alt="" />
                <h6 className="text-center fw-semibold mt-2 mb-0">Main Course</h6>
                <span className="text-success">230 Items</span>
               </div>
              </Card>
            </div>
            <div className="col-2">
              <Card>
              <div className="slider d-flex justify-content-center align-items-center flex-column py-2 px-1">
                <img src="/images/categories/main-course.jpg" className="img-fluid" alt="" />
                <h6 className="text-center fw-semibold mt-2 mb-0">Main Course</h6>
                <span className="text-success">230 Items</span>
               </div>
              </Card>
            </div>
            <div className="col-2">
              <Card>
              <div className="slider d-flex justify-content-center align-items-center flex-column py-2 px-1">
                <img src="/images/categories/main-course.jpg" className="img-fluid" alt="" />
                <h6 className="text-center fw-semibold mt-2 mb-0">Main Course</h6>
                <span className="text-success">230 Items</span>
               </div>
              </Card>
            </div>
            <div className="col-2">
              <Card>
              <div className="slider d-flex justify-content-center align-items-center flex-column py-2 px-1">
                <img src="/images/categories/main-course.jpg" className="img-fluid" alt="" />
                <h6 className="text-center fw-semibold mt-2 mb-0">Main Course</h6>
                <span className="text-success">230 Items</span>
               </div>
              </Card>
            </div>
            <div className="col-2">
              <Card>
              <div className="slider d-flex justify-content-center align-items-center flex-column py-2 px-1">
                <img src="/images/categories/main-course.jpg" className="img-fluid" alt="" />
                <h6 className="text-center fw-semibold mt-2 mb-0">Main Course</h6>
                <span className="text-success">230 Items</span>
               </div>
              </Card>
            </div>
            <div className="col-2">
              <Card>
              <div className="slider d-flex justify-content-center align-items-center flex-column py-2 px-1">
                <img src="/images/categories/main-course.jpg" className="img-fluid" alt="" />
                <h6 className="text-center fw-semibold mt-2 mb-0">Main Course</h6>
                <span className="text-success">230 Items</span>
               </div>
              </Card>
            </div>
            <div className="col-2">
              <Card>
              <div className="slider d-flex justify-content-center align-items-center flex-column py-2 px-1">
                <img src="/images/categories/main-course.jpg" className="img-fluid" alt="" />
                <h6 className="text-center fw-semibold mt-2 mb-0">Main Course</h6>
                <span className="text-success">230 Items</span>
               </div>
              </Card>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default FoodItems;

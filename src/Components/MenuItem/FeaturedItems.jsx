import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import Card from '../../UI/Card';

const FeaturedItems = () => {
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return (
        <div className="bg-semilight py-3 mt-5">
            <div className="container">
                <h5 className="text-dark pt-4 pb-2">Featured Menu Items</h5>
                <div className="row">
                    <Slider {...settings}>
                        <div className="col-4 p-0">
                            <Card>
                                <div className="position-relative">
                                    <div className="card-image">
                                        
                                        <Link to="/menu">
                                            <img src="/images/trending/trending1.png" alt="" className="img-fluid w-100" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="p-3 position-relative">
                                    <div className="content-card-body">
                                        <h6 className="text-dark mb-2">Famous Dave's Bar-bque</h6>
                                        <p className="text-secondary mb-3">Vegetarian • Indian • Pure veg</p>
                                        <p className="text-secondary mb-3">
                                            <span className="bg-light text-dark rounded-sm py-1 px-2">
                                                <i className="bi bi-clock"></i> &nbsp; 15-30 min
                                            </span>
                                            <span className="float-end text-secondary">
                                                Rs.190
                                            </span>
                                        </p>
                                      
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="col-4 p-0">
                            <Card>
                                <div className="position-relative">
                                    <div className="card-image">
                                        
                                        <Link to="/menu">
                                            <img src="/images/trending/trending1.png" alt="" className="img-fluid w-100" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="p-3 position-relative">
                                    <div className="content-card-body">
                                        <h6 className="text-dark mb-2">Famous Dave's Bar-bque</h6>
                                        <p className="text-secondary mb-3">Vegetarian • Indian • Pure veg</p>
                                        <p className="text-secondary mb-3">
                                            <span className="bg-light text-dark rounded-sm py-1 px-2">
                                                <i className="bi bi-clock"></i> &nbsp; 15-30 min
                                            </span>
                                            <span className="float-end text-secondary">
                                                Rs.190
                                            </span>
                                        </p>
                                      
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="col-4 p-0">
                            <Card>
                                <div className="position-relative">
                                    <div className="card-image">
                                        
                                        <Link to="/menu">
                                            <img src="/images/trending/trending1.png" alt="" className="img-fluid w-100" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="p-3 position-relative">
                                    <div className="content-card-body">
                                        <h6 className="text-dark mb-2">Famous Dave's Bar-bque</h6>
                                        <p className="text-secondary mb-3">Vegetarian • Indian • Pure veg</p>
                                        <p className="text-secondary mb-3">
                                            <span className="bg-light text-dark rounded-sm py-1 px-2">
                                                <i className="bi bi-clock"></i> &nbsp; 15-30 min
                                            </span>
                                            <span className="float-end text-secondary">
                                                Rs.190
                                            </span>
                                        </p>
                                      
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="col-4 p-0">
                            <Card>
                                <div className="position-relative">
                                    <div className="card-image">
                                        
                                        <Link to="/menu">
                                            <img src="/images/trending/trending1.png" alt="" className="img-fluid w-100" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="p-3 position-relative">
                                    <div className="content-card-body">
                                        <h6 className="text-dark mb-2">Famous Dave's Bar-bque</h6>
                                        <p className="text-secondary mb-3">Vegetarian • Indian • Pure veg</p>
                                        <p className="text-secondary mb-3">
                                            <span className="bg-light text-dark rounded-sm py-1 px-2">
                                                <i className="bi bi-clock"></i> &nbsp; 15-30 min
                                            </span>
                                            <span className="float-end text-secondary">
                                                Rs.190
                                            </span>
                                        </p>
                                      
                                    </div>
                                </div>
                            </Card>
                        </div>
                     
                       
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default FeaturedItems
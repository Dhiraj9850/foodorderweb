import React from 'react'
import Card from '../UI/Card'

const Mostseller = () => {
    return (
        <div className="bg-semilight py-3">
            <div className="container">
                <div className="py-3 title d-flex align-items-center">
                    <h5 className="text-dark m-0">Most Sells</h5>
                    <a href="" className="text-danger text-decoration-none link fw-bold ms-auto">26 places <small><i className="bi bi-chevron-right"></i></small></a>
                </div>
                <div className="row">
                    <div className="col-4">
                        <Card>
                            <div className="d-flex flex-row">
                                <div className="sell-card-image position-relative ">
                                    <div className="rating position-absolute">
                                        <span className="badge rounded-end-0 text-bg-danger">40% Off</span>
                                    </div>
                                    <div className="member-plan position-absolute">
                                        <span className="badge  text-bg-dark">Promoted</span>
                                    </div>
                                    <a href="">
                                        <img src="/images/sales/sales.png" className="img-fluid item-img w-100" alt="" />
                                    </a>
                                </div>
                                <div className="p-3 position-relative overflow-hidden">
                                    <div className="content-card-body">
                                        <h6 className="text-dark mb-2">Famous Dave's Bar-bque</h6>
                                        <p className="text-secondary mb-1 small">• North • Hamburgers</p>
                                        <p className="text-secondary my-3 p-0">
                                            <span className="bg-light text-dark rounded-sm">
                                                <i className="bi bi-clock"></i> &nbsp; 15-30 min
                                            </span>
                                        </p>
                                        <div className="offer-badge">
                                            <span className="badge rounded-pill text-bg-success"><i className="bi bi-star"></i><span className="ms-1">3.4 (300+)</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-4">
                        <Card>
                            <div className="d-flex flex-row">
                                <div className="sell-card-image position-relative ">
                                    <div className="rating position-absolute">
                                        <span className="badge rounded-end-0 text-bg-danger">40% Off</span>
                                    </div>
                                    <div className="member-plan position-absolute">
                                        <span className="badge  text-bg-dark">Promoted</span>
                                    </div>
                                    <a href="">
                                        <img src="/images/sales/sales.png" className="img-fluid item-img w-100" alt="" />
                                    </a>
                                </div>
                                <div className="p-3 position-relative overflow-hidden">
                                    <div className="content-card-body">
                                        <h6 className="text-dark mb-2">Famous Dave's Bar-bque</h6>
                                        <p className="text-secondary mb-1 small">• North • Hamburgers</p>
                                        <p className="text-secondary my-3 p-0">
                                            <span className="bg-light text-dark rounded-sm">
                                                <i className="bi bi-clock"></i> &nbsp; 15-30 min
                                            </span>
                                        </p>
                                        <div className="offer-badge">
                                            <span className="badge rounded-pill text-bg-success"><i className="bi bi-star"></i><span className="ms-1">3.4 (300+)</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-4">
                        <Card>
                            <div className="d-flex flex-row">
                                <div className="sell-card-image position-relative ">
                                    <div className="rating position-absolute">
                                        <span className="badge rounded-end-0 text-bg-danger">40% Off</span>
                                    </div>
                                    <div className="member-plan position-absolute">
                                        <span className="badge  text-bg-dark">Promoted</span>
                                    </div>
                                    <a href="">
                                        <img src="/images/sales/sales.png" className="img-fluid item-img w-100" alt="" />
                                    </a>
                                </div>
                                <div className="p-3 position-relative overflow-hidden">
                                    <div className="content-card-body">
                                        <h6 className="text-dark mb-2">Famous Dave's Bar-bque</h6>
                                        <p className="text-secondary mb-1 small">• North • Hamburgers</p>
                                        <p className="text-secondary my-3 p-0">
                                            <span className="bg-light text-dark rounded-sm">
                                                <i className="bi bi-clock"></i> &nbsp; 15-30 min
                                            </span>
                                        </p>
                                        <div className="offer-badge">
                                            <span className="badge rounded-pill text-bg-success"><i className="bi bi-star"></i><span className="ms-1">3.4 (300+)</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Mostseller
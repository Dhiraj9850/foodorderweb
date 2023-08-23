import React from 'react'

const Reviews = () => {
    return (

        <div className="shadow-sm p-3 bg-white rounded mb-3">
            <a href="#" className="text-primary fw-semibold x-big float-end text-decoration-none">Top Rated</a>
            <h5 className="text-dark mb-1">All Ratings and Reviews</h5>
            <div className="review my-2">
                <div className="review-header p-2">
                    <div className="d-flex align-items-center">
                        <div className="avtar-image">
                            <a href="">
                                <img src="/images/profile/profile.jpg" className="rounded-circle" width="38" height="38" alt="" />
                            </a>
                        </div>
                        <div className="ms-2">
                            <p className="text-dark x-big fw-semibold mb-0">Steve smith</p>
                            <p className="text-muted small mb-0">Tue 30 May,2023</p>
                        </div>
                        <div className="ratings ms-auto" style={{ fontSize: '11px' }}>
                            <i className="bi bi-star ms-1 text-warning"></i>
                            <i className="bi bi-star ms-1 text-warning"></i>
                            <i className="bi bi-star ms-1 text-warning"></i>
                            <i className="bi bi-star ms-1 text-warning"></i>
                            <i className="bi bi-star ms-1"></i>
                        </div>

                    </div>

                </div>
                <div className="review-body p-2 border-bottom">
                    <p className="mb-0 small text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, nemo! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, velit?</p>
                </div>
            </div>
            <div className="review my-2">
                <div className="review-header p-2">
                    <div className="d-flex align-items-center">
                        <div className="avtar-image">
                            <a href="">
                                <img src="/images/profile/profile.jpg" className="rounded-circle" width="38" height="38" alt="" />
                            </a>
                        </div>
                        <div className="ms-2">
                            <p className="text-dark x-big fw-semibold mb-0">Steve smith</p>
                            <p className="text-muted small mb-0">Tue 30 May,2023</p>
                        </div>
                        <div className="ratings ms-auto" style={{ fontSize: '11px' }}>
                            <i className="bi bi-star ms-1 text-warning"></i>
                            <i className="bi bi-star ms-1 text-warning"></i>
                            <i className="bi bi-star ms-1 text-warning"></i>
                            <i className="bi bi-star ms-1 text-warning"></i>
                            <i className="bi bi-star ms-1"></i>
                        </div>

                    </div>

                </div>
                <div className="review-body p-2">
                    <p className="mb-0 small text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, nemo! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, velit?</p>
                </div>
            </div>
            <div className="more border-top py-2 text-center">
                <a className="text-primary x-big mb-0 text-decoration-none fw-semibold" href="#">See All Reviews</a>
            </div>
        </div>

    )
}

export default Reviews
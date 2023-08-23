import React from 'react'

const Rating = () => {
    return (
        <div className="shadow-sm bg-white p-3 rounded mb-3">
            <h5 className="text-dark">Ratings and Reviews</h5>
            <p className="text-muted small mb-4 mt-1">Rated 3.5 out of 5</p>
            <div className="star-rating-body">
                <div className="rating-list d-flex align-items-center justify-content-between my-2">
                    <div className="rating-list-left text-muted fw-bold small">
                        5 star
                    </div>
                    <div className="rating-list-center">
                        <div className="progress">
                            <div role="progressbar" aria-valuenow="56" aria-valuemin="0" className="progress-bar bg-info"></div>
                        </div>
                    </div>
                    <div className="rating-list-right fw-semibold text-muted small">
                        56%
                    </div>
                </div>
                <div className="rating-list d-flex align-items-center justify-content-between my-2">
                    <div className="rating-list-left text-muted fw-bold small">
                        4 star
                    </div>
                    <div className="rating-list-center">
                        <div className="progress">
                            <div role="progressbar" aria-valuenow="23" aria-valuemin="0" className="progress-bar2 bg-info"></div>
                        </div>
                    </div>
                    <div className="rating-list-right fw-semibold text-muted small">
                        23%
                    </div>
                </div>
                <div className="rating-list d-flex align-items-center justify-content-between my-2">
                    <div className="rating-list-left text-muted fw-bold small">
                        3 star
                    </div>
                    <div className="rating-list-center">
                        <div className="progress">
                            <div role="progressbar" aria-valuenow="23" aria-valuemin="0" className="progress-bar3 bg-info"></div>
                        </div>
                    </div>
                    <div className="rating-list-right fw-semibold text-muted small">
                        11%
                    </div>
                </div>
                <div className="rating-list d-flex align-items-center justify-content-between my-2">
                    <div className="rating-list-left text-muted fw-bold small">
                        2 star
                    </div>
                    <div className="rating-list-center">
                        <div className="progress">
                            <div role="progressbar" aria-valuenow="23" aria-valuemin="0" className="progress-bar4 bg-info"></div>
                        </div>
                    </div>
                    <div className="rating-list-right fw-semibold text-muted small">
                        6%
                    </div>
                </div>
                <div className="rating-list d-flex align-items-center justify-content-between my-2">
                    <div className="rating-list-left text-muted fw-bold small">
                        1 star
                    </div>
                    <div className="rating-list-center">
                        <div className="progress">
                            <div role="progressbar" aria-valuenow="23" aria-valuemin="0" className="progress-bar5 bg-info"></div>
                        </div>
                    </div>
                    <div className="rating-list-right fw-semibold text-muted small">
                        3%
                    </div>
                </div>
            </div>
            <button className="btn btn-sm btn-primarygred w-100 my-3">Rate and Review</button>
        </div>

    )
}

export default Rating
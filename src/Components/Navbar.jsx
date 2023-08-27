import React from 'react'

const Navbar = () => {
    
    return (
        <nav className="bg-navbar shadow">
            <div className="container">
                <div className="row align-items-center py-1">
                    <div className="col-1">
                        <a href="" className="">
                            <img src="/images/logo/logo.png" className="img-fluid" width="37px" alt="" />
                        </a>
                    </div>
                    <div className="col-3 d-flex align-items-center">
                        <div className="dropdown">
                            <a className="text-dark d-flex align-items-center dropdown-toggle py-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <div>
                                    <i className="bi bi-geo-alt p-2 me-2"></i>
                                </div>
                                <div className="searchbox">
                                    <p className="text-muted mb-0 small">Select location</p>
                                    Nashik
                                </div>
                            </a>

                            <ul className="dropdown-menu drop-loc p-0 border-0">
                                <div className="searchcountry ">
                                    <div className="bg-primary p-3 text-end">
                                        <div className="input-group bg-white rounded shadow-sm">
                                            <span className="input-group-text bg-transparent border-0 rounded-0 " id="basic-addon1"><i className="bi bi-search"></i></span>
                                            <input type="text" className="form-control bg-transparent border-0 rounded-0 px-0 shadow-none" placeholder="Enter Your Location" aria-label="" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                    <div className="p-3 border-bottom">
                                        <a href="" className="text-decoration-none">
                                            <p className="fw-bold texy-primary m-0">
                                                <i className="bi bi-geo p-2 me-1"></i>
                                                Nashik,India
                                            </p>
                                        </a>
                                    </div>


                                </div>

                            </ul>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="d-flex align-items-center  justify-content-end flex-row pe-3">
                            <a href="" className="text-dark me-4 text-decoration-none">
                                <div className="icon d-flex align-items-center">
                                    <i className="bi bi-search me-2"></i>
                                    <span className="text-dark">Search</span>
                                </div>
                            </a>
                            <a href="" className="btn btn-primary me-4">
                                <div className="icon">
                                    <i className="bi bi-record-circle me-2"></i>
                                    <span>Offers</span>
                                </div>
                            </a>
                            <a href="" className="text-dark me-4 text-decoration-none">
                                <div className="usericon d-flex align-items-center">
                                    <i className="bi bi-person me-2"></i>
                                    <span className="text-dark">Sign in</span>
                                </div>
                            </a>
                            <div className="dropdown">
                                <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle me-4" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle me-2" />
                                    <span>Hi Dhiraj</span>
                                </a>
                                <ul className="dropdown-menu text-small border-0">
                                    <li><a className="dropdown-item" href="#">New project...</a></li>
                                    <li><a className="dropdown-item" href="#">Settings</a></li>
                                    <li><a className="dropdown-item" href="#">Profile</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                                </ul>
                            </div>
                            <a href="" className="text-dark me-4 text-decoration-none">
                                <div className="usericon d-flex align-items-center">
                                    <i className="bi bi-cart2 me-2"></i>
                                    <span className="text-dark">Cart</span>
                                </div>
                            </a>
                            <label>
                                <div className="bar">
                                    <span className="top"></span>
                                    <span className="middle"></span>
                                    <span className="bottom"></span>
                                </div>
                            </label>

                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
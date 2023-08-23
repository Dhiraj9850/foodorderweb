import React from 'react'
// import Modal from '../UI/Modal'

const Footer = () => {
    return (
        <>
            <footer className="section-footer">

            </footer>
          
            <div className="modal fade" id="extras" tabIndex="-1" aria-labelledby="extrasLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="extrasLabel">Extras</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="">
                                <div className="extras-recipie">
                                    
                                    <h5 className="fw-semibold mt-4 mb-2">QUANTITY</h5>
                                    <div className="d-flex align-items-center">
                                        <p className="m-0 big">1 item</p>
                                        <div className="ms-auto">
                                            <span className="count-number">
                                                <button className="btn btn-sm btn-outline-secondary dec" type="button">
                                                    <i className="bi bi-dash"></i>
                                                </button>
                                                <input type="text" className="count-number-input" readOnly value={1} />
                                                <button className="btn btn-sm btn-outline-secondary inc" type="button">
                                                    <i className="bi bi-plus"></i>
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                        <div className="modal-footer p-0 border-0">
                <div className="col-6 p-0 m-0">
                    <button className="btn btn-lg border-top w-100 rounded-0 p-3 modaldismiss" data-bs-dismiss="modal">Close</button>
                </div>
                <div className="col-6 p-0 m-0">
                    <button className="btn btn-primarygred btn-lg border-top w-100 rounded-0 p-3 modalapply" data-bs-dismiss="modal">Apply</button>
                </div>
            </div>
                    </div>
                </div>
            </div>
           
        </>

    )
}

export default Footer
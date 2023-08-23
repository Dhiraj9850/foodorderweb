import React from 'react';

const Modal = ({ modalId, children, title, footer }) => {

    return (
        <div>
            <div className="form-check custom-radio border-bottom py-2">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="input1" />
                <label className="form-check-label x-big" htmlFor="input1">
                    red chilli sauce
                    <span className='text-muted fw-normal ms-1'>Rs.35</span>
                </label>
            </div>
            <div className="form-check custom-radio border-bottom py-2">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="input2" />
                <label className="form-check-label x-big" htmlFor="input2">
                    cheese crushed
                    <span className='text-muted fw-normal ms-1'>Rs.30</span>
                </label>
            </div>
            <div className="form-check custom-radio border-bottom py-2">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="input3" />
                <label className="form-check-label x-big" htmlFor="input3">
                    plain maggie
                    <span className='text-muted fw-normal ms-1'>Rs.20</span>
                </label>
            </div>
            <div className="form-check custom-radio border-bottom py-2">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="input3" />
                <label className="form-check-label x-big" htmlFor="input3">
                    white sauce pasta
                    <span className='text-muted fw-normal ms-1'>Rs.70</span>
                </label>
            </div>
            <div className="form-check custom-radio border-bottom py-2">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="input3" />
                <label className="form-check-label x-big" htmlFor="input3">
                    thumbs up coke
                    <span className='text-muted fw-normal ms-1'>Rs.20</span>
                </label>
            </div>
        </div>
    );
};

export default Modal;

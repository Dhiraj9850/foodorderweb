import React, { useState } from 'react'


const ExtrasModal = (props) => {
    const { showModal, handleClose, handleExtrasContinue, menuItem } = props;

    const [selectedExtras, setSelectedExtras] = useState([]);
   

    const handleExtrasToggle = (extra) => {
        if (selectedExtras.includes(extra.name)){
            setSelectedExtras(selectedExtras.filter(item => item !== extra.name))
        }
        else{
            setSelectedExtras([...selectedExtras, extra.name])
        }
    }

    
    const handleContinueClick = () => {
        setTimeout(() => {
            const selectedExtraObjects = menuItem.extras.filter(extra => selectedExtras.includes(extra.name));
            handleExtrasContinue(selectedExtraObjects,selectedExtras);
            console.log("Selected Extra Objects:", selectedExtraObjects);
        }, 800);
      

    }

    
    const calculateTotalPrice=()=>{
        const basePrice= menuItem.price;
        const extrasTotal = selectedExtras.reduce((total,extraName)=>{
            const extra = menuItem.extras.find(extra=>extra.name===extraName);
            return total + extra.price;
        },0)
        return basePrice + extrasTotal;
    }

    
    return (
        <div>
            <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showModal ? 'block' : 'none' }}>
                <div className="modal-dialog modal-dialog-centered" style={{ transform: showModal ? 'translate(0, 0)' : 'translate(0, 100vh)' }}>
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <div className="d-flex flex-column">
                                <h5 className="modal-title" id="extrasLabel">Customize "{menuItem.name}"</h5>
                                <span className="text-muted x-big">Rs.{menuItem.price}</span>
                            </div>
                            <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>

                        </div>
                        <div className="modal-body">
                            <h5 className="text-dark py-3">Add Extras</h5>
                            {menuItem.extras.map(extra=> (
                                <div className="d-flex align-items-center my-3"key={extra.name}>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" 
                                        checked={selectedExtras.includes(extra.name)}
                                        onChange={()=>handleExtrasToggle(extra)}/>
                                    </div>
                                    <label className="label">
                                        <div className="text-dark extraslabel">
                                            <span>{extra.name}</span>
                                            <span className="text-muted ms-2 big">+Rs.{extra.price}</span>
                                        </div>
                                    </label>
                                    
                                </div>
                            ))}




                        </div>
                        <div className="modal-footer mx-3 mt-3">

                            <div className="col-12 ">
                                <button className="btn btn-primarygred border-top w-100 rounded-0  modalapply" onClick={handleContinueClick}>
                                    <div className="d-flex justify-content-between">
                                        <span className="fw-light text-white">Rs.{calculateTotalPrice()}</span>
                                        <span className="fw-light text-light">ADD ITEM</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && <div className="modal-backdrop fade show"></div>}
        </div>
    )
}

export default ExtrasModal
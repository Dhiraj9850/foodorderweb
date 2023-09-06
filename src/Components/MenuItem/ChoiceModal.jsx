import React from 'react';

const ChoiceModal = (props) => {
  const { showModal, handleClose, handleChoice } = props;

  return (
    <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showModal ? 'block' : 'none' }}>
      <div className="modal-dialog modal-dialog-centered" style={{ transform: showModal ? 'translate(0, 0)' : 'translate(0, 100vh)' }}>
        <div className="modal-content rounded-0">
          <div className="modal-header">
            <div className="d-flex flex-column">
              <h5 className="modal-title" id="choiceLabel">Choose Action</h5>
            </div>
            <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>How would you like to proceed?</p>
            <div className="d-flex justify-content-between">
              <button className="btn btn-primarygred border-top w-48 rounded-0" onClick={() => handleChoice('iWillChoose')}>I'll Choose</button>
              <button className="btn btn-primarygred border-top w-48 rounded-0" onClick={() => handleChoice('repeatSame')}>Repeat Same</button>
            </div>
          </div>
        </div>
      </div>
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
};

export default ChoiceModal;

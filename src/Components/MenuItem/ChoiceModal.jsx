import React from 'react';

const ChoiceModal = (props) => {
  const { showModal, handleClose, handleChoice } = props;

  return (
    <div>
      <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog modal-dialog-centered" style={{ transform: showModal ? 'translate(0, 0)' : 'translate(0, 100vh)' }}>
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title">Choice Modal</h5>
              <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Choose an option:</p>
              <button className="btn btn-primary" onClick={() => handleChoice('iWillChoose')}>
                I'll Choose
              </button>
              <button className="btn btn-secondary ms-2" onClick={() => handleChoice('repeatSame')}>
                Repeat Same
              </button>
            </div>
          </div>
        </div>
      </div>
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
};

export default ChoiceModal;
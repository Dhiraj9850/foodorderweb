import React from 'react'

const Cart = (props) => {
  const { handleIncrement, cartItems, handleDecrement } = props

  
   const calculateTotal=()=>{
      let total = 0;

      for(const cartItem of cartItems){
         total += cartItem.menuItem.price * cartItem.quantity;

         if(cartItem.menuItem.selectedExtras){
            for(const extra of cartItem.menuItem.selectedExtras){
               total+= extra.price;
            }
         }
      }
      return total;
   }
  
  return (
    <div>
      <div className="shadow-sm rounded overflow-hidden bg-white mb-3">
        <div className="d-flex border-bottom align-items-center p-2">
          <img src="/images/hotelprofile/hotelprofile.jpg" className="rounded-circle img-fluid me-3" alt="hotel" width="45px" />
          <div className="d-flex flex-column">
            <h6 className="mb-1 fw-bold fs-6 ps-2">xyz Restarant</h6>
            <p className='text-muted mb-0 small'><i className="bi bi-geo-alt me-1"></i>
              22,noida sector,delhi
            </p>
          </div>
        </div>
        <div className="bg-white border-bottom py-2">
          {cartItems.map((cartItem, index) => (
            <div>
              <div className="cartmenu d-flex align-items-center justify-content-between px-3 py-2 border-top" key={index}>
                <div className="d-flex align-items-center">
                  <div className={`me-2 text-${cartItem.menuItem.isVeg ? 'success' : 'danger'} ${cartItem.isVeg ? 'veg' : 'non-veg'}`}>·</div>
                  <div className="menu-body">
                    <p className="big m-0">{cartItem.menuItem.name}</p>
                  
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <span className="count-number">
                    <button className="btn btn-sm btn-outline-secondary dec" onClick={() => handleDecrement(cartItem)} type="button">
                      <i className="bi bi-dash"></i>
                    </button>
                    <input type="text" className="count-number-input" readOnly value={cartItem.quantity} />
                    <button className="btn btn-sm btn-outline-secondary inc" onClick={() => handleIncrement(cartItem)} type="button">
                      <i className="bi bi-plus"></i>
                    </button>
                  </span>
                  <p className="text-muted small mb-0 ms-2">Rs.{cartItem.menuItem.price}</p>
                </div>
              </div>
              <div className="px-3">
              {cartItem.menuItem.selectedExtras && <h6 className="text-secondary  border-top-dashed">Extras</h6>}
              {cartItem.menuItem.selectedExtras && cartItem.menuItem.selectedExtras.map(extra=>(
                <div className="">
                   <div className="d-flex justify-content-between my-2">
                      <span className="cart-extra-name big">{extra.name}</span>
                      <span className="cart-extra-price big">+ Rs.{extra.price}</span>
                   </div>
              </div>
              ))}
              </div>
              


            </div>
          ))}
        </div>
        <div className="bg-white border-bottom p-3">
          <div className="input-group input-group-sm">
            <input type="text" className="form-control promoinput" placeholder="Enter Promo code" />
            <button className="btn btn-primarygred text-white" id="basic-addon2">% APPLY</button>
          </div>

        </div>
        <div className="bg-white border-bottom p-3">
          <p className="mb-2 big text-muted">
            Item Total
            <span className="text-dark float-end">Rs.{calculateTotal()}</span>
          </p>
          <p className="mb-2 big text-muted">
            Restarant Charges
            <span className="text-dark float-end">Rs.10</span>
          </p>
          <p className="mb-2 big text-muted">
            Delivery Charges
            <span className="text-dark float-end">Rs.20</span>
          </p>
          <p className="mb-2 big text-success">
            Total Discount
            <span className="float-end">Rs.90</span>
          </p>
          <hr />
          <h6 className="fw-semibold">
            TO PAY
            <span className="float-end">Rs.150</span>
          </h6>
        </div>
        <div className="p-3">
          <button className="btn btn-lg btn-success w-100 paymentbtn">PAY Rs.150 <i className="bi bi-arrow-right"></i></button>
        </div>
      </div>
    </div>
  )
}

export default Cart
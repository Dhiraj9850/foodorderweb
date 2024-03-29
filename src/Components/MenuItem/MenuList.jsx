import React, { useState } from 'react'
import ExtrasModal from './ExtrasModal';
import ChoiceModal from './ChoiceModal';

const MenuList = (props) => {

    const { addToCart, handleDecrement, handleIncrement, cartItems } = props

    const [showextrasModal, setShowextrasModal] = useState(false);
    const [showChoiceModal, setShowChoiceModal] = useState(false);

    const [selectedMenuItem, setSelectedMenuItem] = useState(null);
    const [selectedExtras, setSelectedExtras] = useState([]);


    const menuItems = [
        {
            name: 'plain maggie',
            price: 30,
            category: 'Quick Bites',
            extras: [
                {
                    name: "cheese",
                    price: 30
                }, {
                    name: "peri peri sauce",
                    price: 20
                }
            ],
            isVeg: true
        },
        {
            name: 'Cheese maggie',
            price: 60,
            category: 'Quick Bites',
            isVeg: true
        },
        {
            name: 'chicken biryani',
            price: 160,
            category: 'Main Course',
            extras: [
                {
                    name: "half",
                    price: 0
                },
                {
                    name: "full",
                    price: 60
                }
            ],
            isVeg: false
        },
        {
            name: 'veg biryani',
            price: 120,
            category: 'Main Course',
            isVeg: true
        },
        {
            name: 'chicken momos',
            price: 190,
            category: 'Starters',
            isVeg: false
        },
        {
            name: 'veg korma',
            price: 360,
            category: 'Main Course',
            isVeg: true
        },
        {
            name: 'panner lababdar',
            price: 190,
            category: 'Main Course',
            isVeg: true
        },
        {
            name: 'panner chilli',
            price: 190,
            category: 'Starters',
            isVeg: true
        }
    ]

    const handleAddWithoutExtras = (menuItem) => {
        if (menuItem.extras) {
            setSelectedMenuItem(menuItem);
            setShowextrasModal(true);
        }
        else {
            addToCart(menuItem);
        }
    }


    const handleCloseExtrasModal = () => {
        setSelectedMenuItem(null);
        setShowextrasModal(false);
    }

    const openChoiceModal=()=>{
        setShowChoiceModal(true);
    }    

    const handleChoice =(choice)=>{
        if(choice ==='iWillChoose'){
            setShowextrasModal(true);
        }
        else if(choice === 'repeatSame'){
            addToCart(selectedMenuItem,selectedExtras)
        }
        setShowChoiceModal(false);
    }

    const handleIncrementWithChoice=(menuItem)=>{
       const cartItem = cartItems.find(item=>item.menuItem.name===menuItem.name);

       if(cartItem && cartItem ===1){
          setSelectedMenuItem(menuItem);
          openChoiceModal();
       }
       else{
        handleIncrement(menuItem);
       }
    }

   
    const handleExtrasContinue = (selectedExtras) => {
        const customizeMenuItem = {
            ...selectedMenuItem,
            selectedExtras: selectedExtras.map(extra => ({
                name: extra.name,
                price: extra.price
            }))
        };

        addToCart(customizeMenuItem);
        setShowextrasModal(false);
        setSelectedMenuItem(null);
    }

    const categories = [...new Set(menuItems.map(item => item.category))]
    


    return (
        <div>
            <div className="shadow-sm rounded bg-white mb-3 overflow-hidden">
                <div className="d-flex align-items-center">
                    <p className="fw-bold text-dark border-bottom w-100 p-3 mb-0">Menu</p>
                </div>

                {categories.map((category) => (
                    <div className="row m-0" key={category}>
                        <h6 className="p-3 bg-light m-0 w-100">{category}
                            <small className="text-black-50 ms-2">({menuItems.filter(item => item.category === category).length} items)</small>
                        </h6>
                        {menuItems
                            .filter((item) => item.category === category)
                            .map((menuItem) => {
                                const cartItem = cartItems.find((cartItem) => cartItem.menuItem.name === menuItem.name);
                                return (
                                    <div className="col-md-12 mx-0 border-top" key={menuItem.name}>
                                        <div>
                                            <div className="d-flex gap-2 p-3 border-bottom">
                                                <div
                                                    className={`fw-bold text-${menuItem.isVeg ? 'success' : 'danger'} text-center ${menuItem.isVeg ? 'veg' : 'non-veg'
                                                        }`}
                                                >
                                                    .
                                                </div>
                                                <div>
                                                    <h6 className="mb-1">{menuItem.name}</h6>
                                                    <p className="text-muted mb-0 big">Rs.{menuItem.price}</p>
                                                </div>
                                                {cartItem ? (
                                                    <div className="ms-auto">
                                                        <div className="d-flex align-items-center">
                                                            <span className="countadd">
                                                                <button className="btn  btn-outline-danger  dec" onClick={() => handleDecrement(cartItem)} type="button">
                                                                    <i className="bi bi-dash "></i>
                                                                </button>

                                                                <input type="text" className="count-number-input" readOnly value={cartItem.quantity} />

                                                                <button className="btn btn-outline-danger inc" onClick={() => handleIncrement(cartItem)} type="button">
                                                                    <i className="bi bi-plus"></i>
                                                                </button>
                                                            </span>
                                                           
                                                        </div>
                                                    </div>

                                                ) : (
                                                    <span className="ms-auto">
                                                        <button
                                                            className="btn btn-sm btn-outline-danger addbtn"
                                                            onClick={() => handleAddWithoutExtras(menuItem)}
                                                        >
                                                            ADD
                                                        </button>
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                ))}
            </div>
            {selectedMenuItem &&
                <ExtrasModal showModal={showextrasModal}
                    handleClose={handleCloseExtrasModal}
                    menuItem={selectedMenuItem}
                    handleExtrasContinue={handleExtrasContinue}
                />
            }
        {showChoiceModal && (
        <ChoiceModal
          showModal={showChoiceModal}
          handleClose={() => setShowChoiceModal(false)}
          handleChoice={handleChoice}
        />
      )}
            
        </div>
    )
}

export default MenuList
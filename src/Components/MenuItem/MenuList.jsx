import React from 'react'


const MenuList = ({addToCart}) => {
  

   
    const menuItems = [
        {
            name: 'plain maggie',
            price: 30,
            category: 'Quick Bites',
            extras:["cheese","sauce","peri peri sauce"],
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
            extras:["half","full"],
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
                        {menuItems.filter(item => item.category === category)
                            .map((menuItem, index) => (
                                <div className="col-md-12 mx-0 border-top">
                                    <div>
                                        <div className="d-flex gap-2 p-3 border-bottom" key={index}>
                                            <div className={`fw-bold  text-${menuItem.isVeg ? 'success' : 'danger'} text-center ${menuItem.isVeg ? 'veg' : 'non-veg'}`}>.</div>
                                            <div>
                                                <h6 className="mb-1">{menuItem.name}</h6>
                                                <p className="text-muted mb-0 big">Rs.{menuItem.price}</p>
                                            </div>
                                            <span className="ms-auto">
                                                <button className="btn btn-sm btn-outline-danger" onClick={()=>addToCart(menuItem)}>ADD</button>
                                            </span>

                                        </div>

                                    </div>
                                </div>
                            ))
                        }

                    </div>
                ))}

                
            </div>
        </div>





    )
}

export default MenuList
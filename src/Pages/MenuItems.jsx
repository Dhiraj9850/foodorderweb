import React,{useState} from 'react'
import Navbar from '../Components/Navbar'
import Abouthotel from '../Components/MenuItem/Abouthotel'
import FeaturedItems from '../Components/MenuItem/FeaturedItems'
import MenuList from '../Components/MenuItem/MenuList'
import Rating from '../Components/MenuItem/Rating'
import Footer from '../Components/Footer'
import Reviews from '../Components/MenuItem/Reviews'
import AddReview from '../Components/MenuItem/AddReview'
import Cart from '../Components/MenuItem/Cart'

const MenuItems = () => {

  const [cartItems, setCartItems] = useState([]);

  const addToCart=(menuItem,selectedExtras)=>{
       const existingMenu = cartItems.find(item=>item.menuItem.name===menuItem.name);

       if(existingMenu){
          const updatedCart = cartItems.map(item=>item.menuItem.name === menuItem.name?{...item,quantity:item.quantity + 1}:item);
          setCartItems(updatedCart);
       }
       else{
         setCartItems([...cartItems,{menuItem,selectedExtras,quantity:1}]);;
       }
  }

  const handleIncrement=(cartItem)=>{
    const index = cartItems.findIndex(item=>item.menuItem===cartItem.menuItem);

    if(index !== -1){
      const updatedCart = [...cartItems];
      updatedCart[index] = {...updatedCart[index],quantity:updatedCart[index].quantity + 1};
      setCartItems(updatedCart);
    }
  }
  
  const handleDecrement =(cartItem)=>{
     const updatedCart = cartItems.map(item=>item.menuItem === cartItem.menuItem ? {...item,quantity:item.quantity-1}:item);

     const filteredCart= updatedCart.filter(item=>item.quantity > 0);
     setCartItems(filteredCart);
  }

  return (
    <>
      <Navbar />
      <Abouthotel />
      <FeaturedItems />
      <div className="bg-semilight">
        <div className="container position-relative">
          <div className="row pt-3">
            <div className="col-md-8">
              <MenuList  addToCart={addToCart}/>
              <Rating />
              <Reviews />
              <AddReview />
            </div>
            <div className="col-md-4">
              <div className="cart-sticky">
                 <Cart cartItems={cartItems} handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default MenuItems
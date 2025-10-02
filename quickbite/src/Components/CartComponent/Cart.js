import React, { useContext, useEffect, useState} from 'react'
import Header from '../OnlineOrderHeader/OnlineOrderHeader';
import { cartcontext } from '../../Context/CartContext';
import '../CartComponent/Cart.css';
import lottie from 'lottie-react';
import loading from '../../Loading.json';

import Modal from '../modal/modal.js';
import PaymentModal from '../modal/paymentModal.js';


const Cart = () => {
   
   const[isActive,setIsActive] = useState(false);
   

   const {cart,handleDecrease,handleIncrease,handleSetOpen,open,openPayment,handleSetOpenPayment} = useContext(cartcontext);
   
  const deliveryfee = 20;
  
  const subtotal = cart.reduce((acc,item) => {
        return acc = acc + (item.price * item.quantity);
  },0);

  const checkCartState = () => {
     if(cart.length !== 0 && isActive === false){
        setIsActive(true);
     }
     else if (cart.length === 0 && isActive === true){
        setIsActive(false);
     }
     else{
        return;
     }
  }
 
   useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const status = params.get("status");

    if (status === "success") {
        handleSetOpen(true);
       
        setTimeout(() => {
         handleSetOpen(false);
         handleSetOpenPayment(true);
          setTimeout(() => {
                  handleSetOpenPayment(false);
               }, 2000); // runs 2s AFTER the first one
        },4000)

      

    } else if (status === "cancel") {
      alert("Payment failed or cancelled."); // or show toast/modal
    }
  }, []);

  useEffect(() => {
     checkCartState();
  },[cart,open]);
  
  const total = subtotal + deliveryfee;
  
  //handling checkout button
  const handleCheckout = async() => {
    try{  
         
          const res = await fetch("http://localhost:4000/create-checkout-session", {
         method: "POST",
        headers : {
                      "Content-Type": "application/json"
                  },
        body : JSON.stringify({cart})
  });
     const data = await res.json();
      if (!data.url) {
      throw new Error("Stripe session URL is undefined");
    }
    window.location.href = data.url;
    } 
   catch(err){
        console.log('Error message >' ,err);
   }
  }
  


  console.log(cart);

  
//   <Lottie animationData={loading}/>
  


  return (
    <div className='parent-cart-container'>
         <Header/>
         <div className='cart-container'>
            <div className={isActive ? 'myCart' : 'myCartEmpty'}>
                        <h2 className='cart-h2'>My Cart</h2>
                    {  cart.length !==0 ?
                        cart.map((item) => {
                        return <div className='cart-item' key={item.id}>
                                    <div className='image-container'>
                                        <img src={item.image} alt=''/>
                                    </div>
                                    
                                    <div className='details'>
                                    <p className='title'>{item.title}</p>
                                    <p className='price'>{`Rs ${item.price * item.quantity}`}   </p>
                                    </div>
                                    <div className="quantity-control">
                                        <button className='count-btn' onClick={() => handleDecrease(item.id)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button className='count-btn' onClick={() => handleIncrease(item.id)}>+</button>
                                    </div>
                                </div> 
                        }) :
                        <>
                        <h2 className='empty-cart'>Your cart is empty</h2>
                        </>
                    }
            </div>
            {
                cart.length !==0 ? 
                 <div className='order-summary'>
                    <h2>Order Summary</h2>
                    <p>Subtotal <span>{`Rs ${subtotal}`}</span></p> 
                    <p>Delivery fee <span>{`Rs ${deliveryfee}`}</span></p>
                    <p className='total'>Total <span className='total'>{`Rs ${total}`}</span></p>
                    <button className='checkout-btn' onClick={handleCheckout}>Checkout</button>
                 </div>
                 :
                 null
            }    
         </div>
         <div>
           <Modal/>
         </div>
         <div>
            <PaymentModal/>
         </div>
        
            
    </div>
  )
}

export default Cart;    

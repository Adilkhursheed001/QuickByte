import VegPizza from '../assets/veg-pizza.jpg';
import NonVeg from '../assets/Non-Veg-Pizza.jpg';
import Tacos from '../assets/Tacos.jpg';
import './PizzaCave-Order.css';
import { useContext} from 'react';
import { cartcontext } from '../../../Context/CartContext';

const PizzaCaveOrderConatiner = () => {
   
    const { cart,addToCart,handleDecrease,handleIncrease} = useContext(cartcontext); 
    


    let PizzaCaveMenuObj = [
        {
            id:1,
            image:VegPizza,
            title:'Veg-Pizza',
            price:281,
            description:"A fiery fusion topped with juicy Korean chicken, crunchy veggies, sweet corn and seekh kebab, all drizzled in bold Korean sauce.",
            quantity:1
        },
        {
             id:2,
            image:NonVeg,
            title:'Non-Veg Pizza',
            price:259,
            description:"A fiery fusion pizza topped with Nashville sauce, vibrant capsicum, creamy paneer, sweet corn, and smoky red paprika.",
            quantity:1
        },
        {
             id:3,
            image:Tacos,
            title:'Tacos',
            price:98,
            description:"Tacos filled with Korean-style spiced chicken for a fiery fusion flavor.",
            quantity:1
        }

    ];
        
     

   
    return(
       <div className="pizzaCaveorder-container">
          <div className='category'>
           {
              PizzaCaveMenuObj.map((item) => {
                 return <div className='order-items' key={item.id}> 
                           <div className='image-box'>
                               <img src={item.image} alt=''/>
                           </div>
                           <div className='details'>
                              <p className='food-title'>{item.title}</p>
                              <p>{`Rs ${item.price}`}</p>
                              <p>{item.description}</p>
                           </div>
                          {cart.some(cartItem => cartItem.id === item.id) ? (
                                <div className="quantity-selector">
                                    <button className='qnt-btn' onClick={() => handleDecrease(item.id)}>-</button>
                                    <span className='qnt-span'>{cart.find(cartItem => cartItem.id === item.id).quantity}</span>
                                    <button className='qnt-btn' onClick={() => handleIncrease(item.id)}>+</button>
                                </div>
                                ) : (
                                <button className='addtoCart-btn' onClick={() => addToCart(item)}>ADD</button>
                                )}
                               
                        </div>
              })
           }
           </div>
           
       </div>
    );

}

export default PizzaCaveOrderConatiner;
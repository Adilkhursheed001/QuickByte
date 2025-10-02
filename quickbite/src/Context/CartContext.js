import { createContext, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const cartcontext  = createContext();

export const CartProvider= ({children}) => {
  
    const[cart,setCart] = useState([]);
    const[open,setOpen] = useState(false);
    const[openPayment,setOpenPayment] = useState(false);
     
    const handleSetOpen = (value) => {
      setOpen(value);
    }

    const handleSetOpenPayment = (value) => {
      setOpenPayment(value)
    }


     const handleDecrease = (id) => {
        setCart((prevCount) => {
           return prevCount.map((item) => {
                return item.id === id ?
                 {...item , quantity: item.quantity - 1} : item
                })
                .filter((item) => item.quantity > 0)
        });
   }
  
    const handleIncrease = (id) => {
         setCart((prevCount) => 
           prevCount.map((item) => {
          return item.id === id ?
               { ...item , quantity: item.quantity === 0 ? 1 : item.quantity + 1 }: item;     
         })
        )
    }

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    toast.success(`Item added to your cart!`);

  };

    return (
        <cartcontext.Provider value={{cart,addToCart,setCart,handleDecrease,handleIncrease,ToastContainer,handleSetOpen,open,openPayment,handleSetOpenPayment}}>
         {children}
        </cartcontext.Provider>
    )
}
import './OnlineOrderHeader.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import { useContext} from 'react';
import { cartcontext } from '../../Context/CartContext.js';

const Header = () => {
  const navigate = useNavigate();
  
  const {cart} = useContext(cartcontext);
  console.log(cart);
  console.log('CartLength > ' , cart.length);
  
  const netQuantity = cart.reduce((acc,item) => {
    console.log('Item object >' , item);
           acc = acc + item.quantity;
           return acc;
  },0);

    return(
       <div className="Order-Online-header">
            <div className='brand-name'>QuickBite</div>
            <div className='authorization'>
                <span>Log in</span>
                <span>Sign up</span>
                <FontAwesomeIcon onClick={() => navigate('/cart')} icon={faCartShopping} size="lg" color="black" style={{marginTop:'4px'}}/>
                {
                    cart.length !== 0 ? <div className='cartItem-cnt'>{netQuantity}</div> : null
                }
                
            </div>
       </div>
    );
}

export default Header;
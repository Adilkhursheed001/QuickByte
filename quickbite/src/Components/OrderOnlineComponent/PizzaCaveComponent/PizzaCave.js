import { useState } from "react";
import { Link,useLocation } from "react-router-dom";
import Header from "../../OnlineOrderHeader/OnlineOrderHeader";
import './PizzaCave.css';
import pizza1 from './assets/pizza-cave1.jpg';
import pizza2 from './assets/pizza-cave2.jpg';
import pizza3 from './assets/pizza-cave3.jpg';
import PizzaCaveOverviewContainer from './PizzaCave-Overview';
import PizzaCaveOrderConatiner from './PizzaCave-Order';


const PizzaCaveOrder = () => {
  
    const[Active , setActive] = useState('order-online');
    const location = useLocation();

    console.log(location.pathname.endsWith('/order'));

    return (
     <div className="pizza-cave-conatiner">
         <Header/>
         <h1 className="pizza-cave-heading">Pizza Cave</h1>
         <div className="pizza-cave-image">
            <div className='pizza-cave-image-div1'>
                 <img src={pizza1} alt=""/>
            </div>
            <div className='pizza-cave-image-div2'>
                  <img src={pizza2} alt=""/>
                  <img src={pizza3} alt=""/>  
            </div>
         </div>
         <div className="pizza-cave-menu-order-headercontainer">

            <Link to="overview">
           
                <div   onClick={() => setActive("Overview")}
                    className={`pizza-cave-header ${Active === 'Overview' ? 'active' : ''}`}  >
                <h3> Overview</h3>
                <div className="line border"></div>
                </div>
            </Link>

            <Link to="order">
           
                <div   onClick={() => setActive("order-online")}
                      className={`pizza-cave-header ${Active === 'order-online' ? 'active' : ''}`}  >
                  <h3>Order Online</h3>
                  <div className="line border"></div>
                </div>
            </Link>

         </div>
         
         <>
         {location.pathname.endsWith('/order') ?(
            
            <div className="pizza-cave-order-section">
            <PizzaCaveOrderConatiner/>  
            </div>
         ) :(
            <div className="pizza-cave-overview-section">
             <PizzaCaveOverviewContainer />
            </div>
         )}
         </>
         

         
     </div>
    );
}

export default PizzaCaveOrder;
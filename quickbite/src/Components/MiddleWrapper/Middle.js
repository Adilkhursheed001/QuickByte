import "./Middle.css";
import fooddeliveryimg from './assets/fooddelivery.jpg';
import finediningimg from './assets/finedining.jpg';
import nightlifeimg from './assets/nightlife.jpeg';
import { Link } from 'react-router-dom';

const MiddleComp = () => {
  return (
    <div className="grid-container">
        <div class="grid-item">
          <Link to='/order-online'>
            <img src={fooddeliveryimg} alt='food delivery'/>
            <p className='heading'>Order Online</p>
            <p className='description'>Stay home and order to your doorstep</p>
          </Link>
           
         </div>
        <div class="grid-item">
            <img src={finediningimg} alt='fine dining'/>
            <p className='heading'>Dining</p>
            <p className='description'>View the city's favourite dining venues</p>
         </div>
        <div class="grid-item">
            <img src={nightlifeimg} alt='nightlife and clubs '/>
            <p className='heading'>Nightlife and Clubs</p>
            <p className='description'>Explore the city's top nightlife outlets</p>
         </div>
    </div>
  );
};

export default MiddleComp;

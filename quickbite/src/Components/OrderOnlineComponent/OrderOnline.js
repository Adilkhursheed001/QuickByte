import Header from "../OnlineOrderHeader/OnlineOrderHeader";
import "./OrderOnline.css";
import pizzaimg from "./assets/pizza.jpg";
import cholebhature from "./assets/Chole-Bhature.jpg";
import biryani from "./assets/biryani.jpg";
import { Link } from "react-router-dom";

const OnlineOrder = () => {
  return (
    <div className="order-online-container">
      <Header />
      <h1 className="order-heading">Restaurants</h1>
      <div className="restaurants">
        <Link to="/order-online/Pizza-Cave">
          <div className="order-grid-item">
            <img src={pizzaimg} alt="pizza image" />
            <h4>Pizza Cave</h4>
            <p>Pizza , Fast Food</p>
          </div>
        </Link>
        <div className="order-grid-item">
          <img src={cholebhature} alt="chole bhature image" />
          <h4>Royal Cafe</h4>
          <p>Chole Bhature , North Indian</p>
        </div>
        <div className="order-grid-item">
          <img src={biryani} alt="biryani image" />
          <h4>Mubeen's</h4>
          <p>Biryani , Mughlai</p>
        </div>
      </div>
    </div>
  );
};

export default OnlineOrder;

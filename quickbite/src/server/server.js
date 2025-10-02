import express from 'express';
const app = express();
import Stripe from "stripe";
import cors from 'cors';
import dotenv from "dotenv";  // if using ES modules
dotenv.config();

const image1 = '../Components/OrderOnlineComponent/assets/veg-pizza.jpg';
const image2 = '../Components/OrderOnlineComponent/assets/Non-Veg-Pizza.jpg';
const image3 = '../Components/OrderOnlineComponent/assets/Tacos.jpg';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());
 
const deliveryFee = 20;

const productImages = {
  1: image1,
  2: image2,
  3: image3,
};

app.post("/create-checkout-session", async (req, res) => {
  try {
    const cartData = req.body.cart;


            const lineItems = cartData.map(item => ({
                price_data: {
                    currency: "inr",
                    product_data: { name: item.title },
                    unit_amount: item.price * 100,
                },
                quantity: item.quantity,
                }));

                lineItems.push({
                      price_data: {
                    currency: "inr",
                    product_data: {name : "Delivery charge"},
                    unit_amount: deliveryFee * 100,
                },
                quantity:1,
                })

   
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: lineItems,
      success_url: "http://localhost:3000/cart?status=success",
      cancel_url: "http://localhost:3000/cancel?status=failure",
    }); 

    

    res.json({ url: session.url }); // return checkout page URL
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(4000, () => console.log("Server running on port 4000"));

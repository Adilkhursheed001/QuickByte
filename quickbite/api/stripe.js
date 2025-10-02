import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const deliveryFee = 20;

export default async function handler(req, res) {
  if (req.method === "POST") {
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

      // Add delivery fee
      lineItems.push({
        price_data: {
          currency: "inr",
          product_data: { name: "Delivery charge" },
          unit_amount: deliveryFee * 100,
        },
        quantity: 1,
      });

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: lineItems,
        success_url: `${req.headers.origin}/cart?status=success`,
        cancel_url: `${req.headers.origin}/cancel?status=failure`,
      });

      res.status(200).json({ url: session.url });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}

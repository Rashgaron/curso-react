
require("dotenv").config(".env");
// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


exports.checkout = async (req,res)=>{
const nombre = req.body.nombre
const precio = req.body.precio * 100

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "eur",
              product_data: {
                name: nombre,
              },
              unit_amount: precio,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: "https://example.com/success",
        cancel_url: "https://example.com/cancel",
      });
    
      res.json({ id: session.id });
}
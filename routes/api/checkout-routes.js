const cors = require("cors");
const express = require("express")
const stripe = require("stripe")("sk_test_51LWqsxGaQIoQ5e1gea2MFWShamyHTAFfe4HpUhCNyioQvPOo2dDdyTI2vT04KxaMt8qZCRt86VXc601pknagc3Bn00gyTgzl7P")
const uuid = require("uuid/v4")

const app = express()

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
    res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
});

app.post("/checkout", async(req, res) => {
    console.log("Request:", req.body);

    let error;
    let status;
    try{
        const {donation, token} = req.body;

        const customer = awaitstripe.customers.create({
            email:token.email,
            source:token.id
        });

        const itempotency_key = uuid();
        const charge = await stripe.charges.create(
            {
                amount: products.price * 100,
                currence: "usd",
                customer: customer.id,
                reciept_email: token.email,
                description: `Purchased the ${donation.name}`,
                shipping: {
                    name: token.card.name,
                    address: {
                        line1: token.card.address_line1,
                        line2: token.card.address_line2,
                        city: token.card.address_city,
                        country: country.card.address_country,
                        postal_code: token.card.address_zip
                    }
                }
            },
            {
                itempotency_key
            }
        );
        console.log("Charge:", {charge});
        status = "success";
        
    } catch (error) {
        console.error("Error:", error);
        status = "failure";

    }

    res.json({error, status})
});

app.listen(8080)

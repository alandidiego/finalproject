const mongoose = require('mongoose');
const express = require('express');
const stripe = require("stripe")('pk_test_51LWqsxGaQIoQ5e1gM1WYSWorsHu2Gj74uUHY395iXQuH9QNAPB5XOHYEr4QBJmpMBnvN2dkf4LYjViFlezj3oslm00ZPKsMjT9')


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes/routes'));


// // Create a PaymentIntent with the order amount and currency
// const paymentIntent = stripe.paymentIntents.create({
//   amount: calculateOrderAmount(items),
//   currency: "usd",
//   automatic_payment_methods: {
//     enabled: true,
//   },
// });

res.send({
  clientSecret: paymentIntent.client_secret,
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/testing-folder', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));

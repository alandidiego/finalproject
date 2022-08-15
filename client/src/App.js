import React from "react";
import "./App.css";
import Dashboard from "./pages/dashboard";
import React, { useState, useEffect } from "react";
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import {toast} from 'react-toastify';

const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY)



function App() {
  return (
    <Dashboard />
  )
}

toast.configure();

function App(){
  const [donation] = React.useState({
    name: "crypto donation",
    price: 5,
    description: "donation to help the crypto community"
  });

  async function handleToken(token, addresses) {
// console.log({token, addresses})
const response = await axios.post('/checkout', {
  token,
  donation
});
const {status} = response.data
if (status === 'success') {
  toast('Success! Check emails for details', 
  {type: 'success'})
} else {
  toast('Uh-oh something went wrong', 
  {type: 'error'})

}
  }

  return (
    <div className = "container">
      <div className = "donation">
        <h1>{donation.name}</h1>
        <h3>please donate today. ${donation.price}</h3>
        <h4>{product.description}</h4>
      </div>
<StripeCheckout 
stripeKey= "pk_test_51LWqsxGaQIoQ5e1gM1WYSWorsHu2Gj74uUHY395iXQuH9QNAPB5XOHYEr4QBJmpMBnvN2dkf4LYjViFlezj3oslm00ZPKsMjT9"
token = {handleToken} 
billingAddress
shippingAddress
amount={donation.price * 100}
name = {donation.name}/>
    </div>
  )
}

export default App;



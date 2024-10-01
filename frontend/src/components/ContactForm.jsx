import React, { useContext, useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { StoreProvider } from '../store/ContextProvider' // Adjust the import according to your project structure
import PaymentForms from './PaymentForm';

const stripePromise = loadStripe('your_stripe_public_key');

export default function Checkout() {
  const { state } = useContext(StoreProvider);
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    const createPaymentIntent = async () => {
      const response = await fetch('http://localhost:8080/api/stripe/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: state.cartItems }),
      });

      const data = await response.json();
      setClientSecret(data.clientSecret);
    };

    createPaymentIntent();
  }, [state.cartItems]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      {clientSecret ? (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <PaymentForms />
        </Elements>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
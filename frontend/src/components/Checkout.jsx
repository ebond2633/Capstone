import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
// import StripeContainer from './StripeContainer';
import React, { useState } from 'react';

const stripePromise = loadStripe('pk_test_51Q3O4GK0R0a8fZRVIA97A9NVsac6NzY3jVeKV6t24DIbepujuR7q05n8bJFkW8A0l16skVMiVrDQMnNYdyyvNpWz00H7Ar0Bwj');

export default function Checkout() {
  const [clientSecret, setClientSecret] = useState('');

  const handlePayment = async () => {
    const response = await fetch('http://localhost:8080/api/stripe/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: 1000 }), // Replace with actual amount
    });

    const data = await response.json();
    setClientSecret(data.clientSecret);
  };

  return (
    <>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <button
        onClick={handlePayment}
        className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-lg font-semibold mb-4"
      >
        Pay Now
      </button>
      {clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <PaymentForm />
        </Elements>
      )}
    </div>
    </>
  );
}


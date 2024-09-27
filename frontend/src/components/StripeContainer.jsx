import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const PUBLIC_KEY = "pk_test_51Q3O4GK0R0a8fZRVIA97A9NVsac6NzY3jVeKV6t24DIbepujuR7q05n8bJFkW8A0l16skVMiVrDQMnNYdyyvNpWz00H7Ar0Bwj"
const stripeTestPromise = loadStripe(PUBLIC_KEY)
function StripeContainer() {
  return (
    <div>
        <Elements stripe={stripeTestPromise}>
            <PaymentForms />
        </Elements>
    </div>
  )
}

export default StripeContainer
import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HMKoTHJvzpD2w2pczJCxd6lwAQBB4Xx3yPMYQ6ucQqNOxARBYiFmf8BJAecFrEIAoAvke6poY5gUBtlUzE74oUk00d3lk38aC'

 const onToken = token => {
        console.log(token)
        alert("Payment Successful!")
    }
    return(
        <StripeCheckout 
        label='Pay now'
        name='CRWN clothing app'
        billingAddress 
        shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}
export default StripeCheckoutButton;
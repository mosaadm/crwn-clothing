import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const   StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price *100;
    const publishableKey = 'pk_test_51HbhmILrvaXAAQp58ZQ0DTaZqGmifrrMGG7EK91eqPcMA4cAngYb6xUzmZGiOSQm7pK6hn5FvB96KxcJHHsGnPVJ006OFs8HUZ';
    const onToken = token => {
        console.log(token);
        alert('Payment succesful')
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image=''
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
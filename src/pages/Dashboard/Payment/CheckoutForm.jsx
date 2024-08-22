import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');

    const handleSubmit = async(event) => {
        event.preventDefault();

        if (!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null){
            return;
        }
        // console.log("card", card);
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card', 
            card 
        })

        if (error){
            console.log("card error: ", error);
            setCardError(error.message);
        }
        else {
            setCardError('');
            console.log("payment method: ", paymentMethod);
        }
    }

    
    return (
        <>
            <form className="w-2/3 m-8" onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {

                        base: {
                            fontSize: '20px',
                            color: '#dbdbd7',
                            '::placeholder': {
                                color: '#dbdbd7',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-outline btn-warning mt-6" type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
        {cardError && <p className="text-red-600 ml-8">{cardError}</p> }
        </>
    );
};

export default CheckoutForm;
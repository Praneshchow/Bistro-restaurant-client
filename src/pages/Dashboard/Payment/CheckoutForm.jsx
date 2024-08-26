import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";


const CheckoutForm = ({ cart, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const { user } = useAuth();
    const [processing, setProcessing] = useState(false);        // for processing the payment intent. 
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                console.log("client secret: ", res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })

    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        // console.log("card", card);
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log("card error: ", error);
            setCardError(error.message);
        }
        else {
            setCardError('');
            // console.log("payment method: ", paymentMethod);
        }

        setProcessing(true);

        // confirm card payment. 
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'Unknown',
                        name: user?.displayName || 'Anonymous',
                    },
                },
            },
        )

        if (confirmError) {
            console.log(confirmError);
        }
        console.log("payment intent: ", paymentIntent);
        setProcessing(false);

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);

            // save payment information to the server. 
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                quantity: cart.length,
                items: cart.map(item => item._id),
                itemNames: cart.map(item => item.name)
            };

            axiosSecure.post('/payments', payment)
                .then((res) => {
                    console.log("response payment: ", res.data);
                    // if (res.data.result.insertedId){
                    //     // display confirm. 
                    // }
                })
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
                <button className="btn btn-outline btn-warning mt-6" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transactionId && <p className="text-green-500 ml-8">Transaction complete with transactionId: {transactionId} </p>}
        </>
    );
};

export default CheckoutForm;
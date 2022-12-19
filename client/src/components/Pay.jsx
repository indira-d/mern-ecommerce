import React, {useEffect, useState} from 'react';
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Pay = () => {

    const [stripeToken, setStripeToken] = useState(null)
    const navigate = useNavigate()

    const onToken = (token) => {
        console.log('token', token)
    }

    useEffect(() => {
        const makeRequest = async () => {
            try{
                const res = await axios.post("http://localhost:5000/api/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 200
                })
                console.log(res.data)
                navigate('/success')
            }catch (e) {
                console.log(e)
            }
        };
        stripeToken && makeRequest();
    }, [stripeToken, navigate])

    return (
        <div>
            {stripeToken ? <span>Processing... wait </span> :
                <StripeCheckout
                    name={"E-SHOP"}
                    billingAddress
                    shippingAddress
                    description={'Your total is $20'}
                    amount={2000}
                    token={onToken}
                    stripeKey={'pk_test_51MGGzmHoSU9aoMTzDWu0xM525twk5HzeVEmpNWXAkTCjkeP5si3GtO6Wb13NpCuH71zZmZvCWMwFJ2FBQ9YTspkm00Y3scvrNc'}
                >
                    <button
                        style={{
                            border: "none",
                            width: 120,
                            borderRadius: '5px'
                        }}
                    >
                        Pay now
                    </button>
                </StripeCheckout>
            }
        </div>)
};

export default Pay;
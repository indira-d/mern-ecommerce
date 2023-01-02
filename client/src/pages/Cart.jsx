import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import {Add, Remove} from "@material-ui/icons";
import {mobile} from "../responsive";
import {useSelector} from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import {userRequest} from "../requestMethod";
import { useNavigate } from 'react-router-dom';

const KEY = process.env.REACT_APP_STRIPE


// const Container = styled.div`
//
// `
const Wrapper = styled.div`
 padding: 20px;
 ${mobile({padding: '10px'})}
`
const Title = styled.h1`
 font-weight: 300;
 text-align: center;
`
const Top = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 20px;
`

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props => props.type === 'filled' && 'none'};
  background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
  color: ${props => props.type === 'filled' && 'white'};
`
const TopTexts = styled.div`
  ${mobile({display: 'none'})}
`
const TopText  = styled.span`
 text-decoration: underline;
 cursor: pointer;
 margin: 0 10px;
`
const Bottom = styled.div`
 display: flex;
 justify-content: space-between;
 ${mobile({flexDirection: 'column'})}
`
const Info = styled.div`
 flex: 3;
`

const Product = styled.div`
 display: flex;
 justify-content: space-between;
 ${mobile({flexDirection: 'column'})}
`
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
 
`
const Image = styled.img`
width: 200px;
 
`
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
 
`
const ProductName = styled.span`
 
`
const ProductId = styled.span`
 
`
const ProductColor = styled.div`
 width: 20px;
 height: 20px;
 border-radius: 50%;
 background-color: ${props => props.color};
// border: ${props => props.color === 'white' ? '1px solid grey': 'none'};
`
const ProductSize = styled.div`
 
`

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
 
`
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const ProductAmount = styled.div`
  font-size: 24px;
  ${mobile({margin: '5px 15px'})}

`
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({marginBottom: '20px'})}
`

const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`
const Summary= styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`

const SummaryTitle = styled.h1`
  font-weight: 200;
`

const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === 'total' && '500'};
  font-size: ${props => props.type === 'total' && '24px'};
`

const SummaryItemPrice = styled.span`

`
const SummaryItemText = styled.span`

`

const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`




const Cart = () => {
    const cart = useSelector(state => state.cart)
    const [stripeToken, setStripeToken] = useState(null)
    const navigate = useNavigate();

    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const makeRequest = async () => {
            try{
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: cart.total *100,
                })
                navigate('/success', {data: res.data});
            }catch (e) {}
        }
        stripeToken && cart.total >= 1 && makeRequest()
    }, [stripeToken, navigate, cart.total])
    return (
        <div>
          <Navbar />
          <Announcement />
          <Wrapper>
              <Title>YOUR BAG</Title>
              <Top>
                  <TopButton>CONTINUE SHOPPING</TopButton>
                  <TopTexts>
                      <TopText>Shopping Bag(2)</TopText>
                      <TopText>Your Wishlist(0)</TopText>
                  </TopTexts>
                  <TopButton type={'filled'}>CHECKOUT NOW</TopButton>
              </Top>
              <Bottom>
                  <Info>
                      {cart.products.map(product => (
                          <Product>
                              <ProductDetail>
                                  <Image
                                      src={product?.img}></Image>
                                  <Details>
                                      <ProductName><b>Product:</b> {product.title}</ProductName>
                                      <ProductId><b>ID:</b> {product._id}</ProductId>
                                      <ProductColor color={product?.color}/>
                                      <ProductSize><b>Size:</b> {product.size}</ProductSize>
                                  </Details>
                              </ProductDetail>
                              <PriceDetail>
                                  <ProductAmountContainer>
                                      <Add/>
                                      <ProductAmount>{product.quantity}</ProductAmount>
                                      <Remove/>
                                  </ProductAmountContainer>
                                  <ProductPrice>${product.price * product.quantity}</ProductPrice>
                              </PriceDetail>
                          </Product>
                      ))}
                        <Hr/>
                  </Info>
                  <Summary>
                      <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                      <SummaryItem>
                          <SummaryItemText>Subtotal</SummaryItemText>
                          <SummaryItemText>${cart.total}</SummaryItemText>
                      </SummaryItem>
                      <SummaryItem>
                          <SummaryItemText>Estimated Shipping</SummaryItemText>
                          <SummaryItemText>$5.50</SummaryItemText>
                      </SummaryItem>
                      <SummaryItem>
                          <SummaryItemText>Shipping Discount</SummaryItemText>
                          <SummaryItemText>$-5.50</SummaryItemText>
                      </SummaryItem>
                      <SummaryItem type={'total'}>
                          <SummaryItemText>Total discount</SummaryItemText>
                          <SummaryItemText>${cart.total}</SummaryItemText>
                      </SummaryItem>
                      <SummaryButton>
                          <StripeCheckout
                              name={"E-SHOP"}
                              billingAddress
                              shippingAddress
                              description={'Your total is $20'}
                              amount={cart.total * 100}
                              token={onToken}
                              stripeKey={'pk_test_51MGGzmHoSU9aoMTzDWu0xM525twk5HzeVEmpNWXAkTCjkeP5si3GtO6Wb13NpCuH71zZmZvCWMwFJ2FBQ9YTspkm00Y3scvrNc'}
                          />
                      </SummaryButton>


                  </Summary>
              </Bottom>
          </Wrapper>
          <Footer />
            
        </div>
    );
};

export default Cart;

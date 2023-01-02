import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import {RemoveOutlined, Add} from "@material-ui/icons";
import {mobile} from "../responsive";
import {useLocation} from "react-router";
import {publicRequest} from "../requestMethod";
import {useDispatch} from "react-redux";
import {addProduct} from "../redux/cartRedux";


const Container = styled.div`
   
`
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({padding: '10px', flexDirection: 'column'})}
`
const ImgContainer = styled.div`
  flex: 1;
`
const Title = styled.h1`
  font-weight: 200;
`
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({height: '40vh'})}

`
const Desc = styled.div`
  margin: 20px 0;
`
const Price= styled.div`
  font-weight: 100;
  font-size: 40px;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({padding: '10px'})}
`
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  ${mobile({width: '100%'})}
`

const Filter = styled.div`
  display: flex;
  align-items: center;
`
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props?.color};
  margin: 0 5px;
  cursor: pointer;
`
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`
const FilterSizeOption = styled.option`
     value: ${props => props?.size};
`
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  ${mobile({width: '100%'})}
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
`
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.5s ease;
  
    &:hover{
      background-color: teal;
      color: white;
    }
`

const Product = (props) => {
    const location = useLocation()
    const id = location.pathname.split('/')[2]
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState('')
    const [size, setSize] = useState(1)
    const dispatch = useDispatch()

    useEffect(() => {
        const getProduct = async () => {
            try{
                const res = await publicRequest.get("/products/find/" + id)
                setProduct(res.data)
            }catch (e) {

            }
        }
        getProduct()
    }, [id])

    console.log('product', product)

    const handleQuantity = (type) =>{
        if(type === 'dec'){
           quantity > 1 && setQuantity(quantity - 1)
        }else {
            setQuantity(quantity + 1)
        }
    }

    const handleClick = () => {
        //update cart
        dispatch(addProduct({...product, quantity, color, size }))
    }


    return (
        <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src={product?.img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{product?.title}
                </Title>
                <Desc>{product?.description}</Desc>
                <Price>${product?.price}</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                     {/*{product?.color?.map(it =>*/}
                     {/*       <FilterColor color={it} key={it} onClick={() => setColor(it)} />)}*/}
                    <FilterColor color={product?.color}/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize onChange={e => setSize(e.target.value)}>
                            <FilterSizeOption size={product?.size}/>
                            {/*{product?.size.map(it => <FilterSizeOption size={it} key={it} />)}*/}
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <RemoveOutlined onClick={() => handleQuantity('dec')}/>
                        <Amount>{quantity}</Amount>
                        <Add onClick={() => handleQuantity('inc')}/>
                    </AmountContainer>
                    <Button onClick={handleClick}>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <NewsLetter/>
        <Footer/>
    </Container>
    )
}


export default Product;
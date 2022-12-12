import React from 'react';
import styled from 'styled-components'
import {Facebook,  Instagram, MailOutline, Phone, Pinterest, Room, Twitter} from "@material-ui/icons";
import {mobile} from "../responsive";


const Container = styled.div`
  display: flex;
  ${mobile({flexDirection: 'column'})}
`
const Left = styled.h1`
  flex:1;
  display: flex;
  flex-direction: column;
  padding: 20px;

`
const Center = styled.div`
  flex:1;
  padding: 20px;
  ${mobile({display: 'none'})}
`
const Right = styled.div`
  flex:1;
  padding: 20px;
  ${mobile({background: '#fff8f8'})}
`
const Logo = styled.h1`
  flex:1;
  font-size: 30px;

`
const Title = styled.h3`
  margin-bottom: 30px;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`
const Desc = styled.p`
  flex:1;
  margin: 20px 0;
  font-size: 16px;
  font-weight: normal;

`
const SocialContainer = styled.div`
  flex:1;
  display: flex;

`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;

`
const Payment = styled.img`
  width: 50%;
`


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>ECOMMERCE.</Logo>
                <Desc> The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</Desc>
                <SocialContainer>
                    <SocialIcon color={'3B5999'}>
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color={'E4405F'}>
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color={'55ACEE'}>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color={'E60023'}>
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Usefull Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>WishList</ListItem>
                    <ListItem>WishList</ListItem>
                    <ListItem>Term</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                    <ContactItem>
                        <Room style={{marginRight:'10px'}}/>
                        Bishkek, 10/33
                    </ContactItem>
                    <ContactItem>
                        <Phone style={{marginRight:'10px'}}/>
                        +996 550 10 10 10
                    </ContactItem>
                    <ContactItem>
                        <MailOutline style={{marginRight:'10px'}}/>
                        ecommerce@gmail.com
                    </ContactItem>
                <Payment src={'http://i.ibb.co/Qfvn4z6/payment.png'}/>
            </Right>

        </Container>

    );
};

export default Footer;

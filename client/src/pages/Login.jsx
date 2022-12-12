import React from 'react';
import styled from 'styled-components'
import {mobile} from "../responsive";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eee ;
`
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background: white;
  ${mobile({width: '75%'})}
 
`
const Form = styled.form`
  display: flex;
  flex-direction: column;

`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`

const Link = styled.a`
   margin: 5px 0;
   font-size: 12px;
   cursor: pointer;
`

const Login = () => (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder={'username'}/>
                <Input placeholder={'password'}/>
                <Button>LOGIN</Button>
                <Link>FORGOT THE PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
);

export default Login;
import React, {useState} from 'react';
import styled from 'styled-components'
import {mobile} from "../responsive";
import {login} from "../redux/apiCalls";
import {useDispatch, useSelector} from "react-redux";


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
  //&:disabled{
  //  color: green;
  //  cursor: not-allowed;
  //}
`

// const Error = styled.span`
//   color: red;
//   margin: 5px 0;
// `

const Link = styled.a`
   margin: 5px 0;
   font-size: 12px;
   cursor: pointer;
`



const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const {isFetching, error} = useSelector(state => state.user)

    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch, {username, password})
    }
    return (

        <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder={'username'} onChange={e => setUsername(e.target.value)}/>
                <Input placeholder={'password'} type={'password'} onChange={e => setPassword(e.target.value)}/>
                <Button
                    onClick={handleClick}
                    //disabled={isFetching}
                >
                    LOGIN
                </Button>
                {/*{error && <Error>Something went wrong...</Error> }*/}
                <Link>FORGOT THE PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>)
};

export default Login;
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Home = () => {
  const navigate = useNavigate();

  const Logo = styled.img`
    display: block;
    margin: 2rem auto;
    width: 10rem;
  `;

  const SignIn = styled.h1`
    font-size: 1.8em;
    color: white;
    text-align: center;
    font-weight: 400;
  `;

  const Box = styled.div`
    font-size: 1.2em;
    margin: 0 auto;
    width: 30%;
    height: 300px;
    background: #171515;
    border-radius: 10px;
    text-align: center;
  `;

  const Desc = styled.label`
    color: white;
    display: block;
    text-align: left;
    margin: 0 0 0 10%;
    padding-top: 7%;
    padding-bottom: 10px;
  `;

  const Input = styled.input`
    background: black;
    border-radius: 5px;
    width: 80%;
    height: 2.3rem;
    border: solid 1px #2c2828;
  `;

  const SignInBtn = styled.button`
    display: block;
    margin: 20% auto;
    width: 80%;
    height: 2.7rem;
    border-radius: 5px;
    background: #238636;
    color: white;
    font-weight: bold;
    padding: 2px 0;
  `;

  const onClick = () => {
    navigate("/result");
  }

  return (
    <>
      <Logo src='./image/github.jpg' />
      <SignIn>Sign in to Github</SignIn>
      <Box>
        <Desc>Username or email address</Desc>
        <Input type='text' />
        <SignInBtn onClick={onClick}>Sign in</SignInBtn>
      </Box>
    </>
  );
};

export default Home;

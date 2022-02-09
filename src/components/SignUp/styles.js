import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  background-color:#F7B213;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 0 25px;
  h1{
    color: #ffffff;
    font-family: Lexend Deca;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
  }
  input {
    background: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 5px;
    box-sizing: borderbox;
    color:#000000;
    font-family: Lexend Deca;
    font-size: 20px;
    font-weight: 400;
    height: 58px;
    padding-left: 14px;
    margin-bottom: 13px;
    width: 326px;
  }
  input::placeholder {
    color: #BFBFBF;
  }
  button {
    background: #CB6632;
    border: 1px solid #CB6632;
    border-radius: 8px;
    color: #ffffff;
    font-family: Lexend Deca;
    font-size: 20px;
    font-weight: 700;
    height: 46px;
    width: 326px;
  }
`;

const StyledLink = styled(Link)`
  align-items: center;
  color: #ffffff;
  display: flex;
  font-family: Lexend Deca;
  font-size: 18px;
  font-weight: 700;
  justify-content: center;
  margin-top: 32px;
`;

export { Container, StyledLink };
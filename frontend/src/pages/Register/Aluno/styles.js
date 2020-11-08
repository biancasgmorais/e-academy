import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;
  background: #e0e0e0;
  display: flex;
  justify-content: center;
  align-center: center;
`;

export const Navigation = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

  width: 100%;
  max-width: 315px;
  text-align: center;

  #linha {
    margin-top: 50px;
    background-color: #ae52d4;
    padding: 5px;
    border-radius: 25px;
    box-shadow: 0 4px 8px 0 #4a0072;

    img {
      height: 50px;
      width: 150px;
    }
  }

  h1 {
    margin-top: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 32px;
    font-weight: bold;
    color: #4a0072;
  }

  .linha1 {
    margin-top: 10px;
    background-color: #4a0072;
    height: 30px;
    padding: 5px;
    border-radius: 25px;
    box-shadow: 0 4px 8px 0 #4a0072;
    a {
      color: #ffff;
      margin-right: 10px;
      font: 14px 'Roboto', sans-serif;
      text-decoration: underline #ae52d4;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }

  #linha2 {
    margin-top: 10px;
    background-color: #ae52d4;
    height: 10px;
    border-radius: 25px;
    box-shadow: 0 4px 8px 0 #4a0072;
  }

  #linha3 {
    margin-top: 5px;
    background-color: #ae52d4;
    height: 10px;
    border-radius: 25px;
    box-shadow: 0 4px 8px 0 #4a0072;
  }

  h2 {
    margin-top: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: bold;
    color: #4a0072;
  }

  form {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    input {
      height: 25px;
      font: 14px 'Roboto', sans-serif;
      color: #4a0072;
      background-color: #e0e0e0;
      border: 1px solid #4a0072;
      border-radius: 4px;
      padding: 0 15px;
      margin: 0 0 10px;

      &::placeholder {
        color: #4a0072;
      }
    }

    span {
      color: #4a0072;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
  }

  button {
    box-shadow: 2px 2px #ae52d4;
    margin: 10px 0 0;
    width: 150px;
    height: 44px;
    font: 21px 'Roboto', sans-serif;
    font-weight: bold;
    color: #ffff;
    background: #7b1fa2;
    border: 1px solid #7b1fa2;
    border-radius: 6px;
    box-shadow: 0 4px 8px 0 #4a0072;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#7b1fa2')};
    }
  }

  a {
    color: #ffff;
    margin-top: 10px;
    font: 16px 'Roboto', sans-serif;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;

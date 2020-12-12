import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  display: flex;
  max-width: 900px;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  h1 {
    box-shadow: 2px 2px #ae52d4;
    padding: 5px;
    border-style: double solid double;
    border-color: #4a0072;
    margin-top: 10px;
    text-align: center;
    width: 300px;
    height: 30px;
    font: 16px 'Roboto', sans-serif;
    font-weight: bold;
    color: #4a0072;
    text-transform: uppercase;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    width: 300px;

    h2 {
      margin-top: 5px;
      font: 14px 'Roboto', sans-serif;
      font-weight: bold;
      color: #4a0072;
      text-transform: uppercase;
    }

    select {
      height: 25px;
      font: 14px 'Roboto', sans-serif;
      color: #4a0072;
      background-color: #e0e0e0;
      border: 1px solid #4a0072;
      border-radius: 4px;
      padding: 0 10px;
      margin: 0 0 10px;
    }

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

  .botoes {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    justify-content: center;
    align-center: center;

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
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#7b1fa2')};
      }
    }
  }

  .back {
    margin-top: 10px;
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;
    justify-content: center;
    a {
      background: transparent;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }

      img {
        width: 50px;
        height: 50px;
      }
    }
  }
`;

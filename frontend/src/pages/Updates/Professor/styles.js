import styled from 'styled-components';
import { darken } from 'polished';

export const Content = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  display: flex;
  width: 100%;
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
    width: 200px;
    height: 30px;
    font: 16px 'Roboto', sans-serif;
    font-weight: bold;
    color: #4a0072;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  h2 {
    text-align: center;
    font: 12px 'Roboto', sans-serif;
    font-weight: bold;
    color: #4a0072;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    select {
      height: 25px;
      width: 300px;
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
      width: 300px;
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

  .apagar button {
    box-shadow: 2px 2px #ae52d4;
    margin-top: 10px;
    margin-right: 10px;
    width: 150px;
    height: 30px;
    font: 12px 'Roboto', sans-serif;
    font-weight: bold;
    color: #ffff;
    background: #7b1fa2;
    border: 1px solid #4a0072;
    border-radius: 6px;
    transition: background 0.2s;
    text-transform: uppercase;

    &:hover {
      background: ${darken(0.08, '#4a0072')};
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
      margin-right: 10px;
      width: 150px;
      height: 30px;
      font: 12px 'Roboto', sans-serif;
      font-weight: bold;
      color: #ffff;
      background: #7b1fa2;
      border: 1px solid #4a0072;
      border-radius: 6px;
      transition: background 0.2s;
      text-transform: uppercase;

      &:hover {
        background: ${darken(0.08, '#4a0072')};
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

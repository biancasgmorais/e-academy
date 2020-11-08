import styled from 'styled-components';

export const Container = styled.div`
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
    width: 200px;
    height: 30px;
    font: 16px 'Roboto', sans-serif;
    font-weight: bold;
    color: #4a0072;
    text-transform: uppercase;
  }

  .box {
    margin-top: 10px;
  }

  .box select {
    background-color: #7b1fa2;
    color: white;
    padding: 12px;
    height: 40px;
    width: 250px;
    border: none;
    font-size: 14px;
    -webkit-appearance: button;
    appearance: button;
    outline: none;
  }

  .box::before {
    font-family: 'Roboto', sans-serif;
    position: absolute;
    top: 0;
    right: 0;
    width: 20%;
    height: 100%;
    text-align: center;
    font-size: 28px;
    line-height: 45px;
    color: white;
    background-color: #7b1fa2;
    pointer-events: none;
  }

  .box:hover::before {
    color: white;
    background-color: #7b1fa2;
  }

  .box select option {
    padding: 30px;
  }

  .nv {
    display: flex;
    flex-direction: row;
    margin-top: 10px;

    input {
      width: 300px;
      font-size: 14px;
      color: #4a0072;
      padding: 12px 20px 12px 40px;
      background: #e0e0e0;
      border: 2px solid #4a0072;
      margin-right: 10px;
    }
  }

  .tabela {
    table {
      margin-top: 10px;
      align-items: center;
      justify-content: center;
      width: 800px;
      display: block;
      position: relative;
      overflow-y: auto;
      height: 300px;
      border-collapse: collapse;

      th {
        width: 800px;
        height: 30px;
        font: 14px 'Roboto', sans-serif;
        font-weight: bold;
        color: #ffff;
        background-color: #7b1fa2;
        border-bottom: 1px solid #4a0072;
      }

      td {
        width: 800px;
        height: 30px;
        text-align: center;
        align-items: center;
        font: 14px 'Roboto', sans-serif;
        color: #4a0072;
        background-color: #e0e0e0;
        border-bottom: 1px solid #4a0072;
        padding: 5px 5px;

        a {
          margin-right: 5px;
        }

        button {
          background: none;
          border: none;
          margin-right: 2px;
        }
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

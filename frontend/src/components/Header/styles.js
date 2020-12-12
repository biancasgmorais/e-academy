import styled from 'styled-components';

export const Content = styled.div`
  background-color: #4a0072;
  box-shadow: 4px 0 8px 0 #7b1fa2, 6px 0 20px 0 #7b1fa2;
  .dropbtn {
    background-color: #4a0072;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px #ae52d4;
    z-index: 1;
  }

  .dropdown-content button {
    background: none;
    border: none;
    color: #4a0072;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content a {
    color: #4a0072;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content a:hover {
    background-color: #ddd;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown:hover .dropbtn {
    background-color: #4a0072;
  }

  img {
    margin: 0 auto;
    height: 25px;
    width: 90px;
  }
`;

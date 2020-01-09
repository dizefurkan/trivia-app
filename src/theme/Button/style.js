import styled from 'styled-components';

export default {
  'Button': styled.div`
    a {
      font-size: 20px;
      line-height: 56px;
      height: 56px;
      width: 300px;
      display: block;
      margin: auto;
      text-align: center;
      font-weight: 700;
      text-decoration: none;
      background-color: ${props => props.bgColor};
      color: ${props => props.textColor};
      cursor: pointer;
    }
  `
};
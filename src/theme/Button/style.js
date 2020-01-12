import styled from 'styled-components';

export default {
  'Button': styled.div`
    font-size: 20px;
    line-height: 56px;
    height: 56px;
    width: ${props => props.fullWidth ? '100%' : '300px'};
    display: block;
    margin: auto;
    text-align: center;
    font-weight: 700;
    background-color: ${props => props.bgColor};
    color: ${props => props.textColor} !important;
    cursor: pointer;
    a {
      color: ${props => props.textColor} !important;
      text-decoration: none;
    }
  `
};
import styled from 'styled-components';

export default {
  'Step': styled.div`
    position: relative;
    width: ${props => props.isLastItem ? 'auto' : '100%'};
    div {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      width: 100%;
      height: 3px;
      background-color: ${props => props.bgColor};
    }
    span {
      font-size: 16px;
      font-weight: 700;
      width: 44px;
      height: 44px;
      line-height: 44px;
      display: inline-block;
      text-align: center;
      position: relative;
      border-radius: 50%;
      background-color: ${props => props.bgColor};
      color: ${props => props.color};
    }
  `
};
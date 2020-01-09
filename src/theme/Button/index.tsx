import React from 'react';
import {
  Link
} from "react-router-dom";
import S from './style';

interface Props {
  text: string,
  textColor: string,
  bgColor: string,
  to: string,
}

const Button: React.FC<Props> = (props) => {
  const {
    to,
    text,
    ...buttonStyles
  } = props;

  return(
    <S.Button {...buttonStyles}>
      {to
        ? (
          <Link to={to}>
            {text}
          </Link>
        )
        : text
      }
    </S.Button>
  );
}

export default Button;

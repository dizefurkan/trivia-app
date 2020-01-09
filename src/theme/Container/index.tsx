import React from 'react';
import S from './style';

const Container: React.FC = (props) => {
  const { children } = props;

  return <S.Container>{children}</S.Container>
}

export default Container;

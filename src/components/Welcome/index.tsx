import React from 'react';
import S from './style';
import Header from 'src/components/partials/Header';
import Button from 'src/theme/Button';

const Welcome: React.FC = () => {
  const buttonProps = {
    text: 'START THE GAME',
    textColor: '#231900',
    bgColor: '#FFCC00',
    to: '/questions',
  };
  const startGame = () => {

  };

  return (
    <S.Container>
      <Header />
      <S.Description>An app for job</S.Description>
      <Button
        {...buttonProps}
      />
    </S.Container>
  );
};

export default Welcome;
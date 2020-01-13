import React, { Component } from 'react';
import { Lottie } from '@crello/react-lottie'
import Header from 'src/components/partials/Header';
import Button from 'src/theme/Button';
import Container from 'src/theme/Container';
import Options from './Options/';
import lottieBlackQuestion from 'src/assets/lottie/black-question.json';
import S from './style';

class Welcome extends Component {
  render() {
    const animationData = lottieBlackQuestion;
    const buttonProps = {
      text: 'START THE GAME',
      textColor: '#231900',
      bgColor: '#FFCC00',
      to: '/questions',
    };
    return (
      <Container>
        <Header />
        <Lottie
          config={{
            animationData: animationData,
          }}
          style={{
            margin: '0 auto',
          }}
          width='200px'
        />
        <S.Description>Question Pool</S.Description>
        <Options />
        <Button
          {...buttonProps}
        />
      </Container>
    );
  }
}

export default Welcome;
import React, { Component } from 'react';
import lottie from 'lottie-web';
import Header from 'src/components/partials/Header';
import Button from 'src/theme/Button';
import Container from 'src/theme/Container';
import Options from '../Options/';
import lottieBlackQuestion from 'src/assets/lottie/black-question.json';
import S from './style';

class Welcome extends Component {
  animObj: any;
  animBox: any;

  componentDidMount() {
    this.animObj = lottie.loadAnimation({
      container: this.animBox, // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: lottieBlackQuestion // the path to the animation json
    });
  }

  render() {
    const buttonProps = {
      text: 'START THE GAME',
      textColor: '#231900',
      bgColor: '#FFCC00',
      to: '/questions',
    };
    return (
      <Container>
        <Header />
        {/*<Lottie
          options={defaultOptions}
          height={200}
          width={200}
        />*/}
        <div
          style={{
            width: 200,
            margin: '0 auto',
          }}
          ref={ref => this.animBox = ref}
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
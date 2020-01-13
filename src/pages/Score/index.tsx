import React, { Component } from 'react';
import Header from 'src/components/partials/Header';
import Container from 'src/theme/Container';
import Button from 'src/theme/Button';

class Score extends Component {
	render() {
		const buttonProps = {
      text: 'GO TO HOMEPAGE',
      textColor: '#231900',
      bgColor: '#FFCC00',
      to: '/',
    };

    const answeredQuestionQuantity:number = window.SCORE.length;
    const correctAnswerQuantity:number =
	    window.SCORE.filter((item:any) => item.status === 'correct').length;
    const incorrectAnswerQuantity:number =
	    window.SCORE.filter((item:any) => item.status === 'incorrect').length;
		return (
			<Container>
				<Header />
				<h1>Score PAGE</h1>
				<p>You answered <b>{answeredQuestionQuantity}</b> question.</p>
				<p>Correct answers <b>{correctAnswerQuantity}</b></p>
				<p>Incorrect answers <b>{incorrectAnswerQuantity}</b></p>
				<Button
          {...buttonProps}
        />
			</Container>
		);
	}
}

export default Score;

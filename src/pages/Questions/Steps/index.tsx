import React, { Component } from 'react';
import S from './style';

type IProps = {
  questionsQuantity: number,
  currentQuestion: number,
	answerStatus: string,
	isAnswered: boolean,
}

class Step extends Component<IProps, {}> {
	render() {
		const {
			questionsQuantity,
			currentQuestion,
			answerStatus,
			isAnswered,
		} = this.props;
		const steps = [];
		for (let i = 0; i < questionsQuantity; i++) {
			let color: string = i < currentQuestion
				? '#FFFFFF'
				: '#FFFFFF';
			let bgColor: string = i < currentQuestion
				? '#4caf50'
				: '#231900';
			if (isAnswered && currentQuestion === i) {
				bgColor = answerStatus === 'correct'
					? '#4caf50'
					: '#ff0002';
			}

			steps.push(
				<S.Step
					key={i}
					color={color}
					bgColor={bgColor}
					isLastItem={(i + 1) === questionsQuantity}
				>
					{i !== questionsQuantity && <div />}
					<span>{i + 1}</span>
				</S.Step>
			)
		}
		return (
			<div style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				marginBottom: '100px',
			}}>{steps}</div>
		)
	}
}

export default Step;

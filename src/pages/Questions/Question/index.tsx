import React, { Component } from 'react';
import Button from 'src/theme/Button';

type IProps = {
  data: any,
  currentQuestion: number,
  handleAnswerSelect: any,
  answerStatus: string,
  isAnswered: boolean,
  answeredButtonClick: any,
  isLastQuestion: boolean
}
type IState = {
	selectedAnswer: string,
}

class Question extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
		  selectedAnswer: '',
		}
	}

	handleAnswerClick(answer: string) {
		const { data, handleAnswerSelect } = this.props;
		const correctAnswer = data.correct_answer;
		const isAnswerCorrect:boolean = answer === correctAnswer;
		this.setState({
			selectedAnswer: answer
		}, () => handleAnswerSelect(isAnswerCorrect));
	}

	renderAnswers() {
		const { data, answerStatus, isAnswered } = this.props;
		const { selectedAnswer } = this.state;
		const letters = ['a', 'b', 'c', 'd'];
		const answerStyle = {
			flexBasis: '100%',
			padding: '20px 0',
			cursor: isAnswered ? 'default' : 'pointer',
			fontWeight: 400,
			fontSize: '16px',
			color: '#231900',
			borderRadius: '5px',
		};

		return data.answers.map((item: string, index: number) => {
			const selectedAnswerStyle =
				isAnswered && item === selectedAnswer
				?
					{
						backgroundColor: answerStatus === 'correct'
							? '#4caf50'
							: '#ff0002',
				    color: '#fff',
				    padding: '20px',
					}
				:
					{};

			return (
				<div
					key={index}
					style={{
						...answerStyle,
						...selectedAnswerStyle
					}}
					onClick={() => {
						if (!isAnswered) this.handleAnswerClick(item)
					}}
				>
					<span>{letters[index]}) </span>
					<span>{item}</span>
				</div>
			)
		});
	}

	render() {
		const {
			data,
			currentQuestion,
			answerStatus,
			answeredButtonClick,
			isLastQuestion,
		} = this.props;

		if (!data || !Object.keys(data).length) return null;

		const correctButtonProps = {
      text: isLastQuestion
	      ? 'DONE! LET SEE YOUR SCORE'
	      : 'NEXT QUESTION',
      fullWidth: isLastQuestion,
      textColor: '#231900',
      bgColor: '#FFCC00',
    };
    const incorrectButtonProps = {
      text: `WRONG ANSWER! PLEASE CLICK TO SEE YOUR SCORE`,
      textColor: '#231900',
      bgColor: '#FFCC00',
      fullWidth: true,
    };

		return (
			<div>
				<div style={{
					marginBottom: '20px',
					padding: '20px',
					backgroundColor: '#03a9f433',
					borderRadius: '5px',
					fontSize: '16px',
					fontWeight: 700
				}}>
					<span>{currentQuestion + 1}. </span>
					<span>{data.question}</span>
				</div>
				<div style={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
					marginBottom: '20px'
				}}>
					{this.renderAnswers()}
				</div>
				{answerStatus === 'correct' &&
					<Button
	          {...correctButtonProps}
	          onClick={answeredButtonClick}
	        />
				}
				{answerStatus === 'incorrect' &&
					<Button
	          {...incorrectButtonProps}
	          onClick={answeredButtonClick}
	        />
				}
			</div>
		);
	}
}

export default Question;
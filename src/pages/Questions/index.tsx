import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Question from './Question';
import Steps from './Steps';
import Header from 'src/components/partials/Header';
import Button from 'src/theme/Button';
import Container from 'src/theme/Container';
import $U from 'src/config';
import axios from 'src/axios';
import { shuffleArray } from 'src/utils';

interface IState {
  data: [],
  currentQuestion: number,
  answerStatus: string,
  isAnswered: boolean,
  answeredQuestions: [],
  showScore: boolean,
  pending: boolean,
  hasApiError: boolean,
}

class Questions extends Component {
  state: IState = {
    data: [],
    currentQuestion: 0,
    answerStatus: '',
    isAnswered: false,
    answeredQuestions: [],
    showScore: false,
    pending: true,
    hasApiError: false,
  }

  componentDidMount() {
    const { difficulty, categoryId } = window.SETTINGS;
    const url:string =`${$U.BASE_URL}${$U.AMOUNT}=10&${$U.CATEGORY}=${categoryId}&${$U.DIFFICULTY}=${difficulty}`;

    axios({
      method: 'get',
      url
    })
      .then(response => {
        const results = require('./data.json').results;
        const data = results.map((question: any) => {
          const answers =
            [...question.incorrect_answers, question.correct_answer];
          question['answers'] = shuffleArray(answers);
          return question;
        });
        this.setState({
          data,
          pending: false,
        });
      })
      .catch(() => {
        this.setState({
          hasApiError: true,
        });
      })
  }

  nextQuestion = () => {
    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });
  }

  finishGame = () => {
    this.setState({
      showScore: true,

    });
  }

  handleAnswerSelect = (isCorrect: boolean) => {
    if (isCorrect) {
      this.setState({
        isAnswered: true,
        answerStatus: 'correct',
      });
    } else {
      this.setState({
        isAnswered: true,
        answerStatus: 'incorrect',
      })
    }
  }

  setAnsweredQuestions = (answeredQuestionStatus:any) => {
    const { answeredQuestions } = this.state;
    return [
      ...answeredQuestions,
      answeredQuestionStatus
    ];
  }

  answeredButtonClick = () => {
    const { data, isAnswered, answerStatus, currentQuestion } = this.state;
    const isAnswerCorrect = answerStatus === 'correct';
    const isLastQuestion = (currentQuestion + 1) === data.length;

    if (!isAnswered) return;

    if (isLastQuestion) {
      this.setState({
        showScore: true
      });
      return;
    }

    this.setState({
      answeredQuestions: this.setAnsweredQuestions({
        index: currentQuestion,
        status: answerStatus,
      })
    }, () => {
      console.log(this.state.answeredQuestions)
      if (isAnswerCorrect) {
        this.setState({
          isAnswered: false,
          answerStatus: '',
        }, () => this.nextQuestion());
      } else {
        this.finishGame();
      }
    })
  }

  render() {
    const {
      data,
      currentQuestion,
      answerStatus,
      isAnswered,
      answeredQuestions,
      showScore,
      hasApiError,
      pending,
    } = this.state;
    const question = data[currentQuestion];
    const isLastQuestion = (currentQuestion + 1) === data.length;

    if (showScore) {
      return (
        <Redirect
          to={{
            pathname: '/score',
            state: {
              data: answeredQuestions
            }
          }}
        />
      );
    }

    if (hasApiError) {
      return (
        <h1>Ups, something wrong...</h1>
      );
    }

    return (
      <Container>
        <Header />
        <Steps
          questionsQuantity={10}
          currentQuestion={currentQuestion}
          answerStatus={answerStatus}
          isAnswered={isAnswered}
        />
        {!pending && question &&
          <Question
            data={question}
            currentQuestion={currentQuestion}
            handleAnswerSelect={this.handleAnswerSelect}
            answerStatus={answerStatus}
            isAnswered={isAnswered}
            isLastQuestion={isLastQuestion}
            answeredButtonClick={this.answeredButtonClick}
          />
        }
        {pending && <h1>Loading...</h1>}
      </Container>
    );
  }
}

export default Questions;

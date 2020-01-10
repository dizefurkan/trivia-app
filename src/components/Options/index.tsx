import React, { Component } from 'react';
import axios from 'src/axios';
import $U from 'src/config';
import S from './style';
import './style.css';

function fetchCategories() {
  return axios({
    method: 'get',
    url: `${$U.BASE_URL}${$U.CATEGORY}=`
  });
}

class Options extends Component {
  state = {
    difficulty: 'easy',
    category: {
      id: 1,
      name: 'Art',
    },
  }

  componentDidMount() {

  }

  handleChange(event:any, field:string) {
    this.setState({
      [field]: event.target.value,
    }, () => {
       console.log(this.state);
    });
  }

  render() {
    return (
      <div className="page-options">
        <div className="options-wrapper">
          <label>Please Select Question Difficulty</label>
          <select onChange={event => this.handleChange(event, 'difficulty')}>
            <option disabled>Please Select Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className="options-wrapper">
          <label>Please Select Category</label>
          <select onChange={event => this.handleChange(event, 'category')}>
            <option disabled>Please Select Category</option>
            <option value="1">Art</option>
            <option value="2"></option>
            <option value="3">Hard</option>
          </select>
        </div>
      </div>
    );

  }
}

export default Options;

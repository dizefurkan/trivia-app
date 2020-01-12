import React, { Component } from 'react';
import { difficulties, categories } from './api.json';
// import S from './style';
import './style.css';

type IState = {
  difficulty: string,
  categoryId: number,
}

class Options extends Component<{}, IState> {
  state: IState = {
    difficulty: window.SETTINGS.diffuculty,
    categoryId: window.SETTINGS.categoryId
  }

  handleChange = (field: 'difficulty' | 'categoryId') => (event: any) => {
    let { value } = event.target;
    if (field === 'categoryId') value = parseInt(value);

    this.setState({
      [field]: value
    } as IState, () => {
      window.SETTINGS[field] = this.state[field];
    });
  }

  render() {
    return (
      <div className="page-options">
        <div className="options-wrapper">
          <label>Please Select Question Difficulty</label>
          <select onChange={this.handleChange('difficulty')}>
            <option disabled>Please Select Difficulty</option>
            {
              difficulties.map((item, index) => (
                <option key={index} value={`${item.id}`}>{item.name}</option>
              ))
            }
          </select>
        </div>
        <div className="options-wrapper">
          <label>Please Select Category</label>
          <select onChange={this.handleChange('categoryId')}>
            {
              categories.map((item, index) => (
                <option key={index} value={`${item.id}`}>{item.name}</option>
              ))
            }
          </select>
        </div>
      </div>
    );

  }
}

export default Options;

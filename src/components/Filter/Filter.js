import React, { Component } from 'react';
// import propTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';

export class Filter extends Component {
  state = {
    inputValue: '',
  };

  handleChange = evt => {
    this.setState({ inputValue: evt.target.value });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <FilterLabel>
        Find contacts by name
        <FilterInput
          type="text"
          value={inputValue}
          onChange={this.handleChange}
        />
      </FilterLabel>
    );
  }
}

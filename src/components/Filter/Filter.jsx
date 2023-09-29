import React, { Component } from 'react';
import { Label, Input } from '../ContactForm/ContactForm.styles';

class Filter extends Component {
  handleChange = e => {
    const filterValue = e.target.value.toLowerCase();
    this.props.onFilterChange(filterValue);
  };

  render() {
    return (
      <div>
        <Label>
          Filter contacts by name:
          <Input
            type="text"
            value={this.props.filter}
            onChange={this.handleChange}
          />
        </Label>
      </div>
    );
  }
}

export default Filter;

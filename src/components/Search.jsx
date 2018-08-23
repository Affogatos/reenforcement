import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchPets } from '../redux/actions/searchPetsActions';
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: '',
      ajaxRes: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const query = this.state.val.trim();
    if (query) {
      this.props.searchPets({ location: query });
    }
  }
  handleChange(e) {
    const val = e.target.value.replace(/^\s+|/gm, '').replace(/\s{2,}/gm, ' ');
    this.setState({ val });
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            value={this.state.val}
            onChange={e => this.handleChange(e)}
            placeholder={this.props.placeholder && this.props.placeholder}
          />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { searchPets }
)(Search);

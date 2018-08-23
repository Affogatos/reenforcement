import React, { Component } from 'react';
import { history } from './routers/AppRouter.jsx';

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick(id) {
    if (id) history.push(`/pets/${id}`);
  }
  render() {
    return (
      <div>
        <img src={this.props.src} onClick={() => this.handleClick(this.props.id)} />
      </div>
    );
  }
}
export default Thumbnail;

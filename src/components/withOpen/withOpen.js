import React, { Component } from 'react';

export default function(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        open: false
      }
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id) {
      this.setState(state => {
        return { open: !state.open }
      })
    }

    render() {
      return (
        <WrappedComponent
          handleClick={this.handleClick}
          open={this.state.open}
          {...this.props}
        />
      );
    }
  }
}


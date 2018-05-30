import React, { Component } from 'react';

export default class StillImages extends Component {
  render() {
    return (
            <img 
                src={this.props.path+this.props.image} 
                alt=""
                className="frame"
            />
    );
  }
}
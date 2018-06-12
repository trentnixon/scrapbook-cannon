import React, { Component } from 'react';

export default class Header extends Component {
  render() {
        return ( 
          <div className="row">
              <div className="col-lg-5 offset-lg-1 col-md-6 offset-md-0">
                <header className="App-header">
                    <h2 className="App-title">{this.props.header}</h2>
                    <img src={this.props.Path+this.props.header_logo} alt=""/>
              </header>
              </div>
              <div className="col-6"></div> 
          </div>
    );
  }
} 
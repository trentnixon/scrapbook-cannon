import React, { Component } from 'react';

export default class Loading extends Component {
  render() {
        return ( 
            <div className="LoadingScreen">  
                <img src={this.props.logo} alt="Loading ..."/>
            </div> 
    );
  }
}
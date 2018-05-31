import React, { Component } from 'react';

export default class CustomLabels extends Component {
  render() {
      if(this.props.label !== null){
        return ( 
            <h2 className="cursive"> {this.props.label}</h2>
        );
      } else{
          return(<div></div>)
      }
        
  }
} 
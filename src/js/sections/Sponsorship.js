import React, { Component } from 'react';

export default class Sponsorship_Component extends Component {
  render() {
        return ( 
            <div className="SponsorShip">
              
                    <span>{this.props.tagline}</span>
                    <img src={this.props.path+this.props.logo} alt="" />
             
            </div>
    );
  }
}
import React, { Component } from 'react';
import ReactGA from 'react-ga';

let LinkTarget=null;
export default class Sponsorship_Component extends Component {
  HandleClick(e){
    // console.log(e.currentTarget)
    LinkTarget = e.currentTarget.attributes.getNamedItem('data-label').value;
    ReactGA.event({
      category: 'Footer',
      action: 'Clicked Link',
      label:LinkTarget
  });
  }
  render() {
        return ( 
            <div className="SponsorShip">
                    <span>{this.props.tagline}</span>
                    <a target="_blank" 
                    data-label="Cannon Logo"
                    onClick={this.HandleClick}
                    rel="noopener noreferrer" 
                    href="http://bringyourcuriosity.com.au/">
                      <img src={this.props.path+this.props.logo} alt="" />
                    </a>             
            </div>
    );
  }
}
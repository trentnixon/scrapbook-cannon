import React, { Component } from 'react';
import ReactGA from 'react-ga';

let LinkTarget=null;
const YoutubeIcon = class Footer extends Component {
  render() {
    return (
      <svg width="59px" id="youtubeIcon" height="59px" viewBox="634 19 59 59" version="1.1" xmlns="http://www.w3.org/2000/svg" >
        <circle id="Oval" stroke="none" fill="#ED1C24" fillRule="evenodd" cx="663.5" cy="48.5" r="29.5"></circle>
        <polygon id="Triangle" stroke="none" fill="#FFFFFF" fillRule="evenodd" transform="translate(665.500000, 49.500000) scale(-1, 1) rotate(270.000000) translate(-665.500000, -49.500000) " points="665.5 40 678 59 653 59"></polygon>
      </svg>
    )
  }
 };

export default class Footer extends Component {
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
        <div>
            <footer className="App-footer">
                <h2>Read more from our content series</h2>
                <a 
                data-label="Bring your curiosity to life"
                href="https://www.theguardian.com/canon-bring-curiosity-to-life" 
                onClick={this.HandleClick}
                rel="noopener noreferrer"  
                target="_blank"  
                className="btn readmore">Bring your curiosity to life</a>
          </footer>
          <div className="CTA">

            <a 
              data-label="Watch Irene's Story"
              href="https://www.canon.com.au/explore/irene-curiosity" 
              rel="noopener noreferrer"  
              onClick={this.HandleClick}
              target="_blank" >
                Watch Irene's Story
                <YoutubeIcon />
            </a>
            
          </div>
        </div>
    );
  }
}
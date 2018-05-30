import React, { Component } from 'react';

export default class Trinkets extends Component {

  render() {
    return (
        <div>
                {
                    this.props.Trinkets.map((trinket,i)=>{
                        return(
                                <img key={i}
                                    src={this.props.Path+trinket} 
                                    alt=""
                                    className="Trinket"
                                />
                        )
                    })
                }
        </div>
            
    );
  }
}
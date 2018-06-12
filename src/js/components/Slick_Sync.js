import React, { Component } from "react";
import Slider from "react-slick";

const imageStyles={
    width:'100%',
    padding:'40px 15%',
    
}

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
     //  console.log(this.props.data)
    return (
      <div>
        
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
            {  

                this.props.data.map((label,i)=>{
                    return(
                            <div key={i}><h3 className="cursive" >{label.label}</h3></div>
                    )
                })
            }
          

        </Slider>

        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={1}
          swipeToSlide={true}
          focusOnSelect={true}
        >
        {
            this.props.data.map((label,i)=>{
                return(
                        <div key={i} className="syncImage" style={imageStyles} ><img className={'sync sync_'+i}  alt="" src={this.props.path+label.src} /></div>
                )
            })
        }
        
        </Slider>
      </div>
    );
  }
}
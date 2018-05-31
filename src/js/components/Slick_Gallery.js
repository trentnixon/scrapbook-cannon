import React from "react";
import Slider from "react-slick";

const imageStyles={
    width:'100%',
    padding:'0px'
}
export default  class SimpleSlider extends React.Component {
  afterChange(o,n){
      // Old index not working in plugin!!!
      // let old, Img, OldImg;

      // if(n===0){old = this.props.data.length-1 } else{old=n-1}
      
      // OldImg = document.getElementById("item_"+old)
      //setTimeout(function(){ OldImg.classList.remove("pan"); },12000)
      
     // Img = document.getElementById("item_"+n)
     // Img.className += " pan"; 
  
    }

  render() {

    var settings = {
      dots: false,
      infinite: true,
      adaptiveHeight:false,
      speed: 8000,
      autoplay:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows:false,
      beforeChange:this.afterChange.bind(this)
    };
    return (
      <div className="Faded_Gallery">
      <Slider {...settings}>
        {
            this.props.data.map((img,i)=>{
                return(
                        <div key={i}><img id={"item_"+i} style={imageStyles} alt="" src={this.props.path+img} /></div>
                )
            })
        }
      </Slider>
      </div>
    );
  }
}
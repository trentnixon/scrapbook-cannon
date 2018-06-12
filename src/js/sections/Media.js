import React, { Component } from 'react';
import StillImages from "../components/Still_Image";
import SlideShow from "../components/Slick_Gallery";
import SyncSlider from "../components/Slick_Sync";

let Display_Media=null;
export default class Media extends Component {

    componentWillMount(){ 
        //console.log(this.props)
        
        switch(this.props.type) {
            case null:
                    Display_Media=null;
                break;
            case "still":
                    Display_Media = this.props.assets.map((asset,i)=>{
                        return( <StillImages key={i} path={this.props.Path} image={asset} /> )
                    })
                break;
            case "slide" :Display_Media =  <SlideShow path={this.props.Path}  data={this.props.assets}/>;
                break;
            case "sync": Display_Media =  <SyncSlider path={this.props.Path} data={this.props.assets}/>
                break;
            default: Display_Media=null;
        }
     }
  render() {
    if(Display_Media !== null){
        return (
                <div className="DisplayMedia" id={this.props.id}>
                    {Display_Media}
                </div>
        );
    }else{  return(<div></div>) }
  }
}
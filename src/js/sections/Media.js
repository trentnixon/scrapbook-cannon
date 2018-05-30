import React, { Component } from 'react';
import StillImages from "../components/Still_Image";
import SlideShow from "../components/Slick_Gallery";
import SyncSlider from "../components/Slick_Sync";


let Display_Media;
export default class Media extends Component {
 
    componentWillMount(){ 
        Display_Media=null;
        if(this.props.type === "still")
            {
                Display_Media = this.props.assets.map((asset,i)=>{
                    return(
                        <StillImages key={i} path="/assets/" image={asset} />
                    )
                })
            }
        else if(this.props.type === "slide"){
                Display_Media =  <SlideShow path="/assets/"  data={this.props.assets}/>
        }
        else if(this.props.type === "sync"){
                Display_Media =  <SyncSlider path="/assets/"  data={this.props.assets}/>
        }
        
     }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    componentDidUpdate(){ }


  render() {
    if(Display_Media !== null){
        return (
           
                <div className="DisplayMedia">
                    {Display_Media}
                </div>
         
        );
    }else{  return(<div></div>) }
  }
}
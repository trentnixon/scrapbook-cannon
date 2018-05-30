import React, { Component } from 'react';

import { connect } from "react-redux";
// Scrap Book layout
import Header from "../sections/Header";
import Footer from "../sections/footer";
import Sponsor from "../sections/Sponsorship";
import TextLeft from "../sections/Text_Left";
import TextRight from "../sections/Text_Right";

class App extends Component {
 
    componentWillMount(){  }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    componentDidUpdate(){ }

  render() {
        if(this.props.UI.Data !== false){
    
    return (
        
        <div id="Browser" className="App  container">  
            
            <Header 
                header={this.props.UI.Data.header} 
                header_logo={this.props.UI.Data.header_logo}
            />
            
            {
                this.props.UI.Data.Sections.map((section,i)=>{
                        
                        if(section.layout === "textLeft"){
                            return(
                                <TextLeft 
                                    key={i}
                                    i={i}
                                    SectionData={section}
                                    copy={section.copy}
                                    Hero_Type={section.heroType}
                                    Hero_Assets={section.hero}
                                    Additional_type={section.media} 
                                    Additional_assets={section.Assets}
                                    Trinkets={section.trinkets} 
                                    Path="/assets/"
                                />
                              )
                        }
                        else{
                            return(
                                <TextRight 
                                    key={i}
                                    i={i}
                                    copy={section.copy}
                                    Hero_Type={section.heroType}
                                    Hero_Assets={section.hero}
                                    Additional_type={section.media} 
                                    Additional_assets={section.Assets}
                                    Trinkets={section.trinkets} 
                                    Path="/assets/"
                                />
                              )
                            }
                      })
                    }
                    <Footer />
                    <Sponsor 
                        tagline={this.props.UI.Data.tagline}
                        logo={this.props.UI.Data.SponsorLogo}
                        path="/assets/"
                    />
                  </div>
                );
              }else{ return( <div> Loading </div> ) }
  }
}
const mapStateToProps = (state) => ({
  UI: state.UI
})
export default connect(mapStateToProps)(App);

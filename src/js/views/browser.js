import React, { Component } from 'react';
import { connect } from "react-redux";
import ReactGA from 'react-ga';
// Scrap Book layout
import LoadingScreen from "../sections/Loading";
import Header from "../sections/Header";
import Footer from "../sections/footer";
import Sponsor from "../sections/Sponsorship";
import TextLeft from "../sections/Text_Left";
import TextRight from "../sections/Text_Right";

class App extends Component {
    componentWillMount(){   ReactGA.initialize('UA-76345112-9'); }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    componentDidUpdate(){ }

  render() {
        if(this.props.UI.Data !== false){
    
    return (
        
        <div id="Browser" className="App  container">  
            <div className="d-md-none">
                    <LoadingScreen 
                        logo={this.props.UI.ImagePath+"Canon-Logo.png"}
                    />
                    <p className="text-center" >Refresh this page to view the content.</p>
            </div>
            <div className="d-none d-md-block">
            <Header 
                header={this.props.UI.Data.header} 
                header_logo={this.props.UI.Data.header_logo}
                Path={this.props.UI.ImagePath}

            />
            
            {
                this.props.UI.Data.Sections.map((section,i)=>{
                        
                        if(section.layout === "textLeft"){
                            return(
                                <TextLeft 
                                    key={i}
                                    i={i}
                                    SectionData={section}
                                   
                                    Hero_Type={section.heroType}
                                    Hero_Assets={section.hero}
                                    Additional_type={section.media} 
                                    Additional_assets={section.Assets}

                                    Path={this.props.UI.ImagePath}
                                />
                              )
                        }
                        else{
                            return(
                                <TextRight 
                                    key={i}
                                    i={i}
                                    SectionData={section}

                                    Hero_Type={section.heroType}
                                    Hero_Assets={section.hero}
                                    Additional_type={section.media} 
                                    Additional_assets={section.Assets}
                                    
                                    Path={this.props.UI.ImagePath}
                                />
                              )
                            }
                      })
                    }
                    <Footer />
                    <Sponsor 
                        tagline={this.props.UI.Data.tagline}
                        logo={this.props.UI.Data.SponsorLogo}
                        path={this.props.UI.ImagePath}
                    />
                    </div>
                  </div>
                );
              }else{ return( 
                    <LoadingScreen 
                        logo={this.props.UI.ImagePath+"Canon-Logo.png"}
                    />
            ) }
  }
}
const mapStateToProps = (state) => ({
  UI: state.UI
})
export default connect(mapStateToProps)(App);

import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { connect } from "react-redux";
// Scrap Book layout
import Header from "../sections/Header";
import LoadingScreen from "../sections/Loading";
import Paragraph from "../components/copy";
import Media from "../sections/Media";
import Footer from "../sections/footer";
import Sponsor from "../sections/Sponsorship";

class App extends Component {
 
    componentWillMount(){  ReactGA.initialize('UA-76345112-9'); }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    componentDidUpdate(){ }

  render() {
              if(this.props.UI.Data !== false){
                return (
                  <div id="Mobile" className="App container">                  
                      <Header 
                        header={this.props.UI.Data.header} 
                        header_logo={this.props.UI.Data.header_logo}
                        Path={this.props.UI.ImagePath}
                      />

                    {
                      this.props.UI.Data.Sections.map((section,i)=>{
                        // console.log(section)
                        return(
                          <section className={"section_"+i +' '+ section.media} key={i}>
                            <div className="row">
                              
                              <Paragraph data={section.copy} />
                              <Media 
                                type={section.Mobile_Media} 
                                assets={section.Mobile_Assest}
                                Path={this.props.UI.ImagePath}
                              />
                            </div>
                          </section>
                        )
                      })
                    }
                    <Footer />
                    <Sponsor 
                        tagline={this.props.UI.Data.tagline}
                        logo={this.props.UI.Data.SponsorLogo}
                        path={this.props.UI.ImagePath}
                    />
                  </div>
                );
              }else{ return( <LoadingScreen  logo={this.props.UI.ImagePath+"Canon-Logo.png"} />) }
  }
}
const mapStateToProps = (state) => ({
  UI: state.UI
})
export default connect(mapStateToProps)(App);

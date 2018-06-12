import React, { Component } from 'react';
import Paragraph from "../components/copy";
import Media from "../sections/Media";
import Trinkets from "../components/Trinkets";
import CustomLabel from "../sections/Custom_Labels";

let Data;
export default class Text_Left extends Component {
  componentWillMount(){  
       
    Data=this.props.SectionData;
    }
  render() {
    // console.log(Data.Images["0"].type);
        return ( 
            <section className={"section_"+this.props.i} >
                <div className="row">
                <div className="col-12">
                    <CustomLabel label={Data.Custom_Label} />
                </div>
                <div className="col-12 col-md-6"> 
                    <Paragraph data={Data.copy} />
                </div>
                <div className="col-12 col-md-6 Hero">
                    <Media 
                        type={Data.Images["0"].type} 
                        assets={Data.Images["0"].assets}
                        id="hero"
                        Path={this.props.Path}
                    />
                </div>
                <div className="col-12 col-md-12 Additional">
                    <Media 
                        type={Data.Images["1"].type} 
                        assets={Data.Images["1"].assets}
                        id="Asset_Left"
                        Path={this.props.Path}
                    />
                    <Media 
                        type={Data.Images["2"].type} 
                        assets={Data.Images["2"].assets}
                        id="Asset_Right"
                        Path={this.props.Path}
                    />
                </div>

                <Trinkets 
                    Trinkets={Data.trinkets}
                    Path={this.props.Path}
                />
                </div>
          </section>
    );
  }
}
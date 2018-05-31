import React, { Component } from 'react';
import Paragraph from "../components/copy";
import Media from "../sections/Media";
import Trinkets from "../components/Trinkets";
import CustomLabel from "../sections/Custom_Labels";


export default class Text_Left extends Component {
  render() {
      
        return ( 
            <section className={"section_"+this.props.i} >
                <div className="row">
                <div className="col-12 col-md-6 Hero">
                <CustomLabel label={this.props.label} />
                    <Media 
                        type={this.props.Hero_Type} 
                        assets={this.props.Hero_Assets}
                    />
                </div>
                <div className="col-12 col-md-6"> 
                    <Paragraph data={this.props.copy} />
                </div>
                
                <div className="col-12 col-md-12 Additional">
                    <Media 
                        type={this.props.Additional_type} 
                        assets={this.props.Additional_assets}
                    />
                </div>

                <Trinkets 
                    Trinkets={this.props.Trinkets} 
                    Path={this.props.Path}
                />
                </div>
          </section>
    );
  }
}
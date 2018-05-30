import React, { Component } from 'react';

export default class Page_Copy extends Component {
  render() {
      if(this.props.data !== null){
        return ( 
            <div className="Copy">
                {
                 this.props.data.map((copy,i)=>{
                    return(
                        <p className={copy.type} key={i}>
                            {copy.copy}
                        </p>
                    )
                 })   
                }
            </div>
    );
      }else{
          return(<div></div>)
      }
  }
}
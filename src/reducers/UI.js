// import React from "react";

const InitialState ={
	Data:false,
	ImagePath:'https://interactive.guim.co.uk/embed/2018/06/scrapbook-cannon/irene/assets/'
}

const UI = (state=InitialState, action) =>{
		// eslint-disable-next-line 
		switch(action.type){
			// Fetch Initial Meta Data
			case "STORE_DATA":{
					return {...state, Data:action.payload}
					// eslint-disable-next-line 
					break
				}	
		}
		return state;
	}
export default UI;	
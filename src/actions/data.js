import axios from 'axios';
import store from "../store/store";

export function ScrapBook(){

    /** Set Properties */
        this.path="/json/irene.json"

    /** Set Methods */

    this.start =  () => {
        axios.get(this.path)
            .then(function (response) {
                store.dispatch({ type:"STORE_DATA", payload:response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

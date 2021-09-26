import React, { Component } from "react";
import DISHES from "../../data/dishes";
import MenuItem from "./MenuItem";



class Dishes extends Component {
    state = {
        dishes: DISHES
    }


    render(){

        const dish = this.state.dishes.map((item) => {
            return(
                <MenuItem dish={item} key={item.id}/>
            )  
        })
        return(
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {dish}
                    </div>
                </div>
            </div>
        )
    }
}


export default Dishes;
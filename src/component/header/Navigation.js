import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";


const Navigation = ()=>{
    return(
        <div>
            <Navbar dark color="dark">
                <div className="container">
                    <NavbarBrand href="/">Bohubrihi Resturent</NavbarBrand>
                </div>
            </Navbar>
        </div>
    )
}

export default Navigation;
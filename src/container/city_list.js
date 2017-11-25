import React, { Component } from 'react';
import { Link } from 'react-router';


export default class city_list extends Component{

    render(){
        return (
            <div>
                <Link to={"/city/New York"}>
                    Click here to checkout New York!
                </Link>
            </div>
        )
    }

}




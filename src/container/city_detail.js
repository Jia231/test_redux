import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentLocationWeather  }  from '../actions/index';



class CityDetail extends Component {

    componentWillMount(){
        this.props.fetchCurrentLocationWeather(this.props.params.city)
        //console.log(this.props.current)
    }

    render(){
        if(!this.props.current){
            return(
                <div>
                    Loading!!!
                </div>
            )
        }
        return(
           
            <div>
               Hi {this.props.current.data.city.name}!
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        current : state.weather.current
    }
}

export default connect(mapStateToProps,{fetchCurrentLocationWeather})(CityDetail)
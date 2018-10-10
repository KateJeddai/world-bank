import React from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import  lifeexpect from './img/lifeexpect.jpeg';
import  fertility from './img/fertility.jpeg';
import  population from './img/population.jpeg';
import CountriesData from '../components/CountriesData';
import { setDataType } from '../actions/dataTypeReducer';
import { addCountryData } from '../actions/countryReducer';
import '../css/main.scss'; 


const CountriesGeneral = (props) => {
    const setTypePopulation = () => {
        props.setDataType('population');
        props.addCountryData({});        
    }
    const setTypeExpectancy = () => {
        props.setDataType('life-expectancy');
        props.addCountryData({});
    }
    const setTypeFertility = () => {
        props.setDataType('fertility');
        props.addCountryData({});
    }
    return(
        <div className="container">
            <Route exact path={`${props.match.url}/life-expectancy`} component={CountriesData} />
            <Route exact path={`${props.match.url}/population-total`} component={CountriesData} />
            <Route exact path={`${props.match.url}/fertility`} component={CountriesData} />
            <div className="wrapper">
                <div className="block countries-block" onClick={setTypePopulation}>
                  <Link to={`${props.match.url}/population-total`} className="link">
                    <div className="block-image">
                        <img src={population} alt="pic" />
                    </div>
                    <div className="title">
                        <h3>Population: total</h3>
                    </div>
                  </Link>  
                </div>
                <div className="block countries-block" onClick={setTypeExpectancy}>
                  <Link to={`${props.match.url}/life-expectancy`} className="link">
                    <div className="block-image">
                        <img src={lifeexpect} alt="pic" />
                    </div>                    
                    <div className="title">
                        <h3>Life Expectancy</h3>
                    </div>
                  </Link>  
                </div>
                <div className="block countries-block" onClick={setTypeFertility}>
                  <Link to={`${props.match.url}/fertility`} className="link">
                    <div className="block-image">
                        <img src={fertility} alt="pic" />
                    </div>
                    <div className="title">
                        <h3>Fertility</h3>
                    </div>
                  </Link>  
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    setDataType: (type) => dispatch(setDataType(type)),
    addCountryData: (data) => dispatch(addCountryData(data))
})

export default connect(undefined, mapDispatchToProps)(CountriesGeneral);
import React from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import  lifeexpect from './img/lifeexpect.jpeg';
import  fertility from './img/fertility.jpeg';
import  population from './img/population.jpeg';
import ChartExpectancy from './ChartExpectancy';
import { addExpectancyRegions } from '../actions/expectancyReducer';
import RegionsExpectancy from '../components/RegionsExpectancy';
import { setDataType } from '../actions/dataTypeReducer';
import '../css/regionsgeneral.scss';

class RegionsGeneral extends React.Component{
    state = {
        population_all: true
    }
    componentDidMount(){
        const regions = ["East Asia & Pacific", "Europe & Central Asia", "European Union", "Latin America & Caribbean",
                     "Middle East & North Africa", "North America", "South Asia", "Sub-Saharan Africa"];    
    
        this.props.setDataType('population');
        axios.get('https://cors-anywhere.herokuapp.com/http://api.worldbank.org/countries/all/indicators/SP.POP.TOTL/?format=json&date=2014&per_page=46')
             .then(res => {
                let data = res.data[1]; 
                    data = data.filter(d => {
                        let val = d.country.value;
                        return regions.indexOf(val) > -1;      
                    });       
                this.props.addExpectancyRegions(data);
        })
        .catch(err => console.log(err));
    }
    
    setTypeExpectancy = () => {
        this.props.setDataType('life-expectancy');
        this.props.addExpectancyRegions({});
        this.setState(() => ({ population_all: false}));
    }
    setTypePopulation = () => {
        this.props.setDataType('population');
        this.props.addExpectancyRegions({});
        this.setState(() => ({ population_all: false}));
    }
    setTypeFertility = () => {
        this.props.setDataType('fertility');
        this.props.addExpectancyRegions({});
        this.setState(() => ({ population_all: false}));
    }
    render(){
        const {population_all} = this.state;
      return(
        <div className="container">
          { population_all ? (<div className="chart" style={{ margin: '2rem auto' }}><ChartExpectancy type="population-all" /></div>) : null }
          <Route exact path={`${this.props.match.url}/life-expectancy`} component={RegionsExpectancy} />
          <Route exact path={`${this.props.match.url}/population-total`} component={RegionsExpectancy} />
          <Route exact path={`${this.props.match.url}/fertility`} component={RegionsExpectancy} />
            <div className="wrapper">
                <div className="block regions-block" onClick={this.setTypePopulation}>
                  <Link to={`${this.props.match.url}/population-total`} className="link">
                    <div className="block-image">
                        <img src={population} alt="pic" />
                    </div>
                    <div className="title">
                        <h3>Population: total</h3>
                    </div>
                  </Link> 
                </div>
                <div className="block regions-block" onClick={this.setTypeExpectancy}>
                  <Link to={`${this.props.match.url}/life-expectancy`} className="link">
                    <div className="block-image">
                        <img src={lifeexpect} alt="pic" />
                    </div>                    
                    <div className="title">
                        <h3>Life Expectancy</h3>
                    </div>
                  </Link>  
                </div>
                <div className="block regions-block" onClick={this.setTypeFertility}>
                  <Link to={`${this.props.match.url}/fertility`} className="link">
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
}

const mapDispatchToProps = (dispatch) => ({
    setDataType: (type) => dispatch(setDataType(type)),
    addExpectancyRegions: (data) => dispatch(addExpectancyRegions(data))
})

export default connect(undefined, mapDispatchToProps)(RegionsGeneral);
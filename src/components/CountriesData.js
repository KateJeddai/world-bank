import React from 'react';
import { connect } from 'react-redux';
import ChartCountry from './ChartCountry';
import CountryList from './CountryList';
import '../css/chartcountry.scss';
import '../css/countriesdata.scss';

const CountriesData = (props) => {
    let dataType = props.dataType;
    
        return(
             <div>
                 <div className="wrapper">
                    <div className='title'>
                      {
                       dataType === 'life-expectancy' && (<h2>Life Expectancy</h2>) || 
                       dataType === 'population'  && (<h2>Population: total</h2>) ||
                       dataType === 'fertility' && (<h2>Fertility</h2>)
                      } 
                      {
                       props.data && props.data.length > 0 && (<div className="flag"><img src={props.data[props.data.length - 1].flag} alt="pic" /></div>)
                      }
                      
                    </div>
                    <div className="country-search">
                        <CountryList />
                    </div>    
                 </div>   
                 <div className="chart">
                      <ChartCountry />
                 </div>
             </div>
         )
    }


const mapStateToProps = (state = {}) => ({
    dataType: state.dataTypeReducer.type,
    data: state.countryReducer.data
});


export default connect(mapStateToProps)(CountriesData);


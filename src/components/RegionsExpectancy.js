import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addExpectancyRegions } from '../actions/expectancyReducer';
import ChartExpectancy from './ChartExpectancy';
import { SpinnerInd } from './Spinner';
import '../css/chart.scss';
import '../css/regionsexpectancy.scss';

        
const regions = ["East Asia & Pacific", "Europe & Central Asia", "European Union", "Latin America & Caribbean",
"Middle East & North Africa", "North America", "South Asia", "Sub-Saharan Africa", 'World']; 

class RegionsExpectancy extends React.Component{
    state = {
        data: []
    };
    componentDidMount(){
        let url,
            { dataType } = this.props;
            
            if(dataType === 'life-expectancy'){
                url = 'https://cors-anywhere.herokuapp.com/http://api.worldbank.org/countries/all/indicators/SP.DYN.LE00.IN/?format=json&date=1960:2014&per_page=2600';
            }
            if(dataType === 'population'){
                url = 'https://cors-anywhere.herokuapp.com/http://api.worldbank.org/countries/all/indicators/SP.POP.TOTL/?format=json&date=1960:2014&per_page=2600';
            }
            if(dataType === 'fertility'){
                url = 'https://cors-anywhere.herokuapp.com/http://api.worldbank.org/countries/all/indicators/SP.DYN.TFRT.IN/?format=json&date=1960:2014&per_page=2600';
            }

        axios.get(url)
             .then(res => {
                 let data  = res.data[1]; 
                     data = data.filter(d => {
                         let val = d.country.value;
                         return regions.indexOf(val) > -1;
                    });

                    data = data.map(d => {
                        d['year'] = d['date'];
                        delete d['date'];
                        return d;
                    })
                    this.setState(() => ({ data }));
             })
             .catch(err => console.log(err));
    }

    findRegionData = (name) => {
        const data = this.state.data;
        let regionArray = [];
              console.log(data);
                data.forEach((d, i) => {
                   if(d.country.value === name){
                       regionArray.push(d);
                   }
               });
               console.log(regionArray);
               this.props.addExpectancyRegions(regionArray);
    }

    handleSelectRegion = (e) => {
        let region = e.target.value;
            if(regions.indexOf(region) > -1){
                this.findRegionData(region);
            }
    }

    render(){
        let { dataType } = this.props;                 
        return(
          <div> 
             <div className="wrapper">
                <div className="title">
                    {
                     dataType === 'life-expectancy' && (<h2>Life Expectancy</h2>) || 
                     dataType === 'population'  && (<h2>Population: total</h2>) ||
                     dataType === 'fertility' && (<h2>Fertility</h2>)
                    }                      
                </div> 
                <div className="select">
                  <select onChange={this.handleSelectRegion} className="select-style">
                    <option>Choose a region:</option>
                    <option value="East Asia & Pacific">East Asia & Pacific</option>
                    <option value="Europe & Central Asia">Europe & Central Asia</option>
                    <option value="European Union">European Union</option>
                    <option value="Latin America & Caribbean">Latin America & Caribbean</option>
                    <option value="Middle East & North Africa">Middle East & North Africa</option>
                    <option value="North America">North America</option>
                    <option value="South Asia">South Asia</option>
                    <option value="Sub-Saharan Africa">Sub-Saharan Africa</option>
                    <option value="World">World</option>
                  </select>
                </div>
             </div>    
                <div className="chart">
                   { this.state.data && this.state.data.length > 0 ? <ChartExpectancy /> : <SpinnerInd /> }                    
                </div>
          </div>
        )
    }
}

const mapStateToProps = (state = {}) => ({
    regionsExpectancy: state.expectancyReducer.data,
    dataType: state.dataTypeReducer.type
})

const mapDispatchToProps = (dispatch) => ({
    addExpectancyRegions: (data) => dispatch(addExpectancyRegions(data))
})

export default connect (mapStateToProps, mapDispatchToProps)(RegionsExpectancy);
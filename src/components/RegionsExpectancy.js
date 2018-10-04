import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addExpectancyRegions } from '../actions/expectancyReducer';
import ChartExpectancy from './ChartExpectancy';

class RegionsExpectancy extends React.Component{
    state = {
        arab: [],
        caribbean_small: [],
        central_europe_baltics: [],
        east_asia_pacific: [],
        europe_central_asia: [],
        european_union: [],
        latin_amer_caribbean: [],
        least_developed: [],
        high_income: [],
        middle_income: [],
        upper_middle_income: [],
        lower_middle_income: [],
        low_middle_income: [],
        low_income: [],
        middle_east_north_africa: [],
        north_america: [],
        pacific_small: [],
        south_asia: [],
        sub_saharan: [],
        world: []

      //  selected: ''
    };
    componentDidMount(){
        axios.get('https://cors-anywhere.herokuapp.com/http://api.worldbank.org/countries/all/indicators/SP.DYN.LE00.IN/?format=json&date=1960:2014&per_page=2600')
             .then(res => {
                 let data  = res.data[1];                 
                     data.forEach(d => {
                        if(d.country.value === 'Arab World'){
                            let arab = [];
                                arab.push({ year: d.date, value: d.value });
                            this.setState((prevState) => ({
                                arab: prevState.arab.concat(arab)
                            }));
                        }                        
                        else if(d.country.value === 'Caribbean small states'){
                            let caribbean_small = [];
                                caribbean_small.push({ year: d.date, value: d.value });
                            this.setState((prevState) => ({
                                caribbean_small: prevState.caribbean_small.concat(caribbean_small)
                            }));
                        }
                        else if(d.country.value === 'Central Europe and the Baltics'){
                            let central_europe_baltics = [];
                                central_europe_baltics.push({ year: d.date, value: d.value });
                            this.setState((prevState) => ({
                                central_europe_baltics: prevState.central_europe_baltics.concat(central_europe_baltics)
                            }));
                        }
                        else if(d.country.value === 'East Asia & Pacific'){
                            let east_asia_pacific = [];
                                east_asia_pacific.push({ year: d.date, value: d.value });
                            this.setState((prevState) => ({
                                east_asia_pacific: prevState.east_asia_pacific.concat(east_asia_pacific)
                            }));
                        }
                        else if(d.country.value === 'Europe & Central Asia'){
                            let europe_central_asia = [];
                                europe_central_asia.push({ year: d.date, value: d.value });
                            this.setState((prevState) => ({
                                europe_central_asia: prevState.europe_central_asia.concat(europe_central_asia)
                            }));
                        }
                        else if(d.country.value === 'European Union'){
                            let european_union = [];
                                european_union.push({ year: d.date, value: d.value });
                            this.setState((prevState) => ({
                                european_union: prevState.european_union.concat(european_union)
                            }));
                        }
                        else if(d.country.value === 'Latin America & Caribbean'){
                            let latin_amer_caribbean = [];
                                latin_amer_caribbean.push({ year: d.date, value: d.value });
                            this.setState((prevState) => ({
                                latin_amer_caribbean: prevState.latin_amer_caribbean.concat(latin_amer_caribbean)
                            }));
                        }
                        else if(d.country.value === 'Least developed countries: UN classification'){
                            let least_developed = [];
                                least_developed.push({ year: d.date, value: d.value });
                            this.setState((prevState) => ({
                                least_developed: prevState.least_developed.concat(least_developed)
                            }));
                        }
                        else if(d.country.value === 'High income'){
                            let high_income = [];
                                high_income.push({ year: d.date, value: d.value });
                            this.setState((prevState) => ({
                                high_income: prevState.high_income.concat(high_income)
                            }));
                        }
                        else if(d.country.value === 'Low & middle income'){
                            let low_middle_income = [];
                                low_middle_income.push({ year: d.date, value: d.value });
                            this.setState((prevState) => ({
                                low_middle_income: prevState.low_middle_income.concat(low_middle_income)
                            }));
                        }                        
                        else if(d.country.value === 'Low income'){
                            let low_income = [];
                                low_income.push({ year: d.date, value: d.value });
                            this.setState((prevState) => ({
                                low_income: prevState.low_income.concat(low_income)
                            }));
                        }                        
                        else if(d.country.value === 'Lower middle income'){
                            let lower_middle_income = [];
                                lower_middle_income.push({ year: d.date, value: d.value });
                            this.setState((prevState) => ({
                                lower_middle_income: prevState.lower_middle_income.concat(lower_middle_income)
                            }));
                        }
                        else if(d.country.value === 'Middle East & North Africa'){
                            let middle_east_north_africa = [];
                                middle_east_north_africa.push({ year: d.date, value: d.value });
                            this.setState((prevState) => ({
                                middle_east_north_africa: prevState.middle_east_north_africa.concat(middle_east_north_africa)
                            }));
                        }                        
                        else if(d.country.value === 'Middle income'){
                            let middle_income = [];
                                middle_income.push({ year: d.date, value: d.value });
                            this.setState((prevState) => ({
                                middle_income: prevState.middle_income.concat(middle_income)
                            }));
                        }                        
                        else if(d.country.value === 'North America'){
                            let north_america = [];
                                north_america.push({ year: d.date, value: d.value });
                            this.setState((prevState) => ({
                                north_america: prevState.north_america.concat(north_america)
                            }));
                        }                        
                        else if(d.country.value === 'Pacific island small states'){
                            let pacific_small = [];
                                pacific_small.push({ year: d.date, value: d.value });
                            this.setState((prevState) => ({
                                pacific_small: prevState.pacific_small.concat(pacific_small)
                            }));
                        }
                        else if(d.country.value === 'South Asia'){
                            let south_asia = [];
                                south_asia.push({ year: d.date, value: d.value });
                            this.setState((prevState) => ({
                                south_asia: prevState.south_asia.concat(south_asia)
                            }));
                        }
                        else if(d.country.value === 'Sub-Saharan Africa'){
                            let sub_saharan = [];
                                sub_saharan.push({ year: d.date, value: d.value });
                            this.setState((prevState) => ({
                                sub_saharan: prevState.sub_saharan.concat(sub_saharan)
                            }));
                        }
                        else if(d.country.value === 'Upper middle income'){
                            let upper_middle_income = [];
                                upper_middle_income.push({ year: d.date, value: d.value });
                            this.setState((prevState) => ({
                                upper_middle_income: prevState.upper_middle_income.concat(upper_middle_income)
                            }));
                        }                        
                        else if(d.country.value === 'World'){
                            let world = [];
                                world.push({ year: d.date, value: d.value });
                            this.setState((prevState) => ({
                                world: prevState.world.concat(world)
                            }));
                        } 
                     })
                 console.log(data);
             })
             .catch(err => console.log(err));
    }

    handleSelectRegion = (e) => {
        let region = e.target.value, selected;
            switch(region){
                case "Arab World":
                    selected = this.state.arab;
                    //this.setState(() => ({ selected }));  
                    this.props.addExpectancyRegions(selected); 
                    break;                 
                case "Caribbean small states":
                    selected = this.state.caribbean_small;
                    //this.setState(() => ({ selected }));  
                    this.props.addExpectancyRegions(selected);
                    break;
                case "Central Europe and the Baltics":
                    selected = this.state.central_europe_baltics;
                   // this.setState(() => ({ selected })); 
                    this.props.addExpectancyRegions(selected); 
                    break;
                case "East Asia & Pacific":
                    selected = this.state.east_asia_pacific;
                   // this.setState(() => ({ selected }));  
                    this.props.addExpectancyRegions(selected);
                    break;
                case "Europe & Central Asia":
                    selected = this.state.europe_central_asia;
                   // this.setState(() => ({ selected }));  
                    this.props.addExpectancyRegions(selected);
                    break;
                case "European Union":
                    selected = this.state.european_union;
                    //this.setState(() => ({ selected }));  
                    this.props.addExpectancyRegions(selected);
                    break;
                case "Latin America & Caribbean":
                    selected = this.state.latin_amer_caribbean;
                   // this.setState(() => ({ selected }));  
                    this.props.addExpectancyRegions(selected);
                    break;
                case "Middle East & North Africa":
                    selected = this.state.middle_east_north_africa;
                   // this.setState(() => ({ selected }));  
                    this.props.addExpectancyRegions(selected);
                    break;
                case "North America":
                    selected = this.state.north_america;
                   // this.setState(() => ({ selected })); 
                    this.props.addExpectancyRegions(selected); 
                    break;
                case "Pacific island small states":
                    selected = this.state.pacific_small;
                   // this.setState(() => ({ selected })); 
                    this.props.addExpectancyRegions(selected); 
                    break;
                case "South Asia":
                    selected = this.state.south_asia;
                   // this.setState(() => ({ selected }));  
                    this.props.addExpectancyRegions(selected);
                    break;
                case "Sub-Saharan Africa":
                    selected = this.state.sub_saharan;
                   // this.setState(() => ({ selected }));  
                    this.props.addExpectancyRegions(selected);
                    break;
                case "World":
                    selected = this.state.world;
                   // this.setState(() => ({ selected }));  
                    this.props.addExpectancyRegions(selected);
                    break;
                default: return null;    
            }
    }

    render(){
        let selected;
        if(this.props.regionsExpectancy.length > 0){ 
            selected = this.props.regionsExpectancy;    
            console.log(selected);
        }        
        return(
            <div>
                <ChartExpectancy />           
                <div>
                  <select onChange={this.handleSelectRegion}>
                    <option>Choose a region:</option>
                    <option value="Arab World">Arab World</option>
                    <option value="Caribbean small states">Caribbean small states</option>
                    <option value="Central Europe and the Baltics">Central Europe and the Baltics</option>
                    <option value="East Asia & Pacific">East Asia & Pacific</option>
                    <option value="Europe & Central Asia">Europe & Central Asia</option>
                    <option value="European Union">European Union</option>
                    <option value="Latin America & Caribbean">Latin America & Caribbean</option>
                    <option value="Middle East & North Africa">Middle East & North Africa</option>
                    <option value="North America">North America</option>
                    <option value="Pacific island small states">Pacific island small states</option>
                    <option value="South Asia">South Asia</option>
                    <option value="Sub-Saharan Africa">Sub-Saharan Africa</option>
                    <option value="World">World</option>
                  </select>
                </div>
            </div>
        )
    }
}
/*
  
                <div>
                    { selected && selected.length > 0 ? 
                        (selected.map(sel => {
                            return(
                            <div key={sel.value}>
                                <p>{sel.year} - {sel.value}</p>
                            </div>
                        )}
                       )) : null                     
                    }
                </div>
                */
const mapStateToProps = (state = {}) => ({
    regionsExpectancy:  state.expectancyReducer.data
})

const mapDispatchToProps = (dispatch) => ({
    addExpectancyRegions: (data) => dispatch(addExpectancyRegions(data))
})

export default connect (mapStateToProps, mapDispatchToProps)(RegionsExpectancy);
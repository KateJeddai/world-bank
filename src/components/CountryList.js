import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addCountryData } from '../actions/countryReducer';
import '../css/countrylist.scss';

class CountryList extends React.Component{
    state = {
        country: '',
        countryCode: '',
        countries: [],
        countriesInitial: [],
        opened: false,
        noData: false
    };
    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all')
             .then(res => {
                 let data = res.data;
                 this.setState(() => ({ countriesInitial: data, countries: data }));
             })
             .catch(err => console.log(err));
    }

    handleOpened = () => {
        this.setState((prevState) => ({ opened: !prevState.opened }));        
    }

    handleChange = (e) => {
        let { countriesInitial } = this.state; 
        let updatedCountries = countriesInitial;
        let val = (e.target.value).toLowerCase();
            this.setState(() => ({ country: val }));

       updatedCountries = updatedCountries.filter(country => {
            let regex = new RegExp(val, 'g');
            let state = (country.name).toLowerCase();
            return state.match(regex);
        });
        this.setState(() => ({ countries: updatedCountries }));
    }

    handleCountryClick = (e, name) => {
        e.stopPropagation();
        this.setState(() => ({ noData: false }));

        let country = name;
        console.log(country);
    
        let dataType = this.props.dataType;
        const urlCode = 'https://restcountries.eu/rest/v2/name/' + country + '?fullText=true';

        const indicators = ['SP.DYN.LE00.IN', 'SP.POP.TOTL', 'SP.DYN.TFRT.IN'];
        let indicator;

              if(dataType === 'population'){
                  indicator = indicators[1];
              }
              else if(dataType === 'life-expectancy'){
                  indicator = indicators[0];
              }
              else if(dataType === 'fertility'){
                  indicator = indicators[2];
              }

        axios.get(urlCode)
             .then(res => {
                 let countryCode = res.data[0].alpha2Code,
                     flag = res.data[0].flag;
                 this.setState(() => ({
                     countryCode
                 }));
                
                 return axios.get(`https://cors-anywhere.herokuapp.com/http://api.worldbank.org/countries/${this.state.countryCode}/indicators/${indicator}/?format=json`)
                             .then(res => {
                                 let data = res.data[1];
                                 
                                 if(!data){
                                    this.setState(() => ({ noData: true }));
                                 }
                                 else if(data && data.length > 0){
                                     data.push({ flag });
                                     this.props.addCountryData(data);

                                     if(data[0].value == null){
                                        this.setState(() => ({ noData: true }));
                                     }
                                 }
                             })   
                             .catch(err => console.log(err));
              })
              .catch(err => {
                  if(err.response.status == 404){
                     alert('Check if a country name is valid');
                  }
              });      
    }

    render(){
        const { countries, opened, noData } = this.state;
        return(
            <div className="search-list">
                <div className="title">
                    <h3>Choose a country:</h3>
                </div>    
                <input type="text" value={this.state.value} onFocus={this.handleOpened} onChange={this.handleChange} />
                <div className="search-list-inner">
                    { countries.length > 0 && countries.map((country, i) => (
                      <div key={country.name} >  
                        <p onClick={(e) => this.handleCountryClick(e, country.name)}>{country.name}</p>
                        <img src={country.flag} alt="flag" />
                      </div>
                    ))}
                </div>
                <div className="noData">
                    { noData ? <h3 style={{ paddingLeft: '1rem' }}>No data available!</h3> : null }
                </div>
            </div>
        )
    }    
}

const mapStateToProps = (state = {}) => ({
    dataType: state.dataTypeReducer.type,
    data: state.countryReducer.data
});


const mapDispatchToProps = (dispatch) => ({
    addCountryData: (data) => dispatch(addCountryData(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(CountryList);
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addTopPopulation } from '../actions/topReducer';
import { addTopLife } from '../actions/topReducer';
import { addTopFertility } from '../actions/topReducer';
import ChartTop from './ChartTop';
import '../css/dashboard.scss';


class Dashboard extends React.Component{
    state = {
        data_population: [],
        data_life: [],
        data_fertility: [],
        population_opened: true,
        life_opened: false,
        fertility_opened: false
    };
    /*   componentDidMount() {
            this.initialize();
          }
        
          myFunction = async () => {
              const { data: any } = await AnyApi.fetchAny();
              this.setState({ any });
          }
        
          initialize = async () => {
            await this.myFunction();
       ];*/

    componentDidMount(){
        let urls = [
            'https://cors-anywhere.herokuapp.com/http://api.worldbank.org/countries/all/indicators/SP.POP.TOTL/?format=json&date=2014&per_page=6200',
            'https://cors-anywhere.herokuapp.com/http://api.worldbank.org/countries/all/indicators/SP.DYN.LE00.IN/?format=json&date=2014&per_page=6200',
            'https://cors-anywhere.herokuapp.com/http://api.worldbank.org/countries/all/indicators/SP.DYN.TFRT.IN/?format=json&date=2014&per_page=6200'
        ];
        let requests = urls.map(url => axios.get(url).catch(err => err));
       
        Promise.all(requests)
               .then(responses => responses.forEach(res => {
                   if(res.status === 200){
                     let data = res.data[1].slice(46, res.data[1].length - 1);
                     let world = data[0];
                        
                        data = data.sort((a, b) => {
                             if(parseFloat(a.value) > parseFloat(b.value)){
                                return -1;
                             }
                             else if(parseFloat(a.value) < parseFloat(b.value)){
                                return 1;
                             }
                             else return 0;
                        }); 
                        
                        if(data[0].indicator.id === 'SP.POP.TOTL'){
                            data = data.slice(0, 11);
                            console.log(data);
                            this.setState(() => ({ data_population: data }));
                            this.props.addTopPopulation(data);
                        }  
                        else if(data[0].indicator.id === 'SP.DYN.LE00.IN'){
                            data = data.slice(0, 10);
                            data.unshift(world);
                            console.log(data);
                            this.setState(() => ({ data_life: data })); 
                            this.props.addTopLife(data);
                        }
                        else if(data[0].indicator.id === 'SP.DYN.TFRT.IN'){
                            data = data.slice(0, 10);
                            data.unshift(world);
                            console.log(data);
                            this.setState(() => ({ data_fertility: data })); 
                            this.props.addTopFertility(data);  
                        }
                    }
                }))
             .catch(err => console.log(err));
    }

/*
    componentDidMount(){
        this.fetchDataPopulation();
        this.fetchDataLife();
        this.fetchDataFertility();
    }

    fetchDataPopulation = () => {
        let url = 'https://cors-anywhere.herokuapp.com/http://api.worldbank.org/countries/all/indicators/SP.POP.TOTL/?format=json&date=2014&per_page=6200';
        axios.get(url)
               .then(res => {
                   let data = res.data[1].slice(46, res.data[1].length - 1);
                       data = data.sort((a, b) => {
                          if(parseInt(a.value) > parseInt(b.value)){
                              return -1;
                          }
                          else if(parseInt(a.value) < parseInt(b.value)){
                              return 1;
                          }
                          else return 0;
                    }); 
                    return data = data.slice(0, 11);
                    
             })
             .then (data => {
                if(data.length > 0) {
                    this.setState(() => ({ data_population: data }));
                }
                 
                this.props.addTopPopulation(data);
             })
             .catch(err => console.log(err));
    }

    fetchDataLife = () => {
        let url = 'https://cors-anywhere.herokuapp.com/http://api.worldbank.org/countries/all/indicators/SP.DYN.LE00.IN/?format=json&date=2014&per_page=6200';
        axios.get(url)
               .then(res => {
                   let data = res.data[1].slice(46, res.data[1].length - 1);
                   let world = data[0];
                    
                    data = data.sort((a, b) => {
                          if(parseFloat(a.value) > parseFloat(b.value)){
                              return -1;
                          }
                          else if(parseFloat(a.value) < parseFloat(b.value)){
                              return 1;
                          }
                          else return 0;
                    }); 
                    data = data.slice(0, 10);
                    data.unshift(world);
                    return data;
             })
             .then(data => {
                if(data.length > 0) {
                   this.setState(() => ({ data_life: data })); 
                }   
                this.props.addTopLife(data);
             })
             .catch(err => console.log(err));
    }

    fetchDataFertility = () => {
        let url = 'https://cors-anywhere.herokuapp.com/http://api.worldbank.org/countries/all/indicators/SP.DYN.TFRT.IN/?format=json&date=2014&per_page=6200';
        axios.get(url)
               .then(res => {
                   let data = res.data[1].slice(46, res.data[1].length - 1);
                   let world = data[0];
                    
                       data = data.sort((a, b) => {
                          if(parseFloat(a.value) > parseFloat(b.value)){
                              return -1;
                          }
                          else if(parseFloat(a.value) < parseFloat(b.value)){
                              return 1;
                          }
                          else return 0;
                    }); 
                    data = data.slice(0, 10);
                    data.unshift(world);
                    return data;
             })
             .then(data => {
                if(data.length > 0) {
                    this.setState(() => ({ data_fertility: data })); 
                }       
                this.props.addTopFertility(data);  
             })
             .catch(err => console.log(err));
    }*/

    handlePopulation = () => {
        this.setState((prevState) => ({ 
            population_opened: !prevState.population_opened
         }));
    }

    handleLife = () => {
        this.setState((prevState) => ({ 
            life_opened: !prevState.life_opened
         }));
    }

    handleFertility = () => {
        this.setState((prevState) => ({ 
            fertility_opened: !prevState.fertility_opened
         }));
    }

    render(){
        let { data_population, data_life, data_fertility, population_opened, life_opened, fertility_opened } = this.state;
            
      return(
        <div className="container">
               <div className="top-wrapper">
                   <div className="top-block" onClick={this.handlePopulation}>
                       <div className="title">
                           <h3>Top 10 Countries By Population:</h3>
                           { population_opened ? (<i className="fas fa-angle-up"></i>) : (<i className="fas fa-angle-down"></i>) }
                       </div>
                       <div className="block-text">
                         <ol>
                          { population_opened && data_population && data_population.length > 0 ? (
                              <div>
                                  <ChartTop type="population" data={this.state.data_population} />
                             </div>
                          ) : null }
                          </ol>
                       </div>
                   </div>
                   <div className="top-block" onClick={this.handleLife}>
                       <div className="title">
                           <h3>Top 10 Countries By Life Expectancy:</h3>
                           { life_opened ? (<i className="fas fa-angle-up"></i>) : (<i className="fas fa-angle-down"></i>) }
                       </div>
                       <div className="block-text">
                           <ol>
                            { life_opened && data_life && data_life.length > 0 ? (
                              <div>
                                  <ChartTop type="life" data={this.state.data_life} />
                             </div>
                            ) : null }
                           </ol>
                       </div>
                   </div>
                   <div className="top-block" onClick={this.handleFertility}>
                       <div className="title">
                           <h3>Top 10 Countries By Fertility:</h3>
                           { fertility_opened ? (<i className="fas fa-angle-up"></i>) : (<i className="fas fa-angle-down"></i>) }
                       </div>
                       <div className="block-text">
                           <ol>
                             { fertility_opened && data_fertility && data_fertility.length > 0 ? (
                              <div>
                                  <ChartTop type="fertility" data={this.state.data_fertility} />
                             </div>
                             ) : null }
                           </ol>
                       </div>
                   </div>
               </div>
        </div>
      )
    }  
}
                                 
const mapDispatchToProps = (dispatch) => ({
    addTopPopulation: (data) => dispatch(addTopPopulation(data)),
    addTopLife: (data) => dispatch(addTopLife(data)),
    addTopFertility: (data) => dispatch(addTopFertility(data))
})

export default connect(undefined, mapDispatchToProps)(Dashboard);
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux';

const ChartTop = (props) => {
    let label;
        
    let dataType = props.type;

    if(dataType === 'life'){
        label =  "Life Expectancy";
    }
    else if(dataType === 'population'){
        label = "Population: total";
    }
    else if(dataType === 'fertility'){
        label = "Fertility";
    }
 
    let data = {
        labels: props.data.map(unit => unit.country.value),
        datasets: [{
        label: label,
        backgroundColor: [
            '#d0cdd0',
            '#ed6168',
            '#49cec1',
            '#ffdc10',
            '#e7552c',
            '#f45048',
            '#1ea8df',
            '#568af9',
            '#5dba5e',
            '#1cadc2',
            '#dbbdfb'
        ],
        data: props.data.map(unit => {
            if(unit.value >= 1000000){
                return unit.value/1000000;
            }    
            else{
                return unit.value;
            } 
         })
        }]
    };
    
    return(
        <div>
          { props.type === 'population' && (  
            <Doughnut 
               data={data} 
               height={450}
               options={{
                   maintainAspectRatio: false
               }}
          /> ) || props.type === 'life' && (
            <Bar 
               data={data} 
               height={450}
               options={{
                   maintainAspectRatio: false
               }}
          />    
          ) || props.type === 'fertility' && (
            <Bar 
              data={data} 
              height={450}
              options={{
                   maintainAspectRatio: false
              }}
            />    
          )
        }
        </div>
      )
}

const mapStateToProps = (state = {}) => ({
    topPopulation: state.topReducer.topPopulation,
    topLife: state.topReducer.topLife,
    topFertility: state.topReducer.topFertility,
    dataType: state.dataTypeReducer.type
})

export default connect(mapStateToProps)(ChartTop);
import React from 'react';
import { Line, Doughnut, HorizontalBar } from 'react-chartjs-2';
import { connect } from 'react-redux';

const ChartExpectancy = (props) => {
    let labels = [],
        label,
        border = '',
        background = '',
        info = [],
        dataType = props.dataType;

    if(props.regionsExpectancy.length > 0){   
       labels = props.regionsExpectancy.map(unit => {
           if(unit.year){
               return unit.year;
           }
           else{
               return unit.country.value;
           }
       });
       info = props.regionsExpectancy.map(unit => {
           if(unit.value >= 1000000){
               return unit.value/1000000;
           }    
           else{
               return unit.value;
           } 
        });
    }    
      
    if(props.type === 'population-all'){
        border = 'rgb(255, 255, 255)';
        background = [
            '#ed6168',
            '#49cec1',
            '#ffdc10',
            '#e7552c',
            '#f45048',
            '#1ea8df',
            '#568af9',
            '#5dba5e'
        ];
    }
    else{
        border = 'rgb(255, 99, 132)';
        background = 'rgba(211, 211, 211, 0.4)';
    }

    if(dataType === 'life-expectancy'){
        label =  "Life Expectancy";
    }
    else if(dataType === 'population'){
        label = "Population: total (mln)";
    }
    else if(dataType === 'fertility'){
        label = "Fertility";
    }

    let data = {
        labels,
        datasets: [{
        label: label,
        borderColor: border,
        backgroundColor: background,
        data: info
        }]
    }
    
    return(
        <div>
            { props.type === 'population-all' ? (
               <HorizontalBar 
                  data={data} 
                  height={450}
                  options={{
                      maintainAspectRatio: false
                  }}
               />
            ) : (
              <Line 
                  data={data} 
                  height={550}
                  options={{
                      maintainAspectRatio: false
                  }}
               />
            ) }   
        </div>
    )
}

const mapStateToProps = (state = {}) => ({
        regionsExpectancy: state.expectancyReducer.data,
        dataType: state.dataTypeReducer.type
    });

export default connect(mapStateToProps)(ChartExpectancy);
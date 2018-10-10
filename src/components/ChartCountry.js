import React from 'react';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';

const ChartCountry = (props) => {
    let labels = [],
        label,
        info = [];

        if(props.data && props.data.length > 0){
            labels = props.data.map(unit => unit.date);
            info = props.data.map(unit => {
                if(unit.value >= 1000000){
                    return unit.value/1000000;
                }    
                else{
                    return unit.value;
                }    
            });
        }

        if(props.dataType === 'population'){
            label = 'Population (mln)';
        }
        else if(props.dataType === 'life-expectancy'){
            label = 'Life Expectancy';
        }
        else if(props.dataType === 'fertility'){
            label = 'Fertility';
        }

        let data = {
            labels,
            datasets: [{
            label: label,
            borderColor: 'rgb(255, 99, 132)',
            data: info
            }]
        }

        return (
            <div>
                <Line 
                   data={data} 
                   height={550}
                   options={{
                       maintainAspectRatio: false
                   }}
                   />
            </div>
         )
}

const mapStateToProps = (state = {}) => ({
    data: state.countryReducer.data,
    dataType: state.dataTypeReducer.type
});

export default connect(mapStateToProps)(ChartCountry);
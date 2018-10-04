import React from 'react';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';


const ChartExpectancy = (props) => {
    let labels = [],
        info = [];
    labels = props.regionsExpectancy.map(unit => unit.year);
    info = props.regionsExpectancy.map(unit => unit.value);
    let data = {
        labels,
        datasets: [{
        label: "Life Expectancy",
      //  backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: info
        }]
    }
    console.log(labels);
    return(
        <div>
            < Line 
               data={data} 
               width={700}
               height={550}
               options={{
                 maintainAspectRatio: false
               }}
               />
        </div>
    )
}

const mapStateToProps = (state = {}) => ({
    regionsExpectancy:  state.expectancyReducer.data
})

export default connect(mapStateToProps)(ChartExpectancy);
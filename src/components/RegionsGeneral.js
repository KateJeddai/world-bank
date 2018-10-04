import React from 'react';
import { Link, Route } from 'react-router-dom';
import  lifeexpect from './img/lifeexpect.jpeg';
import  fertility from './img/fertility.jpeg';
import  population from './img/population.jpeg';
import RegionsExpectancy from '../components/RegionsExpectancy';
import '../css/main.scss';
import '../css/regionsgeneral.scss';

//

const RegionsGeneral = ({match}) => {
    return(
        <div className="container">
          <Route exact path={`${match.url}/life-expectancy`} component={RegionsExpectancy} />
            <div className="wrapper">
                <div className="regions-block">
                    <div className="block-image">
                        <img src={population} alt="pic" />
                    </div>
                    <div className="title">
                        <h3>Population: total</h3>
                    </div>
                </div>
                <div className="regions-block">
                
                  <Link to={`${match.url}/life-expectancy`} className="link">
                    <div className="block-image">
                        <img src={lifeexpect} alt="pic" />
                    </div>                    
                    <div className="title">
                        <h3>Life Expectancy</h3>
                    </div>
                  </Link>  
                </div>
                <div className="regions-block">
                    <div className="block-image">
                        <img src={fertility} alt="pic" />
                    </div>
                    <div className="title">
                        <h3>Fertility</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegionsGeneral;
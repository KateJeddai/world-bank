import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import expectancyReducer from '../reducers/expectancyReducer';
import dataTypeReducer from '../reducers/dataTypeReducer';
import countryReducer from '../reducers/countryReducer';
import topReducer from '../reducers/topReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
                          
// create store
export default () => {
    const store = createStore(
        combineReducers({
            expectancyReducer,
            dataTypeReducer,
            countryReducer,
            topReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
       // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};
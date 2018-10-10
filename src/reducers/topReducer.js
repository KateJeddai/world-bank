export default (state = { topPopulation: [], topLife: [], topFertility: [] }, action) => {
    switch(action.type){
        case 'ADD_TOP_POPULATION':
            return {...state, topPopulation: action.payload};
        case 'ADD_TOP_LIFE':
            return {...state, topLife: action.payload};
        case 'ADD_TOP_FERTILITY':
            return {...state, topFertility: action.payload};
        default: return state;    
    }
}
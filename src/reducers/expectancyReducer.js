export default (state = { data: []}, action) => {
    switch(action.type){
        case 'ADD_EXPECTANCY_REGIONS':
             return Object.assign({}, { data: action.payload });
        default: 
             return state;                   
    }
}
export default (state = {}, action) => {
    switch(action.type){
        case 'SET_DATA_TYPE':
             return Object.assign({}, { type: action.payload });
        default: 
             return state;                   
    }
}
export default (state = {}, action) => {
    switch(action.type){
        case 'ADD_COUNTRY_DATA':
            return Object.assign({}, {data: action.payload});
        default: return state;    
    }
}
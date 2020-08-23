const initialState = {
    counter : 0,
    counterLst : []
}

const RootReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'INCREMENT': 
            return {
                ...state,
                counter : state.counter + 1 
            }
        case 'DECREMENT': 
            return {
                ...state,
                counter : state.counter - 1 
            }
        case 'ADD':
            return {
                counter : 0,
                counterLst : state.counterLst.concat({key : new Date(), value : state.counter})
            }
        case 'DELETE':
            return {
                ...state, 
                counterLst : state.counterLst.filter((elems) => elems.key !== action.value)
            }
        default : return state
    }
}

export default RootReducer
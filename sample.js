const redux = require('redux')
const createStore = redux.createStore;

const initialState = {
    counter : 0
}

//root reducer
const rootReducer = (state = initialState, action)=>{
    if(action.type === 'INC_COUNTER'){
        return {
            ...state,
            counter : state.counter+1
        }
    }
    if(action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter : state.counter + action.value
        }
    }
    return state;
}

//store
const store = createStore(rootReducer);

//subscription [automatically gets triggered when some changes are made to the state]
store.subscribe(() => {
    console.log('[subscription] ' , store.getState())
})

//action
store.dispatch({type : 'INC_COUNTER'})
store.dispatch({type : 'ADD_COUNTER', value : 10})
console.log(store.getState())


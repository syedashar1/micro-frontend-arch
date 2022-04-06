import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const initialState = {}; 
const userSigninReducer = ( state = {} , action ) => 
    {
        switch (action.type) {
            case 'CHANGE_PERMS':
                    return { modulePerms : action.payload };        
            default:
            return state;
    }
};

const reducer = combineReducers({
  userLogin : userSigninReducer ,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
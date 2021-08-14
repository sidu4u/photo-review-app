import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


const configureStore = ()=>{
    const middlewares = [thunk];

    return createStore(
        applyMiddleware(...middlewares)
    );
};

export default configureStore;
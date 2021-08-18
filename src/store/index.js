import {createStore,applyMiddleware} from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const configureStore = ()=>{
    const middlewares = [thunk];
    const store = createStore(
        rootReducer,
        applyMiddleware(...middlewares)
    );
    return {
        store,
        persistor:persistStore(store)
    }
};


export default configureStore;
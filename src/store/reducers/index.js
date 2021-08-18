import {combineReducers} from "redux";
import {persistReducer } from 'redux-persist'
import reviewedImages from "./reviewedImages";
import currentImage from "./currentImage";
import storage from 'redux-persist/lib/storage';

const rootConfig = {
    key:'root',
    storage
}

const rootReducer =  combineReducers({
    reviewedImages:reviewedImages,
    currentImage:currentImage
});

export default persistReducer(rootConfig,rootReducer);
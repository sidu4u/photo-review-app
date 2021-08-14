import {combineReducers} from "redux";
import reviewedImages from "./reviewedImages";
import currentImage from "./currentImage";

export default combineReducers({
    reviewedImages,
    currentImage
})
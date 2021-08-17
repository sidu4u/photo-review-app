
import configureStore from "../../store";
import {receiveImage,requestImage,addImage} from "../../store/actions";

let store;
const sampleImage = {image:'sample Image'}; 

beforeEach(()=>{
    store = configureStore();
});

test('Store should be created with correct initial state',()=>{
   const initialState = {
    reviewedImages:[],
    currentImage:{
        isFetching:false
    }
   } 
   expect(store.getState()).toEqual(initialState);
});

test('isFetching is set when request is made for Images',()=>{
    store.dispatch(requestImage());
    const currentImage = store.getState().currentImage;
    expect(currentImage.isFetching).toEqual(true);
 });

 test('new Image is stored on successfull request',()=>{
   
    store.dispatch(receiveImage(sampleImage));
    const currentImage = store.getState().currentImage;
    expect(currentImage.isFetching).toEqual(false);
    expect(currentImage.receivedImage).toEqual(sampleImage);
 });

 test('Reviewed Images are updated on adding new image',()=>{
    store.dispatch(addImage(sampleImage));
    const reviewedImages = store.getState().reviewedImages;
    expect(reviewedImages).toEqual([sampleImage]);
 });




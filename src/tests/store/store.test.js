
import configureStore from "../../store";
import {receiveImage,requestImage,approveImage,rejectImage} from "../../store/actions";

let store;
const sampleImage = {image:'sample Image'}; 

beforeEach(()=>{
    store = configureStore().store;
});

test('Store should be created with correct initial state',()=>{
   const initialState = {
    _persist:{
     rehydrated: true,
      version: -1,
    },
    reviewedImages:{approvedImages:[],rejectedImages:[]},
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

 test('Approving image updates the state',()=>{
    store.dispatch(approveImage(sampleImage));
    const reviewedImages = store.getState().reviewedImages;
    const approvedImages = reviewedImages.approvedImages;
    expect(approvedImages).toEqual([sampleImage]);
 });

 test('Rejecting image updates the state',()=>{
    store.dispatch(rejectImage(sampleImage));
    const reviewedImages = store.getState().reviewedImages;
    const rejectedImages = reviewedImages.rejectedImages;
    expect(rejectedImages).toEqual([sampleImage]);
 });




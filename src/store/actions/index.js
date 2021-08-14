import * as api from "../api";

export const requestImage = ()=>({
    type:'REQUEST_IMAGE'
});

export const receiveImage = (image)=>({
    type:'RECEIVE_IMAGE',
    payload:image
});

export const fetchImages = () => (dispatch,getState)=>{
    const state = getState();
   if(state.currentImage.isFetching){
       return;
   }

   dispatch(requestImage());

   api.requestImage()
   .then(response=>receiveImage(response))
   .catch(error=>receiveImage())
};

export const addImage = (image) => ({
 type:'ADD_IMAGE',
 payload:image
})
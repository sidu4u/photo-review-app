import getRandomImage from "../../api";

export const requestImage = ()=>({
    type:'REQUEST_IMAGE'
});

export const receiveImage = (newImage)=>({
    type:'RECEIVE_IMAGE',
    payload:{newImage}
});

export const fetchImages = () => (dispatch,getState)=>{
    console.log('inside thunk');
    const state = getState();
   if(state.currentImage.isFetching){
       return;
   }

   dispatch(requestImage());

   getRandomImage()
   .then(response=>dispatch(receiveImage(response)))
   .catch(error=>dispatch(receiveImage()))
};

export const addImage = (image) => ({
 type:'ADD_IMAGE',
 payload:image
})
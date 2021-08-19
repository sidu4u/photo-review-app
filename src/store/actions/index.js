import getRandomImage from "../../api";
import ACTION_TYPES from "../constants/actionsTypes";

export const requestImage = ()=>({
    type:ACTION_TYPES.REQUEST_IMAGE
});

export const receiveImage = (newImage)=>({
    type:ACTION_TYPES.RECEIVE_IMAGE,
    payload:{newImage}
});

const isImageRejected = (image,rejectedImages)=>{
    return rejectedImages.findIndex(rejected=>image.id===rejected.id)!==-1;
}

export const fetchImages = () => (dispatch,getState)=>{
    const state = getState();
    const rejectedImages = state.reviewedImages.rejectedImages;
   if(state.currentImage.isFetching){
       return;
   }

   dispatch(requestImage());

   getRandomImage()
   .then(response=>{
       return new  Promise(resolve => {
        const image = new Image();
        image.addEventListener('load', () => {
            resolve(response);
        });
        image.src = response.urls.raw; 
    });
    })
    .then(response=>{
        if(isImageRejected(response,rejectedImages)){
            fetchImages(); // if image is already rejected fetch another
            return;
           }
           dispatch(receiveImage(response))
    })
   .catch(error=>dispatch(receiveImage()))
};

export const approveImage = (receivedImage) => ({
 type:ACTION_TYPES.APPROVE_IMAGE,
 payload:{receivedImage}
})

export const rejectImage = (receivedImage) => ({
    type:ACTION_TYPES.REJECT_IMAGE,
    payload:{receivedImage}
})
import getRandomImage from "../../api";

export const requestImage = ()=>({
    type:'REQUEST_IMAGE'
});

export const receiveImage = (newImage)=>({
    type:'RECEIVE_IMAGE',
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
       if(isImageRejected(response,rejectedImages)){
        fetchImages();
        return;
       }
       dispatch(receiveImage(response))
    })
   .catch(error=>dispatch(receiveImage()))
};

export const approveImage = (receivedImage) => ({
 type:'APPROVE_IMAGE',
 payload:{receivedImage}
})

export const rejectImage = (receivedImage) => ({
    type:'REJECT_IMAGE',
    payload:{receivedImage}
   })
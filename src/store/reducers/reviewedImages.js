const reviewedImages = (state=[],action) => {
      console.log('reviewedImages');
      switch(action.type){
          case 'ADD_IMAGE':
              const receivedImage = action.payload.receivedImage;
              const reviewedImages = [...state.reviewedImages,receivedImage];
              return {...state,reviewedImages};
          case 'REQUEST_IMAGE':    
               return {...state,isFetching:true};
          case 'RECEIVE_IMAGE': 
                const newImage = action.payload.newImage;
                return {...state,isFetching:false,currentImage:newImage};    
          default:
                return state;         
      }
}

export default reviewedImages;
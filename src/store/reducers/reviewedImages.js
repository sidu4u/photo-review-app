const reviewedImages = (state=[],action) => {
      switch(action.type){
          case 'ADD_IMAGE':
              const receivedImage = action.payload.receivedImage;
              const reviewedImages = [...state,receivedImage];
              return reviewedImages;
          default:
                return state;         
      }
}

export default reviewedImages;
const reviewedImages = (state={approvedImages:[],rejectedImages:[]},action) => {
      switch(action.type){
          case 'APPROVE_IMAGE':
              const approvedImage = action.payload.receivedImage;
              const approvedImages = [...state.approvedImages,approvedImage];
              return {...state,approvedImages};
           case 'REJECT_IMAGE':
              const rejectedImage = action.payload.receivedImage;
              const rejectedImages = [...state.rejectedImages,rejectedImage];
              return {...state,rejectedImages};
          default:
                return state;         
      }
}

export default reviewedImages;
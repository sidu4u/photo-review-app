import ACTION_TYPES from "../constants/actionsTypes";

const reviewedImages = (state={approvedImages:[],rejectedImages:[]},action) => {
      switch(action.type){
          case ACTION_TYPES.APPROVE_IMAGE:
              const approvedImage = action.payload.receivedImage;
              const approvedImages = [...state.approvedImages,approvedImage];
              return {...state,approvedImages};
           case ACTION_TYPES.REJECT_IMAGE:
              const rejectedImage = action.payload.receivedImage;
              const rejectedImages = [...state.rejectedImages,rejectedImage];
              return {...state,rejectedImages};
          default:
                return state;         
      }
}

export default reviewedImages;
import ACTION_TYPES from "../constants/actionsTypes";

const currentImage = (state={isFetching:false},action) => {
    switch(action.type){
        case ACTION_TYPES.REQUEST_IMAGE:    
             return {...state,isFetching:true};
        case ACTION_TYPES.RECEIVE_IMAGE: 
              const newImage = action.payload.newImage;
              return {...state,isFetching:false,receivedImage:newImage};    
        default:
              return state;         
    }
}

export default currentImage;
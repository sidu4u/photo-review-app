const currentImage = (state={isFetching:false},action) => {
    switch(action.type){
        case 'REQUEST_IMAGE':    
             return {...state,isFetching:true};
        case 'RECEIVE_IMAGE': 
              const newImage = action.payload.newImage;
              return {...state,isFetching:false,receivedImage:newImage};    
        default:
              return state;         
    }
}

export default currentImage;
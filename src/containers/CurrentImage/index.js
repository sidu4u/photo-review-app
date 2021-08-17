import React,{useCallback} from "react";
import { useDispatch, useSelector } from 'react-redux'
import {fetchImages,addImage} from "../../store/actions";
import Body from "./components/Body";
import Footer from "./components/Footer";


const CurrentImageContainer = ()=>{
   const dispatch = useDispatch();
   const isFetching = useSelector(state=>state.currentImage.isFetching);
   const currentImage = useSelector(state=>state.currentImage.receivedImage);
   const fetchImage = useCallback(()=>dispatch(fetchImages()),[dispatch]);
   const onAcceptClick = useCallback(()=>{
        dispatch(addImage(currentImage));
        fetchImage();
   },[fetchImage,dispatch,currentImage]);


    return (<>
    <Body isFetching={isFetching} currentImage={currentImage} fetchImage={fetchImage}/>
    <Footer onAcceptClick={onAcceptClick} onDeclineClick={fetchImage}/>
    </>)
     
}

export default CurrentImageContainer;
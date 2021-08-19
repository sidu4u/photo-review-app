import React from "react";
import {useSelector } from 'react-redux'
import Header from "../../components/Header";
import Body from "./components/Body";

const ReviewedImageContainer = ()=>{
    const reviewedImages = useSelector(state=>state.reviewedImages.approvedImages);
     return (<>
         <Header data={"Approved Images"}/>
         <Body reviewedImages={reviewedImages}/>
     </>)
}

export default ReviewedImageContainer;
import React from "react";
import {useSelector } from 'react-redux'
import Header from "../../components/Header";
import ImageSlider from "../../components/ImageSlider";

const ReviewedImageContainer = ()=>{
    const reviewedImages = useSelector(state=>state.reviewedImages.approvedImages);
     return (<>
         <Header data={"Approved Images"}/>
         <ImageSlider images={reviewedImages}/>
     </>)
}

export default ReviewedImageContainer;
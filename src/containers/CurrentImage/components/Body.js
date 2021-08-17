import React from "react";
import AddImage from "./AddImage";
import styled from "styled-components";
import ImageToReview from "./ImageToReview";

const BodyContainer = styled.div`
padding-top:10px;
padding-bottom:10px;
border-top:1px solid;
border-bottom:1px solid;
border-color:rgba(0,0,0,0.1);
margin-bottom:10px;
`;

const Body = ({isFetching,currentImage,fetchImage})=>{
 
    if(isFetching||!currentImage){
       return <BodyContainer><AddImage isLoading={isFetching} onClick={fetchImage}/></BodyContainer>;
    }
    else{
     return <BodyContainer><ImageToReview src={currentImage.urls.raw}/></BodyContainer>;
    }
      
}

export default Body;
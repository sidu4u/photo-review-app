import React from "react";
import styled from "styled-components";
import ImageToReview from "./ImageToReview";
import AddImageButton from "../../AddImageButton";


const AddImage = styled(({className})=>{
    return <AddImageButton sizeClass={className}/>
    })`
    width:225px;
    height:300px;
    `;

const BodyContainer = styled.div`
margin-top:10px;
padding-top:10px;
padding-bottom:10px;
border-top:1px solid;
border-bottom:1px solid;
border-color:rgba(0,0,0,0.1);
margin-bottom:10px;
`;

const Body = ({isFetching,currentImage})=>{
 
    if(isFetching||!currentImage){
       return <BodyContainer><AddImage/></BodyContainer>;
    }
    else{
     return <BodyContainer><ImageToReview src={currentImage.urls.raw}/></BodyContainer>;
    }
      
}

export default Body;
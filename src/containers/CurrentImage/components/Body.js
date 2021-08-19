import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ImageToReview from "./ImageToReview";
import AddImageButton from "../../AddImageButton";


const AddImage = styled(({className})=>{
    return <AddImageButton sizeClass={className}/>
    })`
    width:250px;
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

const Body = ({currentImage})=>{
 
    if(!currentImage){
       return <BodyContainer><AddImage/></BodyContainer>;
    }
    else{
     return <BodyContainer><ImageToReview src={currentImage.urls.raw}/></BodyContainer>;
    }
      
}

Body.propTypes = {
    currentImage:PropTypes.object
}

export default Body;
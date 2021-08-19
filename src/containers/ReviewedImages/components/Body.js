import React from "react";
import styled from "styled-components";
import ImageSlider from "../../../components/ImageSlider";
import AddImage from "./AddImage";


const StyledDiv = styled.div`
padding-top:5px
`;

const ReviewedImageContainer = ({reviewedImages})=>{
     return (<StyledDiv>
         {reviewedImages.length>0?<ImageSlider images={reviewedImages}/>:<AddImage/>}
     </StyledDiv>)
}

export default ReviewedImageContainer;
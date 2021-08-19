import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ImageSlider from "../../../components/ImageSlider";
import AddImage from "./AddImage";


const StyledDiv = styled.div`
padding-top:5px
`;

const Body = ({reviewedImages})=>{
     return (<StyledDiv>
         {reviewedImages.length>0?<ImageSlider images={reviewedImages} pageSize={3}/>:<AddImage/>}
     </StyledDiv>)
}

Body.propTypes={
    reviewedImages:PropTypes.array
}

export default Body;
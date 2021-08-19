import React from "react";
import styled from 'styled-components';
import PropType from 'prop-types';
import ThumbnailImage from './ThumbnailImage';
import useLocalState from "./hooks/useLocalState";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

const FlexDiv = styled.div`
display:flex;
`;
const StyledDiv = styled(FlexDiv)`
display:flex;
margin-top:10px;
`;
const OverflowDiv = styled.div`
width:300px;
overflow:hidden
`;


const ImageSlider = ({images,pageSize})=>{
    const {currentPageNumber,previousPage,nextPage,showLeftArrow,showRightArrow} = useLocalState(images,pageSize);
     return (
         <StyledDiv>
             {showLeftArrow && <LeftArrow onClick={previousPage}/>}
            <OverflowDiv>
                <FlexDiv>
                {images.slice((currentPageNumber-1)*pageSize,currentPageNumber*pageSize).map(image=>(<ThumbnailImage id={image.id} key={image.id} src={image.urls.raw}/>))}
                </FlexDiv>
             </OverflowDiv>
             {showRightArrow && <RightArrow onClick={nextPage}/>}
        </StyledDiv>
     )
}

ImageSlider.propTypes={
    images:PropType.array,
    pageSize:PropType.number
}

export default ImageSlider;
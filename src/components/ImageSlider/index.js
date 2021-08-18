import React from "react";
import styled from 'styled-components';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ThumbnailImage from './ThumbnailImage';
import useLocalState from "./hooks/useLocalState";

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

const ReviewedImageContainer = ({images})=>{
    const {currentPageNumber,previousPage,nextPage,pages} = useLocalState(images);
     return (
         <StyledDiv>
             {currentPageNumber>1&&<ChevronLeftIcon id="left_arrow" onClick={previousPage}/>}
            <OverflowDiv>
                <FlexDiv>
                {images.slice((currentPageNumber-1)*3,currentPageNumber*3).map(image=>(<ThumbnailImage id={image.id} key={image.id} src={image.urls.raw}/>))}
                </FlexDiv>
             </OverflowDiv>
             {currentPageNumber<=pages&& <ChevronRightIcon id="right_arrow" onClick={nextPage}/>}
        </StyledDiv>
     )
}

export default ReviewedImageContainer;
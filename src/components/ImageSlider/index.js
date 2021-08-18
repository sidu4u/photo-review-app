import React,{useCallback,useState,useMemo} from "react";
import styled from 'styled-components';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ThumbnailImage from './ThumbnailImage';

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
    const pages = useMemo(()=>Math.ceil(images.length/3),[images]);
    let [currentPageNumber,updateCurrentPageNumber] = useState(1);
    const nextPage = useCallback(()=>{
        updateCurrentPageNumber(currentPageNumber=>{
            if(currentPageNumber>=pages){
                return currentPageNumber;
            }
            return currentPageNumber+1
        });
    },[pages]);
    const previousPage = useCallback(()=>{
        updateCurrentPageNumber(currentPageNumber=>{
            if(currentPageNumber<=1){
                return currentPageNumber;
            }
            return currentPageNumber-1}); 
    },[]);
     return (
         <StyledDiv>
             <ChevronLeftIcon onClick={previousPage}/>
            <OverflowDiv>
                <FlexDiv>
                {images.slice((currentPageNumber-1)*3,currentPageNumber*3).map(image=>(<ThumbnailImage id={image.id} key={image.id} src={image.urls.raw}/>))}
                </FlexDiv>
             </OverflowDiv>
             <ChevronRightIcon onClick={nextPage}/>
        </StyledDiv>
     )
}

export default ReviewedImageContainer;
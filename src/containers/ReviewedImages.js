import React,{useCallback,useState,useRef} from "react";
import {useSelector } from 'react-redux'
import styled from 'styled-components';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Image from '../components/Image';
import Header from "../components/Header";

const StyledDiv = styled.div`
display:flex;
margin-top:10px;
`;
const SliderDiv = styled.div`
`;
const OverflowDiv = styled.div`
width:300px;
overflow:hidden
`;
const ThumbnailImage = styled(({className,src})=>{
   return <Image className={className} src={src}/>
})`
margin-right:10px;
width:70px;
height:30px;
`;

const ReviewedImageContainer = ()=>{
    //let counter = 0;
    const sliderRef = useRef();
    const transitionOffset = useRef(0);
    const reviewedImages = useSelector(state=>state.reviewedImages);
    const pages = Math.ceil(reviewedImages.length/4);
    let [currentPageNumber,updateCurrentPageNumber] = useState(1);
    const nextPage = useCallback(()=>{
        if(currentPageNumber>=pages){
            return;
        }
        transitionOffset.current=transitionOffset.current-50;
        sliderRef.current.style.transform = `translateX(${transitionOffset.current}px)`;
        updateCurrentPageNumber(currentPageNumber+1);
    },[currentPageNumber,pages]);
    const previousPage = useCallback(()=>{
        if(currentPageNumber<=0){
            return;
        }
        transitionOffset.current=transitionOffset.current+50;
        sliderRef.current.style.transform =  `translateX(${transitionOffset.current}px)`;
        updateCurrentPageNumber(currentPageNumber-1); 
    },[currentPageNumber]);
     return (<>
         <Header data={"Approved Images"}/>
         <StyledDiv>
             <ChevronLeftIcon onClick={previousPage}/>
            <OverflowDiv>
                <SliderDiv ref={sliderRef}>
                {reviewedImages.map(image=>(<ThumbnailImage src={image.urls.raw}/>))}
                </SliderDiv>
             </OverflowDiv>
             <ChevronRightIcon onClick={nextPage}/>
        </StyledDiv>
     </>)
}

export default ReviewedImageContainer;
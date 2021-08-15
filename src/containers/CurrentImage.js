import React,{useCallback} from "react";
import { useDispatch, useSelector } from 'react-redux'
import ClearIcon from '@material-ui/icons/Clear';
import CheckIcon from '@material-ui/icons/Check';
import styled from 'styled-components';
import Button from '../components/Button';
import AddImageButton  from "../components/AddImageButton";
import Image from "../components/Image";
import {fetchImages} from "../store/actions";


const AcceptImageButton = styled(({className,onClick})=>{
    return (<Button className={className} onClick={onClick}>
        <CheckIcon/>
    </Button>)
})`
width:100px;
border-radius:3px;
height:30px;
background:blue;
color:white;
`;

const DeclineImageButton = styled(({className,onClick})=>{
    return (<Button className={className} onClick={onClick}>
        <ClearIcon/>
    </Button>)
})`
width:100px;
height:30px;
border-radius:3px;
background:black;
color:white;
`;

const ImageToReview = styled(({className,src})=>{
   return <Image className={className} src={src}/>;
})`
width:300px;
height:300px;
`;

const Footer = styled(({onAcceptClick,onDeclineClick,className})=>{
    return (
        <div className={className}>
            <DeclineImageButton onClick={onDeclineClick}/>
            <AcceptImageButton onClick={onAcceptClick}/>
        </div>    
    )
})`
display:flex;
align-items:center;
justify-content:space-between;
`

const CurrentImage = ()=>{
   const dispatch = useDispatch();
   const isFetching = useSelector(state=>state.currentImage.isFetching);
   const currentImage = useSelector(state=>state.currentImage.receivedImage);
   const fetchImage = useCallback(()=>{
    console.log('fetching images');   
    dispatch(fetchImages())},[dispatch]);
  

    return (<>
    {isFetching||!currentImage?
    <AddImageButton isLoading={isFetching} onClick={fetchImage}/>
    :<ImageToReview src={currentImage.urls.raw}/>}
    <Footer/>
    </>)
     
}

export default CurrentImage;
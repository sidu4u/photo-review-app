import React from "react";
import styled from 'styled-components';
import Image from "../../../components/Image";


const ImageToReview = styled(({className,src})=>{
    return <Image className={className} src={src}/>;
 })`
 width:250px;
 height:300px;
 `;


export default ImageToReview;
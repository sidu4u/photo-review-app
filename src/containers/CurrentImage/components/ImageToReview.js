import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from "../../../components/Image";


const ImageToReview = styled(({className,src})=>{
    return <Image className={className} src={src}/>;
 })`
 width:250px;
 height:300px;
 `;

 ImageToReview.propTypes={
  className:PropTypes.string,
  src:PropTypes.string
 }

export default ImageToReview;
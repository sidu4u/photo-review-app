import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from '../Image';

const ThumbnailImage = styled(({className,src})=>{
    return <Image className={className} src={src}/>
 })`
 margin-right:10px;
 width:60px;
 height:30px;
 `;

 ThumbnailImage.propTypes={
    className:PropTypes.string,
    src:PropTypes.string
 }

 export default ThumbnailImage;
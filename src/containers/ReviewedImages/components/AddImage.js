import React from "react";
import styled from 'styled-components';
import PropTypes from "prop-types";
import AddImageButton from "../../AddImageButton";

const AddImage = styled(({className})=>{
    return <AddImageButton sizeClass={className}/>
    })`
    width:60px;
    height:30px;
    `;

AddImage.propTypes = {
className:PropTypes.string
}    
export default AddImage;    
    
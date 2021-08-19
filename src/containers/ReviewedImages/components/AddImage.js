import React from "react";
import styled from 'styled-components';
import AddImageButton from "../../AddImageButton";

const AddImage = styled(({className})=>{
    return <AddImageButton sizeClass={className}/>
    })`
    width:60px;
    height:30px;
    `;

export default AddImage;    
    
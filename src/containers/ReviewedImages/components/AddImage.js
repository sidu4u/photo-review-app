import React from "react";
import styled from 'styled-components';
import AddImageButton from "../../../components/AddImageButton";

const AddImage = styled(({className,isLoading,onClick})=>{
    return <AddImageButton sizeClass={className} isLoading={isLoading} onClick={onClick}/>
    })`
    width:225px;
    height:300px;
    `;

export default AddImage;    
    
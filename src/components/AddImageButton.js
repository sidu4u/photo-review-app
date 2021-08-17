import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import AddIcon from '@material-ui/icons/Add';
import Button from './Button';


const AddImageButton = styled(({className,onClick,sizeClass,isLoading})=>{
    return (<Button onClick={onClick} className={`${className} ${sizeClass}`} isLoading={isLoading}>
           <AddIcon/>
        </Button>)
})`
border-radius:3px;
color:white;
background:rgba(128,128,128,0.45);
cursor:pointer;
height:100px;
width:100px;
`

Button.propTypes = {
    onClick : PropTypes.func,
    isLoading:PropTypes.bool,
    className:PropTypes.string,
    sizeClass:PropTypes.string
}

export default AddImageButton;
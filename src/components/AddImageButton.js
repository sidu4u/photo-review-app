import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import AddIcon from '@material-ui/icons/Add';
import Button from './Button';


const AddImageButton = styled(({className,onClick,isLoading})=>{
    return (<Button onClick={onClick} className={className} isLoading={isLoading}>
           <AddIcon/>
        </Button>)
})`
border-radius:3px;
color:white;
background:grey;
height:100px;
width:100px;
`

Button.propTypes = {
    onClick : PropTypes.func
}

export default AddImageButton;
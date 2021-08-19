
import React from "react";
import ClearIcon from '@material-ui/icons/Clear';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../../components/Button';


const DeclineImageButton = styled(({className,onClick,showLoader})=>{
    return (<Button className={className} onClick={onClick} isLoading={showLoader}>
        <ClearIcon/>
    </Button>)
})`
width:100px;
height:30px;
border-radius:15px;
background:black;
color:white;
`;


DeclineImageButton.propTypes={
    className:PropTypes.string,
    onClick:PropTypes.func,
    showLoader:PropTypes.bool
}

export default DeclineImageButton;
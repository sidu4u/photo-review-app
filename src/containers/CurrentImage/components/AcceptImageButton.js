
import React from "react";
import CheckIcon from '@material-ui/icons/Check';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../../components/Button';


const AcceptImageButton = styled(({className,onClick,showLoader})=>{
    return (<Button className={className} onClick={onClick} isLoading={showLoader}>
        <CheckIcon/>
    </Button>)
})`
width:100px;
height:30px;
border-radius:15px;
background:blue;
color:white;
`;

AcceptImageButton.propTypes={
className:PropTypes.string,
onClick:PropTypes.func,
showLoader:PropTypes.bool
}

export default AcceptImageButton;
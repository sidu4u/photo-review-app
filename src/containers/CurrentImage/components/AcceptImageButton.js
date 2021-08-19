
import React from "react";
import CheckIcon from '@material-ui/icons/Check';
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

export default AcceptImageButton;
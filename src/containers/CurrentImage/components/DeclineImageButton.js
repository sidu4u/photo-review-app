
import React from "react";
import ClearIcon from '@material-ui/icons/Clear';
import styled from 'styled-components';
import Button from '../../../components/Button';


const DeclineImageButton = styled(({className,onClick})=>{
    return (<Button className={className} onClick={onClick}>
        <ClearIcon/>
    </Button>)
})`
width:100px;
height:30px;
border-radius:15px;
cursor:pointer;
background:black;
color:white;
`;

export default DeclineImageButton;
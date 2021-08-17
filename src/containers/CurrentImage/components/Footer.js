import React from "react";
import styled from "styled-components";
import DeclineImageButton from "./DeclineImageButton";
import AcceptImageButton from "./AcceptImageButton";



const Footer = styled(({onAcceptClick,onDeclineClick,className})=>{
    return (
        <div className={className}>
            <DeclineImageButton onClick={onDeclineClick}/>
            <AcceptImageButton onClick={onAcceptClick}/>
        </div>    
    )
})`
display:flex;
align-items:center;
width:225px;
justify-content:space-between;
`

export default Footer;
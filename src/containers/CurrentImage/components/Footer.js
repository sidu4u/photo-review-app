import React from "react";
import styled from "styled-components";
import DeclineImageButton from "./DeclineImageButton";
import AcceptImageButton from "./AcceptImageButton";

const CenteredDiv = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
`;

const Footer = styled(({onAcceptClick,onDeclineClick,className})=>{
    return (
        <CenteredDiv>
            <DeclineImageButton onClick={onDeclineClick}/>
            <AcceptImageButton onClick={onAcceptClick}/>
        </CenteredDiv>    
    )
})`
display:flex;
align-items:center;
width:225px;
justify-content:space-between;
`

export default Footer;
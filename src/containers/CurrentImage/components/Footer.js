import React,{useState,useCallback} from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import DeclineImageButton from "./DeclineImageButton";
import AcceptImageButton from "./AcceptImageButton";

const CenteredDiv = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
`;

const ACCEPTANCE_STATUS = {
    accepted:'accepted',
    declined:'declined'
}

const Footer = styled(({onAcceptClick,onDeclineClick,isLoading})=>{
    const [imageAccepted,updateImageAccepted] = useState(false);
    const declineClickCallback = useCallback(()=>{
        updateImageAccepted(ACCEPTANCE_STATUS.declined);
        onDeclineClick();
    },[onDeclineClick]);
    const acceptClickCallback = useCallback(()=>{
        updateImageAccepted(ACCEPTANCE_STATUS.accepted);
        onAcceptClick();
    },[onAcceptClick]);
    const showAcceptanceLoader = imageAccepted===ACCEPTANCE_STATUS.accepted && isLoading;
    const showRejectionLoader = imageAccepted===ACCEPTANCE_STATUS.declined && isLoading;
    return (
        <CenteredDiv>
            <DeclineImageButton onClick={declineClickCallback} showLoader={showRejectionLoader}/>
            <AcceptImageButton onClick={acceptClickCallback} showLoader={showAcceptanceLoader}/>
        </CenteredDiv>    
    )
})`
display:flex;
align-items:center;
width:225px;
justify-content:space-between;
`

Footer.propTypes={
    onAcceptClick:PropTypes.func,
    onDeclineClick:PropTypes.func,
    isLoading:PropTypes.bool
}


export default Footer;
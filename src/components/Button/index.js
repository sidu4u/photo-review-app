import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import Spinner from "../Spinner";

const StyledDiv = styled.div`
display:flex;
cursor:pointer;
justify-content:center;
align-items:center;
`;


const Button = ({children,onClick,className,isLoading})=>{
    return (<StyledDiv id="button" className={className} onClick={onClick}>
        {isLoading?<Spinner/>:children}
    </StyledDiv>)
}

Button.propTypes = {
    onClick : PropTypes.func,
    isLoading:PropTypes.bool,
    className:PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ])
}

export default Button;
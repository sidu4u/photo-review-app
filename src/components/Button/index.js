import React from "react";
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from "styled-components";

const StyledDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
`;


const Button = ({children,onClick,className,isLoading})=>{
    return (<StyledDiv id="button" className={className} onClick={onClick}>
        {isLoading?<CircularProgress/>:children}
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
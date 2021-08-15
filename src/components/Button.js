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
    return (<StyledDiv className={className} onClick={onClick}>
        {isLoading?<CircularProgress/>:children}
    </StyledDiv>)
}

Button.propTypes = {
    onClick : PropTypes.func,
    isLoaing:PropTypes.bool,
    className:PropTypes.object,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ])
}

export default Button;
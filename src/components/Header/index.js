import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div`
font-size:large;
font-weight:600;
color:blue;
`

const Header = ({data,customClass})=>{
    return (<StyledDiv id="header" className={customClass}>{data}</StyledDiv>);
}

Header.propTypes={
    data:PropTypes.string,
    customClass:PropTypes.string
}

export default Header;
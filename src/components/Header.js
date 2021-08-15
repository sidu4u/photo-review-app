import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div`
color:blue;
`

const Header = ({data})=>{
    return (<StyledDiv>{data}</StyledDiv>);
}

Header.propTypes={
    data:PropTypes.string
}

export default Header;
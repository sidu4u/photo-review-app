import React,{useState,useCallback,useLayoutEffect} from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import Spinner from "../Spinner";

const StyledDiv = styled.div`
position:relative
`;

const Overlay = styled.div`
position:absolute;
top:50%;
left:50%;
transform: translate(-50%, -50%);
`;

const Image = ({src,className})=>{
    const [imageLoaded,updateLoadImage] = useState(false);
    const imageLoadCallback = useCallback(()=>updateLoadImage(true),[]);
    useLayoutEffect(()=>{
        updateLoadImage(false);
    },[src]);


    return (<StyledDiv>
    {!imageLoaded&&<Overlay><Spinner/></Overlay>}
    <img onLoad={imageLoadCallback} className={className} src={src} alt=""/>
    </StyledDiv>);
};

Image.propTypes = {
    src : PropTypes.string,
    className:PropTypes.string
}

export default Image;
import React from "react";
import PropTypes from 'prop-types';

const Image = ({src,className})=>{
    return <img className={className} src={src} alt=""/>;
};

Image.propTypes = {
    src : PropTypes.string,
    className:PropTypes.string
}

export default Image;
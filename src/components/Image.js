import React from "react";
import PropTypes from 'prop-types';

const Image = ({src,className})=>{
    return <img className={className} src={src}/>;
};

Image.propTypes = {
    src : PropTypes.string,
    className:PropTypes.object
}

export default Image;
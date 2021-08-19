import React from "react";
import PropTypes from 'prop-types';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from "../../components/Button";
    

const LeftArrow = ({onClick})=>{
    return <Button>
        <ChevronLeftIcon id="left_arrow" onClick={onClick}/>
    </Button>
   }


LeftArrow.propType = {
    onClick : PropTypes.func
}   

export default LeftArrow;


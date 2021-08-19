import React from "react";
import PropTypes from 'prop-types';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from "../../components/Button";


const RightArrow = ({onClick})=>{
    return <Button>
        <ChevronRightIcon id="right_arrow" onClick={onClick}/>
    </Button>
   }


RightArrow.propType = {
    onClick : PropTypes.func
}   

export default RightArrow;


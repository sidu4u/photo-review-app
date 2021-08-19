import React,{useCallback} from "react";
import PropTypes from 'prop-types';
import { useDispatch,useSelector } from 'react-redux'
import {fetchImages} from "../../store/actions";
import AcceptImage from "./components/AddImage";

const AddImageButton = ({sizeClass})=>{
   const dispatch = useDispatch();
   const fetchImage = useCallback(()=>dispatch(fetchImages()),[dispatch]);
   const isFetching = useSelector(state=>state.currentImage.isFetching);

    return <AcceptImage onClick={fetchImage} isLoading={isFetching} sizeClass={sizeClass}/>
     
}

AddImageButton.propTypes = {
    sizeClass:PropTypes.string
}

export default AddImageButton;
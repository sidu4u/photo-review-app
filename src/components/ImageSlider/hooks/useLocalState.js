import {useCallback,useState,useMemo} from "react";

const  useLocalState = (images,pageSize)=>{
    const pages = useMemo(()=>Math.ceil(images.length/pageSize),[images,pageSize]);
    let [currentPageNumber,updateCurrentPageNumber] = useState(1);
    const nextPage = useCallback(()=>{
        updateCurrentPageNumber(currentPageNumber=>{
            if(currentPageNumber>=pages){
                return currentPageNumber;
            }
            return currentPageNumber+1
        });
    },[pages]);
    const previousPage = useCallback(()=>{
        updateCurrentPageNumber(currentPageNumber=>{
            if(currentPageNumber<=1){
                return currentPageNumber;
            }
            return currentPageNumber-1}); 
    },[]);

    const showLeftArrow = currentPageNumber>1;
    const showRightArrow = currentPageNumber<pages;

    return {currentPageNumber,nextPage,previousPage,pages,showLeftArrow,showRightArrow};
}

export default useLocalState;
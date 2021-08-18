import {useCallback,useState,useMemo} from "react";

const  useLocalState = (images)=>{
    const pages = useMemo(()=>Math.ceil(images.length/3),[images]);
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

    return {currentPageNumber,nextPage,previousPage,pages};
}

export default useLocalState;
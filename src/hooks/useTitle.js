import React, { useEffect } from 'react';

const useTitle = title => {
   useEffect(()=>{
    document.title = `${title} - Eleven Toy`;
   },[title])
};

export default useTitle;
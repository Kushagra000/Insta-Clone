import React, {useState} from 'react'
import useShowToast from './useShowToast';

const usePreviewImg = () => {
  const[selectedFile,setSlectedFile]= useState(null);
  const showToast = useShowToast()
}

export default usePreviewImg
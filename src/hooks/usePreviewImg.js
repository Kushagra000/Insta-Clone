import React, {useState} from 'react'
import useShowToast from './useShowToast';

const usePreviewImg = () => {
  const[selectedFile,setSlectedFile]= useState(null);
  const showToast = useShowToast()
  const maxFileSizeInBytes= 2 *  1024 * 1024

  const handleImageChange = (e) =>{
    const file = e.target.files[0]
    if(file && file.type.startsWith("image/")){

    }else{
      showToast("Error","Please upload an image file","error")
      setSlectedFile(null)
    }
  }
}

export default usePreviewImg
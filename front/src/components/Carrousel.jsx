import React, { useEffect, useState } from 'react'

const Carrousel = ({arrayImage}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(arrayImage[0]);
  useEffect(() => {
    setSelectedImage(arrayImage[0]);
    
  }, [arrayImage])

  
  // console.log(arrayImage);


  const selectNewImage = (index,images,next)=>{
    const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
    const nextIndex = next ? 
    (condition ? selectedIndex + 1 : 0)
    : condition ? selectedIndex - 1 : images.length -1;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  }
  const previous = ()=>{
    selectNewImage(selectedIndex,arrayImage,false);
  }
  const next =()=>{
    selectNewImage(selectedIndex,arrayImage,true);
   
  }
  return (
    <div className="carousel h-4/5 w-full" >
      <div className="carousel-item relative w-full flex items-center	h-4/5	bg-base-200">
        <img src={selectedImage} className=" h-3/6		mx-auto 	max-h-96	mix-blend-multiply	" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button onClick={previous} className="btn btn-circle">❮</button> 
          <button onClick={next} className="btn btn-circle">❯</button>
        </div>
      </div> 
      
    </div>
  )
}

export default Carrousel
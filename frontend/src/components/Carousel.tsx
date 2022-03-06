import React, { useEffect, useState } from 'react'

const carouselImage = [
    '/images/banner1.png',
    '/images/banner2.png',
    '/images/banner3.png'
]

let count = 0

export const Carousel = () => {

  const [currentTab, setCurrentTab] = useState(0)


  useEffect(() => {
    startSlider()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startSlider = () => {
    window.setInterval(() => {
      carouselNextHandler()
    }, 5000)
  }

  const carouselNextHandler = () => {
    count = (count + 1) % carouselImage.length;
    setCurrentTab(count)
  }

  const carouselPreviousHandler = () => {
    count = (currentTab + carouselImage.length - 1) % carouselImage.length
    setCurrentTab(count)
  }

  
 
  return (
    <div  className="max-w-screen-xl m-auto mb-10 h-[450px]">
      <div className="w-full relative select-none">
        <img src={carouselImage[count]} alt="" className='object-cover rounded-lg h-[450px] w-full' />

        <div className="absolute top-0 bottom-0 w-full flex justify-between items-start px-5 ">
          <button onClick={carouselPreviousHandler} className='focus:outline-none'><span className='text-white text-xl'><i className=" fa-solid fa-less-than fa-lg"></i></span></button>
          
          <button onClick={carouselNextHandler} className='focus:outline-none'><span className='text-white text-xl'><i className="fa-solid fa-greater-than fa-lg"></i></span></button>
        </div>
      </div>
    </div>
  )
}
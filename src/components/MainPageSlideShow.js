import React, { useEffect, useState } from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import slide1 from "../images/slide-show-images/homeslide-1.jpg";
import slide2 from "../images/slide-show-images/homeslide-2.jpg";
import slide3 from "../images/slide-show-images/homeslide-3.jpg";
import slide4 from "../images/slide-show-images/homeslide-4.jpg";

const img1 = slide1;
const img2 = slide2;
const img3 = slide3;
const img4 = slide4;

const imgData = [ img2, img1, img3, img4];

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
};

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '700px',
  transition: 'transform 5s ease', // Add transition property
};



export default function MainPageSlideShow() {
  const [activeIndex, setActiveIndex] = useState(0); // State to track active slide index

// NEW
  const [autoPlay, setAutoPlay] = useState(true);


  const handleSlideChange = (oldIndex, newIndex) => {
  
    setActiveIndex(newIndex); // Update active slide index on slide change
  };

  useEffect(()=>{
    const handleVisibility = () => {
      setAutoPlay(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibility);
    return () =>{
      document.removeEventListener('visibilitychange', handleVisibility);
    };


  },[])

const properties = {
  duration: 5000,
  transitionDuration: 700,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: false,
  scale: 1, // Set initial scale value to 1
  autoPlay: autoPlay
};

  return (
    <div className='mainPageSlideShowTopDiv containerSlide'>
      <div className='slide-container'></div>
      <Slide {...properties} onChange={handleSlideChange}>
        {imgData.map((slideImage, index) => (
          
          <div key={index}>
            <div className=''>
              {/* {console.log("index === activeIndex", index === activeIndex)} */}
             {/* {console.log(`INDEX`, index)} */}
           {/* {console.log(`ACTIVE INDEX`, activeIndex)} */}
       
           
              <div
                className='sliderImages'
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage})`,
                  
                  transform: `scale(${(index === activeIndex ? 1.1 : 1)})`, // Apply zoom scale to active slide only
                }}
              ></div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
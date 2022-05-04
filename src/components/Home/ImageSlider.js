import React, {useState} from 'react'
import Slides from '../../JSON/slides.json'
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"

const ImageSlider = () => {

        // useState for ID
        const [slideId, setSlideId] = useState(1);
      
        // next slide function
      
        const nextSlide = () => {
          if (slideId !== Slides.length) {
            setSlideId(slideId + 1);
          }
          if (slideId === Slides.length) {
            setSlideId(1);
          }
        };
      
        // previous slide function
      
        const prevSlide = () => {
          if (slideId !== 1) {
            setSlideId(slideId - 1);
          }
          if (slideId === 1) {
            setSlideId(Slides.length);
          }
        };

        // Map the images
  const slider = Slides.map((obj) => {
    const { id, alt, img } = obj;

    return (
      <div key={id} className={slideId === id ? "slide active-slide" : "slide"}>
        <img src={process.env.PUBLIC_URL + img} alt={alt} />
      </div>
    );
  });

  // Slider Dots
  // Slide to image when click on a dot
  const clickDot = (i) => {
    setSlideId(i);
  };

  // create the Dots based on the length of slides.json
  const dots = Array.from({ length: Slides.length }).map((el, i) => {
    return (
      <div
        key={i}
        onClick={() => clickDot(i + 1)}
        className={slideId === i + 1 ? "dot active" : "dot"}
      ></div>
    );
  });
      
  return (
    <div className="slider-wrapper">
      {/* Slider images */}
      {slider}

      <div className="wrapper-dots-icons">
        {/* Icons for next && previous slide */}
        <MdArrowBackIos className="slider-icon left" onClick={prevSlide} />

        {/* Slider dots */}
        <div className="container-dots">{dots}</div>

        <MdArrowForwardIos className="slider-icon right" onClick={nextSlide} />
      </div>
    </div>
  )
}

export default ImageSlider
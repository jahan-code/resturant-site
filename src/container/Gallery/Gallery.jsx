import React, { useRef } from 'react';

import './Gallery.css';
import { BsArrowLeftShort, BsArrowRightShort, BsInstagram } from 'react-icons/bs';
import { images } from '../../constants';

import { SubHeading } from '../../components';
const galleryImages=[images.gallery01, images.gallery02,images.gallery03,images.gallery04]
const Gallery = () => {
 const scrollRef=React.useRef(null);
 const scroll=(direction)=>{
  const {current}= scrollRef;
  if(direction==='left')
  {
    current.scrollLeft -= 300;
  }
  else
  {
    current.scrollLeft += 300;
  }
 }
  return(
  <div className='app__gallery flex__center'>
    <div className='app__gallery-content flex__center'>
    <SubHeading title="Instagram" />
      <h1 className='headtext__cormorant'>Photo Gallery</h1>
      <p className='p__opensans' style={{color:'#AAA',marginTop:'2rem'}}></p>
      <button type='button' className='custom__button'>View More</button>
    </div>
    <div className="app__gallery-images">
      <div className='app__gallery-images_container' ref={scrollRef}>
      {
        galleryImages.map((image,index)=>(
        <div className='app__gallery-images_card flex__center' key={`gallery_image-${index+1}`}>
            <img src={image} alt="images" />
            <BsInstagram className='gallery__image-icon'/>
        </div>
        ))
      }
      </div>
      <div className="app__gallery-images_arrows">
        <BsArrowLeftShort className='gallery__arrow-icons ' onClick={()=>scroll('left')}/>
        <BsArrowRightShort className='gallery__arrow-icons ' onClick={()=>scroll('right')}/>
      </div>
    </div>
  </div>
  )
};

export default Gallery;

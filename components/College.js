import React from 'react';
import image2 from '../assets/images/image 2 (1).png'
import image3 from '../assets/images/image 3.png'
import image4 from '../assets/images/image 4.png'
import image5 from '../assets/images/image 5.png'
import image6 from '../assets/images/image 6.png'
function College() {
  return (
    <>
      <div className='college py-5'>
        <div className="clg-heading text-center mb-4">
        Our Past and Present College & Club Partners
        </div>
        <div className='d-flex justify-content-around'>
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
            <img src={image5} alt="" />
            <img src={image6} alt="" />
        </div>
      </div>
    </>
  );
}

export default College;

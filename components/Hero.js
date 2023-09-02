import React from 'react';
import hero from '@/assets/images/image 1.png'
function Hero() {
  return (
    <div>
      <div className=" py-5">
        <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="heading">
                Learn In-Demand Skills on Your Schedule
                </div>
                <p className='des'>Meet top industry professionals and learn the skills you need to get ahead in your career with iMeet.</p>
                <button className='btn me-3'>Trending Courses</button>
                <button className='btn sec-btn'>Talk to us</button>
            </div>
            <div className="col-2"></div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <img className='img-full' src={hero} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

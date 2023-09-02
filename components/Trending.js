import React from 'react';
import image from '../assets/images/image 7.png'
import Link from 'next/link'
function Trending() {
    return (
        <>
            <div className="trending text-center py-5">
                <div className="tred-heading">
                    Trending Courses
                </div>
                <p className='sub-title py-4'>Choose from 100+ courses with new additions published every month</p>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="sidebar">
                            <button className="btn custom-btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M4 6H20V16H4M20 18C20.5304 18 21.0391 17.7893 21.4142 17.4142C21.7893 17.0391 22 16.5304 22 16V6C22 4.89 21.1 4 20 4H4C2.89 4 2 4.89 2 6V16C2 16.5304 2.21071 17.0391 2.58579 17.4142C2.96086 17.7893 3.46957 18 4 18H0V20H24V18H20Z" fill="white"/>
</svg>Computer Science</button>
                            <button className="btn custom-btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M16.56 5.44L15.11 6.89C16.84 7.94 18 9.83 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 9.83 7.16 7.94 8.88 6.88L7.44 5.44C5.36 6.88 4 9.28 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.28 18.64 6.88 16.56 5.44ZM13 3H11V13H13" fill="#6B59ED"/>
</svg>Electronics & Communication</button>
                            <button className="btn custom-btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M16.56 5.44L15.11 6.89C16.84 7.94 18 9.83 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 9.83 7.16 7.94 8.88 6.88L7.44 5.44C5.36 6.88 4 9.28 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.28 18.64 6.88 16.56 5.44ZM13 3H11V13H13" fill="#6B59ED"/>
</svg>Mechanical/Architecture</button>
                            <button className="btn custom-btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M16.56 5.44L15.11 6.89C16.84 7.94 18 9.83 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 9.83 7.16 7.94 8.88 6.88L7.44 5.44C5.36 6.88 4 9.28 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.28 18.64 6.88 16.56 5.44ZM13 3H11V13H13" fill="#6B59ED"/>
</svg>Civil/Architecture</button>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="row">
                            <div className='col-4'>
                                <div className="card mb-3 p-3">
                                    <div className="info text-center">
                                        <img src={image} alt="" />
                                        <button className='btn btn-course'>Computer Science</button>
                                        <p className='title'>Machine Learning with Python</p>
                                        <p className='duration'>2 Months  Course  </p>
                                        <Link href='/' className='link'>Learn More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className="card mb-3 p-3">
                                    <div className="info text-center">
                                        <img src={image} alt="" />
                                        <button className='btn btn-course'>Computer Science</button>
                                        <p className='title'>Machine Learning with Python</p>
                                        <p className='duration'>2 Months  Course  </p>
                                        <Link href='/' className='link'>Learn More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className="card mb-3 p-3">
                                    <div className="info text-center">
                                        <img src={image} alt="" />
                                        <button className='btn btn-course'>Computer Science</button>
                                        <p className='title'>Machine Learning with Python</p>
                                        <p className='duration'>2 Months  Course  </p>
                                        <Link href='/' className='link'>Learn More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className="card mb-3 p-3">
                                    <div className="info text-center">
                                        <img src={image} alt="" />
                                        <button className='btn btn-course'>Computer Science</button>
                                        <p className='title'>Machine Learning with Python</p>
                                        <p className='duration'>2 Months  Course  </p>
                                        <Link href='/' className='link'>Learn More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className="card mb-3 p-3">
                                    <div className="info text-center">
                                        <img src={image} alt="" />
                                        <button className='btn btn-course'>Computer Science</button>
                                        <p className='title'>Machine Learning with Python</p>
                                        <p className='duration'>2 Months  Course  </p>
                                        <Link href='/' className='link'>Learn More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className="card mb-3 p-3">
                                    <div className="info text-center">
                                        <img src={image} alt="" />
                                        <button className='btn btn-course'>Computer Science</button>
                                        <p className='title'>Machine Learning with Python</p>
                                        <p className='duration'>2 Months  Course  </p>
                                        <Link href='/' className='link'>Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="btn fs-5">Show More</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Trending;

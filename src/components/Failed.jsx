import React from 'react'
import Error from '../assets/failed.jpg'
import '../style/App.css'

const Passed = (props) => {
  return (
    <>
    <div className='success'>
      <img src={Success}  />
    </div>
    <div className='passed text-center text-5xl'>
      <h6>Sorry Guys</h6>
    </div>
    </>
  );
}

export default Passed;

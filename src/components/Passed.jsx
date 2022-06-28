import React from 'react'
import Success from '../assets/success.jpg'
import '../style/App.css'

const Passed = (props) => {
  return (
    <>
    <div className='success'>
      <img src={Success}  />
    </div>
    <div className='text-emerald-700 text-center text-5xl'>
      <h6>Yeah...You did it</h6>
    </div>
    </>
  );
}

export default Passed;

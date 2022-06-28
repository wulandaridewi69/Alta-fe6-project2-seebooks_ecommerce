import React from 'react'
import Failed from '../assets/failed.jpg'
import '../style/App.css'

const Fail = (props) => {
  return (
    <>
    <div className='error'>
      <img src={Failed}  />
    </div>
    <div className='fail text-center text-5xl'>
      <h6>Sorry Guys</h6>
    </div>
    </>
  );
}

export default Fail;

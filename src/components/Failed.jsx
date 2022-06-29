import React from 'react'
import Failed from '../assets/failed.jpg'
import '../style/App.css'

const Fail = (props) => {
  return (
    <div className='flex flex-col items-center pt-5'>
    <div className='error'>
      <img src={Failed} className="h-[60vh]" />
    </div>
    <div className='fail text-center text-5xl font-bold text-teal-600'>
      <h6>Sorry Guys</h6>
    </div>
    </div>
  );
}

export default Fail;

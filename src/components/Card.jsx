import React from 'react'

export const CardBook = (props) => {
  return (
    <div className='bg-white shadow-lg rounded-lg overflow-hidden pb-4'>
        <div className=''>
            <div className='h-64 flex justify-center cursor-pointer' onClick={()=>props.goToDetail()}>
                <img src={props.cardImg} className="h-full" alt="" />
            </div>
            <div className='p-2 pb-0'>
                <div className='font-bold'>
                    {props.title}
                </div>
                <div className='text-slate-500 mb-2'>
                    {props.writer}  
                </div>
                <div className='font-bold flex justify-between'>
                    <p>Stock</p>{props.stock}
                </div>  
                <div className='font-bold flex justify-between'>
                    <p>Price</p>{`$ ${(parseInt(props.price)).toLocaleString()}`}
                </div>
            </div>
        </div>  
          {props.edit &&
              <div className='flex my-2 px-2'>
                  <button className='w-full bg-teal-600  px-4 text-white font-bold rounded' onClick={props.edit}>Edit</button>
              </div>
          }  
        
          {props.delete &&
              <div className='flex px-2'>
                  <button className='w-full bg-red-800  px-4 text-white font-bold rounded' onClick={props.delete}>Delete</button>
              </div>
          }  
    </div>
  )
}

export const CardProduct = (props) => {
  return (
    <div className='bg-white shadow-lg rounded-lg overflow-hidden pb-4'>
        <div className=''>
            <div className='h-64 flex justify-center'>
                <img src={props.cardImg} className="h-full" alt="" />
            </div>
            <div className='p-2 pb-0'>
                <div className='font-bold'>
                    {props.title}
                </div>
                <div className='text-slate-500 mb-2'>
                    {props.writer}  
                </div>
                <div className='font-bold flex justify-between'>
                    <p>Qty</p>{props.qty}
                </div>  
                <div className='font-bold flex justify-between'>
                    <p>Payment</p>{`$ ${(parseInt(props.payment)).toLocaleString()}`}
                </div>
            </div>
        </div>  
          {props.edit &&
              <div className='flex my-2 px-2'>
                  <button className='w-full bg-teal-600  px-4 text-white font-bold rounded' onClick={props.edit}>Edit</button>
              </div>
          }  
        
          {props.delete &&
              <div className='flex px-2'>
                  <button className='w-full bg-red-800  px-4 text-white font-bold rounded' onClick={props.delete}>Delete</button>
              </div>
          }  
    </div>
  )
}



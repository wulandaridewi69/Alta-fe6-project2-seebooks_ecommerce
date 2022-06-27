import React from 'react'

const Layout = (props) => {
  return (
    <div className='min-h-screen bg-slate-200 w-full'>
        <nav className='bg-teal-600 flex text-white justify-between py-4 px-8 items-center' >
              <div className='text-2xl font-bold'>SEEBOOKS</div>
              <div className='flex gap-8'>
                  <button className='border-[0.1rem] rounded-md font-bold px-8 py-1 hover:bg-slate-200 hover:text-teal-600'>Login</button>
                  <button className='border-[0.1rem] rounded-md font-bold px-8 py-1 text-teal-600 bg-slate-200 hover:bg-teal-600 hover:text-slate-200'>Sign Up</button>
              </div>
          </nav>
          <div>
              {props.children}
          </div>
    </div>
  )
}

export default Layout

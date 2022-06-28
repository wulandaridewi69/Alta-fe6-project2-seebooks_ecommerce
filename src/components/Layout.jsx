import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = (props) => {
  return (
    <div className='min-h-screen bg-slate-200 w-full flex flex-col'>
          {/* <nav className='bg-teal-600 flex text-white justify-between py-4 px-8 items-center' >
              <div className='text-2xl font-bold'>SEEBOOKS</div>
              <div className='flex gap-8'>
                  <button className='border-[0.1rem] rounded-md font-bold px-8 py-1 hover:bg-slate-200 hover:text-teal-600'>Login</button>
                  <button className='border-[0.1rem] rounded-md font-bold px-8 py-1 text-teal-600 bg-slate-200 hover:bg-teal-600 hover:text-slate-200'>Sign Up</button>
              </div>
          </nav> */}
          <Header />
          <div className='bg-white mx-6 p-4 flex-1'>
              {props.children}
          </div>
          <Footer />
    </div>
  )
}

export default Layout

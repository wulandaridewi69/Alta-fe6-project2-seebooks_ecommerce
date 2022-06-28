
import React from 'react';
import Cart from '../assets/cart.png';
import '../styles/App.css'
import Search from '../assets/search.png'
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
    const navigate = useNavigate()
    return (
        <div className='header'>
            <div className='container ml-8'>
                <div className='flex items-center py-3'>
                    <div className='col-7'>
                        <h1 className='logo font-bold text-4xl cursor-pointer' onClick={()=>navigate('/')}>SEEBOOKS</h1>
                    </div>
                     <div className='col-4 flex'>
                        <img src={Search} className='icon-search bg-white p-2 ' alt=''/>
                        <input className='search w-full'></input>
                    </div> 
                    <div className='col-1'>
                        <img src={Cart} className='cart' alt=''/>
                    </div>
                    <div className='col-1'>
                        <div className='h-10 w-10 rounded-full bg-white'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
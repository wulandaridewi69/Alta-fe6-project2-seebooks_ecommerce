import React from 'react';
import Cart from '../assets/cart.png';
import '../style/App.css'
import Search from '../assets/search.png'

const Header = (props) => {
    return (
        <div className='header'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <h1 className='logo'>SEEBOOKS</h1>
                    </div>
                     <div className='col-4'>
                        {/* <img src={Search} className='icon-search'/> */}
                        <input className='search' placeholder='search'></input>
                    </div> 
                    <div className='col-1'>
                        <img src={Cart} className='cart' />
                    </div>
                    <div className='col-1'>
                        <circle/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
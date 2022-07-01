import React, { Component } from 'react'
import Product from '../assets/products.png'
import History from '../assets/history.png'
import Button from './Button'
import { useNavigate } from 'react-router'

const Sidebar = (props) => {
    const navigate = useNavigate() 
    return (
        <div>
            <Button className='btn-tranparent' onClick={()=>navigate('/productlist')}>
                <div className='product flex gap-x-5 mt-24'>
                    <img src={Product} />
                    <p>Products</p>
                </div>
            </Button>
            <br />
            <Button className='btn-tranparent' onClick={()=>navigate('/history')}>
                <div className='history flex gap-x-5'>
                    <img src={History} />
                    <p>History</p>
                </div>
            </Button>
        </div>
    )

}

export default Sidebar;

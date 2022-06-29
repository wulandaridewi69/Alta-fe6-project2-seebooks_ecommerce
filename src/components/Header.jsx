import React, { useEffect,useState } from 'react';
import Cart from '../assets/cart.png';
import '../styles/App.css'
import Search from '../assets/search.png'
import { useNavigate } from 'react-router-dom';
import Button from './button';

const Header = () => {
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(localStorage.getItem('userJwt'))
    useEffect(() => {
        if (!isLogin) {
            localStorage.removeItem('userJwt')
        }
    },[isLogin])
    return (
        <div className='header'>
            <div className='container'>
                <div className='flex items-center py-3 gap-4'>
                    {isLogin ? (
                        <>
                            <div className='col-6 '>
                                <h1 className='logo font-bold text-4xl cursor-pointer' onClick={()=>navigate('/')}>SEEBOOKS</h1>
                            </div>
                            <div className='col-4 flex'>
                                <img src={Search} className='icon-search bg-white p-2 ' alt=''/>
                                <input className='search w-full'></input>
                            </div>
                            <div className='col-1'>
                                <img src={Cart} className='cart' alt=''/>
                            </div>
                            <div className='col-1 cursor-pointer'>
                                <div className='h-10 w-10 rounded-full bg-white' onClick={()=>setIsLogin(false)}></div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='col-5'>
                                <h1 className='logo font-bold text-4xl cursor-pointer' onClick={()=>navigate('/')}>SEEBOOKS</h1>
                            </div>
                            <div className='col-4 flex'>
                                <img src={Search} className='icon-search bg-white p-2 ' alt=''/>
                                <input className='search w-full'></input>
                            </div>
                            <div className='col-3 flex gap-4 justify-end'>
                                <Button className="border-[0.1rem] border-white rounded-md font-bold px-8 py-1 hover:bg-white hover:text-teal-600" onClick={()=>navigate('/login')}>Login</Button>
                                <Button className="border-[0.1rem] rounded-md font-bold px-8 py-1 text-teal-600 bg-teal-50 hover:bg-teal-600 hover:text-slate-200" onClick={()=>navigate('/signup')}>Sign Up</Button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header;
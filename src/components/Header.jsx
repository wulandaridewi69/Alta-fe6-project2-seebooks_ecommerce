import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TokenContext } from '../utils/context';
import Cart from '../assets/cart.png';
import '../style/App.css'
import Search from '../assets/search.png'
import Button from '../components/Button';

const Header = () => {
    const navigate = useNavigate()
    const { token,setToken } = useContext(TokenContext);    

    const handleLogout = () => {
        localStorage.removeItem("token");
        setToken("0");
    }
    return (
        <div className='header h-auto'>
            <div className='container'>
                <div className='flex items-center py-2 gap-4'>
                    {token !== '0' ? (
                        <>
                            <div className='col-6 '>
                                <h1 className='logo font-bold text-4xl cursor-pointer' onClick={()=>navigate('/')}>SEEBOOKS</h1>
                            </div>
                            <div className='col-4 flex'>
                                <img src={Search} className='h-full rounded-l-md bg-white p-2' alt=''/>
                                <input className='w-full text-black p-1 rounded-r-md'></input>
                            </div>
                            <div className='col-1 flex justify-center'>
                                <img src={Cart} className='cursor-pointer' alt='' onClick={()=>navigate('/cart')}/>
                            </div>
                            <div className='col-1 group inline-block relative cursor-pointer text-center'>
                                <button className="h-12 w-12 bg-white rounded-full hover:bg-teal-900 cursor-pointer text-white">
                                </button>
                                <ul className="absolute hidden text-gray-700 pt-1 group-hover:block w-full">
                                    <li className="text-white">
                                        <div className="bg-teal-600 hover:bg-teal-900 py-2 px-4 block whitespace-no-wrap cursor-pointer">Profile</div>
                                    </li>
                                    <li className="text-white">
                                        <div className="bg-teal-600 hover:bg-teal-900 py-2 px-4 block whitespace-no-wrap cursor-pointer" onClick={()=>handleLogout()}>LogOut</div>
                                    </li>
                                </ul>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='col-5'>
                                <h1 className='logo font-bold text-4xl cursor-pointer' onClick={()=>navigate('/')}>SEEBOOKS</h1>
                            </div>
                            <div className='col-4 flex'>
                                <img src={Search} className='h-full rounded-l-md bg-white p-2' alt=''/>
                                <input className='w-full text-black p-1 rounded-r-md'></input>
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
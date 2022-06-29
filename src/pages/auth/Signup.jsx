import React, { useState,useContext } from 'react'
import { TextField,Modal,Box} from '@mui/material'
import imgVector from '../../assets/5836 1.png'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { TokenContext } from '../../utils/context'
import axios from 'axios'
import Button from '../../components/button'
import Passed from "../../components/Passed";

const Signup = () => {
    const navigate = useNavigate()
    const { token } = useContext(TokenContext);

    const [email,setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [name,setName] = useState('')
    const [telp,setTelp] = useState('')
    const [address, setAddress] = useState('')
    const [isNameError,setIsNameError] = useState(false)
    const [isEmailError,setIsEmailError] = useState(false)
    const [isPwdError, setIsPwdError] = useState(false)
    const [isTelpError, setIsTelpError] = useState(false)
    const [isAddressError, setIsAddressError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(false)


    const handleName = (e) => {
        const inputName = e.target.value
        setName(inputName)
        isNameError && setIsNameError(false)
    }

    const handleEmail = (e) => {
        const inputEmail = e.target.value
        setEmail(inputEmail)
        isEmailError && setIsEmailError(false)
    }
    
    const handlePwd = (e) => {
        const inputPwd = e.target.value
        setPwd(inputPwd)
        isPwdError && setIsPwdError(false)
    }
    
    const handleTelp = (e) => {
        const inputTelp = e.target.value
        setTelp(inputTelp)
        isTelpError && setIsTelpError(false)
    }

    const handleAddress = (e) => {
        const inputAddress = e.target.value
        setAddress(inputAddress)
        isAddressError && setIsAddressError(false)
    }
    
    const callSubmit = (e) => {
        if (e.key === 'Enter') {
            handleSubmit()
        }
    }

    const handleSubmit = async () => {
        const regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        const regName = /^[a-z0-9_-]{3,16}$/igm;
        const regTelp = /^\d+$/
        let passed = 0
        
        if (regEmail.test(email)) {
            passed= passed+1
        } else {
            setIsEmailError(true)
        }

        if (regName.test(name)) {
            passed= passed+1
        } else {
            setIsNameError(true)
        }
        
        if (regTelp.test(telp)) {
            passed= passed+1
        } else {
            setIsTelpError(true)
        }

        if (pwd !== '') {
            passed= passed+1
        } else {
            setIsPwdError(true)
        }

        if (address !== '') {
            passed= passed+1
        } else {
            setIsAddressError(true)
        }

        if (passed === 5) {
            setLoading(true)
            const formData = new FormData()
            formData.append("username",name)
            formData.append("email",email)
            formData.append("password",pwd)
            formData.append("alamat",address)
            formData.append("notelp",telp)
            axios.post('http://34.125.69.172/users', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
            .then((res) => {
                console.log(res)    
                setModal(true)
            })
            .catch((err) => {
                console.log(err)
                setIsEmailError(true)    
                setIsPwdError(true)
                setIsNameError(true)
                setIsTelpError(true)
                setIsAddressError(true)
            })
            .finally(()=>setLoading(false))

        } else {
            console.log('gagal')
        }
        
    }

    const closeModal = () => navigate('/login')

    if (token === "0") {
        if (loading) {
            return (
                <div className='h-screen w-screen flex justify-center items-center'>
                    <div className='h-36 w-36 rounded-full bg-teal-600 animate-bounce'></div>
                </div>
            )
        } else {
            return (
                <div className='flex min-h-screen items-center p-5'>
                    <Modal
                        open={modal}
                        onClose={closeModal}>
                        <Box className="w-1/2 min-h-1/2 translate-x-1/2 translate-y-1/4 bg-white flex flex-col justify-center rounded-lg items-center shadow-2xl p-5 gap-3" >
                            <Passed />
                            <Button className="bg-teal-600 py-2 px-5 rounded text-white" onClick={()=>closeModal()}>Go to login</Button>
                        </Box>
                    </Modal>
                    <div className='basis-full flex flex-col pl-5 cursor-pointer' onClick={() => navigate('/')}>
                        <div>
                            <p className='text-8xl font-bold text-teal-600'>SEEBOOKS</p>
                            <p className='font-bold text-xl'>Online bookstore you can trust</p>
                        </div>
                        <img src={imgVector} alt="" className='w-[40vw]' />
                    </div>
                    <div className='basis-full flex justify-center'>
                        <div className='flex-col gap-12 flex w-1/2'>
                            <p className='font-bold text-4xl text-teal-600 self-center'>SIGN UP</p>
                            <div className='flex flex-col gap-3'>
                                <div className='flex flex-col gap-1'>
                                    <TextField id="Name" error={isNameError} type="text" value={name} label="Name" variant="outlined" onChange={(e) => handleName(e)} onKeyDown={(e) => callSubmit(e)} />
                                    {isNameError && <span className='text-xs text-red-600'>Make sure the fields Name are appropriate and have been filled</span>}
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <TextField id="email" error={isEmailError} type="email" value={email} label="Email" variant="outlined" onChange={(e) => handleEmail(e)} onKeyDown={(e) => callSubmit(e)} />
                                    {isEmailError && <span className='text-xs text-red-600'>Make sure the fields email are appropriate and have been filled</span>}
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <TextField id="password" error={isPwdError} type="password" value={pwd} label="Password" variant="outlined" onChange={(e) => handlePwd(e)} onKeyDown={(e) => callSubmit(e)} />
                                    {isPwdError && <span className='text-xs text-red-600'>Make sure the fields password are appropriate and have been filled</span>}
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <TextField id="Telp" error={isTelpError} type="text" value={telp} label="Telp" variant="outlined" onChange={(e) => handleTelp(e)} onKeyDown={(e) => callSubmit(e)} />
                                    {isTelpError && <span className='text-xs text-red-600'>Make sure the fields Telp are appropriate and have been filled</span>}
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <TextField id="Address" error={isAddressError} type="text" value={address} label="Address" variant="outlined" onChange={(e) => handleAddress(e)} onKeyDown={(e) => callSubmit(e)} />
                                    {isAddressError && <span className='text-xs text-red-600'>Make sure the fields Address are appropriate and have been filled</span>}
                                </div>
                            </div>
                            <div className='flex flex-col items-center font-bold'>
                                <Button className="bg-teal-600 py-2 px-5 rounded text-white" onClick={() => handleSubmit()}>Signup</Button>
                                <p className='text-teal-600'>or</p>
                                <Link className='underline text-teal-600' to={'/login'}>Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    } else {
        return <Navigate to={'/'} />
    }
}

export default Signup

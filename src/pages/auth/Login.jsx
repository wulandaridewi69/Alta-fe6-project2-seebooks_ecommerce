import React, { useEffect, useState } from 'react'
import { TextField} from '@mui/material'
import imgVector from '../../assets/5836 1.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Button from '../../components/button'

const Login = () => {
    const navigate = useNavigate()

    const [email,setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [isEmailError,setIsEmailError] = useState(false)
    const [isPwdError, setIsPwdError] = useState(false)
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        if (localStorage.getItem("userJwt")) {
            navigate('/')
        }
    },[])

    const handleEmail = (e) => {
        const inputEmail = e.target.value
        setEmail(inputEmail)
        isEmailError && setIsEmailError(false)
    }

    const callSubmit = (e) => {
        if (e.key === 'Enter') {
            handleSubmit()
        }
    }

    const handlePwd = (e) => {
        const inputPwd = e.target.value
        setPwd(inputPwd)
        isPwdError && setIsPwdError(false)
    }
    
    const handleSubmit = async () => {
        const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (re.test(email)) {
            if (pwd !== '') {
                setLoading(true)
                const formData = new FormData()
                formData.append('email',email)
                formData.append('password', pwd)
                axios.post('http://34.125.69.172/login', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                })
                .then((res) => {
                    localStorage.setItem("userJwt", JSON.stringify({ token: res.data.data.token, userId: res.data.data.user_id }))
                    navigate('/')
                })
                .catch(() => {
                    setIsEmailError(true)    
                    setIsPwdError(true)    
                })
                .finally(()=>setLoading(false))
            } else {
                setIsPwdError(true)
            }
        } else {
            setIsEmailError(true)
        }
    }

    if (loading) {
        return (
            <div className='h-screen w-screen flex justify-center items-center'>
                <div className='h-36 w-36 rounded-full bg-teal-600 animate-bounce'></div>
            </div>
        )
    } else {
        return (
            <div className='flex min-h-screen items-center p-5'>
                <div className='basis-full flex flex-col pl-5 cursor-pointer' onClick={() => navigate('/')}>
                    <div>
                        <p className='text-8xl font-bold text-teal-600'>SEEBOOKS</p>
                        <p className='font-bold text-xl'>Online bookstore you can trust</p>
                    </div>
                    <img src={imgVector} alt="" className='w-[40vw]' />
                </div>
                <div className='basis-full flex justify-center'>
                    <div className='flex-col gap-12 flex w-1/2'>
                        <p className='font-bold text-4xl text-teal-600 self-center'>LOGIN</p>
                        <div className='flex flex-col gap-3'>
                            <div className='flex flex-col gap-1'>
                                <TextField id="email" error={isEmailError} type="email" value={email} label="Email" variant="outlined" onChange={(e) => handleEmail(e)} onKeyDown={(e) => callSubmit(e)} />
                                {isEmailError && <span className='text-xs text-red-600'>Please check your email again</span>}
                            </div>
                            <div className='flex flex-col gap-1'>
                                <TextField id="password" error={isPwdError} type="password" value={pwd} label="Password" variant="outlined" onChange={(e) => handlePwd(e)} onKeyDown={(e) => callSubmit(e)} />
                                {isPwdError && <span className='text-xs text-red-600'>Please check your password again</span>}
                            </div>
                        </div>
                        <div className='flex flex-col items-center font-bold'>
                            <Button onClick={() => handleSubmit()}>Login</Button>
                            <p className='text-teal-600'>or</p>
                            <Link className='underline text-teal-600' to={'/signUp'}>Create Account</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    } 
}

export default Login

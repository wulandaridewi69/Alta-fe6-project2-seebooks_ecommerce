import React from 'react'
import Product from '../assets/products.png'
import History from '../assets/history.png'
import Layout from '../components/Layout'
import Button from '../components/Button'
import Photo from '../assets/profile.jpg'
import { Modal,Box } from '@mui/material'
import { useState, useContext,useEffect } from 'react'
import { useNavigate } from 'react-router'
import { TokenContext } from '../utils/context'
import axios from 'axios'

const Profile = () => {
    const navigate = useNavigate()
    const { token,setToken } = useContext(TokenContext);

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
    const [loading, setLoading] = useState(true)
    const [modal, setModal] = useState(false)

    useEffect(() => {
        if (token === "0") {
            navigate('/login')
        } else {
            fetchProfile()
        }
    }, [])
    
    const fetchProfile = () => {
        const userId = localStorage.getItem('idUser')
        axios.get(`http://34.125.69.172/users/${userId}`, {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'aplication/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then((res) => {
            const { data } = res.data
            setEmail(data.email)
            setPwd(data.password)
            setName(data.user_name)
            setTelp(data.notelp)
            setAddress(data.alamat)
        })
        .catch((err) => {
            if (err.response.status === 401) {
                alert('token expired please re login')
                handleLogout()
            }
        })
        .finally(() => setLoading(false))
    }

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
            formData.append("notelp", telp)

            const iduser = localStorage.getItem('idUser')
            
            axios.put(`http://34.125.69.172/users/${iduser}`, formData, {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then((res) => {
                console.log(res)    
                setModal(true)
            })
            .catch((err) => {
                alert(err)
                // setIsEmailError(true)    
                // setIsPwdError(true)
                // setIsNameError(true)
                // setIsTelpError(true)
                // setIsAddressError(true)
            })
            .finally(()=>setLoading(false))

        } else {
            console.log('gagal')
        }
        
    }

    const callDelete = () => {
        setModal(true)
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        setToken("0");
        localStorage.removeItem("idUser");
        navigate('/login')
    }
    // const closeModal = () => navigate('/login')

    if (token !== "0") {
        if (loading) {
            return (
                <div className='h-screen w-screen flex justify-center items-center'>
                    <div className='h-36 w-36 rounded-full bg-teal-600 animate-bounce'></div>
                </div>
            )
         } else {
            return (
                <Layout>
                    <Modal
                        open={modal}
                        onClose={() => setModal(false)}>
                        <Box className="w-1/3 min-h-1/2 translate-x-full translate-y-1/4 bg-white flex flex-col justify-center rounded-lg items-center shadow-2xl p-5 gap-3" >
                            <p className='text-4xl font-bold text-center my-5'>Are you sure to delete your account ?</p>
                            <Button className="bg-red-800 font-bold py-2 px-5 rounded text-white">Delete</Button>
                        </Box>
                    </Modal>
                    <div className='container-xxl'>
                        <div className='row'>
                            <div className='col-2 min-h-screen bg-slate-200'>
                                <div className='product flex gap-x-5 mt-24 cursor-pointer' onClick={() => navigate('/productlist')}>
                                    <img src={Product} alt='' />
                                    <p>Products</p>
                                </div>
                                <br />
                                <div className='history flex gap-x-5 cursor-pointer' onClick={() => navigate('/histories')}>
                                    <img src={History} alt='' />
                                    <p>History</p>
                                </div>
                            </div>
                            <div className='col-5 p-4'>
                                <div className='p-3 mb-3 text-2xl font-bold'>
                                    PROFILE
                                </div>
                                <form>
                                    <fieldset className='px-2 border-slate-300'>
                                        <legend className='legend'>Username</legend>
                                        <input name='text' onChange={(e) => handleName(e)} value={name} className='form w-full input pb-2' placeholder='Kenneth Krane' onKeyDown={(e) => callSubmit(e)} />
                                        {isNameError && <span className='text-xs text-red-600'>Make sure the fields Name are appropriate and have been filled</span>}
                                    </fieldset>
                                    <br />
                                    <fieldset className='px-2 border-slate-300'>
                                        <legend className='legend'>Email</legend>
                                        <input name='text' onChange={(e) => handleEmail(e)} value={email} className='form w-full input pb-2' placeholder='Kenneth@gmail.com' onKeyDown={(e) => callSubmit(e)} />
                                        {isEmailError && <span className='text-xs text-red-600'>Make sure the fields email are appropriate and have been filled</span>}
                                    </fieldset>
                                    <br />
                                    <fieldset className='px-2 border-slate-300'>
                                        <legend className='legend'>Password</legend>
                                        <input name='text' onChange={(e) => handlePwd(e)} value={pwd} className='form w-full input pb-2' placeholder='**************' onKeyDown={(e) => callSubmit(e)} />
                                        {isPwdError && <span className='text-xs text-red-600'>Make sure the fields password are appropriate and have been filled</span>}
                                    </fieldset>
                                    <br />
                                    <fieldset className='px-2 border-slate-300'>
                                        <legend className='legend'>Phone Number</legend>
                                        <input name='text' onChange={(e) => handleTelp(e)} value={telp} className='form w-full input pb-2' placeholder='+62 89881764492' onKeyDown={(e) => callSubmit(e)} />
                                        {isTelpError && <span className='text-xs text-red-600'>Make sure the fields Telp are appropriate and have been filled</span>}
                                    </fieldset>
                                    <br />
                                    <fieldset className='px-2 border-slate-300'>
                                        <legend className='legend'>Address</legend>
                                        <textarea className='input w-full' name='text' onChange={(e) => handleAddress(e)} value={address} placeholder='st. May, No. 1, Malang City, Indonesia' onKeyDown={(e) => callSubmit(e)} />
                                        {isAddressError && <span className='text-xs text-red-600'>Make sure the fields Address are appropriate and have been filled</span>}
                                    </fieldset>
                                </form>
                                <br />
                                <div className='container'>
                                    <div className='flex'>
                                        <div className='col-6'>
                                            <Button className='btn-primary text-white inline-block font-bold border-0 px-5 py-2 decoration-0 bg-teal-500 hover:bg-teal-600 ... text-center text-base' text='Save' onClick={() => handleSubmit()}>Update</Button>
                                        </div>
                                        <br />
                                        <div className='col-6'>
                                            <Button className=' btn-primary text-white inline-block font-bold border-0 px-5 py-2 decoration-0 bg-teal-500 hover:bg-teal-600 ... text-center text-base' text='Cancel' onClick={() => handleLogout()}>Log Out</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-12 justify-center'>
                                            <br />
                                            <Button className='gap-y-2 btn-danger center btn-primary text-white inline-block font-bold border-0 px-5 py-2 decoration-0 bg-rose-800 hover:bg-rose-600 ... text-center text-base' text='Delete Account' onClick={() => callDelete()}>Delete</Button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='col-5'>
                                <div className='flex justify-center'>
                                    <img src={Photo} className='w-2/4 mt-20' />
                                </div>
                                <div className='text-center justify-center'>
                                    <Button className=' text-white inline-block font-bold border-0 px-5 py-2 decoration-0 bg-teal-500 hover:bg-teal-600 ... text-center text-base'>Edit</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                </Layout>
            )
        }
    } else {
        navigate('/login')
    }
}

export default Profile;

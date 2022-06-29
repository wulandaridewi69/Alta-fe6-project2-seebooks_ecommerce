import React from 'react'
import Product from '../assets/products.png'
import History from '../assets/history.png'
import Layout from '../components/Layout'
import Button from '../components/button'
import Photo from '../assets/profile.jpg'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const Profile = (props) => {

    const [edit, setEdit] = useState({
        id: '',
        value: ''
    });

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        if (props.edit) {
            inputRef.current.focus();
        } else {
            inputRef.current.blur();
        }
    })

    const handleChange = (e, type) => {
        setUsername(e.target.value);
        setEmail(e.target.value);
        setPassword(e.target.value);
        setPhone(e.target.value);
        setAddress(e.target.value);
        console.log(e.target.value);
    }

    const  complete = () => {
        setEdit({
            id: '',
            value: ''
        });
        props.setEdit(false);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            id: props.edit ? props.edit.id : null,
        });
        setUsername('');
        setEmail('');
        setPassword('');
        setPhone('');
        setAddress('');
    }

    const submitUpdate = (value) => {
        // updateProfile(edit.id, value);
        setEdit({
            id: '',
            value: ''
        })
    };

    return (
        <Layout>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-2 min-h-screen bg-slate-200'>
                        <div className='product flex gap-x-5 mt-24'>
                            <img src={Product} />
                            <p>Products</p>
                        </div>
                        <br />
                        <div className='history flex gap-x-5'>
                            <img src={History} />
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
                                <input ref={inputRef} name='text' onChange={(e) => handleChange(e,"username")} value={username} className='form input pb-2' placeholder='Kenneth Krane' />
                            </fieldset>
                            <br />
                            <fieldset className='px-2 border-slate-300'>
                                <legend className='legend'>Email</legend>
                                <input ref={inputRef} name='text' onChange={(e) => handleChange(e, "email")} value={email} className='form input pb-2'placeholder='Kenneth@gmail.com' />
                            </fieldset>
                            <br />
                            <fieldset className='px-2 border-slate-300'>
                                <legend className='legend'>Password</legend>
                                <input ref={inputRef} name='text' onChange={(e) => handleChange(e, "password")} value={password} className='form input pb-2' placeholder='**************' />
                            </fieldset>
                            <br />
                            <fieldset className='px-2 border-slate-300'>
                                <legend className='legend'>Phone Number</legend>
                                <input ref={inputRef} name='text' onChange={(e) => handleChange(e, "phone")} value={phone} className='form input pb-2' placeholder='+62 89881764492' />
                            </fieldset>
                            <br />
                            <fieldset className='px-2 border-slate-300'>
                                <legend className='legend'>Address</legend>
                                <textarea className='input w-full' ref={inputRef} name='text' onChange={(e) => handleChange(e, "address")} value={address} placeholder='st. May, No. 1, Malang City, Indonesia' />
                            </fieldset>
                        </form>
                        <br />
                        <div className='container'>
                            <div className='flex'>
                                <div className='col-6'>
                                    <Button className='btn-primary text-white inline-block font-bold border-0 px-5 py-2 decoration-0 bg-teal-500 hover:bg-teal-600 ... text-center text-base' text='Save' onClick={handleSubmit}>Update</Button>
                                </div>
                                <br/>
                                <div className='col-6'>
                                    <Button className=' btn-primary text-white inline-block font-bold border-0 px-5 py-2 decoration-0 bg-teal-500 hover:bg-teal-600 ... text-center text-base' text='Cancel' onClick={handleSubmit}>Log Out</Button>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                                    <div className='row'>
                                        <div className='col-12 justify-center'>
                                            <br />
                                            <Button className='gap-y-2 btn-danger center btn-primary text-white inline-block font-bold border-0 px-5 py-2 decoration-0 bg-rose-800 hover:bg-rose-600 ... text-center text-base' text='Delete Account' onClick={handleSubmit}>Delete</Button>
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

export default Profile;

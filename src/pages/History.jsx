import React from 'react'
import Layout from '../components/Layout'
import Button from '../components/Button'
import Photo from '../assets/profile.jpg'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import Sidebar from '../components/Sidebar'

const History = (props) => {

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

    const complete = () => {
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
            <div className='container'>
                <div className='row'>
                    <div className='col-2'>
                        <Sidebar />
                    </div>
                    <div className='col-10'>
                        <div className='p-3 mb-3 text-2xl font-bold'>
                            History
                        </div>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-6'>
                                    <div>
                                        <p>25-06-2022</p>
                                        <h4>Modern Physics</h4>
                                        <p>Kenneth Krane</p>
                                        <br />
                                        <p>5 item</p>
                                    </div>
                                </div>
                                <div className='col-2'>
                                    $ 200
                                </div>
                                <div className='col-2'>
                                    <Button className>Complete</Button>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-6'>
                                    <div>
                                        <p>25-06-2022</p>
                                        <h4>Modern Physics</h4>
                                        <p>Kenneth Krane</p>
                                        <br />
                                        <p>5 item</p>
                                    </div>
                                </div>
                                <div className='col-2'>
                                    $ 200
                                </div>
                                <div className='col-2'>
                                    <Button>Complete</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                </div>
        </Layout>
        )

}

export default History;
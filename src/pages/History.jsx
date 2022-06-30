import React from 'react'
import Layout from '../components/Layout'
import Button from '../components/Button'
import Photo from '../assets/profile.jpg'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import Sidebar from '../components/Sidebar'

const History = (props) => {

    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [totalPrice, setTotalPrice] = useState('');
    const [item, setItem] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        const getHistory = async () => {
            const response = await fetch(`http://localhost:3001/api/v1/history`);
            const data = await response.json();
            setDate(data.data.date);
            setTitle(data.data.title);
            setAuthor(data.data.author);
            setTotalPrice(data.data.totalPrice);
            setItem(data.data.item);
            setStatus(data.data.status);
        }
        getHistory();
    })

    return (
        <Layout>
            <div className='container'>
                <div className='row'>
                    <div className='col-2 bg-slate-200'>
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
                                    <Button className='text-white text-sm inline-block font-bold border-0 px-5 py-2 decoration-0 rounded bg-cyan-900'>Complete</Button>
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
                                    <Button className='text-white text-sm inline-block font-bold border-0 px-5 py-2 decoration-0 rounded bg-amber-500'>Pending</Button>
                                </div>
                            </div>
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
                                    <Button className='text-white text-sm inline-block font-bold border-0 px-5 py-2 decoration-0 rounded bg-rose-700'>Cancel</Button>
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
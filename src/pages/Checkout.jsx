import React from 'react'
import imgBook from '../assets/modern-physics.jpg'
import Layout from '../components/Layout'
import { useState } from 'react'
import useEffect from "react"
import { useParams, useNavigate } from "react-router-dom"
import Button from '../components/Button'
import Biography from '../assets/biography.png'
import Comic from '../assets/comic.jpg'
import Novel from '../assets/novel.jpg'
import Physics from '../assets/modern-physics.jpg'
import Magazine from '../assets/magazine.jpg'
// import CardBook from '../components/Card'


const Checkout = () => {

    const produk = {
        id: 1,
        imgSrc: imgBook,
        title: "Modern Physics in the universe of madnesss",
        writer: "Kenneth Krane",
        qty: "10",
        payment: "500"
    }

    const { id } = useParams();
    const [qty, setQty] = useState('');
    const [payment, setPayment] = useState('');
    const [total, setTotal] = useState('');
    const [status, setStatus] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [address, setAddress] = useState('');

    const handleChange = (e) => {
        setQty(e.target.value);
        setPayment(e.target.value);
    }

    const params = useParams();
    const navigate = useNavigate()

    const handleNavigate = (path) => {
        path === '' ? setPathCategory('All') : setPathCategory(path)
        navigate(`../${path}`, { replace: true })
    }

    const [pathCategory, setPathCategory] = useState(params.category)

    // useEffect(() => {
    //     !pathCategory && setPathCategory('All')
    // },[])

    // useEffect(() => {
    //     if (id) {
    //         setLoading(true);
    //         setTimeout(() => {
    //             setLoading(false);
    //             setQty(produk.qty);
    //             setPayment(produk.payment);
    //             setTotal(produk.qty * produk.payment);
    //             setStatus('success');
    //         }, 2000);
    //     }
    // })

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setStatus('success');
        }, 2000);
    }

    return (
        <Layout>
            <div className='bg-slate-200'>
                <div className='container '>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='p-3 mb-3 text-2xl font-bold'>
                                Checkout
                            </div>
                            <fieldset className='px-2 border-slate-300'>
                                <legend className='legend'>Address</legend>
                                <textarea className='input w-full bg-slate-200' name='text' onChange={(e) => handleChange(e, "address")} value={address} placeholder='st. May, No. 1, Malang City, Indonesia' />
                            </fieldset>
                            <div className="group inline-block relative">
                                <button><span className="mr-2">Method Payment</span>▼</button>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='container '>
                                <div className='row'>
                                    <div className='flex text-2xl font-bold text-center pt-20 pb-8 justify-center mr-10'>
                                        <div className='col-3'>Subtotal:</div>
                                        <div className='col-3'>$30.00</div>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center'>
                                <Button className='btn-primary text-white inline-block font-bold border-0 px-5 py-2 decoration-0 bg-teal-500 hover:bg-teal-600 ... text-center text-base' text='Save' onClick={handleSubmit}>Pay</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row justify-center pt-5'>
                    <div className='col-2 border-4 border-gray-100 border-b-gray-400 rounded-xl'>
                        <img src={Physics} className='h-75 w-55 ' />
                        <h5 className='font-semibold'>Modern Physics</h5>
                        <p className='text-slate-800 text-xs'>Keneeth Krane</p>
                    </div>
                    <div className='col-2 border-4 border-gray-100 border-b-gray-400 rounded-xl'>
                        <img src={Novel} className='h-75 w-55 border-4 ' />
                        <h5 className='font-semibold'>Layangan Putus</h5>
                        <p className='text-slate-800 text-xs'>Mommy ASF</p>
                    </div>
                    <div className='col-2 border-4 border-gray-100 border-b-gray-400 rounded-xl'>
                        <img src={Comic} className='h-75 w-55 border-4 ' />
                        <h5 className='font-semibold'>Dark Crisis</h5>
                        <p className='text-slate-800 text-xs'>DC</p>
                    </div>
                    <div className='col-2 border-4 border-gray-100 border-b-gray-400 rounded-xl'>
                        <img src={Biography} className='h-75 w-55 border-4 ' />
                        <h5 className='font-semibold'>Mind Fire</h5>
                        <p className='text-slate-800 text-xs'>Abigail S</p>
                    </div>
                    <div className='col-2 border-4 border-gray-100 border-b-gray-400 rounded-xl'>
                        <img src={Magazine} className='h-75 w-55 ' />
                        <h5 className='font-semibold'>Savoy</h5>
                        <p className='text-slate-800 text-xs'>Savoy</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-4">
                <Button className='btn-tranparent border-teal-600 border-solid border-2 text-teal-600 inline-block font-bold px-5 py-2 decoration-0 bg-transparent ... text-center text-base' text='Save' onClick={handleSubmit}>Load More</Button>
            </div>
        </Layout >
    )
}

export default Checkout;

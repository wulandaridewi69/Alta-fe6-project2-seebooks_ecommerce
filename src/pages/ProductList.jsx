
import imgBook from '../assets/modern-physics.jpg'
import { useParams, useNavigate } from "react-router-dom"
import Biography from '../assets/biography.png'
import Comic from '../assets/comic.jpg'
import Novel from '../assets/novel.jpg'
import Physics from '../assets/modern-physics.jpg'
import Magazine from '../assets/magazine.jpg'
import React from 'react'
import Product from '../assets/products.png'
import History from '../assets/history.png'
import Layout from '../components/Layout'
import Button from '../components/Button'
import Photo from '../assets/profile.jpg'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
// import CardBook from '../components/Card'

const ProductList = (props) => {

    const [edit, setEdit] = useState({
        id: '',
        value: ''
    });


    const complete = () => {
        setEdit({
            id: '',
            value: ''
        });
        props.setEdit(false);
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
                    <div className='col-2 bg-slate-200'>
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
                    <div className='col-10'>
                        <div className='p-3 mb-3 text-2xl font-bold'>
                            Product List
                        </div>
                        <div className='container'>
                            <div className='row gap-x-8 justify-center'>
                                <div className='col-2 border-4 border-gray-100 border-b-gray-400 rounded-xl'>
                                    <img src={Physics} className='h-75 w-55 ' />
                                    <h5 className='font-semibold'>Modern Physics</h5>
                                    <p className='text-slate-800 text-xs'>Keneeth Krane</p>
                                    <Button className='btn-green justify-center text-white inline-block font-bold border-0 px-5 py-2 decoration-0 bg-teal-500 hover:bg-teal-600 ... text-center text-base' text='Edit' onClick={() => props.setEdit(true)}>Edit</Button>
                                    <Button className='gap-y-2 btn-danger center btn-primary text-white inline-block font-bold border-0 px-5 py-2 decoration-0 bg-rose-800 hover:bg-rose-600 ... text-center text-base' text='Delete Account'>Delete</Button>
                                </div>
                                <div className='col-2 border-4 border-gray-100 border-b-gray-400 rounded-xl'>
                                    <img src={Novel} className='h-75 w-55 border-4 ' />
                                    <h5 className='font-semibold'>Layangan Putus</h5>
                                    <p className='text-slate-800 text-xs'>Mommy ASF</p>
                                    <Button className='btn-green justify-center text-white inline-block font-bold border-0 px-5 py-2 decoration-0 bg-teal-500 hover:bg-teal-600 ... text-center text-base' text='Edit' onClick={() => props.setEdit(true)}>Edit</Button>
                                    <Button className='gap-y-2 btn-danger center btn-primary text-white inline-block font-bold border-0 px-5 py-2 decoration-0 bg-rose-800 hover:bg-rose-600 ... text-center text-base' text='Delete Account'>Delete</Button>
                                </div>
                                <div className='col-2 border-4 border-gray-100 border-b-gray-400 rounded-xl'>
                                    <img src={Comic} className='h-75 w-55 border-4 ' />
                                    <h5 className='font-semibold'>Dark Crisis</h5>
                                    <p className='text-slate-800 text-xs'>DC</p>
                                    <Button className='btn-green justify-center text-white inline-block font-bold border-0 px-5 py-2 decoration-0 bg-teal-500 hover:bg-teal-600 ... text-center text-base' text='Edit' onClick={() => props.setEdit(true)}>Edit</Button>
                                    <Button className='gap-y-2 btn-danger center btn-primary text-white inline-block font-bold border-0 px-5 py-2 decoration-0 bg-rose-800 hover:bg-rose-600 ... text-center text-base' text='Delete Account'>Delete</Button>
                                </div>
                                <div className='col-2 border-4 border-gray-100 border-b-gray-400 rounded-xl'>
                                    <img src={Biography} className='h-75 w-55 border-4 ' />
                                    <h5 className='font-semibold'>Mind Fire</h5>
                                    <p className='text-slate-800 text-xs'>Abigail S</p>
                                    <Button className='btn-green justify-center text-white inline-block font-bold border-0 px-5 py-2 decoration-0 bg-teal-500 hover:bg-teal-600 ... text-center text-base' text='Edit' onClick={() => props.setEdit(true)}>Edit</Button>
                                    <Button className='gap-y-2 btn-danger center btn-primary text-white inline-block font-bold border-0 px-5 py-2 decoration-0 bg-rose-800 hover:bg-rose-600 ... text-center text-base' text='Delete Account'>Delete</Button>
                                </div>
                                <div className='justify-center pt-20 text--center'>
                                    <Button className='btn-tranparent border-teal-600 border-solid border-2 text-teal-600 inline-block font-bold px-5 py-2 decoration-0 bg-transparent ... text-center text-base' text='Save'>Load More</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProductList;
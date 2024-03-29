
import imgBook from '../assets/modern-physics.jpg'
import { useParams, useNavigate, Navigate } from "react-router-dom"
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

import { useContext } from 'react'
import { TokenContext } from '../utils/context'
import axios from 'axios'
import { CardProduct } from '../components/Card'
import Delete from '../assets/delete-circle.png'
import Edit from '../assets/edit.png'
import UpdateProduct from './UpdateProduct'
import Sidebar from '../components/Sidebar'
// import CardBook from '../components/Card'

const ProductList = ({remove, update}) => {

    const navigate = useNavigate()
    const { token } = useContext(TokenContext);
    const [product,setProduct] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchData()
    }, [])
    
    const fetchData = () => {
        axios.get(`http://34.125.69.172/books/users`, {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'aplication/json',
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            console.log(res.data.data)
            setProduct(res.data.data)
        }).catch((err)=> alert(err))
        .finally(()=>setLoading(false))
    }

    const handleDelete = (id) => {
        axios.delete(`http://34.125.69.172/books/${id}`, {
            headers: {
                    'accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
        })
        .then(() => { alert('sukses delete') })
        .catch((err) => {
            if (err.response.status === 400) {
                navigate(`/detail/${id}/Not Found`)
            } else {
                alert(err)
            }
        })
        .finally(() => setLoading(false))
    }

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
                    <div className=''>
                        <div className='row'>
                            <div className='col-2 bg-slate-200'>
                                <Sidebar />
                            </div>
                            <div className='col-10'>
                                <div className='p-3 mb-3 text-2xl font-bold'>
                                    Product List
                                </div>
                                <div className=''>
                                    <div className='row justify-center'>
                                        {product.length > 0 ? (
                                            <div className="my-5 pt-0 p-4 grid grid-cols-2 xl:grid-cols-6 gap-4">
                                                {product.map((item) => (
                                                    // <CardProduct
                                                    //     key={item.id}
                                                    //     cardImg={!item.img_url && 'https://eproc.lkpp.go.id/v3/img/no-picture.jpg'}
                                                    //     title={item.title}
                                                    //     writer={item.author}
                                                    //     stock={item.stock}
                                                    //     price={item.price}
                                                    //     goToDetail={() => navigate(`../createproduct`, { replace: true })}
                                                    // />)
                                                        <div className='col-2 border-4 border-gray-100 border-b-gray-400 rounded-xl'>
                                                            <img src={!item.img_url && 'https://eproc.lkpp.go.id/v3/img/no-picture.jpg'} className='h-75 w-55 ' />
                                                            <h5 className='font-semibold'>{ item.title}</h5>
                                                            <p className='text-slate-800 text-xs'>{item.author}</p>
                                                            <Button className='btn-green rounded justify-center text-white inline-block font-bold border-0 px-5 py-2 decoration-0 bg-teal-500 hover:bg-teal-600 ... text-center text-base' text='Edit' onClick={() => navigate(`../updateproduct/${item.id}`, { replace: true })}>Edit</Button>
                                                        <Button className='gap-y-2 roundedcenter btn-primary text-white inline-block font-bold border-0 px-5 py-2 decoration-0 bg-rose-800 hover:bg-rose-600 ... text-center text-base' text='Delete Account' onClick={ ()=> handleDelete(item.id) }>Delete</Button>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        ) : (
                                            <>
                                                <div className="text-slate-300 flex justify-center p-24 text-5xl font-bold m-5">No Result</div>
                                                <Button className=' text-white inline-block font-bold border-0 px-5 py-2 decoration-0 bg-teal-500 hover:bg-teal-600 ... text-center text-base' onClick={()=>navigate('/createproduct')}>create Product</Button>
                                            </>
                                        )
                                        }
                                    </div>
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

export default ProductList;
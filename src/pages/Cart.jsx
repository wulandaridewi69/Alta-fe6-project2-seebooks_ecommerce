import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Button from "../components/Button"
import Layout from "../components/Layout"
import { CardProduct } from "../components/Card"
import imgComic from "../assets/comic.jpg"
import imgBiography from "../assets/biography.png"
import imgMagazine from "../assets/magazine.jpg"
import imgEncy from "../assets/encyclopediajpg.jpg"
import imgNovel from "../assets/novel.jpg"
import imgTextBooks from "../assets/modern-physics.jpg"
import { TokenContext } from "../utils/context";
import { Modal,Box } from '@mui/material'
import axios from 'axios'

const Cart = () => {
    const { token } = useContext(TokenContext);
    const navigate = useNavigate()

    const [data, setData] = useState([]);
    const [modal, setModal] = useState(false)
    const [selected, setSelected] = useState(0)
    const [cart, setCart] = useState()
    const [loading,setLoading] = useState(true)
    
    const produk = [
        {
            id: 1,
            imgSrc: imgComic,
            title: "Dark Crisis",
            writer: "DC Comic",
            stock: "20",
            price: "10"
        },
        {
            id: 2,
            imgSrc: imgBiography,
            title: "Mind Afire",
            writer: "Abigail Samoun",
            stock: "70",
            price: "50"
        },
        {
            id: 3,
            imgSrc: imgMagazine,
            title: "Savoy",
            writer: "Savoy",
            stock: "50",
            price: "10"
        },
        {
            id: 4,
            imgSrc: imgEncy,
            title: "Brytannica Allnew",
            writer: "Christopher Lyliod",
            stock: "90",
            price: "50"
        },
        {
            id: 5,
            imgSrc: imgNovel,
            title: "Layangan Putus",
            writer: "Momy Asf",
            stock: "50",
            price: "5"
        },
        {
            id: 6,
            imgSrc: imgTextBooks,
            title: "Modern Physics in the universe of madnesss",
            writer: "Kenneth Krane",
            stock: "200",
            price: "50"
        }
    ]

    let subTotal = 0

    useEffect(() => {
        fetchCart()
    },[])

    const fetchCart = () => {
        axios.get(`http://34.125.69.172/orderdetails/${localStorage.getItem('idUser')}`, {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'aplication/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        ).then((res) => {
            setCart(res.data.data)
        })
        .catch((err)=> alert(err))
        .finally(()=>setLoading(false))
    }

    const handleEdit = (idx) => {
        navigate(`../detail/${idx}`, { replace: true })
    }
    const selectDelete = (id) => {
        setModal(true)
        setSelected(id)
    }
    const handleDelete = () => {
        setLoading(true)
        const id = localStorage.getItem('idUser')
        axios.delete(`http://34.125.69.172/orderdetails/${selected}`, {
        headers: {
                'accept': 'application/json',
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(() => {
            alert('sukses delete')
        })
        .catch((err) => {
            if (err.response.status === 400) {
                navigate(`/detail/${id}/Not Found`)
            } else {
                alert(err)
            }
        })
        .finally(() => setLoading(false))
        setModal(false)
    }

    const postCart = (id) => {
        console.log('postCart');
        let axios = require('axios');
        let FormData = require('form-data');
        let data = new FormData();
        data.append('quantity', '1');
        data.append('price', '1');

        let config = {
            method: 'post',
            url: `http://34.125.69.172/carts/${id}`,
            headers: {
                'Authorization': 'Bearer ' + token,
                ...data.getHeaders()
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const getCart = (id) => {
        console.log('getCart');
        let axios = require('axios');

        let config = {
            method: 'get',
            url: `http://34.125.69.172/orders/${id}`,
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    if (token !== "0") {
        if (loading) {
            return (
                <div className='h-screen w-screen flex justify-center items-center'>
                    <div className='h-36 w-36 rounded-full bg-teal-600 animate-bounce'></div>
                </div>
            )
        } else {
            console.log(cart);
            return (
                <Layout>
                    <div className='p-4'>
                        <p className='font-bold text-2xl'>Shopping Cart</p>
                        <div className="mt-5 grid grid-cols-2 xl:grid-cols-6 gap-4">
                            {cart.map((item) => {
                                subTotal += parseInt(item.price)
                                return (
                                    <CardProduct
                                        key={item.id}
                                        cardImg={item.imgSrc}
                                        title={item.book.title}
                                        writer={item.book.price}
                                        qty={item.quantity_buy_book}
                                        payment={item.total_price_book}
                                        goToDetail={() => handleEdit(item.book.id)}
                                        edit={() => handleEdit(item.book.id)}
                                        delete={() => selectDelete(item.id)}
                                    />
                                )
                            })}
                        </div>
                    </div>
                    <Modal
                        open={modal}
                        onClose={() => setModal(false)}>
                        <Box className="w-1/3 min-h-1/2 translate-x-full translate-y-1/4 bg-white flex flex-col justify-center rounded-lg items-center shadow-2xl p-5 gap-3" >
                            <p className='text-4xl font-bold text-center my-5'>Are you sure to delete from shoping cart ?</p>
                            <Button className="bg-red-800 font-bold py-2 px-5 rounded text-white" onClick={() => handleDelete()}>Delete</Button>
                        </Box>
                    </Modal>
                    <div className='flex justify-between mt-8 px-4 pb-6'>
                        <p className='font-bold text-2xl flex items-start'>
                            Subtotal : <span className='ml-4 font-bold text-3xl'>$ {subTotal}</span>
                        </p>
                        <Button className='bg-white font-bold py-2 px-5 rounded text-teal-600 border-[0.1rem] border-teal-700' onClick={() => navigate('/checkout')}>Proccess To Checkout</Button>
                    </div>
                </Layout>
            )
        }
    } else {
        return <Navigate to={'/login'} />
    }
}

export default Cart
import React, {useContext, useEffect, useState} from 'react'
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
import { TokenContext, CartContext } from "../utils/context";
import { Modal,Box } from '@mui/material'

const Cart = () => {
    const { token } = useContext(TokenContext);
    const { cart,setCart } = useContext(CartContext);
    const navigate = useNavigate()

    const [data, setData] = useState([]);
    const [modal, setModal] = useState(false)
    const [selected, setSelected] = useState(0)
    
    const produk = [
        {
            id:1,
            imgSrc: imgComic,
            title: "Dark Crisis",
            writer: "DC Comic",
            stock: "20",
            price: "10"
        },
        {
            id:2,
            imgSrc: imgBiography,
            title: "Mind Afire",
            writer: "Abigail Samoun",
            stock: "70",
            price: "50"
        },
        {
            id:3,
            imgSrc: imgMagazine,
            title: "Savoy",
            writer: "Savoy",
            stock: "50",
            price: "10"
        },
        {
            id:4,
            imgSrc: imgEncy,
            title: "Brytannica Allnew",
            writer: "Christopher Lyliod",
            stock: "90",
            price: "50"
        },
        {
            id:5,
            imgSrc: imgNovel,
            title: "Layangan Putus",
            writer: "Momy Asf",
            stock: "50",
            price: "5"
        },
        {
            id:6,
            imgSrc: imgTextBooks,
            title: "Modern Physics in the universe of madnesss",
            writer: "Kenneth Krane",
            stock: "200",
            price: "50"
        }
    ]

    useEffect(() => {
        setData(cart)
        console.log(cart)
    }, [])
    
    useEffect(()=> {
        setData(cart)
    },[cart])

    let subTotal = 0

    const handleEdit = (idx) => {
        navigate(`../detail/${idx}`, { replace: true })
    }
    const selectDelete = (id) => {
        setModal(true)
        setSelected(id)
    }
    const handleDelete = () => {
        const indexDel = cart.findIndex((search) => search === selected)
        const temp = cart.slice()
        temp.splice(indexDel, 1)
        if (temp.length === 0) {
            localStorage.removeItem('cart')
        } else {
            localStorage.setItem('cart',JSON.stringify(temp))
        }
        setCart(temp)
        setModal(false)
    }
    
    if (token !== "0") {
        return (
            <Layout>
                <div className='p-4'>
                    <p className='font-bold text-2xl'>Shopping Cart</p>
                    <div className="mt-5 grid grid-cols-2 xl:grid-cols-6 gap-4">
                        {data.map((id) => {
                            subTotal += parseInt(produk[id-1].price)
                            return (
                                <CardProduct
                                    key={produk[id-1].id}
                                    cardImg={produk[id-1].imgSrc}
                                    title={produk[id-1].title}
                                    writer={produk[id-1].writer}
                                    qty={produk[id-1].stock}
                                    payment={produk[id-1].price}
                                    goToDetail={() => handleEdit(id)}
                                    edit={() => handleEdit(id)}
                                    delete={() => selectDelete(id)}
                                />
                            )
                        })}
                    </div>
                </div>
                <Modal
                    open={modal}
                    onClose={()=>setModal(false)}>
                    <Box className="w-1/3 min-h-1/2 translate-x-full translate-y-1/4 bg-white flex flex-col justify-center rounded-lg items-center shadow-2xl p-5 gap-3" >
                        <p className='text-4xl font-bold text-center my-5'>Are you sure to delete from shoping cart ?</p>
                        <Button className="bg-red-800 font-bold py-2 px-5 rounded text-white" onClick={()=>handleDelete()}>Delete</Button>
                    </Box>
                </Modal>
                <div className='flex justify-between mt-8 px-4 pb-6'>
                    <p className='font-bold text-2xl flex items-start'>
                        Subtotal : <span className='ml-4 font-bold text-3xl'>$ {subTotal}</span>
                    </p>
                    <Button className='bg-white font-bold py-2 px-5 rounded text-teal-600 border-[0.1rem] border-teal-700' onClick={()=>navigate('/checkout')}>Proccess To Checkout</Button>
                </div>
            </Layout>
        )
    } else {
        return <Navigate to={'/login'} />
    }
}

export default Cart
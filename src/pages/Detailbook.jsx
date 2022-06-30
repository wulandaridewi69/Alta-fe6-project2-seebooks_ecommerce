import React, { useState,useContext, useEffect } from 'react'
import Layout from '../components/Layout'
import { useNavigate, useParams } from 'react-router-dom'
import { useRef } from 'react';
import { TokenContext } from '../utils/context';
import axios from 'axios';

const Detailbooks = () => {
  const {token} = useContext(TokenContext)

  const navigate = useNavigate()
  const [qty,setQty] = useState(1)
  const params = useParams()
  const book_id = params.book_id
  const ref = useRef(null);
  const [book,setBook] = useState('')
  const [wrongInput, setWrongInput] = useState('')
  const [loading, setLoading] = useState(true)
  const [isInCart,setIsInCart] = useState(false)
  
  useEffect(() => {
    fetchDetailBook()
  },[])

  const fetchDetailBook = () => {
    axios.get(`http://34.125.69.172/books/${book_id}`)
      .then((res) => { setBook(res.data.data) })
      .catch((err) => {
        if (err.response.status === 400) {
          navigate(`/detail/${book_id}/Not Found`)
        }
      })
      .finally(() => setLoading(false))
  }

  const updateQty = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setQty(e.target.value)
      setWrongInput("")
    }
  }

  const handleAddCart = () => {
    setLoading(true)
    const payment = qty*book.price
    const formData = new FormData()
    formData.append('quantity',qty)
    formData.append('price',payment)
    axios.post(`http://34.125.69.172/carts/${book_id}`, formData, {
        headers: {
            'accept': 'application/json',
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
        }
    }).then((res) => {
      alert(res.data.message)
        setIsInCart(true)
    }).catch((err) => {
      alert(err)
    }).finally(()=>setLoading(false))
  }


  const addToCart = () => {
    if(token==='0'){navigate('/login')}
    if (qty > parseInt(book.stock) || qty < 1) {
      setWrongInput("Incorrect input Please check again")
      ref.current.focus()
    } else {
      handleAddCart()
      setWrongInput("")
    }
  }

  const updateToCart = () => {
    if(token==='0'){navigate('/login')}
    console.log("update cart")
    navigate('/cart')
  }

  if (loading) {
    return (
                <div className='h-screen w-screen flex justify-center items-center'>
                    <div className='h-36 w-36 rounded-full bg-teal-600 animate-bounce'></div>
                </div>
            )
  } else {
    return (
      <Layout>
        <div className='p-3 mb-3 text-2xl font-bold'>
          DETAIL BOOK
        </div>
        <div className='flex pb-32'>
          <div className='px-10 flex flex-col items-center'>
            <img src={book.image_url === '' ? 'https://eproc.lkpp.go.id/v3/img/no-picture.jpg' : book.image_url} className="w-[20vw]" alt="" />
            <div className='p-2'>
              <p>
                <span className='text-slate-500'>Pages : </span>{book.book_page} sheet
              </p>
              <div className='flex'>
                <p className='font-bold mr-1'>ISBN :</p>
                <div>
                  {book.isbn.split(',').map((item, idx) => (<p key={idx} className='font-bold'>{item}</p>))}
                </div>
              </div>
              <p>
                <span className='text-slate-500'>Publisher : </span>{book.publisher}
              </p>
            </div>
            <div className='text-center'>
              <p className='font-bold text-xl text-teal-700 mb-2'>Stock : {book.stock}</p>
              <div className='flex flex-col items-center'>
                <div className='flex justify-center items-center text-base font-bold'>
                  <button className='p-2 px-4 border-l-[0.1rem] border-y-[0.1rem] border-slate-900 rounded-l hover:bg-slate-200' onClick={() => qty > 1 && setQty(parseInt(qty) - 1)}>-</button>
                  <input type="text" ref={ref} className='border-y-[0.1rem] border-slate-900 text-center p-2 w-1/4' value={qty} onChange={(e) => updateQty(e)} />
                  <button className='p-2 px-4 border-r-[0.1rem] border-y-[0.1rem] border-slate-900 rounded-r hover:bg-slate-200' onClick={() => qty < book.stock && setQty(parseInt(qty) + 1)}>+</button>
                </div>
                <p className="mt-2 text-xs text-red-600">{wrongInput}</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-between'>
            <div>
              <p className='font-bold text-4xl'>{book.title}</p>
              <p className='text-slate-400 text-lg'>{book.writer}</p>
              <p className='font-bold text-4xl my-2'>{`$ ${(parseInt(book.price)).toLocaleString()}`}</p>
              <p className='text-teal-600 font-bold'>Description</p>
              <p className='max-w-2xl mb-2'>{book.description}</p>
              <p className=''><span className='text-teal-600 font-bold mr-4'>Category</span>{book.category}</p>
            </div>
            <div className='flex gap-4'>
              {
                !isInCart ? (
                  <>
                    <button className='bg-teal-600 font-bold py-2 px-5 rounded text-white' onClick={() => addToCart()}>Add to cart</button>
                    <button className='bg-white font-bold py-2 px-5 rounded text-teal-600 border-[0.1rem] border-teal-700' onClick={() => addToCart()}>Buy Now</button>
                  </>
                ) : (
                  <button className='bg-teal-600 font-bold py-2 px-5 rounded text-white' onClick={() => updateToCart()}>Update to cart</button>
                )
              }
            </div>
          </div>
        </div>

      </Layout>
    )
  }
}

export default Detailbooks

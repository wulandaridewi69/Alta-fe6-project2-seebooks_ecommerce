import React, { useState } from 'react'
import Layout from '../components/Layout'
import { useParams } from 'react-router-dom'
import imgBook from '../assets/modern-physics.jpg'
import {useRef} from 'react';

const Detailbooks = () => {

  const produk = {
            id:1,
            imgSrc: imgBook,
            pages: 1234,
            isbn: "ISBN-13: 978-0716775508,ISBN-10: 0716775506",
            category:"textbook",
            publisher: "Pt. Sinar Dunia",
            title: "Modern Physics in the universe of madnesss",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet id donec ultrices tincidunt arcu non sodales neque. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Viverra vitae congue eu consequat ac felis donec. Vitae ultricies leo integer malesuada nunc vel. Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Ac orci phasellus egestas tellus. At consectetur lorem donec massa sapien faucibus et.",
            writer: "Kenneth Krane",
            stock: 200,
            price: "50"
        }

  const [qty,setQty] = useState(1)
  const params = useParams()
  const book_id = params.book_id
  const ref = useRef(null);
  const[wrongInput,setWrongInput] = useState('')
  
  const updateQty = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setQty(e.target.value)
      setWrongInput("")
    }
  }

  const goToCart = () => {
    if (qty > parseInt(produk.stock) || qty < 1) {
      setWrongInput("Incorrect input Please check again")
      ref.current.focus()
    } else {
      setWrongInput("")
    }
  }

  return (
    <Layout>
      <div className='p-3 mb-3 text-2xl font-bold'>
        DETAIL BOOK
      </div>
      <div className='flex pb-32'>
        <div className='px-10 flex flex-col items-center'>
          <img src={produk.imgSrc} className="w-[20vw]" alt="" />
          <div className='p-2'>
            <p>
              <span className='text-slate-500'>Pages : </span>{produk.pages} sheet
            </p>
            {produk.isbn.split(',').map((item, idx) => (<p key={idx} className='font-bold'>{item}</p>))}
            <p>
              <span className='text-slate-500'>Publisher : </span>{produk.publisher}
            </p>
          </div>
          <div className='text-center'>
            <p className='font-bold text-xl text-teal-700 mb-2'>Stock : { produk.stock}</p>
            <div className='flex flex-col items-center'>
              <div className='flex justify-center items-center text-base font-bold'>
                <button className='p-2 px-4 border-l-[0.1rem] border-y-[0.1rem] border-slate-900 rounded-l hover:bg-slate-200' onClick={()=>qty>1 && setQty(parseInt(qty)-1)}>-</button> 
                <input type="text" ref={ref} className='border-y-[0.1rem] border-slate-900 text-center p-2 w-1/4' value={qty} onChange={(e) => updateQty(e)} />
                <button className='p-2 px-4 border-r-[0.1rem] border-y-[0.1rem] border-slate-900 rounded-r hover:bg-slate-200' onClick={()=>qty<produk.stock && setQty(parseInt(qty)+1)}>+</button>
              </div>
              <p className="mt-2 text-xs">{ wrongInput}</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-between'>
          <div>
            <p className='font-bold text-4xl'>{ produk.title }</p>
            <p className='text-slate-400 text-lg'>{ produk.writer }</p>
            <p className='font-bold text-4xl my-2'>{`$ ${(parseInt(produk.price)).toLocaleString()}`}</p>
            <p className='text-teal-600 font-bold'>Description</p>
            <p className='max-w-2xl mb-2'>{ produk.description}</p>
            <p className=''><span className='text-teal-600 font-bold mr-4'>Category</span>{ produk.category}</p>
          </div>
          <div className='flex'>
            <button onClick={()=>goToCart()}>Add to cart</button>
            <button onClick={()=>goToCart()}>Buy Now</button>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default Detailbooks

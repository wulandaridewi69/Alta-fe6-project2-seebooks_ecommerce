import React, { useState,useContext } from 'react'
import Layout from '../components/Layout'
import { useNavigate, useParams } from 'react-router-dom'
import { useRef } from 'react';
import imgComic from "../assets/comic.jpg"
import imgBiography from "../assets/biography.png"
import imgMagazine from "../assets/magazine.jpg"
import imgEncy from "../assets/encyclopediajpg.jpg"
import imgNovel from "../assets/novel.jpg"
import imgTextBooks from "../assets/modern-physics.jpg"
import { TokenContext, CartContext } from '../utils/context';

const Detailbooks = () => {
  const produkApi = [
        {
            id:1,
            imgSrc: imgComic,
            title: "Dark Crisis",
            writer: "DC Comic",
            stock: "20",
            price: "10",
            pages: 1234,
            isbn: "ISBN-13: 978-0716775508,ISBN-10: 0716775506",
            category:"textbook",
            publisher: "Pt. Sinar Dunia",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet id donec ultrices tincidunt arcu non sodales neque. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Viverra vitae congue eu consequat ac felis donec. Vitae ultricies leo integer malesuada nunc vel. Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Ac orci phasellus egestas tellus. At consectetur lorem donec massa sapien faucibus et.",
        },
        {
            id:2,
            imgSrc: imgBiography,
            title: "Mind Afire",
            writer: "Abigail Samoun",
            stock: "70",
            price: "50",
            pages: 1234,
            isbn: "ISBN-13: 978-0716775508,ISBN-10: 0716775506",
            category:"textbook",
            publisher: "Pt. Sinar Dunia",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet id donec ultrices tincidunt arcu non sodales neque. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Viverra vitae congue eu consequat ac felis donec. Vitae ultricies leo integer malesuada nunc vel. Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Ac orci phasellus egestas tellus. At consectetur lorem donec massa sapien faucibus et.",
        },
        {
            id:3,
            imgSrc: imgMagazine,
            title: "Savoy",
            writer: "Savoy",
            stock: "50",
            price: "10",
            pages: 1234,
            isbn: "ISBN-13: 978-0716775508,ISBN-10: 0716775506",
            category:"textbook",
            publisher: "Pt. Sinar Dunia",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet id donec ultrices tincidunt arcu non sodales neque. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Viverra vitae congue eu consequat ac felis donec. Vitae ultricies leo integer malesuada nunc vel. Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Ac orci phasellus egestas tellus. At consectetur lorem donec massa sapien faucibus et.",
        },
        {
            id:4,
            imgSrc: imgEncy,
            title: "Brytannica Allnew",
            writer: "Christopher Lyliod",
            stock: "90",
            price: "50",
            pages: 1234,
            isbn: "ISBN-13: 978-0716775508,ISBN-10: 0716775506",
            category:"textbook",
            publisher: "Pt. Sinar Dunia",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet id donec ultrices tincidunt arcu non sodales neque. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Viverra vitae congue eu consequat ac felis donec. Vitae ultricies leo integer malesuada nunc vel. Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Ac orci phasellus egestas tellus. At consectetur lorem donec massa sapien faucibus et.",
        },
        {
            id:5,
            imgSrc: imgNovel,
            title: "Layangan Putus",
            writer: "Momy Asf",
            stock: "50",
            price: "5",
            pages: 1234,
            isbn: "ISBN-13: 978-0716775508,ISBN-10: 0716775506",
            category:"textbook",
            publisher: "Pt. Sinar Dunia",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet id donec ultrices tincidunt arcu non sodales neque. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Viverra vitae congue eu consequat ac felis donec. Vitae ultricies leo integer malesuada nunc vel. Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Ac orci phasellus egestas tellus. At consectetur lorem donec massa sapien faucibus et.",
        },
        {
            id:6,
            imgSrc: imgTextBooks,
            title: "Modern Physics in the universe of madnesss",
            writer: "Kenneth Krane",
            stock: "200",
            price: "50",
            pages: 1234,
            isbn: "ISBN-13: 978-0716775508,ISBN-10: 0716775506",
            category:"textbook",
            publisher: "Pt. Sinar Dunia",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet id donec ultrices tincidunt arcu non sodales neque. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Viverra vitae congue eu consequat ac felis donec. Vitae ultricies leo integer malesuada nunc vel. Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Ac orci phasellus egestas tellus. At consectetur lorem donec massa sapien faucibus et.",
        }
    ]
  const { cart,setCart } = useContext(CartContext);
  const {token} = useContext(TokenContext)

  const navigate = useNavigate()
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

  const addToCart = () => {
    if(token==='0'){navigate('/login')}
    if (qty > parseInt(produkApi[book_id-1].stock) || qty < 1) {
      setWrongInput("Incorrect input Please check again")
      ref.current.focus()
    } else {
      if (localStorage.getItem('cart')) {
        const temp = JSON.parse(localStorage.getItem('cart'))
        localStorage.setItem('cart',JSON.stringify([...temp,book_id]))
        setCart([...temp,book_id])
      } else {
        localStorage.setItem('cart',JSON.stringify([book_id]))
        setCart([book_id])
        console.log(book_id)
      }
      setWrongInput("")
    }
  }

  const updateToCart = () => {
    if(token==='0'){navigate('/login')}
    console.log("update cart")
    navigate('/cart')
  }

  return (
    <Layout>
      <div className='p-3 mb-3 text-2xl font-bold'>
        DETAIL BOOK
      </div>
      <div className='flex pb-32'>
        <div className='px-10 flex flex-col items-center'>
          <img src={produkApi[book_id-1].imgSrc} className="w-[20vw]" alt="" />
          <div className='p-2'>
            <p>
              <span className='text-slate-500'>Pages : </span>{produkApi[book_id-1].pages} sheet
            </p>
            {produkApi[book_id-1].isbn.split(',').map((item, idx) => (<p key={idx} className='font-bold'>{item}</p>))}
            <p>
              <span className='text-slate-500'>Publisher : </span>{produkApi[book_id-1].publisher}
            </p>
          </div>
          <div className='text-center'>
            <p className='font-bold text-xl text-teal-700 mb-2'>Stock : { produkApi[book_id-1].stock}</p>
            <div className='flex flex-col items-center'>
              <div className='flex justify-center items-center text-base font-bold'>
                <button className='p-2 px-4 border-l-[0.1rem] border-y-[0.1rem] border-slate-900 rounded-l hover:bg-slate-200' onClick={()=>qty>1 && setQty(parseInt(qty)-1)}>-</button> 
                <input type="text" ref={ref} className='border-y-[0.1rem] border-slate-900 text-center p-2 w-1/4' value={qty} onChange={(e) => updateQty(e)} />
                <button className='p-2 px-4 border-r-[0.1rem] border-y-[0.1rem] border-slate-900 rounded-r hover:bg-slate-200' onClick={()=>qty<produkApi[book_id-1].stock && setQty(parseInt(qty)+1)}>+</button>
              </div>
              <p className="mt-2 text-xs">{ wrongInput}</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-between'>
          <div>
            <p className='font-bold text-4xl'>{ produkApi[book_id-1].title }</p>
            <p className='text-slate-400 text-lg'>{ produkApi[book_id-1].writer }</p>
            <p className='font-bold text-4xl my-2'>{`$ ${(parseInt(produkApi[book_id-1].price)).toLocaleString()}`}</p>
            <p className='text-teal-600 font-bold'>Description</p>
            <p className='max-w-2xl mb-2'>{ produkApi[book_id-1].description}</p>
            <p className=''><span className='text-teal-600 font-bold mr-4'>Category</span>{ produkApi[book_id-1].category}</p>
          </div>
          <div className='flex gap-4'>
            {
              !cart.find((search) => search === book_id) ? (
                <>
                  <button className='bg-teal-600 font-bold py-2 px-5 rounded text-white' onClick={()=>addToCart()}>Add to cart</button>
                  <button className='bg-white font-bold py-2 px-5 rounded text-teal-600 border-[0.1rem] border-teal-700' onClick={()=>addToCart()}>Buy Now</button>
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

export default Detailbooks

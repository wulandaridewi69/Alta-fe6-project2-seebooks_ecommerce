import React, { useContext } from 'react'
import Product from '../assets/products.png'
import History from '../assets/history.png'
import Layout from '../components/Layout'
import Button from '../components/Button'
import Photo from '../assets/profile.jpg'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import axios from 'axios'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Navigate } from 'react-router'
import { useNavigate } from 'react-router'
import Sidebar from '../components/Sidebar'
import { TokenContext } from '../utils/context'

const CreateProduct = (props) => {

    const [edit, setEdit] = useState({
        id: '',
        value: ''
    });

    const {token} = useContext(TokenContext)
    const navigate = useNavigate()
    const [listCategory, setListCategory] = useState([])
    const [loading,setLoading] = useState()
    const [title,setTitle] = useState('') 
    const [author,setAuthor] = useState('') 
    const [description,setDescription] = useState('') 
    const [pages,setPages] = useState('') 
    const [category,setCategorys] = useState('') 
    const [isbn,setIsbn] = useState('') 
    const [publisher,setPublisher] = useState('') 
    const [price,setPrice] = useState('') 
    const [stock,setStock] = useState('') 
    
    useEffect(() => {
       fetchCategory() 
    },[])

    const fetchCategory = () => {
        axios.get('http://34.125.69.172/categories')
            .then((res) => {
                const { data } = res.data;
                setListCategory(data)
            })
            .catch((err) => {
                alert(err)
                navigate('/err/server down')
            })
            .finally(()=>setLoading(false))
    }

    const inputRef = useRef(null);

    const handleChange = (e, type) => {
        const val = e.target.value
        if (type === 'title') {
            setTitle(val)
        } else if (type === 'author') {
            setAuthor(val)
        } else if (type === 'description') {
            setDescription(val)
        } else if (type === 'pages') {
            setPages(val)
        } else if (type === 'isbn') {
            setIsbn(val)
        } else if (type === 'publisher') {
            setPublisher(val)
        } else if (type === 'price') {
            setPrice(val)
        } else if (type === 'stock') {
            setStock(val)
        } 
    }

    const handleCategory = (e) => {
        setCategorys(e.target.value)
    }

    const handleSubmit = () => {
        let passed = 0
        
        title !== '' ?  passed = passed+1 : setTitle('added')
        author !== '' ?  passed = passed+1 : setAuthor('added')
        description !== '' ?  passed = passed+1 : setDescription('added')
        pages !== '' ?  passed = passed+1 : setPages('added')
        isbn !== '' ?  passed = passed+1 : setIsbn('added')
        category !== '' ?  passed = passed+1 : setCategorys('Biography')
        publisher !== '' ?  passed = passed+1 : setPublisher('added')
        price !== '' ?  passed = passed+1 : setPrice('added')
        stock !== '' ? passed = passed + 1 : setStock('added')
        
        if (passed === 9) {
            postProduct()
        } else {
            alert('field tidak boleh kosong!')
        }
    }

    const postProduct = () => {
        const formData = new FormData()
        formData.append('user_id',localStorage.getItem('idUser'))
        formData.append('title',title)
        formData.append('author',author)
        formData.append('description',description)
        formData.append('book_page',pages)
        formData.append('isbn',isbn)
        formData.append('publisher',publisher)
        formData.append('price',price)
        formData.append('stock',stock)
        axios.post('http://34.125.69.172/books', formData, {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
        }).then((res) => {
            alert(res)
            navigate('/productlist')        
        }).catch((err) => {
            alert(err)
        })
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
                <div className='container'>
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
                        <div className='col-5'>
                            <div className='p-3 mb-3 text-2xl font-bold'>
                                Create Product
                            </div>
                            <br />
                            <div className='history flex gap-x-5'>
                                <img src={History} />
                                <p>History</p>
                            </div>
                            <div>
                                <fieldset className='px-2 border-slate-300'>
                                    <legend className='legend'>Book Title</legend>
                                    <input ref={inputRef} name='text' onChange={(e) => handleChange(e, 'title')} value={title} className='form input pb-2' placeholder='Physics' />
                                </fieldset>
                                <br />
                                <fieldset className='px-2 border-slate-300'>
                                    <legend className='legend'>Writer</legend>
                                    <input ref={inputRef} name='text' onChange={(e) => handleChange(e, 'author')} value={author} className='form input pb-2' placeholder='Kenneth Krane' />
                                </fieldset>
                                <br />
                                <fieldset className='px-2 border-slate-300'>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={category}
                                            label="Category"
                                            onChange={(e)=>handleCategory(e)}
                                        >
                                            {listCategory.map((item,idx) => (
                                                <MenuItem keys={idx} value={item.name}>{item.name}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </fieldset>
                                <br />
                                <fieldset className='px-2 border-slate-300'>
                                    <legend className='legend'>Description</legend>
                                    <textarea className='input w-full' ref={inputRef} name='text' onChange={(e) => handleChange(e, 'description')} value={description} placeholder='The wonders of the speed of light, of gravitational waves, of molecular motors explained. Be amazed by the motion of stones, light, stars, atoms, muscles and empty space. Interesting facts. Fascinating puzzles. Beautiful Images. Clear explanations.' />
                                </fieldset>
                                <br />
                                <fieldset className='px-2 border-slate-300'>
                                    <legend className='legend'>Pages</legend>
                                    <input ref={inputRef} name='text' onChange={(e) => handleChange(e, 'pages')} value={pages} className='form input pb-2' placeholder='1024' />
                                </fieldset>
                                <br />
                                <fieldset className='px-2 border-slate-300'>
                                    <legend className='legend'>ISBN</legend>
                                    <input ref={inputRef} name='text' onChange={(e) => handleChange(e, 'isbn')} value={isbn} className='form input pb-2' placeholder='9386105268' />
                                </fieldset>
                            </div>
                        </div>
                        <div className='col-5'>
                            <div className='pt-20'>
                                <fieldset className='px-2 border-slate-300'>
                                    <legend className='legend'>Publisher</legend>
                                    <input ref={inputRef} name='text' onChange={(e) => handleChange(e, 'publisher')} value={publisher} className='form input pb-2' placeholder='Griffith' />
                                </fieldset>
                                <br />
                                <fieldset className='px-2 border-slate-300'>
                                    <legend className='legend'>Price</legend>
                                    <input ref={inputRef} name='text' onChange={(e) => handleChange(e, 'price')} value={price} className='form input pb-2' placeholder='$ 21.58' />
                                </fieldset>
                                <br />
                                <fieldset className='px-2 border-slate-300'>
                                    <legend className='legend'>Stock</legend>
                                    <input ref={inputRef} name='text' onChange={(e) => handleChange(e, 'stock')} value={stock} className='form input pb-2' placeholder='10' />
                                </fieldset>
                                <br />
                                {/* <fieldset className='px-2 border-slate-300'>
                                <legend className='legend'>Upload Image</legend>
                                <label for='myfile'>Choose File</label>
                                <input ref={inputRef} name='text' input='file' id='myFile' multiple className='form input pb-2' placeholder='Upload' />
                            </fieldset> */}
                            </div>
                            <br />
                            <Button className='text-white text-sm inline-block font-bold border-0 px-5 py-2 decoration-0 rounded bg-cyan-900 hover:bg-teal-600 ...' text='Save' onClick={() => handleSubmit()}>Submit</Button>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default CreateProduct

import React from 'react'
import Product from '../assets/products.png'
import History from '../assets/history.png'
import Layout from '../components/Layout'
import Button from '../components/Button'
import Photo from '../assets/profile.jpg'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import Sidebar from '../components/Sidebar'


const UpdateProduct = (props) => {
    const inputRef = useRef(null);

    const [Title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [categories, setCategories] = useState('');
    const [description, setDescription] = useState('');
    const [pages, setPages] = useState('');
    const [isbn, setIsbn] = useState('');
    const [publisher, setPublisher] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [image, setImage] = useState('');
    const [submit, setSubmit] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [edit, setEdit] = useState('');


    useEffect(() => {
        const getProduct = async (id) => {
            const response = await fetch(`http://localhost:3001/api/v1/products/${id}`);
            const data = await response.json();
            setTitle(data.data.title);
            setAuthor(data.data.author);
            setCategories(data.data.categories);
            setDescription(data.data.description);
            setPages(data.data.pages);
            setIsbn(data.data.isbn);
            setPublisher(data.data.publisher);
            setPrice(data.data.price);
            setStock(data.data.stock);
            setImage(data.data.image);
            setLoading(false);
        }
        getProduct();
    }, []);

    const updateProduct = async () => {
        
    }

    const handleChange = async () => {

    }
    const handleSubmit = async () => {
    }

    const complete = () => {
        setEdit({
            id: '',
            value: ''
        });
        props.setEdit(false);
    }


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     props.onSubmit({
    //         id: props.edit ? props.edit.id : null,
    //     });
    //     setedit('');
    //     setEmail('');
    //     setPassword('');
    //     setPhone('');
    //     setAddress('');
    // }

    const submitUpdate = (value) => {
        // updateProfile(edit.id, value);
        setEdit({
            id: '',
            value: ''
        })
    };

    return (
        <Layout>
            <div className='container'>
                <div className='row'>
                    <div className='col-2 bg-slate-200'>
                        <Sidebar />
                    </div>
                    <div className='col-5'>
                        <div className='p-3 mb-3 text-2xl font-bold'>
                            Update Product
                        </div>
                        <form>
                            <fieldset className='px-2 border-slate-300'>
                                <legend className='legend'>Book Title</legend>
                                <input ref={inputRef} name='text' onChange={(e) => handleChange(e, "edit")} value={edit} className='form w-full input pb-2' placeholder='Physics' />
                            </fieldset>
                            <br />
                            <fieldset className='px-2 border-slate-300'>
                                <legend className='legend'>Writer</legend>
                                <input ref={inputRef} name='text' onChange={(e) => handleChange(e, "edit")} value={edit} className='form w-full input pb-2' placeholder='Kenneth Krane' />
                            </fieldset>
                            <br />
                            <fieldset className='px-2 border-slate-300'>
                                <legend className='legend'>Description</legend>
                                <textarea className='input w-full' ref={inputRef} name='text' onChange={(e) => handleChange(e, "address")} value={edit} placeholder='The wonders of the speed of light, of gravitational waves, of molecular motors explained. Be amazed by the motion of stones, light, stars, atoms, muscles and empty space. Interesting facts. Fascinating puzzles. Beautiful Images. Clear explanations.' />
                            </fieldset>
                            <br />
                            <fieldset className='px-2 border-slate-300'>
                                <legend className='legend'>Pages</legend>
                                <input ref={inputRef} name='text' onChange={(e) => handleChange(e, "edit")} value={edit} className='form w-full input pb-2' placeholder='1024' />
                            </fieldset>
                            <br />
                            <fieldset className='px-2 border-slate-300 mb-4'>
                                <legend className='legend'>ISBN</legend>
                                <input ref={inputRef} name='text' onChange={(e) => handleChange(e, "edit")} value={edit} className='form w-full input pb-2' placeholder='9386105268' />
                            </fieldset>
                        </form>
                    </div>
                    <div className='col-5'>
                        <form className='pt-20'>
                            <fieldset className='px-2 border-slate-300'>
                                <legend className='legend'>Publisher</legend>
                                <input ref={inputRef} name='text' onChange={(e) => handleChange(e, "edit")} value={edit} className='form w-full input pb-2' placeholder='Griffith' />
                            </fieldset>
                            <br />
                            <fieldset className='px-2 border-slate-300'>
                                <legend className='legend'>Price</legend>
                                <input ref={inputRef} name='text' onChange={(e) => handleChange(e, "edit")} value={edit} className='form w-full input pb-2' placeholder='$ 21.58' />
                            </fieldset>
                            <br />
                            <fieldset className='px-2 border-slate-300'>
                                <legend className='legend'>Stock</legend>
                                <input ref={inputRef} name='text' onChange={(e) => handleChange(e, "edit")} value={edit} className='form w-full input pb-2' placeholder='10' />
                            </fieldset>
                            <br />
                            <fieldset className='px-2 border-slate-300'>
                                <legend className='legend'>Upload Image</legend>
                                <label for='myfile'>Choose File</label>
                                <input ref={inputRef} name='text' onChange={(e) => handleChange(e, "edit")} input='file' id='myFile' multiple value={edit} className='form w-full input pb-2' placeholder='Upload' />
                            </fieldset>
                        </form>
                        <br/>
                        <div className='text-center'>
                        <Button className='text-white text-sm inline-block font-bold border-0 px-5 py-2 decoration-0 rounded bg-cyan-900 hover:bg-teal-600 ...' text='Save' onClick={handleSubmit}>Submit</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )


}

export default UpdateProduct;

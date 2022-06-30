import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Layout from "../components/Layout"
import { CardBook } from "../components/Card"
import axios from 'axios'
import vectorImg from "../assets/5836 1.png"

const Homepage = () => {
    
    const params = useParams()
    const navigate = useNavigate()
    
    const [categorys, setCategorys] = useState([])
    const [loading, setLoading] = useState(true)
    const [books,setBooks]= useState()
    const [pathCategory, setPathCategory] = useState(params.category)

    useEffect(() => {
        fetchCategory()
    }, [])
    
    const fetchCategory = () => {
        axios.get('http://34.125.69.172/categories')
        .then((res) => {
            const { data } = res.data;
            if (!pathCategory) {
                setCategorys(data)
                setPathCategory('All')
                fetchAllBook()
            } else {
                if (data.find((search) => search.name === pathCategory) || pathCategory.toLowerCase()==='all') {
                    setCategorys(data)
                    fetchByCategory(pathCategory)
                } else {
                    navigate(`../${pathCategory}/Not Found`,{replace:true})
                }
            }
        })
        .catch((err) => {
            console.log(err)    
        })
    }

    const fetchByCategory = (category) => {
        axios.get(`http://34.125.69.172/books/filter?category=${category}`, {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'aplication/json',
            }
        })
        .then((res) => {
            setBooks(res.data.data);    
        }).catch((err) => {
            alert(err)
        })
        .finally(()=>setLoading(false))
    }

    const fetchAllBook = () => {
        axios.get('http://34.125.69.172/books', {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'aplication/json',
            }
        })
        .then((res) => {
            setBooks(res.data.data);    
        }).catch((err) => {
            alert(err)
        })
        .finally(()=>setLoading(false))
    }

    const handleNavigate = (path) => {
        if (path === '') {
            setPathCategory('All')
            setLoading(true)
            fetchAllBook()
        } else {
            setPathCategory(path)
            setLoading(true)
            fetchByCategory(path)
        }
        navigate(`../${path}`,{replace:true})
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
                <div className="p-4">
                    <div className="flex gap-6">
                        <div className="px-9 py-3 bg-teal-600 hover:bg-teal-900 cursor-pointer text-white rounded" onClick={() => handleNavigate('')}>
                            Books
                        </div>
                        <div className="group inline-block relative">
                            <button className="px-4 py-3 bg-teal-600 hover:bg-teal-900 cursor-pointer text-white rounded h-full">
                                <span className="mr-20">Filter</span>▼
                            </button>
                            <ul className="absolute hidden text-gray-700 pt-1 group-hover:block w-full">
                                {categorys.map((category, idx) => (
                                    <li className="text-white" key={idx}>
                                        <div className="bg-teal-600 hover:bg-teal-900 py-2 px-4 block whitespace-no-wrap cursor-pointer" onClick={() => handleNavigate(category.name)}>{category.name}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center pl-16">
                        <div className="flex-1">
                            <div className="text-9xl font-bold text-teal-600">SEEBOOKS</div>
                            <div className="text-3xl font-bold">Online bookstore you can trust</div>
                        </div>
                        <img src={vectorImg} alt="" />
                    </div>
                </div>
                <div className="text-4xl font-bold pl-5 ml-5 border-l-8 border-teal-600">{pathCategory}</div>
                    {books.length > 0 ? (
                        <div className="my-5 pt-0 p-4 grid grid-cols-2 xl:grid-cols-6 gap-4">
                            {books.map((book) => (
                                <CardBook
                                    key={book.id}
                                    cardImg={!book.img_url && 'https://eproc.lkpp.go.id/v3/img/no-picture.jpg'}
                                    title={book.title}
                                    writer={book.author}
                                    stock={book.stock}
                                    price={book.price}
                                    goToDetail={() => navigate(`../detail/${book.id}`, { replace: true })}
                                />)
                            )}
                        </div>
                    ) : (
                        <div className="text-slate-300 flex justify-center p-24 text-5xl font-bold m-5">No Result</div>
                    )
                    }
            </Layout>
        )
    }
}
export default Homepage
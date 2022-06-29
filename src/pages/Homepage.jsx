import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Button from "../components/Button"
import Layout from "../components/Layout"
import { CardBook } from "../components/Card"
import axios from 'axios'
import vectorImg from "../assets/5836 1.png"
import imgComic from "../assets/comic.jpg"
import imgBiography from "../assets/biography.png"
import imgMagazine from "../assets/magazine.jpg"
import imgEncy from "../assets/encyclopediajpg.jpg"
import imgNovel from "../assets/novel.jpg"
import imgTextBooks from "../assets/modern-physics.jpg"

const Homepage = () => {

    // dummy api
    const categoryApi = [' Novel','Magazine','Comic','Textbook','Biography','Encyclopedia']
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
    
    const params = useParams()
    const navigate = useNavigate()
    
    const [categorys, setCategorys] = useState([])
    const [loading, setLoading] =useState(true)
    const [pathCategory, setPathCategory] = useState(params.category)

    useEffect(() => {
        fetchCategory()
    }, [])
    
    const fetchCategory = () => {
        axios.get('http://34.125.69.172/categories')
        .then((res) => {
            const { data } = res.data;
            if (!pathCategory) {
                setPathCategory('All')
                setCategorys(data)
            } else {
                if (data.find((search) => search.name.toLowerCase() === pathCategory.toLowerCase())) {
                    setCategorys(data)
                } else {
                    navigate(`../${pathCategory}/Not Found`,{replace:true})
                }
            }
        })
        .catch((err) => {
            console.log(err)    
        })
        .finally(()=>setLoading(false))
    }

    const handleNavigate = (path) => {
        path === '' ? setPathCategory('All') : setPathCategory(path)
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
                <div className="p-4 pt-0">
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
                <div className="text-4xl font-bold pl-5 border-l-8 border-teal-600">{pathCategory}</div>
                <div className="mt-5 grid grid-cols-2 xl:grid-cols-6 gap-4">
                    {produk.map((book) => (
                        <CardBook
                            key={book.id}
                            cardImg={book.imgSrc}
                            title={book.title}
                            writer={book.writer}
                            stock={book.stock}
                            price={book.price}
                            goToDetail={() => navigate(`../detail/${book.id}`, { replace: true })}
                        />
                    ))}
                </div>
                <div className="flex justify-center my-6">
                    <Button className="bg-teal-600 py-2 px-5 rounded text-white">Load More</Button>
                </div>
            </Layout>
        )
    }
}
export default Homepage
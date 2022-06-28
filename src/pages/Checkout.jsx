import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
// import { connect } from 'react-redux's
import { useParams } from 'react-router-dom'
import imgBook from '../assets/modern-physics.jpg'
import Layout from '../components/Layout';

const Checkout = () => {

    const produk = {
        id: 1,
        imgSrc: imgBook,
        title: "Modern Physics in the universe of madnesss",
        writer: "Kenneth Krane",
        qty: "10",
        payment: "500"
    }

    // const[qty, setQty] = useState(1)
    const params = useParams()
    const book_id = params.book_id
    // const ref = useRef(null);
    // const[wrongInput,setWrongInput] = useState('')

    return (
        <Layout>
            <div className='p-3 mb-3 text-2xl font-bold'>
                CHECKOUT
            </div>

        </Layout>
    )

    


}

export default Checkout;

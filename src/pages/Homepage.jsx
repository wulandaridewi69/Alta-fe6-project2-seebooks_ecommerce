import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Layout from "../components/Layout"

const Homepage = () => {

    // dummy api
    const categoryApi = ['Novel','Fiction','Comic','Textbook','History','Horror']
    const params = useParams()
    const [pathCategory] = useState(params.category)

    useEffect(() => {
        if (pathCategory) {
            if (categoryApi.find((search) => (search === pathCategory))) {
                console.log(pathCategory)
            } else {
                console.log('tidak ada page')
            }
        } else {
            console.log('all')
        }
    })
    
    return (
        <Layout>
        </Layout>
    )
}
export default Homepage
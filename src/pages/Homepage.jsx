import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

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
        <div className="bg-slate-400">
            ini homepage{params.category}
        </div>
    )
}
export default Homepage
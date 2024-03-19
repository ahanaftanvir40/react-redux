import { useEffect, useState } from 'react'

export const useFetch = () => {

    const [products, setProducts] = useState([])

    const url = 'http://localhost:8000/Products'

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(url)
            const data = await response.json()
            setProducts(data)
        }
        fetchProduct()
    }, [url])


    return { products }


}

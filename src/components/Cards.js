import { useDispatch, useSelector } from "react-redux"
import { useFetch } from "../hooks/useFetch"
import { add, remove } from '../store/cartSlice'

export const Cards = () => {

    const { products } = useFetch()

    const dispatch = useDispatch()

    const cartList = useSelector((state) => state.cartState.cartList)

    const itemInCart = (product) => {
        return cartList.find((item) => item.id === product.id)
    }

    return (
        <>
            {products.map((product) => (

                <div key={product.id} className="ml-10 mr-10 mt-7 max-w-lg border shadow-md p-2 font-medium rounded-sm">
                    <div>
                        <img className="max-w-sm" src={product.image} alt='Product photos' />

                    </div>
                    <div>
                        <h3 className="mt-2">{product.name}</h3>

                    </div>
                    <div className="flex justify-between">
                        <p className="mt-1">${product.price}</p>
                        {itemInCart(product) ? (
                            <button onClick={() => dispatch(remove(product))} className="bg-red-600 p-2 text-white rounded-lg text-sm">Remove</button>
                        ) : (
                            <button onClick={() => dispatch(add(product))} className="bg-blue-500 rounded-lg p-2 text-white text-sm">Add to Cart</button>
                        )}

                    </div>
                </div>

            ))}

        </>
    )
}

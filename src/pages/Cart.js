import { useTitle } from "../hooks/useTitle"
import { useDispatch, useSelector } from "react-redux"
import { remove } from "../store/cartSlice"


export const Cart = ({ title }) => {
    useTitle(title)
    const products = useSelector((state) => state.cartState.cartList)
    const total = useSelector((state) => state.cartState.total)

    const dispatch = useDispatch()

    return (
        <div>
            <section className="text-center mt-8 font-bold text-2xl">Cart items: {products.length}</section>
            <section className="text-center mt-8 font-bold text-2xl">Total: ${total}</section>
            {products.map((product) => (
                <div className="max-h-full ml-32 mr-32 border rounded-sm shadow-lg mt-10">
                    <div className="flex justify-between p-2 items-center font-medium">
                        <img className="h-20" src={product.image} alt={product.name} />

                        <p>{product.name}</p>
                        <p>${product.price}</p>
                        <button onClick={() => dispatch(remove(product))} className="bg-red-600 p-2 text-white rounded-lg text-sm">Remove</button>
                    </div>

                </div>
            ))}

        </div>
    )
}

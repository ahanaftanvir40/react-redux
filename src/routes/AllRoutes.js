
import { Route, Routes } from 'react-router-dom'
import { Home, Cart } from '../pages'

export const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home title='Home' />}></Route>
                <Route path='/shoppingcart/cart' element={<Cart title='Cart' />}></Route>
            </Routes>
        </div>
    )
}

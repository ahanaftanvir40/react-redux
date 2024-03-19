import { useSelector } from 'react-redux'
import Logo from '../assets/logo.png'
import { Link, NavLink } from "react-router-dom"
export const Header = () => {
    const activeClass = 'text-white bg-slate-400 p-1 rounded-sm mr-2'
    const inActiveClass = 'mr-2'
    const products = useSelector((state) => state.cartState.cartList)
    return (
        <header className='flex justify-between h-16 items-center max-w-full  shadow-sm ml-32 mr-32 max-sm:flex-wrap'>
            <Link to='/' className='flex items-center max-sm:justify-center'>
                <img className='h-16' src={Logo} alt="" />
                <span>Redux Cart</span>
            </Link>
            <nav className='m-auto'>
                <NavLink to='/' className={({ isActive }) => isActive ? activeClass : inActiveClass} end >Home</NavLink>
                <NavLink to='/shoppingcart/cart' className={({ isActive }) => isActive ? activeClass : inActiveClass}>Cart</NavLink>
            </nav>
            <Link to='/shoppingcart/cart'>
                <p className='font-medium'>Cart:{products.length}</p>
            </Link>
        </header>
    )
}

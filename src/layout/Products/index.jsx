// src/componentts/Products.js
import { Outlet, NavLink }from 'react-router-dom'

export default function () {
  return (
    <div>
        <h1>Products</h1>
        <div className='card'>
            <p>This section demonstrates nested routes in React Router.</p>

            <nav className='sub-nav'>
                <NavLink to='/products/featured'>featured Products</NavLink>
                <NavLink to='/products/new'>New Arrivals</NavLink>
            </nav>

            <div className='nested-content'>
                <Outlet />
            </div>
        </div>
    </div>
  )
}

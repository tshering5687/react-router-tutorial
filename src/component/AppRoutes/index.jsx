import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Home from '../../layout/Home'
import User from '../../layout/User'
import Search from '../../layout/Search'
import Login from '../../layout/Login'
import ProtectedRoute from '../ProtectedRoute'
import Dashboard from '../../layout/Dashboard'
import Products from '../../layout/Products'
import NotFound from '../../layout/NotFound'
import FeaturedProducts from '../../layout/FeaturedProduct'
import NewProducts from '../../layout/NewProducts'
import Form from '../../layout/Form'
import Age from '../age'

export const AppRoutes = ({ isAuthenticated, handleLogin }) => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user/:userId' element={<User />} />
        <Route path='/search' element={<Search />} />
        <Route path='/login' element={<Login onLogin={handleLogin} />} />
        <Route path='/form' element={<Form onLogin={handleLogin}/>} />
        <Route path='/age' element={<Age />} />


    <Route
    path='/dashboard'
    element={
        <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Dashboard />
        </ProtectedRoute>
    }
    />
    <Route path='/products' element={<Products/>}>
    <Route
    index
    element={
        <strong
        style={{
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            fontSize: '16px',
        }}
        >
            select a category
        </strong>
    }
    />
    <Route path='featured' element={<FeaturedProducts />} />
    <Route path='new' element={<NewProducts />} />
    </Route>

    <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

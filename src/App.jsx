import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Pages/Home/Home'
import { Cart } from './components/Pages/Cart/Cart'
import PlaceOrder from './components/Pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <>
     <div className='app'>
        <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
       </Routes>
    </div>
     <Footer/>
    
    </>
   

    
  )
}

export default App

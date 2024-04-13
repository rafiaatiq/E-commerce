import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home&Furniture/Home';
import { Outlet } from 'react-router-dom';
import Product from './components/Product';
import NotFound from './components/PageNotFound/NotFound';

// import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/Home&Fur" element={<Home/>}/>
        <Route path="/nonexistent" element={<NotFound />}/>
      </Routes>
      </Layout>
    </BrowserRouter>

  )
}

export default App

{/* <BrowserRouter>
<Navbar/>
<Routes>
  <Route path="" element={<Hero />}/>
  <Route path="" element={<Collage />}/>
  <Route path="" element={<Products />}/>
</Routes>
</BrowserRouter> */}
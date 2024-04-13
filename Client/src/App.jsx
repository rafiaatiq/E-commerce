import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home&Furniture/Home';
import { Outlet } from 'react-router-dom';

// import './App.css'

function App() {
  return (
    <Layout>
    <Home />
    </Layout>
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
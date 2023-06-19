import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from "./App";
import NotFound from './components/NotFound';
import Order from './components/Order';
import CurrentOrder from './components/CurrentOrder';


const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="order/:id" element={<Order />} />
        <Route exact path="currentorder/:id" element={<CurrentOrder />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Root
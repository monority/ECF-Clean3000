import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from "./App";
import NotFound from './components/NotFound';
import Avis from './components/Avis';
import ListAvis from './components/ListAvis';
import CurrentAvis from './components/CurrentAvis';

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="order/:id" element={<Avis />} />
        <Route exact path="currentavis/:id" element={<CurrentAvis />} />
        <Route exact path="listAvis" element={<ListAvis />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Root